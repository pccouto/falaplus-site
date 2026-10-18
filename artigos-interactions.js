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
  document.querySelectorAll('[data-popular-articles]').forEach(async section => {
    const articles = JSON.parse(section.querySelector('[data-article-catalog]').textContent)
    const status = section.querySelector('[data-popular-status]')
    const cards = section.querySelector('[data-popular-cards]')
    let cursor = 0
    const results = new Array(articles.length)
    const worker = async () => { while (cursor < articles.length) { const i = cursor++; try { results[i] = { ...articles[i], views: await getCount(articles[i].path) } } catch { results[i] = { ...articles[i], views: 0, failed: true } } } }
    await Promise.all(Array.from({ length: Math.min(5, articles.length) }, worker))
    const top = results.filter(a => !a.failed).sort((a, b) => b.views - a.views).slice(0, 3)
    const hasReliableRanking = results.every(a => !a.failed) && top.length === 3 && top.some(a => a.views > 0)
    const featuredIds = ['autismo-diagnostico-sinais', 'estimular-aumenta-inteligencia', 'obrigar-crianca-a-comer']
    const displayed = hasReliableRanking ? top : featuredIds.map(id => articles.find(a => a.id === id)).filter(Boolean)
    section.dataset.loading = 'false'
    section.dataset.mode = hasReliableRanking ? 'ranking' : 'editorial'
    status.textContent = ''
    if (!hasReliableRanking) {
      section.querySelector('#popular-title').textContent = language === 'pt-PT' ? 'Artigos em destaque' : language === 'es' ? 'Artículos destacados' : 'Featured articles'
      const intro = Array.from(section.children).find(child => child.tagName === 'P' && !child.hasAttribute('data-popular-status'))
      if (intro) intro.textContent = language === 'pt-PT'
        ? 'Uma seleção editorial para explorar temas importantes do desenvolvimento infantil.'
        : language === 'es'
          ? 'Una selección editorial para explorar temas importantes del desarrollo infantil.'
          : 'An editorial selection exploring important topics in child development.'
    }
    displayed.forEach((a, i) => {
      const card = document.createElement('a'); card.className = 'article-card popular-card'; card.href = a.path; card.style.background = a.bg; card.style.color = a.ink
      const rank = document.createElement('span'); rank.className = 'popular-rank'; rank.textContent = hasReliableRanking ? '#' + (i + 1) : (language === 'pt-PT' ? 'Escolha editorial' : language === 'es' ? 'Selección editorial' : 'Editorial pick')
      const kind = document.createElement('span'); kind.className = 'feature-label'; kind.textContent = a.kind
      const title = document.createElement('h3'); title.textContent = a.title
      const teaser = document.createElement('p'); teaser.textContent = a.teaser
      const views = document.createElement('span'); views.className = 'popular-views'; if (hasReliableRanking) views.textContent = a.views.toLocaleString() + ' ' + word
      const cta = document.createElement('span'); cta.className = 'text-link'; cta.textContent = language === 'pt-PT' ? 'Ler o artigo →' : language === 'es' ? 'Leer el artículo →' : 'Read article →'
      card.append(rank, kind, title, teaser, views, cta); cards.append(card)
    })
  })
})()
