// Builds /artigos/<slug>/index.html for every content file in ./conteudo and
// regenerates /artigos/index.html. Run from the site root:
//   node _fonte/artigos/build.mjs
// GitHub Pages (Jekyll) does not publish folders starting with "_".
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { THEMES, CATALOG } from './catalogo.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..', '..')
const SITE = 'https://falamais.pt'
const STYLES_V = '20261014a'
const ARTICLES_V = '20261014d'
const MAIN_V = '20261014a'

const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
const longDate = iso => { const [y, m, d] = iso.split('-').map(Number); return `${d} de ${MONTHS[m - 1]} de ${y}` }
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const strip = s => String(s).replace(/<[^>]+>/g, '')
const arrow = '<svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg>'

// Internal links: [[slug|text]] becomes a link only when the article exists.
const published = new Set(CATALOG.filter(a => a.live).map(a => a.slug))
const links = html => String(html).replace(/\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g, (_, slug, text) => {
  if (!CATALOG.some(a => a.slug === slug)) throw new Error(`unknown article link: ${slug}`)
  return published.has(slug) ? `<a href="/artigos/${slug}/">${text}</a>` : text
})

const ART = {
  brincar: `<svg viewBox="0 0 280 260" role="presentation"><ellipse cx="140" cy="236" rx="118" ry="12" fill="#e4d9ed"/><g transform="rotate(-8 122 106)"><rect x="82" y="66" width="80" height="80" rx="16" fill="#7fb98a"/><text x="122" y="124" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="48" fill="#fff">b</text></g><rect x="40" y="150" width="80" height="80" rx="16" fill="#8871ba"/><text x="80" y="208" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="48" fill="#fff">a</text><rect x="126" y="150" width="80" height="80" rx="16" fill="#ffd75e"/><text x="166" y="210" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="56" fill="#7c5a12">+</text><circle cx="236" cy="202" r="30" fill="#f29bb8"/><path d="M208 194c18 8 38 8 56 0M214 220c14-6 30-6 44 0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/><path d="m232 40 6 18 18 6-18 6-6 18-6-18-18-6 18-6Z" fill="#b985c0"/><path d="m40 70 4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" fill="#e0b54f"/></svg>`,
  fala: `<svg viewBox="0 0 280 260" role="presentation"><ellipse cx="140" cy="236" rx="118" ry="12" fill="#e4d9ed"/><path d="M40 60h130a22 22 0 0 1 22 22v52a22 22 0 0 1-22 22H92l-30 24v-24H40a22 22 0 0 1-22-22V82a22 22 0 0 1 22-22Z" fill="#8871ba"/><circle cx="70" cy="108" r="9" fill="#fff"/><circle cx="105" cy="108" r="9" fill="#fff"/><circle cx="140" cy="108" r="9" fill="#fff"/><path d="M150 132h86a20 20 0 0 1 20 20v40a20 20 0 0 1-20 20h-16v22l-26-22h-44a20 20 0 0 1-20-20v-40a20 20 0 0 1 20-20Z" fill="#7fb98a"/><path d="M178 170c8-12 22-12 30 0s22 12 30 0" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/><path d="m232 28 6 18 18 6-18 6-6 18-6-18-18-6 18-6Z" fill="#e0b54f"/><path d="m28 200 4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" fill="#b985c0"/></svg>`,
  jogos: `<svg viewBox="0 0 280 260" role="presentation"><ellipse cx="140" cy="236" rx="118" ry="12" fill="#e4d9ed"/><path d="M50 70h56a14 14 0 0 1 28 0h40v42a14 14 0 0 1 0 28v42h-42a14 14 0 0 0-28 0H50v-40a14 14 0 0 0 0-28Z" fill="#8871ba"/><path d="M174 112h44a14 14 0 0 1 28 0h0v70h-72v-42a14 14 0 0 0 0-28Z" fill="#ffd75e"/><rect x="60" y="196" width="34" height="34" rx="9" fill="#7fb98a"/><rect x="100" y="196" width="34" height="34" rx="9" fill="#f29bb8"/><rect x="140" y="196" width="34" height="34" rx="9" fill="#8fb8e0"/><text x="112" y="138" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="46" fill="#fff">?</text><text x="210" y="160" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="40" fill="#7c5a12">+</text><path d="m236 30 6 18 18 6-18 6-6 18-6-18-18-6 18-6Z" fill="#b985c0"/><path d="m34 40 4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" fill="#e0b54f"/></svg>`,
}

function block(b) {
  if (b.intro) return `<p class="intro">${links(b.intro)}</p>`
  if (b.p) return `<p>${links(b.p)}</p>`
  if (b.h2) return `<h2 id="${b.id}">${b.h2}</h2>`
  if (b.h3) return `<h3>${b.h3}</h3>`
  if (b.ul) return `<ul>${b.ul.map(li => `<li>${links(li)}</li>`).join('')}</ul>`
  if (b.ol) return `<ol>${b.ol.map(li => `<li>${links(li)}</li>`).join('')}</ol>`
  if (b.summary) return `<aside class="summary-box" aria-labelledby="resumo"><h2 id="resumo">Em resumo</h2><ul>${b.summary.map(li => `<li>${li}</li>`).join('')}</ul></aside>`
  if (b.cards) return `<ul class="types-grid">${b.cards.map(([t, d]) => `<li><strong>${t}</strong>${d}</li>`).join('')}</ul>`
  if (b.study) return `<div class="study"><p>${b.study}</p><cite>${b.cite}</cite></div>`
  if (b.evidence) return `<div class="evidence-grid"><div class="evidence-card evidence-yes"><h3>${b.evidence.yesTitle || 'Podemos dizer'}</h3><ul>${b.evidence.yes.map(li => `<li>${li}</li>`).join('')}</ul></div><div class="evidence-card evidence-no"><h3>${b.evidence.noTitle || 'Não podemos dizer'}</h3><ul>${b.evidence.no.map(li => `<li>${li}</li>`).join('')}</ul></div></div>`
  if (b.table) return `<div class="table-wrap"><table><thead><tr>${b.table.head.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(r => `<tr>${r.map((c, i) => i ? `<td data-label="${esc(b.table.head[i])}">${links(c)}</td>` : `<th scope="row">${c}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`
  if (b.alert) return `<div class="alert-box"><p class="alert-title">${b.alert.title}</p><ul>${b.alert.items.map(li => `<li>${li}</li>`).join('')}</ul></div>`
  // "Da leitura à Fala+": each row pairs an idea from the article with a real app feature.
  if (b.bridge) return `<aside class="bridge" aria-labelledby="fala-mais"><div class="bridge-head"><span class="callout-logo"><img src="/assets/img/fala-plus-logo.png" alt="" width="40" height="40"></span><div><p class="feature-label">Da leitura à Fala+</p><h2 id="fala-mais">${b.bridge.title}</h2></div></div><p class="bridge-intro">${b.bridge.intro}</p><ul class="bridge-list">${b.bridge.items.map(([idea, app]) => `<li><p class="bridge-idea"><span>No artigo</span>${links(idea)}</p><p class="bridge-app"><span>Na Fala+</span>${app}</p></li>`).join('')}</ul>${b.bridge.outro ? `<p class="bridge-outro">${b.bridge.outro}</p>` : ''}<a class="text-link" href="/#a-app">Conhecer a Fala+ ${arrow}</a></aside>`
  if (b.callout) return `<aside class="brand-callout" aria-label="${esc(b.callout.label)}"><span class="callout-logo"><img src="/assets/img/fala-plus-logo.png" alt="" width="40" height="40"></span><div><p class="feature-label">${b.callout.label}</p><h3>${b.callout.title}</h3><p>${b.callout.text}</p><a class="text-link" href="/#a-app">Conhecer a Fala+ ${arrow}</a></div></aside>`
  if (b.note) return `<p class="health-note"><svg class="icon" aria-hidden="true"><use href="#i-info"/></svg><span>${b.note}</span></p>`
  throw new Error('unknown block ' + JSON.stringify(b).slice(0, 80))
}

const HEALTH_NOTE = 'Este artigo é informativo e não substitui a avaliação por um profissional de saúde. Se tiver preocupações com o desenvolvimento da criança, fale com o médico de família ou o pediatra.'

function header(langHref) {
  return `<a class="skip-link" href="#conteudo">Saltar para o conteúdo</a>
  <svg class="icon-library" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="i-spark" viewBox="0 0 24 24"><path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/></symbol>
    <symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 11v6m0-10h.01"/></symbol>
    <symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></symbol>
  </svg>

  <header class="site-header">
    <div class="wrap header-row">
      <a class="brand" href="/" aria-label="Fala+ — início">Fala<img src="/assets/img/fala-plus-logo.png" alt="+" width="43" height="43"></a>
      <button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false"><span class="menu-lines" aria-hidden="true"></span><span>Menu</span></button>
      <nav id="site-nav" class="site-nav" aria-label="Navegação principal">
        <a href="/#a-app">A app</a><a href="/#jogos">Os jogos</a><a href="/#para-quem">Para quem</a><a href="/#planos">Planos</a><a href="/#perguntas">Dúvidas</a><a href="/artigos/" aria-current="page">Artigos</a>
      </nav>
      <div class="header-tools"><div class="header-pill"><a class="header-contact" href="/#contacto">Contacto</a><span class="pill-divider" aria-hidden="true"></span><nav class="lang-switch" aria-label="Idioma do site"><svg class="icon" aria-hidden="true"><use href="#i-globe"/></svg><a href="${langHref}" hreflang="pt-PT" lang="pt-PT" aria-label="Português" aria-current="page">PT</a><a href="/en/" hreflang="en" lang="en" aria-label="English">EN</a><a href="/es/" hreflang="es" lang="es" aria-label="Español">ES</a></nav></div></div>
      <a class="button button-small header-cta" href="/#contacto">Avisem-me ${arrow}</a>
    </div>
  </header>`
}

const FOOTER = `<footer class="site-footer"><div class="wrap footer-main"><a class="brand" href="/" aria-label="Fala+ — início">Fala<img src="/assets/img/fala-plus-logo.png" alt="+" width="43" height="43" loading="lazy"></a><p>Pequenas descobertas.<br>Mais comunicação.</p><nav aria-label="Ligações legais e contacto"><a href="/artigos/">Artigos</a><a href="/privacy-policy.html">Política de privacidade</a><a href="/#contacto">Contacto</a><a href="https://www.instagram.com/falamais.app/" target="_blank" rel="noopener me" aria-label="Fala+ no Instagram (abre numa nova janela)">Instagram</a><a href="/en/" hreflang="en" lang="en">English</a><a href="/es/" hreflang="es" lang="es">Español</a></nav></div><div class="wrap footer-bottom"><span>© <span data-year>2026</span> Fala+</span><span>Feita para descobrir. Pensada para acompanhar.</span><a href="#conteudo">Voltar ao topo ↑</a></div></footer>`

const CTA = `<section class="access-section"><div class="wrap access-panel article-cta">
      <div>
        <p class="availability availability-light"><span aria-hidden="true"></span>Em breve no Google Play · Android</p>
        <h2>Comunicar.<br>A brincar.</h2>
        <p>A Fala+ junta um quadro de comunicação com imagens e voz, mais de 40 jogos de palavras e um espaço para brincar livremente. Um complemento para casa, para a escola e para as sessões de terapia da fala.</p>
        <a class="button button-yellow" href="/#contacto">Avisem-me do lançamento ${arrow}</a>
      </div>
      <img src="/assets/img/app-icon.png" alt="Ícone da app Fala+" width="150" height="150" loading="lazy">
    </div></section>`

function head({ title, description, canonical, ogType, ogTitle, ogDescription, extra = '', jsonld }) {
  return `<!doctype html>
<html lang="pt-PT">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="theme-color" content="#fcfaf6">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${esc(ogTitle)}">
  <meta property="og:description" content="${esc(ogDescription)}">
  <meta property="og:image" content="${SITE}/assets/img/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="pt_PT">
  <meta property="og:site_name" content="Fala Mais">${extra}
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preload" href="/assets/fonts/baloo2-variable.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="stylesheet" href="/styles.css?v=${STYLES_V}">
  <link rel="stylesheet" href="/artigos.css?v=${ARTICLES_V}">
  <script src="/main.js?v=${MAIN_V}" defer></script>
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

function buildArticle(a) {
  const theme = THEMES[a.theme]
  const url = `${SITE}/artigos/${a.slug}/`
  const body = a.blocks.map(block).join('\n        ')
  const words = strip(a.lead + ' ' + a.blocks.map(b => JSON.stringify(b)).join(' ') + ' ' + a.faq.flat().join(' ')).split(/\s+/).length
  const minutes = Math.max(3, Math.round(words / 200))
  const toc = a.blocks.filter(b => b.h2 || b.bridge).map(b => b.bridge ? '<li><a href="#fala-mais">Na Fala+</a></li>' : `<li><a href="#${b.id}">${b.toc || b.h2}</a></li>`).concat('<li><a href="#perguntas">Perguntas frequentes</a></li>').join('\n          ')
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', '@id': `${url}#artigo`, headline: strip(a.h1), description: a.description, inLanguage: 'pt-PT',
        datePublished: a.date, dateModified: a.updated || a.date, image: `${SITE}/assets/img/og-image.png`, mainEntityOfPage: url,
        articleSection: theme.name, keywords: a.keywords.join(', '),
        author: { '@type': 'Organization', name: 'Fala+', url: `${SITE}/` },
        publisher: { '@type': 'Organization', name: 'Fala+', url: `${SITE}/`, logo: { '@type': 'ImageObject', url: `${SITE}/assets/img/favicon-512.png` } },
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Artigos', item: `${SITE}/artigos/` },
          { '@type': 'ListItem', position: 3, name: a.short },
        ],
      },
      { '@type': 'FAQPage', mainEntity: a.faq.map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(ans) } })) },
    ],
  }
  const html = `${head({ title: a.titleTag, description: a.description, canonical: url, ogType: 'article', ogTitle: strip(a.h1), ogDescription: a.ogDescription || a.description, extra: `\n  <meta property="article:published_time" content="${a.date}">\n  <meta property="article:section" content="${theme.name}">`, jsonld })}
<body>
  ${header(`/artigos/${a.slug}/`)}

  <main id="conteudo">
    <section class="article-hero">
      <div class="wrap">
        <nav class="breadcrumbs" aria-label="Está aqui"><ol><li><a href="/">Início</a></li><li><a href="/artigos/">Artigos</a></li><li><span aria-current="page">${theme.name}</span></li></ol></nav>
        <div class="article-hero-grid">
          <div>
            <p class="article-tag ${theme.tagClass}"><svg class="icon" aria-hidden="true"><use href="#i-spark"/></svg>${theme.name} · ${a.kind || 'Guia'}</p>
            <h1>${a.h1}</h1>
            <p class="lead">${a.lead}</p>
            <div class="article-meta">
              <span class="byline"><img src="/assets/img/fala-plus-logo.png" alt="" width="38" height="38"><span>Por <strong>Equipa Fala+</strong></span></span>
              <span class="meta-dot" aria-hidden="true"></span>
              <time datetime="${a.date}">${longDate(a.date)}</time>
              <span class="meta-dot" aria-hidden="true"></span>
              <span>${minutes} min de leitura</span>
            </div>
          </div>
          <div class="article-art" aria-hidden="true">${ART[a.theme]}</div>
        </div>
      </div>
    </section>

    <div class="wrap article-layout">
      <article class="prose">
        ${body}

        <h2 id="perguntas">${a.faqTitle}</h2>
        <div class="faq-list">
          ${a.faq.map(([q, ans]) => `<details><summary>${q}</summary><p>${links(ans)}</p></details>`).join('\n          ')}
        </div>

        ${block({ note: a.note || HEALTH_NOTE })}

        <section class="sources" aria-labelledby="fontes">
          <h2 id="fontes">Fontes</h2>
          <ol>
            ${a.sources.map(s => `<li>${s}</li>`).join('\n            ')}
          </ol>
        </section>
${a.related?.length ? `
        <nav class="related" aria-label="Leia também"><p class="related-title">Leia também</p><ul>${a.related.map(slug => { const r = CATALOG.find(c => c.slug === slug); if (!r) throw new Error('related ' + slug); return published.has(slug) ? `<li><a href="/artigos/${slug}/">${r.title}</a></li>` : '' }).join('')}</ul></nav>` : ''}
        <p class="article-updated">Publicado a ${longDate(a.date)} · Última revisão: ${longDate(a.updated || a.date)}</p>
      </article>

      <nav class="article-toc" aria-label="Neste artigo">
        <p>Neste artigo</p>
        <ol>
          ${toc}
        </ol>
      </nav>
    </div>

    ${CTA}
  </main>

  ${FOOTER}
</body>
</html>
`
  mkdirSync(join(ROOT, 'artigos', a.slug), { recursive: true })
  writeFileSync(join(ROOT, 'artigos', a.slug, 'index.html'), html)
  return { slug: a.slug, words, minutes }
}

function buildIndex() {
  const card = a => {
    const t = THEMES[a.theme]
    return a.live
      ? `<a class="article-card" style="background:${t.bg};color:${t.ink}" href="/artigos/${a.slug}/"><span class="feature-label">${a.kind || 'Guia'}</span><h3>${a.title}</h3><p>${a.teaser}</p><span class="text-link">Ler o artigo ${arrow}</span></a>`
      : `<div class="article-card is-soon"><span class="soon-tag">Em breve</span><h3>${a.title}</h3><p>${a.teaser}</p></div>`
  }
  const sections = Object.entries(THEMES).map(([key, t]) => `      <section class="topic-block"><h2>${t.name}</h2><p>${t.intro}</p><div class="article-cards">${CATALOG.filter(a => a.theme === key).map(card).join('')}</div></section>`).join('\n')
  const url = `${SITE}/artigos/`
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: 'Artigos Fala+', url, inLanguage: 'pt-PT', description: 'Guias da Fala+ sobre o desenvolvimento da fala e da linguagem, a importância do brincar e os benefícios dos jogos educativos para crianças.' },
      { '@type': 'ItemList', itemListElement: CATALOG.filter(a => a.live).map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${url}${a.slug}/`, name: a.title })) },
    ],
  }
  const html = `${head({ title: 'Artigos sobre brincar, fala e jogos · Fala+', description: 'Guias da Fala+ sobre o desenvolvimento da fala e da linguagem, a importância do brincar e os benefícios dos jogos educativos para crianças.', canonical: url, ogType: 'website', ogTitle: 'Artigos Fala+: brincar, comunicar e aprender', ogDescription: 'Guias para quem acompanha a criança: desenvolvimento da linguagem, brincar e jogos educativos.', jsonld })}
<body>
  ${header('/artigos/')}

  <main id="conteudo">
    <section class="article-hero"><div class="wrap">
      <nav class="breadcrumbs" aria-label="Está aqui"><ol><li><a href="/">Início</a></li><li><span aria-current="page">Artigos</span></li></ol></nav>
      <p class="article-tag" style="margin-top:30px"><svg class="icon" aria-hidden="true"><use href="#i-spark"/></svg>Artigos Fala+</p>
      <h1 class="index-title">Brincar, comunicar <span class="word-highlight">e aprender.</span></h1>
      <p class="lead">Guias claros e baseados na investigação para famílias, educadores e terapeutas: o desenvolvimento da fala e da linguagem, a importância do brincar e o que os jogos educativos podem (e não podem) oferecer.</p>
    </div></section>
    <div class="wrap index-body">
${sections}
    </div>
  </main>

  ${FOOTER}
</body>
</html>
`
  writeFileSync(join(ROOT, 'artigos', 'index.html'), html)
}

const files = readdirSync(join(HERE, 'conteudo')).filter(f => f.endsWith('.mjs'))
for (const f of files) {
  const { default: a } = await import(pathToFileURL(join(HERE, 'conteudo', f)))
  if (!CATALOG.some(c => c.slug === a.slug)) throw new Error('not in catalog: ' + a.slug)
  const r = buildArticle(a)
  console.log(`${r.slug}: ${r.words} palavras, ${r.minutes} min`)
}
buildIndex()
console.log('artigos/index.html')
