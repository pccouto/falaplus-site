import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { localizeText } from './localize.mjs'

const SITE = 'https://falamais.pt'
const PLAY = 'https://play.google.com/store/apps/details?id=pt.falaplus.app&hl=pt_BR&gl=BR'
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
const pageFile = (root, route) => join(root, route.replace(/^\//, ''), 'index.html')

// Shared by full builds and the selective first-phase build. Existing generated
// counterparts receive only regional discovery links, preserving their content.
function connect(root, routes) {
  for (const [lang, route] of Object.entries(routes)) {
    const file = pageFile(root, route)
    if (!existsSync(file)) throw new Error('Missing locale counterpart: ' + route)
    let html = readFileSync(file, 'utf8')
    html = html.replace(/<html\b([^>]*)>/, (_, attrs) => `<html${attrs.replace(/ data-br-locale/g, '')} data-br-locale>`)
      .replace(/home.css\?v=[^"\s]+/g, 'home.css?v=20261111d')
    const tag = `<link rel="alternate" hreflang="pt-BR" href="${SITE}${routes.br}">`
    html = html.replace(/\s*<link rel="alternate" hreflang="pt-BR"[^>]*>/g, '')
      .replace('</head>', `  ${tag}\n</head>`)
    html = html.replace(/(<nav class="lang-switch"[^>]*>)([\s\S]*?)(<\/nav>)/g, (_, start, body, end) => {
      body = body.replace(/<a\b[^>]*hreflang="pt-BR"[^>]*>[\s\S]*?<\/a>/g, '')
      const link = `<a href="${routes.br}" hreflang="pt-BR" lang="pt-BR" aria-label="Português (Brasil)"${lang === 'br' ? ' aria-current="page"' : ''}>BR</a>`
      return start + body.replace(/(<a\b[^>]*hreflang="pt-PT"[^>]*>[\s\S]*?<\/a>)/, '$1' + link) + end
    })
    writeFileSync(file, html)
  }
}

export function connectBrazilianAlternates(root, catalog, ui, selected, topics) {
  connect(root, {pt:'/', br:'/br/', en:'/en/', es:'/es/'})
  connect(root, Object.fromEntries(Object.entries(ui).map(([k,v])=>[k,v.base])))
  for (const item of selected) {
    const e = catalog.find(e=>e.id===item.id)
    connect(root, Object.fromEntries(Object.entries(ui).filter(([k])=>e[k]?.live).map(([k,v])=>[k,v.base+e[k].slug+'/'])))
  }
  for (const routes of topics) connect(root, routes)
}

function localizeMarkup(html) {
  html = localizeText(html)
  html = html.replace(/\b(alt|aria-label|placeholder|content)="([^"]*)"/g, (_, key, value) => `${key}="${localizeText(value)}"`)
  html = html.replace(/(href|src|poster|data-src|data-poster)="(?!\/|#|https?:|mailto:)([^"]+)"/g, '$1="/$2"')
  html = html.replace(/<html\b[^>]*>/, '<html lang="pt-BR" data-br-locale>')
    .replace(/home.css\?v=[^"\s]+/g, 'home.css?v=20261111d')
    .replaceAll('content="pt_PT"', 'content="pt_BR"')
    .replaceAll('main.js?v=20261029f', 'main.js?v=20261110br')
    .replaceAll('href="/artigos/"', 'href="/br/artigos/"')
    .replace(/href="https:\/\/play.google.com\/store\/apps\/details\?id=pt.falaplus.app[^\"]*"/g, `href="${escape(PLAY)}"`)
  html = html.replace(/(<a\b[^>]*hreflang="pt-PT"[^>]*?) aria-current="page"/g, '$1')
  html = html.replace(/<a\b[^>]*hreflang="pt-BR"[^>]*>[\s\S]*?<\/a>/g, '')
  html = html.replace(/<span class="premium-tag">[\s\S]*?<\/span>/, '<span class="premium-tag">Mais possibilidades</span>')
    .replace(/<div class="premium-offer">[\s\S]*?<\/div>/, '')
    .replace(/<p class="plan-note">[\s\S]*?<\/p>/, '<p class="plan-note">Consulte as condições da assinatura no Google Play.</p>')
    .replace('Aproveitar os 50% no Google Play', 'Ver no Google Play')
  html = html.replace(/<aside class="articles-highlight"[\s\S]*?<\/aside>/, '')
  html = html.replace(/<a class="know-card know-tips reveal"[\s\S]*?<\/a>/, `<a class="know-card know-tips reveal" href="/br/app/"><span class="know-num">Fala+</span><h3>Conheça o aplicativo</h3><p>Prancha de comunicação com imagens e voz, jogos e atividades para explorar com a criança.</p><span class="text-link">Conhecer o Fala Mais →</span></a>`)
    .replace('<span class="know-num">100+</span>', '<span class="know-num">8 guias</span>')
    .replace(/<a href="\/dicas\/">[^<]+<\/a>/g, '')
  // Only link to regional articles that exist in this first phase.
  html = html.replace(/href="\/artigos\/[^\"]+"/g, 'href="/br/artigos/"')
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')
  return html
}

function metadata(html, {route,title,description,h1,lead,home}) {
  const url = SITE + route
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]+>/, `<meta name="description" content="${escape(description)}">`)
    .replace(/<meta property="og:title"[^>]+>/, `<meta property="og:title" content="${escape(title)}">`)
    .replace(/<meta property="og:description"[^>]+>/, `<meta property="og:description" content="${escape(description)}">`)
    .replace(/<meta property="og:url"[^>]+>/, `<meta property="og:url" content="${url}">`)
    .replace(/<link rel="canonical"[^>]+>/, `<link rel="canonical" href="${url}">`)
    .replace(/\s*<link rel="alternate"[^>]+>/g, '')
    .replace(/<h1>[\s\S]*?<\/h1>/, `<h1>${h1}</h1>`)
    .replace(/<p class="lead">[\s\S]*?<\/p>/, `<p class="lead">${lead}</p>`)
  const alternates = home
    ? [['pt-PT','/'],['pt-BR','/br/'],['en','/en/'],['es','/es/'],['x-default','/']]
    : [['pt-BR','/br/app/']]
  // /app/ is an existing noindex store redirect, not an equivalent landing page.
  const jsonld = { '@context':'https://schema.org', '@graph': [
    {'@type':'WebPage', '@id':url, url, name:title, description, inLanguage:'pt-BR', isPartOf:{'@id':SITE+'/#website'}},
    ...(home ? [] : [{'@type':'MobileApplication', name:'Fala Mais', alternateName:'Fala+', url,
      operatingSystem:'Android', applicationCategory:'EducationalApplication', installUrl:PLAY,
      description, inLanguage:['pt','en','es'], publisher:{'@id':SITE+'/#organization'}}]),
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:SITE+'/br/'},
      ...(!home ? [{'@type':'ListItem',position:2,name:'O aplicativo',item:url}] : [])]}
  ]}
  return html.replace('</head>', alternates.map(([hl,path])=>`  <link rel="alternate" hreflang="${hl}" href="${SITE}${path}">`).join('\n')+
    `\n  <script type="application/ld+json">${JSON.stringify(jsonld).replaceAll('<','\\u003c')}</script>\n</head>`)
}

export function buildBrazilianPages(root) {
  const base = localizeMarkup(readFileSync(join(root,'index.html'),'utf8'))
  let app = metadata(base, {
    route:'/br/app/', title:'App para estimular a fala e comunicação · Fala Mais',
    description:'Conheça o Fala Mais: aplicativo Android com prancha de comunicação, imagens, voz e jogos para brincar com palavras. Sem anúncios.',
    h1:'App para estimular a fala: <span class="accent">comunicar e brincar.</span>',
    lead:'O <strong>Fala Mais</strong> reúne uma prancha de comunicação com imagens e voz, jogos de palavras e atividades para brincar. Um recurso para explorar com a criança, em casa ou na escola. Não substitui a avaliação nem o acompanhamento por um profissional.'
  })
  app = app.replace(/(<a class="brand" )href="#topo"/g, '$1href="/br/"')
    .replace(/ onclick="window.scrollTo\([^\"]+"/g, '')
  // The regional product page has its own URL; language navigation goes to the
  // existing homepages rather than claiming that the store redirects are peers.
  app = app.replace(/(<nav class="lang-switch"[^>]*>[\s\S]*?<\/a>)/, '$1<a href="/br/app/" hreflang="pt-BR" lang="pt-BR" aria-label="Português (Brasil)" aria-current="page">BR</a>')
  let home = metadata(base, {
    route:'/br/', home:true, title:'Fala Mais: comunicação, linguagem e brincadeiras',
    description:'Conheça o Fala Mais e explore guias sobre fala infantil, comunicação alternativa e brincadeiras para apoiar a criança. Conteúdo em português brasileiro.',
    h1:'Comunicação, linguagem <span class="accent">e brincadeiras.</span>',
    lead:'Cada criança tem sua maneira de se comunicar. Encontre guias sobre desenvolvimento da linguagem, comunicação alternativa e brincadeiras — e conheça o Fala Mais, aplicativo Android para explorar imagens, voz e palavras.'
  })
  // Reuse the approved homepage components, with a regional editorial entry
  // point. The detailed product sections live on /br/app/.
  home = home.replace(/<section\b[\s\S]*?<\/section>/g, section => /class="hero"|aria-labelledby="titulo-saber"|id="contacto"/.test(section) ? section : '')
  home = home.replace(/<div class="marquee-wrap"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '')
  home = home.replace(/href="#(a-app|jogos|para-quem|planos|perguntas)"/g, 'href="/br/app/#$1"')
  home = home.replace(/<div class="cta-row">[\s\S]*?<\/div>/, '<div class="cta-row"><a class="button" href="/br/app/">Conhecer o aplicativo</a><a class="button button-ghost" href="/br/artigos/">Explorar os artigos</a></div>')
  for (const [route,html] of [['/br/',home],['/br/app/',app]]) {
    mkdirSync(join(root,route.slice(1)),{recursive:true})
    writeFileSync(pageFile(root,route),html)
  }
}
