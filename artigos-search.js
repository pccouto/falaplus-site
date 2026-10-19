// Article search on the article index and topic pages (2026-10-19).
// Filters the cards already on the page: every typed word must appear in the
// card's data-search text; accents and case are ignored ("atencao" = "Atenção").
(() => {
  const box = document.querySelector('[data-article-search]')
  if (!box) return
  const input = box.querySelector('[data-search-input]')
  const clear = box.querySelector('[data-search-clear]')
  const status = box.querySelector('[data-search-status]')
  const none = document.querySelector('[data-search-none]')
  const popular = document.querySelector('[data-popular-articles]')
  const fold = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  const cards = Array.from(document.querySelectorAll('[data-topic-block] .article-card[data-search]'))
    .map(el => ({ el, text: fold(el.dataset.search) }))
  const blocks = Array.from(document.querySelectorAll('[data-topic-block]'))

  const apply = () => {
    const words = fold(input.value).split(/\s+/).filter(Boolean)
    const searching = words.length > 0
    let shown = 0
    for (const c of cards) {
      const match = !searching || words.every(w => c.text.includes(w))
      c.el.hidden = !match
      if (match) shown++
    }
    for (const b of blocks) b.hidden = searching && !b.querySelector('.article-card[data-search]:not([hidden])')
    if (popular) popular.hidden = searching
    clear.hidden = !searching
    none.hidden = !searching || shown > 0
    status.textContent = !searching ? '' : shown === 0 ? '' : shown === 1 ? status.dataset.one : status.dataset.many.replace('{n}', shown)
    // Keep the query in the address so a search can be shared or bookmarked.
    const url = new URL(location.href)
    if (searching) url.searchParams.set('q', input.value.trim()); else url.searchParams.delete('q')
    history.replaceState(null, '', url)
  }

  input.addEventListener('input', apply)
  clear.addEventListener('click', () => { input.value = ''; apply(); input.focus() })
  const q = new URLSearchParams(location.search).get('q')
  if (q) { input.value = q; apply() }
})()
