import fs from 'node:fs'
import path from 'node:path'
import { SERIES, COPY, getPracticalAppArticle } from '../_fonte/artigos/app-pratica-data.mjs'
import { CATALOG } from '../_fonte/artigos/catalogo.mjs'

const roots = { pt: 'artigos', en: 'en/articles', es: 'es/articulos' }
const errors = []
const sitemap = fs.readFileSync('sitemap.xml', 'utf8')
const seen = new Set()
const check = (ok, message) => { if (!ok) errors.push(message) }
for (const item of SERIES) for (const lang of Object.keys(COPY)) {
  const a = getPracticalAppArticle(item, lang)
  const route = `/${roots[lang]}/${a.slug}/`
  const file = `.${route}index.html`
  check(CATALOG.filter(c => c.id === item.id).length === 1, `${file}: catalog collision`)
  const html = fs.readFileSync(file, 'utf8')
  check(!seen.has(`${lang}:${a.titleTag}`), `${file}: duplicate title`)
  seen.add(`${lang}:${a.titleTag}`)
  check(a.titleTag.length <= 65 && a.description.length <= 155, `${file}: metadata length`)
  check((html.match(/<h1\b/g) || []).length === 1, `${file}: H1 count`)
  check(html.includes(`<link rel="canonical" href="https://falamais.pt${route}">`), `${file}: canonical`)
  check(a.lead.toLocaleLowerCase().includes(a.keywords[0].toLocaleLowerCase()), `${file}: keyword in lead`)
  check(html.includes(`hreflang="pt-PT"`) && html.includes(`hreflang="en"`) && html.includes(`hreflang="es"`), `${file}: alternates`)
  check(sitemap.includes(`<loc>https://falamais.pt${route}</loc>`), `${file}: sitemap`)
  check(fs.readFileSync(`${roots[lang]}/index.html`, 'utf8').includes(route), `${file}: index link`)
  check(!html.includes('[['), `${file}: unresolved link`)
  for (const id of item.related) check(CATALOG.some(c => c.id === id && c[lang]?.live), `${file}: unknown related article ${id}`)
  const types = []
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(json)
    for (const node of data['@graph'] || [data]) types.push(node['@type'])
  }
  for (const type of ['Article', 'BreadcrumbList', 'FAQPage']) check(types.includes(type), `${file}: ${type}`)
  check(a.faq.length >= 4 && a.blocks.some(b => b.evidence) && a.blocks.some(b => b.bridge), `${file}: editorial sections`)
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const local = href.endsWith('/') ? path.join(href.slice(1), 'index.html') : href.slice(1)
    check(fs.existsSync(local), `${file}: missing asset/link ${href}`)
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log('30 practical app pages: metadata, schema, translations, index, sitemap, links and assets validated.')
