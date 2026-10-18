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
  const likedWord = language === 'pt-PT' ? 'Gostaste' : language === 'es' ? 'Te gusta' : 'Liked'
  document.querySelectorAll('[data-article-stats]').forEach(async stats => {
    const meta = stats.closest('[data-article-id]')
    if (!meta) return
    const view = stats.querySelector('[data-view-count]')
    const like = stats.querySelector('[data-like-button]')
    const count = stats.querySelector('[data-like-count]')
    try { view.textContent = (await getCount(meta.dataset.articlePath)).toLocaleString() + ' ' + word } catch { view.hidden = true }
    try { count.textContent = (await getCount('like-' + meta.dataset.articleId)).toLocaleString() } catch { count.textContent = '—' }
    const key = 'falamais-article-liked:' + meta.dataset.articleId
    try { if (localStorage.getItem(key)) { like.setAttribute('aria-pressed', 'true'); like.disabled = true; like.lastChild.textContent = ' ' + likedWord + ' ' } } catch {}
    like.addEventListener('click', () => {
      if (like.getAttribute('aria-pressed') === 'true') return
      if (window.goatcounter?.count) window.goatcounter.count({ path: 'like-' + meta.dataset.articleId, title: 'Article like: ' + meta.dataset.articleId, event: true })
      count.textContent = (parseCount(count.textContent) + 1).toLocaleString()
      like.setAttribute('aria-pressed', 'true'); like.disabled = true; like.lastChild.textContent = ' ' + likedWord + ' '
      try { localStorage.setItem(key, '1') } catch {}
    })
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
    section.dataset.loading = 'false'; status.textContent = ''
    if (!top.length || top.every(a => !a.views)) { status.textContent = language === 'pt-PT' ? 'Ainda não há dados de leitura suficientes para criar este destaque.' : language === 'es' ? 'Aún no hay suficientes datos de lectura para crear este destacado.' : 'There is not enough reading data to create this feature yet.'; return }
    top.forEach((a, i) => {
      const card = document.createElement('a'); card.className = 'article-card popular-card'; card.href = a.path; card.style.background = a.bg; card.style.color = a.ink
      const rank = document.createElement('span'); rank.className = 'popular-rank'; rank.textContent = '#' + (i + 1)
      const kind = document.createElement('span'); kind.className = 'feature-label'; kind.textContent = a.kind
      const title = document.createElement('h3'); title.textContent = a.title
      const teaser = document.createElement('p'); teaser.textContent = a.teaser
      const views = document.createElement('span'); views.className = 'popular-views'; views.textContent = a.views.toLocaleString() + ' ' + word
      const cta = document.createElement('span'); cta.className = 'text-link'; cta.textContent = language === 'pt-PT' ? 'Ler o artigo →' : language === 'es' ? 'Leer el artículo →' : 'Read article →'
      card.append(rank, kind, title, teaser, views, cta); cards.append(card)
    })
  })
})()
