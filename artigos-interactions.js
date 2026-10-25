(() => {
  const COUNTER = 'https://falamais.goatcounter.com/counter/'
  const CACHE_MS = 4 * 60 * 60 * 1000
  const parseCount = value => { const n = Number(String(value ?? '').replace(/[^0-9]/g, '')); return Number.isFinite(n) ? n : 0 }
  const getCount = async path => {
    const key = 'falamais-counter:' + path
    try { const cached = JSON.parse(sessionStorage.getItem(key)); if (cached && Date.now() - cached.time < CACHE_MS) return cached.count } catch {}
    const response = await fetch(COUNTER + encodeURIComponent(path) + '.json', { mode: 'cors', credentials: 'omit' })
    if (!response.ok) throw new Error('Counter unavailable')
    const count = parseCount((await response.json()).count)
    try { sessionStorage.setItem(key, JSON.stringify({ count, time: Date.now() })) } catch {}
    return count
  }
  const language = document.documentElement.lang
  const word = language === 'pt-PT' ? 'leituras' : language === 'es' ? 'lecturas' : 'reads'
  document.querySelectorAll('[data-article-stats]').forEach(async stats => {
    const meta = stats.closest('[data-article-id]')
    if (!meta) return
    const view = stats.querySelector('[data-view-count]')
    try { view.textContent = (await getCount(meta.dataset.articlePath)).toLocaleString() + ' ' + word } catch { view.hidden = true }
  })
  // Paulo, 2026-10-25: "Artigos em destaque" shows 3 articles picked at random on
  // every visit, straight away (no view counts to load, so no flicker).
  document.querySelectorAll('[data-popular-articles]').forEach(section => {
    const articles = JSON.parse(section.querySelector('[data-article-catalog]').textContent)
    const cards = section.querySelector('[data-popular-cards]')
    for (let i = articles.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [articles[i], articles[j]] = [articles[j], articles[i]] }
    const label = language === 'pt-PT' ? 'Em destaque' : language === 'es' ? 'Destacado' : 'Featured'
    const read = language === 'pt-PT' ? 'Ler o artigo →' : language === 'es' ? 'Leer el artículo →' : 'Read article →'
    articles.slice(0, 3).forEach(a => {
      const card = document.createElement('a'); card.className = 'article-card popular-card'; card.href = a.path; card.style.background = a.bg; card.style.color = a.ink
      const rank = document.createElement('span'); rank.className = 'popular-rank'; rank.textContent = label
      const kind = document.createElement('span'); kind.className = 'feature-label'; kind.textContent = a.kind
      const title = document.createElement('h3'); title.textContent = a.title
      const teaser = document.createElement('p'); teaser.textContent = a.teaser
      const cta = document.createElement('span'); cta.className = 'text-link'; cta.textContent = read
      card.append(rank, kind, title, teaser, cta); cards.append(card)
    })
    section.dataset.loading = 'false'
  })
})()
