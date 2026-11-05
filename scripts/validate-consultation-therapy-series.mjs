import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, normalize } from 'node:path'
import { CONSULTATION_THERAPY_CATALOG } from '../_fonte/artigos/consultas-terapias-data.mjs'

let checked = 0
const sitemap = readFileSync('sitemap.xml', 'utf8')
const indexes = {
  pt: readFileSync('artigos/index.html', 'utf8'),
  en: readFileSync('en/articles/index.html', 'utf8'),
  es: readFileSync('es/articulos/index.html', 'utf8'),
}
const topicIndexes = {
  pt: readFileSync('artigos/tema/terapias-e-acompanhamento/index.html', 'utf8'),
  en: readFileSync('en/articles/topic/therapies-and-support/index.html', 'utf8'),
  es: readFileSync('es/articulos/tema/terapias-y-acompanamiento/index.html', 'utf8'),
}

for (const lang of ['pt', 'en', 'es']) for (const article of CONSULTATION_THERAPY_CATALOG) {
  const base = lang === 'pt' ? 'artigos' : lang === 'en' ? 'en/articles' : 'es/articulos'
  const file = join(base, article[lang].slug, 'index.html')
  const html = readFileSync(file, 'utf8')
  if (!html.includes('<meta name="viewport"')) throw new Error(`Missing viewport: ${file}`)
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]
  if (!title || title.length > 65) throw new Error(`Invalid title (${title?.length}): ${file}`)
  const description = html.match(/<meta name="description" content="([^"]+)/)?.[1]
  if (!description || description.length > 170) throw new Error(`Invalid description (${description?.length}): ${file}`)
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1])
  const canonical = html.match(/<link rel="canonical" href="([^"]+)/)?.[1]
  if (!canonical?.endsWith(`/${article[lang].slug}/`)) throw new Error(`Invalid canonical: ${file}`)
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) throw new Error(`Missing from sitemap: ${canonical}`)
  if (!indexes[lang].includes(`/${base}/${article[lang].slug}/`)) throw new Error(`Missing from article index: ${file}`)
  if (!topicIndexes[lang].includes(`/${base}/${article[lang].slug}/`)) throw new Error(`Missing from topic index: ${file}`)
  if ((html.match(/hreflang=/g) || []).length < 4) throw new Error(`Missing hreflang: ${file}`)
  if ((html.match(/<h1/g) || []).length !== 1) throw new Error(`Invalid H1 count: ${file}`)
  if (!html.includes('FAQPage') || !html.includes('BreadcrumbList') || !html.includes('Article')) throw new Error(`Missing structured data: ${file}`)
  for (const href of html.matchAll(/href="([^"]+)"/g)) {
    const target = href[1].split('#')[0].split('?')[0]
    if (!target || /^(https?:|mailto:|tel:)/.test(target)) continue
    const local = target.startsWith('/')
      ? normalize(join('.', target, target.endsWith('/') ? 'index.html' : ''))
      : normalize(join(dirname(file), target, target.endsWith('/') ? 'index.html' : ''))
    if (!existsSync(local)) throw new Error(`Broken internal link in ${file}: ${href[1]} -> ${local}`)
  }
  checked += 1
}
console.log(`${checked} consultation and therapy pages: metadata, structured data, indexes, sitemap and internal links OK`)
