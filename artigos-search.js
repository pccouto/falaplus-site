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
  const loadMore = document.querySelector('[data-load-more]')
  const sort = document.querySelector('[data-article-sort]')
  const fold = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  let cards = Array.from(document.querySelectorAll('[data-topic-block] .article-card[data-search]'))
    .map(el => ({ el, text: fold(el.dataset.search) }))
  const blocks = Array.from(document.querySelectorAll('[data-topic-block]'))
  const PAGE_SIZE = 12
  let visibleLimit = PAGE_SIZE

  const sortCards = () => {
    for (const block of blocks) {
      const grid = block.querySelector('.article-cards')
      if (!grid) continue
      const ordered = [...grid.querySelectorAll('.article-card[data-search]')].sort((a, b) => sort?.value === 'az'
        ? a.dataset.title.localeCompare(b.dataset.title, document.documentElement.lang, { sensitivity: 'base' })
        : Number(a.dataset.order) - Number(b.dataset.order))
      ordered.forEach(card => grid.append(card))
    }
    cards = Array.from(document.querySelectorAll('[data-topic-block] .article-card[data-search]'))
      .map(el => ({ el, text: fold(el.dataset.search) }))
  }

  const apply = () => {
    const words = fold(input.value).split(/\s+/).filter(Boolean)
    const searching = words.length > 0
    let shown = 0
    let matched = 0
    for (const c of cards) {
      const match = !searching || words.every(w => c.text.includes(w))
      if (match) matched++
      const withinPage = searching || matched <= visibleLimit
      c.el.hidden = !match || !withinPage
      if (match && withinPage) shown++
    }
    for (const b of blocks) b.hidden = !b.querySelector('.article-card[data-search]:not([hidden])')
    if (popular) popular.hidden = searching
    clear.hidden = !searching
    none.hidden = !searching || shown > 0
    status.textContent = !searching ? '' : shown === 0 ? '' : shown === 1 ? status.dataset.one : status.dataset.many.replace('{n}', shown)
    if (loadMore) loadMore.hidden = searching || matched <= visibleLimit
    // Keep the query in the address so a search can be shared or bookmarked.
    const url = new URL(location.href)
    if (searching) url.searchParams.set('q', input.value.trim()); else url.searchParams.delete('q')
    history.replaceState(null, '', url)
  }

  input.addEventListener('input', apply)
  loadMore?.addEventListener('click', () => { visibleLimit += PAGE_SIZE; apply() })
  sort?.addEventListener('change', () => { sortCards(); visibleLimit = PAGE_SIZE; apply() })
  clear.addEventListener('click', () => { input.value = ''; apply(); input.focus() })
  const q = new URLSearchParams(location.search).get('q')
  sortCards()
  if (q) input.value = q
  apply()
})()
