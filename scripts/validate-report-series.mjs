import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { REPORT_GUIDE_CATALOG } from '../_fonte/artigos/relatorios-especialistas-data.mjs'

let checked = 0
for (const lang of ['pt', 'en', 'es']) for (const article of REPORT_GUIDE_CATALOG) {
  const base = lang === 'pt' ? 'artigos' : lang === 'en' ? 'en/articles' : 'es/articulos'
  const file = join(base, article[lang].slug, 'index.html')
  const html = readFileSync(file, 'utf8')
  if (!html.includes('<meta name="viewport"')) throw new Error(`Missing viewport: ${file}`)
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]
  if (!title || title.length > 60) throw new Error(`Invalid title (${title?.length}): ${file}`)
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1])
  const canonical = html.match(/<link rel="canonical" href="([^"]+)/)?.[1]
  if (!canonical?.endsWith(`/${article[lang].slug}/`)) throw new Error(`Invalid canonical: ${file}`)
  if ((html.match(/hreflang=/g) || []).length < 4) throw new Error(`Missing hreflang: ${file}`)
  checked += 1
}
console.log(`${checked} report pages: HTML metadata and structured data OK`)
