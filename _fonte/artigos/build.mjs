// Builds the article pages in PT, EN and ES from ./conteudo/<lang>/*.mjs and the
// three article index pages. Run from the site root:
//   node _fonte/artigos/build.mjs
// Output: /artigos/…, /en/articles/…, /es/articulos/… (see i18n.mjs).
// GitHub Pages (Jekyll) does not publish folders starting with "_".
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { THEMES, CATALOG } from './catalogo.mjs'
import { LANGS, UI } from './i18n.mjs'
import { APP_CORRELATIONS, APP_BRIDGE_EXCLUSIONS } from './correlacoes-app.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..', '..')
const SITE = 'https://falamais.pt'
const STYLES_V = '20261017e'
const ARTICLES_V = '20261019a'
const MAIN_V = '20261014a'
const ENGAGEMENT_V = '20261018b'
const SEARCH_V = '20261019a'

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const strip = s => String(s).replace(/<[^>]+>/g, '')
const arrow = '<svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg>'

// Paulo, 2026-10-19 (site audit): search, topic navigation, one page per topic
// and "Continuar a ler" cards so no article is left without inbound links.
const NAV = {
  pt: {
    topicDir: 'tema', topics: 'Temas', searchLabel: 'Pesquisar artigos', searchPlaceholder: 'Pesquisar (ex.: autismo, CAA)',
    none: 'Nenhum artigo encontrado. Experimenta outra palavra ou escolhe um tema.', results: n => n === 1 ? '1 artigo encontrado' : `${n} artigos encontrados`,
    clear: 'Limpar', count: n => n === 1 ? '1 artigo' : `${n} artigos`, continueTitle: 'Continuar a ler', allIn: name => `Ver todos os artigos de ${name}`,
    allArticles: 'Todos os artigos', topicIntro: 'Todos os artigos deste tema, para ler pela ordem que preferir.',
  },
  en: {
    topicDir: 'topic', topics: 'Topics', searchLabel: 'Search articles', searchPlaceholder: 'Search (e.g. autism, AAC)',
    none: 'No articles found. Try another word or choose a topic.', results: n => n === 1 ? '1 article found' : `${n} articles found`,
    clear: 'Clear', count: n => n === 1 ? '1 article' : `${n} articles`, continueTitle: 'Keep reading', allIn: name => `See all ${name} articles`,
    allArticles: 'All articles', topicIntro: 'Every article on this topic, to read in any order.',
  },
  es: {
    topicDir: 'tema', topics: 'Temas', searchLabel: 'Buscar artículos', searchPlaceholder: 'Buscar (p. ej.: autismo, CAA)',
    none: 'No se ha encontrado ningún artículo. Prueba otra palabra o elige un tema.', results: n => n === 1 ? '1 artículo encontrado' : `${n} artículos encontrados`,
    clear: 'Borrar', count: n => n === 1 ? '1 artículo' : `${n} artículos`, continueTitle: 'Seguir leyendo', allIn: name => `Ver todos los artículos de ${name}`,
    allArticles: 'Todos los artículos', topicIntro: 'Todos los artículos de este tema, para leer en el orden que prefieras.',
  },
}
const slugify = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const topicPath = (lang, key) => UI[lang].base + NAV[lang].topicDir + '/' + slugify(THEMES[key][lang].name) + '/'
const liveIn = (lang, key) => CATALOG.filter(e => e.theme === key && e[lang]?.live)
// Card used by the index, the topic pages and "Continuar a ler". data-search
// holds title, teaser, topic, kind and the article keywords (accent-free match in artigos-search.js).
const articleCard = (lang, e, { keywords = [] } = {}) => {
  const L = UI[lang]
  const t = THEMES[e.theme]
  const c = e[lang]
  if (!c?.live) return `<div class="article-card is-soon"><span class="soon-tag">${L.index.soon}</span><h3>${c?.title || ''}</h3><p>${c?.teaser || ''}</p></div>`
  const kind = e.kind?.[lang] || L.guide
  const search = esc([c.title, c.teaser, t[lang].name, kind, ...keywords].map(strip).join(' '))
  return `<a class="article-card" data-search="${search}" style="background:${t.bg};color:${t.ink}" href="${pathOf(lang, e.id)}"><span class="feature-label">${kind}</span><h3>${c.title}</h3><p>${c.teaser}</p><span class="text-link">${L.index.read} ${arrow}</span></a>`
}
const searchBox = lang => {
  const N = NAV[lang]
  return `<div class="article-search" data-article-search role="search">
        <label class="visually-hidden" for="article-search-input">${N.searchLabel}</label>
        <svg class="icon search-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M20 20l-3.6-3.6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
        <input id="article-search-input" type="search" autocomplete="off" placeholder="${esc(N.searchPlaceholder)}" data-search-input>
        <button type="button" class="search-clear" data-search-clear hidden>${N.clear}</button>
        <p class="search-status" data-search-status aria-live="polite" data-none="${esc(N.none)}" data-one="${esc(N.results(1))}" data-many="${esc(N.results(2).replace('2', '{n}'))}"></p>
      </div>`
}
const topicBar = (lang, current) => {
  const N = NAV[lang]
  return `<nav class="topic-bar" aria-label="${N.topics}"><a href="${UI[lang].base}"${current ? '' : ' aria-current="page"'}>${N.allArticles}</a>${Object.keys(THEMES).map(key => {
    const n = liveIn(lang, key).length
    return n ? `<a href="${topicPath(lang, key)}"${current === key ? ' aria-current="page"' : ''}>${THEMES[key][lang].name}<span class="topic-count">${n}</span></a>` : ''
  }).join('')}</nav>`
}
const longDate = (L, iso) => { const [y, m, d] = iso.split('-').map(Number); return L.date(d, L.months[m - 1], y) }
const preserveExistingMascot = (file, html) => {
  if (!existsSync(file)) return html
  const old = readFileSync(file, 'utf8').match(/<figure class="site-animal-mascot"[^>]*>[\s\S]*?<\/figure>/)
  if (!old || html.includes('class="site-animal-mascot"')) return html
  const footerMain = html.indexOf('<div class="wrap footer-main">')
  if (footerMain < 0) return html
  const closing = html.indexOf('</div>', footerMain)
  return closing < 0 ? html : html.slice(0, closing) + old[0] + html.slice(closing)
}

const entry = id => { const e = CATALOG.find(c => c.id === id); if (!e) throw new Error('unknown article id: ' + id); return e }
const pathOf = (lang, id) => UI[lang].base + entry(id)[lang].slug + '/'
const isLive = (lang, id) => Boolean(entry(id)[lang]?.live)
const articleBlocks = (a, lang, L) => {
  const appProductSections = new Set(['jogos-de-memoria-para-criancas', 'jogos-de-logica-para-criancas', 'jogos-para-aprender-palavras', 'jogos-para-aprender-a-ler'])
  const allBlocks = a.blocks || []
  const source = allBlocks.filter((b, i) => {
    if (appProductSections.has(a.id) && b.id === 'jogos-fala-mais') return false
    if (appProductSections.has(a.id) && allBlocks[i - 1]?.id === 'jogos-fala-mais' && b.table) return false
    if (a.id === 'marcos-desenvolvimento-linguagem-2-a-5-anos' && typeof b.p === 'string' && /\b(Fala\+|Talk\+|Habla\+)\s/.test(b.p)) return false
    return true
  })
  const hasBridge = source.some(b => b.bridge)
  const mapped = APP_CORRELATIONS[a.id]?.[lang]
  const insertionIndex = !hasBridge && mapped ? source.findIndex(b => b.summary || b.id === 'conclusao') : -1
  const blocks = source.flatMap((b, i) => {
    if (b.bridge) {
      if (APP_BRIDGE_EXCLUSIONS.has(a.id)) return []
      if (mapped) return [{ ...b, bridge: mapped }]
      if (b.bridge.items?.length) return [b]
      const articlePoint = source.find(x => x.summary)?.summary?.[0] || a.lead
      if (!articlePoint || !b.bridge.intro) return []
      return [{ ...b, bridge: { ...b.bridge, intro: L.bridgeMappingIntro, items: [[articlePoint, b.bridge.intro]] } }]
    }
    if (i === insertionIndex) return [{ bridge: mapped }, b]
    return [b]
  })
  return !hasBridge && mapped && insertionIndex < 0 ? [...blocks, { bridge: mapped }] : blocks
}

// [[id|text]] becomes a link only when that article is published in this language.
const linker = lang => html => String(html).replace(/\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g, (_, id, text) => isLive(lang, id) ? `<a href="${pathOf(lang, id)}">${text}</a>` : text)

const ART = {
  brincar: `<svg viewBox="0 0 280 260" role="presentation"><ellipse cx="140" cy="236" rx="118" ry="12" fill="#e4d9ed"/><g transform="rotate(-8 122 106)"><rect x="82" y="66" width="80" height="80" rx="16" fill="#7fb98a"/><text x="122" y="124" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="48" fill="#fff">b</text></g><rect x="40" y="150" width="80" height="80" rx="16" fill="#8871ba"/><text x="80" y="208" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="48" fill="#fff">a</text><rect x="126" y="150" width="80" height="80" rx="16" fill="#ffd75e"/><text x="166" y="210" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="56" fill="#7c5a12">+</text><circle cx="236" cy="202" r="30" fill="#f29bb8"/><path d="M208 194c18 8 38 8 56 0M214 220c14-6 30-6 44 0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/><path d="m232 40 6 18 18 6-18 6-6 18-6-18-18-6 18-6Z" fill="#b985c0"/><path d="m40 70 4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" fill="#e0b54f"/></svg>`,
  fala: `<svg viewBox="0 0 280 260" role="presentation"><ellipse cx="140" cy="236" rx="118" ry="12" fill="#e4d9ed"/><path d="M40 60h130a22 22 0 0 1 22 22v52a22 22 0 0 1-22 22H92l-30 24v-24H40a22 22 0 0 1-22-22V82a22 22 0 0 1 22-22Z" fill="#8871ba"/><circle cx="70" cy="108" r="9" fill="#fff"/><circle cx="105" cy="108" r="9" fill="#fff"/><circle cx="140" cy="108" r="9" fill="#fff"/><path d="M150 132h86a20 20 0 0 1 20 20v40a20 20 0 0 1-20 20h-16v22l-26-22h-44a20 20 0 0 1-20-20v-40a20 20 0 0 1 20-20Z" fill="#7fb98a"/><path d="M178 170c8-12 22-12 30 0s22 12 30 0" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/><path d="m232 28 6 18 18 6-18 6-6 18-6-18-18-6 18-6Z" fill="#e0b54f"/><path d="m28 200 4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" fill="#b985c0"/></svg>`,
  jogos: `<svg viewBox="0 0 280 260" role="presentation"><ellipse cx="140" cy="236" rx="118" ry="12" fill="#e4d9ed"/><path d="M50 70h56a14 14 0 0 1 28 0h40v42a14 14 0 0 1 0 28v42h-42a14 14 0 0 0-28 0H50v-40a14 14 0 0 0 0-28Z" fill="#8871ba"/><path d="M174 112h44a14 14 0 0 1 28 0h0v70h-72v-42a14 14 0 0 0 0-28Z" fill="#ffd75e"/><rect x="60" y="196" width="34" height="34" rx="9" fill="#7fb98a"/><rect x="100" y="196" width="34" height="34" rx="9" fill="#f29bb8"/><rect x="140" y="196" width="34" height="34" rx="9" fill="#8fb8e0"/><text x="112" y="138" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="46" fill="#fff">?</text><text x="210" y="160" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="40" fill="#7c5a12">+</text><path d="m236 30 6 18 18 6-18 6-6 18-6-18-18-6 18-6Z" fill="#b985c0"/><path d="m34 40 4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" fill="#e0b54f"/></svg>`,
}

function renderBlock(b, L, links) {
  if (b.intro) return `<p class="intro">${links(b.intro)}</p>`
  if (b.p) return `<p>${links(b.p)}</p>`
  if (b.h2) return `<h2 id="${b.id}">${b.h2}</h2>`
  if (b.h3) return `<h3>${b.h3}</h3>`
  if (b.ul) return `<ul>${b.ul.map(li => `<li>${links(li)}</li>`).join('')}</ul>`
  if (b.ol) return `<ol>${b.ol.map(li => `<li>${links(li)}</li>`).join('')}</ol>`
  if (b.summary) return `<aside class="summary-box" aria-labelledby="resumo"><h2 id="resumo">${L.summary}</h2><ul>${b.summary.map(li => `<li>${li}</li>`).join('')}</ul></aside>`
  if (b.cards) return `<ul class="types-grid">${b.cards.map(([t, d]) => `<li><strong>${t}</strong>${d}</li>`).join('')}</ul>`
  if (b.study) return `<div class="study"><p>${b.study}</p><cite>${b.cite}</cite></div>`
  if (b.evidence) return `<div class="evidence-grid"><div class="evidence-card evidence-yes"><h3>${b.evidence.yesTitle || L.yes}</h3><ul>${b.evidence.yes.map(li => `<li>${li}</li>`).join('')}</ul></div><div class="evidence-card evidence-no"><h3>${b.evidence.noTitle || L.no}</h3><ul>${b.evidence.no.map(li => `<li>${li}</li>`).join('')}</ul></div></div>`
  if (b.table) return `<div class="table-wrap"><table><thead><tr>${b.table.head.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(r => `<tr>${r.map((c, i) => i ? `<td data-label="${esc(b.table.head[i])}">${links(c)}</td>` : `<th scope="row">${c}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`
  if (b.alert) return `<div class="alert-box"><p class="alert-title">${b.alert.title}</p><ul>${b.alert.items.map(li => `<li>${li}</li>`).join('')}</ul></div>`
  // "Da leitura à Fala+": each row pairs an idea from the article with a real app feature.
  if (b.bridge) return `<aside class="bridge" aria-labelledby="fala-mais"><div class="bridge-head"><span class="callout-logo"><img src="/assets/img/fala-plus-logo.png" alt="" width="40" height="40"></span><div><p class="feature-label">${L.bridgeLabel}</p><h2 id="fala-mais">${b.bridge.title}</h2></div></div><p class="bridge-intro">${b.bridge.intro}</p><ul class="bridge-list">${b.bridge.items.map(([idea, app]) => `<li><p class="bridge-idea"><span>${L.inArticle}</span>${links(idea)}</p><p class="bridge-app"><span>${L.inApp}</span>${app}</p></li>`).join('')}</ul>${b.bridge.outro ? `<p class="bridge-outro">${b.bridge.outro}</p>` : ''}<a class="text-link" href="${L.home}${L.appAnchor}">${L.knowApp} ${arrow}</a></aside>`
  if (b.note) return `<p class="health-note"><svg class="icon" aria-hidden="true"><use href="#i-info"/></svg><span>${b.note}</span></p>`
  throw new Error('unknown block ' + JSON.stringify(b).slice(0, 80))
}

// alternates: [[hreflang, path]] for every language version of this page.
function head(L, { title, description, canonical, ogType, ogTitle, ogDescription, extra = '', jsonld, alternates }) {
  const alt = alternates.map(([hl, p]) => `\n  <link rel="alternate" hreflang="${hl}" href="${SITE}${p}">`).join('')
  const xdef = alternates.find(([hl]) => hl === 'pt-PT') || alternates[0]
  return `<!doctype html>
<html lang="${L.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="theme-color" content="#fcfaf6">
  <link rel="canonical" href="${canonical}">${alt}
  <link rel="alternate" hreflang="x-default" href="${SITE}${xdef[1]}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${esc(ogTitle)}">
  <meta property="og:description" content="${esc(ogDescription)}">
  <meta property="og:image" content="${SITE}/assets/img/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="${L.ogLocale}">
  <meta property="og:site_name" content="${L.siteName}">${extra}
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preload" href="/assets/fonts/baloo2-variable.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="stylesheet" href="/styles.css?v=${STYLES_V}">
  <link rel="stylesheet" href="/artigos.css?v=${ARTICLES_V}">
  <script src="/main.js?v=${MAIN_V}" defer></script>
  <script src="/artigos-interactions.js?v=${ENGAGEMENT_V}" defer></script>
  <script data-goatcounter="https://falamais.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/favicon-192.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/assets/img/favicon-48.png">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <script type="application/ld+json">
${JSON.stringify(jsonld, null, 2)}
  </script>
</head>`
}

// langLinks: { pt, en, es } → path of this page in each language (falls back to that language's home).
function header(L, lang, langLinks) {
  const switcher = [['pt', 'pt-PT', 'Português', 'PT'], ['en', 'en', 'English', 'EN'], ['es', 'es', 'Español', 'ES']]
    .map(([k, hl, label, short]) => `<a href="${langLinks[k] || UI[k].home}" hreflang="${hl}" lang="${hl}" aria-label="${label}"${k === lang ? ' aria-current="page"' : ''}>${short}</a>`).join('')
  return `<a class="skip-link" href="#conteudo">${L.skip}</a>
  <svg class="icon-library" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><linearGradient id="instagram-brand-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="24" x2="24" y2="0"><stop offset="0%" stop-color="#feda75"/><stop offset="28%" stop-color="#fa7e1e"/><stop offset="55%" stop-color="#d62976"/><stop offset="78%" stop-color="#962fbf"/><stop offset="100%" stop-color="#4f5bd5"/></linearGradient></defs>
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="i-spark" viewBox="0 0 24 24"><path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/></symbol>
    <symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 11v6m0-10h.01"/></symbol>
    <symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></symbol>
    <symbol id="i-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></symbol>
  </svg>

  <header id="topo" class="site-header">
    <div class="wrap header-row">
      <a class="brand" href="${L.home}" aria-label="${L.brand} — ${L.homeLabel}">${L.brandWord}<img src="/assets/img/fala-plus-logo.png" alt="+" width="43" height="43"></a>
      <button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false"><span class="menu-lines" aria-hidden="true"></span><span>Menu</span></button>
      <nav id="site-nav" class="site-nav" aria-label="${L.mainNav}">
        ${L.nav.map(([h, t]) => `<a href="${L.home}${h}">${t}</a>`).join('')}<a href="${L.base}" aria-current="page">${L.articlesTab}</a>
      </nav>
      <div class="header-tools"><div class="header-pill"><a class="header-contact" href="${L.home}${L.contactAnchor}">${L.contact}</a><a class="header-instagram" href="https://www.instagram.com/falamais.app/" target="_blank" rel="noopener noreferrer" aria-label="${L.instagramAria}"><svg class="icon" aria-hidden="true"><use href="#i-instagram"/></svg></a><span class="pill-divider" aria-hidden="true"></span><nav class="lang-switch" aria-label="${L.langNav}"><svg class="icon" aria-hidden="true"><use href="#i-globe"/></svg>${switcher}</nav></div></div>
      <a class="button button-small header-cta" href="${L.home}${L.contactAnchor}">${L.cta} ${arrow}</a>
    </div>
  </header>`
}

const footer = L => `<footer class="site-footer"><div class="wrap footer-main"><a class="brand" href="${L.home}" aria-label="${L.brand} — ${L.homeLabel}">${L.brandWord}<img src="/assets/img/fala-plus-logo.png" alt="+" width="43" height="43" loading="lazy"></a><p>${L.footerTagline}</p><nav aria-label="${L.footerNav}"><a href="${L.base}">${L.articlesTab}</a><a href="${L.privacy[0]}">${L.privacy[1]}</a><a href="${L.home}${L.contactAnchor}">${L.contact}</a><a href="https://www.instagram.com/falamais.app/" target="_blank" rel="noopener me" aria-label="${L.instagramAria}">Instagram</a>${L.otherLangs.map(([h, hl, t]) => `<a href="${h}" hreflang="${hl}" lang="${hl}">${t}</a>`).join('')}</nav></div><div class="wrap footer-bottom"><span>© <span data-year>2026</span> ${L.brand}</span><span>${L.footerBottom}</span><a href="#conteudo">${L.backTop}</a></div></footer>`

const cta = L => `<section class="access-section"><div class="wrap access-panel article-cta">
      <div>
        <p class="availability availability-light"><span aria-hidden="true"></span>${L.ctaBadge}</p>
        <h2>${L.ctaTitle}</h2>
        <p>${L.ctaText}</p>
        <a class="button button-yellow" href="${L.home}${L.contactAnchor}">${L.ctaButton} ${arrow}</a>
      </div>
      <a class="article-cta-icon-link" href="#conteudo" aria-label="${L.brand} — ${L.backTop}"><img src="/assets/img/app-icon.png" alt="${L.iconAlt}" width="150" height="150" loading="lazy"></a>
    </div></section>`

function buildArticle(lang, a) {
  const L = UI[lang]
  const e = entry(a.id)
  if (e[lang].slug !== a.slug) throw new Error(`slug mismatch ${lang}/${a.slug} vs catalog ${e[lang].slug}`)
  const theme = THEMES[e.theme]
  const themeName = theme[lang].name
  const kind = e.kind?.[lang] || L.guide
  const links = linker(lang)
  const path = pathOf(lang, a.id)
  const url = SITE + path
  const langLinks = Object.fromEntries(LANGS.filter(k => isLive(k, a.id)).map(k => [k, pathOf(k, a.id)]))
  const alternates = LANGS.filter(k => isLive(k, a.id)).map(k => [UI[k].hreflang, pathOf(k, a.id)])
  const blocks = articleBlocks(a, lang, L)
  const body = blocks.map(b => renderBlock(b, L, links)).join('\n        ')
  const faqItems = a.id === 'acompanhar-progressos-comunicacao'
    ? a.faq.filter(([q, ans]) => !/(Fala\+|Talk\+|Habla\+)/i.test(`${q} ${ans}`))
    : a.faq
  const words = strip(a.lead + ' ' + blocks.map(b => JSON.stringify(b)).join(' ') + ' ' + faqItems.flat().join(' ')).split(/\s+/).length
  const minutes = Math.max(3, Math.round(words / 200))
  const toc = blocks.filter(b => b.h2 || b.bridge).map(b => b.bridge ? `<li><a href="#fala-mais">${L.tocApp}</a></li>` : `<li><a href="#${b.id}">${b.toc || b.h2}</a></li>`).concat(`<li><a href="#perguntas">${L.tocFaq}</a></li>`).join('\n          ')
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', '@id': `${url}#artigo`, headline: strip(a.h1), description: a.description, inLanguage: L.htmlLang,
        datePublished: a.date, dateModified: a.updated || a.date, image: `${SITE}/assets/img/og-image.png`, mainEntityOfPage: url,
        articleSection: themeName, keywords: a.keywords.join(', '),
        author: { '@type': 'Organization', name: L.brand, url: SITE + L.home },
        publisher: { '@type': 'Organization', name: L.brand, url: SITE + L.home, logo: { '@type': 'ImageObject', url: `${SITE}/assets/img/favicon-512.png` } },
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: L.crumbHome, item: SITE + L.home },
          { '@type': 'ListItem', position: 2, name: L.articlesTab, item: SITE + L.base },
          { '@type': 'ListItem', position: 3, name: themeName, item: SITE + topicPath(lang, e.theme) },
          { '@type': 'ListItem', position: 4, name: a.short },
        ],
      },
      { '@type': 'FAQPage', mainEntity: faqItems.map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(ans).replace(/\[\[[a-z0-9-]+\|([^\]]+)\]\]/g, '$1') } })) },
    ],
  }
  const related = (a.related || []).filter(id => CATALOG.some(candidate => candidate.id === id && candidate[lang]?.live))
  // "Continuar a ler": the hand-picked related articles first, then the next
  // articles of the same topic in catalogue order (wrapping), so every article
  // is linked from the one before it.
  const sameTopic = liveIn(lang, e.theme)
  const at = sameTopic.findIndex(c => c.id === a.id)
  const following = sameTopic.slice(at + 1).concat(sameTopic.slice(0, Math.max(0, at))).map(c => c.id)
  const nextIds = [...new Set([...following.slice(0, 1), ...related, ...following.slice(1)])].filter(id => id !== a.id).slice(0, 3)
  const interactionLabels = L.interactions
  const html = `${head(L, { title: a.titleTag, description: a.description, canonical: url, ogType: 'article', ogTitle: strip(a.h1), ogDescription: a.ogDescription || a.description, extra: `\n  <meta property="article:published_time" content="${a.date}">\n  <meta property="article:section" content="${themeName}">`, jsonld, alternates })}
<body>
  ${header(L, lang, langLinks)}

  <main id="conteudo">
    <section class="article-hero">
      <div class="wrap">
        <nav class="breadcrumbs" aria-label="${L.crumbLabel}"><ol><li><a href="${L.home}">${L.crumbHome}</a></li><li><a href="${L.base}">${L.articlesTab}</a></li><li><a href="${topicPath(lang, e.theme)}">${themeName}</a></li></ol></nav>
        <div class="article-hero-grid">
          <div>
            <p class="article-tag ${theme.tagClass}"><svg class="icon" aria-hidden="true"><use href="#i-spark"/></svg>${themeName} · ${kind}</p>
            <h1>${a.h1}</h1>
            <p class="lead">${a.lead}</p>
            <div class="article-meta" data-article-id="${a.id}" data-article-path="${path}">
              <span class="byline"><img src="/assets/img/fala-plus-logo.png" alt="" width="38" height="38"><span>${L.by} <strong>${L.team}</strong></span></span>
              <span class="meta-dot" aria-hidden="true"></span>
              <time datetime="${a.date}">${longDate(L, a.date)}</time>
              <span class="meta-dot" aria-hidden="true"></span>
              <span>${L.readTime(minutes)}</span>
            </div>
            <div class="article-stats" data-article-stats><span class="article-views" data-view-count>${interactionLabels.loadingViews}</span></div>
          </div>
          <div class="article-art" aria-hidden="true">${ART[e.theme] || ART.fala}</div>
        </div>
      </div>
    </section>

    <div class="wrap article-layout">
      <article class="prose">
        ${body}

        <h2 id="perguntas">${a.faqTitle || L.tocFaq}</h2>
        <div class="faq-list">
          ${faqItems.map(([q, ans]) => `<details><summary>${q}</summary><p>${links(ans)}</p></details>`).join('\n          ')}
        </div>

        ${renderBlock({ note: a.note || L.healthNote }, L, links)}

        <section class="sources" aria-labelledby="fontes">
          <h2 id="fontes">${L.sources}</h2>
          <ol>
            ${a.sources.map(s => `<li>${s}</li>`).join('\n            ')}
          </ol>
        </section>
${nextIds.length ? `
        <section class="continue-reading" aria-labelledby="continuar"><h2 id="continuar">${NAV[lang].continueTitle}</h2><div class="article-cards">${nextIds.map(id => articleCard(lang, entry(id))).join('')}</div><a class="text-link topic-all" href="${topicPath(lang, e.theme)}">${NAV[lang].allIn(themeName)} ${arrow}</a></section>
` : ''}
        <p class="article-updated">${L.published(longDate(L, a.date), longDate(L, a.updated || a.date))}</p>
      </article>

      <nav class="article-toc" aria-label="${L.tocTitle}">
        <p>${L.tocTitle}</p>
        <ol>
          ${toc}
        </ol>
      </nav>
    </div>

    ${cta(L)}
  </main>

  ${footer(L)}
</body>
</html>
`
  const dir = join(ROOT, ...path.split('/').filter(Boolean))
  mkdirSync(dir, { recursive: true })
  const outputFile = join(dir, 'index.html')
  writeFileSync(outputFile, preserveExistingMascot(outputFile, html))
  return { path, minutes }
}

function buildIndex(lang) {
  const L = UI[lang]
  const I = L.index
  const card = e => articleCard(lang, e, { keywords: articleContent.get(lang + ':' + e.id)?.keywords || [] })
  const popularItems = CATALOG.filter(e => e[lang]?.live).map(e => ({ id: e.id, title: e[lang].title, teaser: e[lang].teaser, path: pathOf(lang, e.id), bg: THEMES[e.theme].bg, ink: THEMES[e.theme].ink, kind: e.kind?.[lang] || L.guide }))
  const popularData = JSON.stringify(popularItems).replace(/</g, '\\u003c')
  const sections = Object.entries(THEMES).map(([key, t]) => `      <section class="topic-block" id="${slugify(t[lang].name)}" data-topic-block><h2><a href="${topicPath(lang, key)}">${t[lang].name}</a></h2><p>${t[lang].intro} <a class="topic-more" href="${topicPath(lang, key)}">${NAV[lang].count(liveIn(lang, key).length)} ${arrow}</a></p><div class="article-cards">${CATALOG.filter(e => e.theme === key && e[lang]).map(card).join('')}</div></section>`).join('\n')
  const url = SITE + L.base
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: I.collection, url, inLanguage: L.htmlLang, description: I.description },
      { '@type': 'ItemList', itemListElement: CATALOG.filter(e => e[lang]?.live).map((e, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE + pathOf(lang, e.id), name: e[lang].title })) },
    ],
  }
  const alternates = LANGS.map(k => [UI[k].hreflang, UI[k].base])
  const langLinks = Object.fromEntries(LANGS.map(k => [k, UI[k].base]))
  const html = `${head(L, { title: I.title, description: I.description, canonical: url, ogType: 'website', ogTitle: I.ogTitle, ogDescription: I.ogDescription, jsonld, alternates })}
<body>
  ${header(L, lang, langLinks)}

  <main id="conteudo">
    <section class="article-hero"><div class="wrap">
      <nav class="breadcrumbs" aria-label="${L.crumbLabel}"><ol><li><a href="${L.home}">${L.crumbHome}</a></li><li><span aria-current="page">${L.articlesTab}</span></li></ol></nav>
      <p class="article-tag" style="margin-top:30px"><svg class="icon" aria-hidden="true"><use href="#i-spark"/></svg>${I.tag}</p>
      <h1 class="index-title">${I.h1}</h1>
      <p class="lead">${I.lead}</p>
    </div></section>
    <div class="wrap index-body">
      ${searchBox(lang)}
      ${topicBar(lang, null)}
      <section class="popular-section" data-popular-articles data-loading="true" aria-labelledby="popular-title">
        <h2 id="popular-title">${I.popularTitle}</h2><p>${I.popularIntro}</p>
        <p class="popular-status" data-popular-status aria-live="polite">${I.popularLoading}</p>
        <div class="article-cards popular-cards" data-popular-cards></div>
        <script type="application/json" data-article-catalog>${popularData}</script>
      </section>
${sections}
      <p class="search-none" data-search-none hidden>${NAV[lang].none}</p>
    </div>
  </main>

  ${footer(L)}
  <script src="/artigos-search.js?v=${SEARCH_V}" defer></script>
</body>
</html>
`
  const dir = join(ROOT, ...L.base.split('/').filter(Boolean))
  mkdirSync(dir, { recursive: true })
  const outputFile = join(dir, 'index.html')
  writeFileSync(outputFile, preserveExistingMascot(outputFile, html))
}

function buildTopic(lang, key) {
  const L = UI[lang]
  const N = NAV[lang]
  const t = THEMES[key]
  const items = CATALOG.filter(e => e.theme === key && e[lang])
  const path = topicPath(lang, key)
  const url = SITE + path
  const card = e => articleCard(lang, e, { keywords: articleContent.get(lang + ':' + e.id)?.keywords || [] })
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: t[lang].name, url, inLanguage: L.htmlLang, description: t[lang].intro },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: L.crumbHome, item: SITE + L.home },
        { '@type': 'ListItem', position: 2, name: L.articlesTab, item: SITE + L.base },
        { '@type': 'ListItem', position: 3, name: t[lang].name },
      ] },
      { '@type': 'ItemList', itemListElement: items.filter(e => e[lang].live).map((e, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE + pathOf(lang, e.id), name: e[lang].title })) },
    ],
  }
  const alternates = LANGS.map(k => [UI[k].hreflang, topicPath(k, key)])
  const langLinks = Object.fromEntries(LANGS.map(k => [k, topicPath(k, key)]))
  const title = `${t[lang].name} · ${L.articlesTab} · ${L.brand}`
  const html = `${head(L, { title, description: t[lang].intro, canonical: url, ogType: 'website', ogTitle: t[lang].name, ogDescription: t[lang].intro, jsonld, alternates })}
<body>
  ${header(L, lang, langLinks)}

  <main id="conteudo">
    <section class="article-hero"><div class="wrap">
      <nav class="breadcrumbs" aria-label="${L.crumbLabel}"><ol><li><a href="${L.home}">${L.crumbHome}</a></li><li><a href="${L.base}">${L.articlesTab}</a></li><li><span aria-current="page">${t[lang].name}</span></li></ol></nav>
      <p class="article-tag ${t.tagClass}" style="margin-top:30px"><svg class="icon" aria-hidden="true"><use href="#i-spark"/></svg>${N.count(liveIn(lang, key).length)}</p>
      <h1 class="index-title">${t[lang].name}</h1>
      <p class="lead">${t[lang].intro}</p>
    </div></section>
    <div class="wrap index-body">
      ${searchBox(lang)}
      ${topicBar(lang, key)}
      <section class="topic-block topic-page-list" data-topic-block><div class="article-cards">${items.map(card).join('')}</div></section>
      <p class="search-none" data-search-none hidden>${N.none}</p>
    </div>
  </main>

  ${footer(L)}
  <script src="/artigos-search.js?v=${SEARCH_V}" defer></script>
</body>
</html>
`
  const dir = join(ROOT, ...path.split('/').filter(Boolean))
  mkdirSync(dir, { recursive: true })
  const outputFile = join(dir, 'index.html')
  writeFileSync(outputFile, preserveExistingMascot(outputFile, html))
  return path
}

const built = []
const articleContent = new Map()
for (const lang of LANGS) {
  const dir = join(HERE, 'conteudo', lang)
  if (!existsSync(dir)) continue
  for (const f of readdirSync(dir).filter(f => f.endsWith('.mjs'))) {
    const { default: a } = await import(pathToFileURL(join(dir, f)))
    a.id ||= a.slug // PT files use their slug as id
    articleContent.set(lang + ':' + a.id, a)
    if (!isLive(lang, a.id)) { console.log(`skip (not live): ${lang}/${a.slug}`); continue }
    const r = buildArticle(lang, a)
    built.push(SITE + r.path)
    console.log(`${r.path} (${r.minutes} min)`)
  }
  buildIndex(lang)
  built.push(SITE + UI[lang].base)
  for (const key of Object.keys(THEMES)) if (liveIn(lang, key).length) built.push(SITE + buildTopic(lang, key))
}
// Keep each localized homepage banner linked to the newest published Portuguese article.
const newest = CATALOG.map((e, order) => ({ e, order, article: articleContent.get('pt:' + e.id) }))
  .filter(x => x.article && x.e.pt?.live)
  .sort((a, b) => b.article.date.localeCompare(a.article.date) || b.order - a.order)[0]
if (newest) for (const lang of LANGS) {
  if (!articleContent.has(lang + ':' + newest.e.id)) continue
  const p = lang === 'pt' ? 'index.html' : lang + '/index.html'
  let html = readFileSync(join(ROOT, p), 'utf8')
  const label = lang === 'pt' ? 'Artigo novo' : lang === 'en' ? 'New article' : 'Artículo nuevo'
  html = html.replace(/(<strong data-latest-label>)[\s\S]*?(<\/strong>)/, (m, a, b) => a + label + b)
  html = html.replace(/(<span data-latest-title>)[\s\S]*?(<\/span>)/, (m, a, b) => a + esc(newest.e[lang].title) + b)
  html = html.replace(/(<a\b(?=[^>]*\bdata-latest-link\b)[^>]*\bhref=")[^"]+("[^>]*>)/, '$1' + pathOf(lang, newest.e.id) + '$2')
  writeFileSync(join(ROOT, p), html)
}

// Every live catalog entry must have been built.
for (const lang of LANGS) for (const e of CATALOG) if (e[lang]?.live && !built.includes(SITE + pathOf(lang, e.id))) throw new Error(`missing content file: ${lang}/${e[lang].slug}`)
writeFileSync(join(HERE, 'urls.txt'), built.join('\n') + '\n')

// sitemap.xml: replace every article URL with the ones just built, before the privacy pages.
const sitemapPath = join(ROOT, 'sitemap.xml')
const today = new Date().toISOString().slice(0, 10)
const isArticleUrl = line => LANGS.some(k => line.includes(`<loc>${SITE}${UI[k].base}`))
const kept = readFileSync(sitemapPath, 'utf8').split(/\r?\n/).filter(line => !isArticleUrl(line))
const at = kept.findIndex(line => line.includes('privacy-policy'))
kept.splice(at, 0, ...built.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`))
writeFileSync(sitemapPath, kept.join('\n'))
function attachSiteAnimalMascots() {
  const assetDirectory = join(ROOT, 'assets', 'mascots', 'animals')
  const mascots = readdirSync(assetDirectory).filter(file => file.endsWith('.json')).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
  if (!mascots.length) throw new Error('No animal mascots found in assets/mascots/animals')
  const pageFiles = []
  const walk = directory => {
    for (const item of readdirSync(directory, { withFileTypes: true })) {
      if (item.isDirectory()) {
        if (['.git', '_fonte', 'assets', 'node_modules'].includes(item.name)) continue
        walk(join(directory, item.name))
      } else if (item.name.endsWith('.html')) {
        const file = join(directory, item.name)
        const routeFile = relative(ROOT, file).replace(/\\/g, '/')
        if (routeFile === 'google2aa3158a126ad7b6.html' || routeFile === 'rascunho-landing.html') continue
        pageFiles.push({ file, routeFile })
      }
    }
  }
  walk(ROOT)
  const routeOf = routeFile => routeFile === 'index.html' ? '/' : routeFile.endsWith('/index.html') ? `/${routeFile.slice(0, -10)}` : `/${routeFile}`
  pageFiles.sort((a, b) => routeOf(a.routeFile).localeCompare(routeOf(b.routeFile)))

  const mascotCounts = new Map(mascots.map(name => [name, 0]))
  for (const { file } of pageFiles) {
    const html = readFileSync(file, 'utf8')
    const match = html.match(/data-animation-src="\/assets\/mascots\/animals\/([^"/]+\.json)"/)
    if (match && mascotCounts.has(match[1])) mascotCounts.set(match[1], mascotCounts.get(match[1]) + 1)
  }
  pageFiles.forEach(({ file, routeFile }) => {
    const route = routeOf(routeFile)
    let html = readFileSync(file, 'utf8')
    if (!html.includes('href="/assets/css/site-mascots.css"')) html = html.replace('</head>', '  <link rel="stylesheet" href="/assets/css/site-mascots.css">\n</head>')
    if (!html.includes('src="/assets/js/site-mascots.js"')) html = html.replace('</body>', '  <script defer src="/assets/js/site-mascots.js"></script>\n</body>')
    const existing = /<figure class="site-animal-mascot"[^>]*>[\s\S]*?<\/figure>/
    if (!existing.test(html)) {
      const mascot = mascots.find(name => mascotCounts.get(name) === 0)
        || mascots.reduce((least, name) => mascotCounts.get(name) < mascotCounts.get(least) ? name : least, mascots[0])
      mascotCounts.set(mascot, mascotCounts.get(mascot) + 1)
      const mascotMarkup = `<figure class="site-animal-mascot" data-site-animal-mascot data-animation-src="/assets/mascots/animals/${mascot}" aria-hidden="true"><div class="site-animal-mascot__canvas"></div></figure>`
      const footerMain = html.indexOf('<div class="wrap footer-main">')
      if (footerMain >= 0) {
        const closing = html.indexOf('</div>', footerMain)
        if (closing < 0) throw new Error(`footer-main is not closed on ${route}`)
        html = html.slice(0, closing) + mascotMarkup + html.slice(closing)
      } else {
        const footerOpen = html.indexOf('<footer')
        const footerOpenEnd = html.indexOf('>', footerOpen)
        const footerClose = html.indexOf('</footer>', footerOpenEnd)
        if (footerOpen < 0 || footerOpenEnd < 0 || footerClose < 0) throw new Error(`footer missing on ${route}`)
        const openTag = html.slice(footerOpen, footerOpenEnd + 1)
        html = html.slice(0, footerOpen) + openTag.replace('<footer', '<footer class="site-mascot-legal-footer"') + html.slice(footerOpenEnd + 1, footerClose) + mascotMarkup + html.slice(footerClose)
      }
    }
    writeFileSync(file, html)
  })
  console.log(`Mascotes animais: ${pageFiles.length} pÃ¡ginas; ${Math.min(mascots.length, pageFiles.length)} mascotes distintas antes de repetir.`)
}

attachSiteAnimalMascots()
console.log(`${built.length} páginas · lista em _fonte/artigos/urls.txt`)
