import fs from 'node:fs'
import path from 'node:path'
import { APP_INFO_ARTICLES, getAppInfoArticle } from '../_fonte/artigos/app-info-data.mjs'

const roots = { pt: ['artigos'], en: ['en', 'articles'], es: ['es', 'articulos'] }
const failures = []
const titles = new Set()

for (const lang of Object.keys(roots)) {
  const keywords = new Set()
  for (const { id } of APP_INFO_ARTICLES) {
    const article = getAppInfoArticle(id, lang)
    const file = path.join(...roots[lang], article.slug, 'index.html')
    if (!fs.existsSync(file)) {
      failures.push(`Missing ${file}`)
      continue
    }
    const html = fs.readFileSync(file, 'utf8')
    for (const needle of ['<title>', 'meta name="description"', 'rel="canonical"', 'FAQPage', 'BreadcrumbList', 'hreflang="pt-PT"', 'hreflang="en"', 'hreflang="es"', article.keywords[0]]) {
      if (!html.includes(needle)) failures.push(`${file}: missing ${needle}`)
    }
    const title = html.match(/<title>(.*?)<\/title>/)?.[1]
    if (titles.has(`${lang}:${title}`)) failures.push(`${file}: duplicate title`)
    titles.add(`${lang}:${title}`)
    if (title?.length > 65) failures.push(`${file}: title is ${title.length} characters`)
    if (keywords.has(article.keywords[0])) failures.push(`${file}: duplicate primary keyword`)
    keywords.add(article.keywords[0])
    if (/funcionamento sem internet|offline use|uso sin internet/i.test(html)) failures.push(`${file}: unsupported offline claim`)
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(match[1]) } catch { failures.push(`${file}: invalid JSON-LD`) }
    }
    for (const [, href] of html.matchAll(/href="(\/[^"#?]+)(?:[?#][^"]*)?"/g)) {
      const local = href.endsWith('/') ? path.join(href.slice(1), 'index.html') : href.slice(1)
      if (!fs.existsSync(local)) failures.push(`${file}: broken internal link ${href}`)
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`${APP_INFO_ARTICLES.length * 3} Fala+ information pages validated in PT, EN and ES.`)
