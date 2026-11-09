import fs from 'node:fs'
import path from 'node:path'
import { SERIES, getDemandArticle } from '../_fonte/artigos/procura-2026-11-data.mjs'
import { CATALOG } from '../_fonte/artigos/catalogo.mjs'

export const ROOTS = { pt: 'artigos', en: 'en/articles', es: 'es/articulos' }
const root = path.resolve(import.meta.dirname, '..')
const errors = []
const check = (ok, message) => { if (!ok) errors.push(message) }
const read = p => fs.readFileSync(path.join(root, p), 'utf8')
const sitemap = read('sitemap.xml')
const titles = new Set()
for (const item of SERIES) {
  check(CATALOG.filter(a => a.id === item.id).length === 1, `${item.id}: catalog collision`)
  for (const lang of Object.keys(ROOTS)) {
    const a = getDemandArticle(item.id, lang)
    const route = `/${ROOTS[lang]}/${a.slug}/`, file = `${route.slice(1)}index.html`
    const html = read(file)
    check(a.titleTag.length <= 65 && a.description.length <= 160, `${file}: metadata length`)
    check(!titles.has(a.titleTag), `${file}: duplicate title`)
    titles.add(a.titleTag)
    check(a.faq.length === 4 && a.blocks.filter(b => b.bridge).length === 1, `${file}: FAQ / bridge`)
    check(a.blocks.some(b => b.evidence), `${file}: evidence limits`)
    check(a.sources.length >= 2, `${file}: sources`)
    check((html.match(/<h1\b/g) || []).length === 1, `${file}: H1 count`)
    check((html.match(/class="word-highlight"/g) || []).length === 1, `${file}: H1 highlight`)
    check(html.includes(`<link rel="canonical" href="https://falamais.pt${route}">`), `${file}: canonical`)
    for (const other of ['pt', 'en', 'es']) {
      const hl = other === 'pt' ? 'pt-PT' : other
      check(html.includes(`hreflang="${hl}" href="https://falamais.pt/${ROOTS[other]}/${item[other].slug}/"`), `${file}: alternate ${hl}`)
    }
    check(sitemap.includes(`<loc>https://falamais.pt${route}</loc>`), `${file}: sitemap`)
    check(read(`${ROOTS[lang]}/index.html`).includes(route), `${file}: article index`)
    check(!html.includes('[[') && !html.includes('undefined') && !html.includes('\uFFFD'), `${file}: unresolved text`)
    for (const id of a.related) check(CATALOG.some(c => c.id === id && c[lang]?.live), `${file}: related ${id}`)
    const types = []
    for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        const data = JSON.parse(json)
        for (const node of data['@graph'] || [data]) types.push(node['@type'])
      } catch { check(false, `${file}: invalid JSON-LD`) }
    }
    for (const type of ['Article', 'BreadcrumbList', 'FAQPage']) check(types.includes(type), `${file}: schema ${type}`)
    for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
      const local = href.endsWith('/') ? path.join(href.slice(1), 'index.html') : href.slice(1)
      check(fs.existsSync(path.join(root, local)), `${file}: broken local link ${href}`)
    }
    for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g)) {
      check(html.includes(`id="${fragment}"`), `${file}: broken anchor #${fragment}`)
    }
    const plain = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ')
    check(plain.split(/\s+/).length >= 500, `${file}: unexpectedly short`)
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log('30 pages OK: catalogue, metadata, languages, structured data, editorial sections, anchors, links, index and sitemap.')
