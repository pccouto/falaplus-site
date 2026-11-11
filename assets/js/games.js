/* Shared catalogue filters; every game remains available without JavaScript. */
const search = document.querySelector('#game-search');
if (search) {
  document.querySelector('.games-search').hidden = false;
  const filters = document.querySelector('.game-filters');
  if (filters) filters.hidden = false;
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-game-card]')];
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const indexed = cards.map(card => ({card, text:normalize(card.dataset.search)}));
  let type = 'all';
  const readLocation = () => {
    const params=new URLSearchParams(location.search);
    const requested=params.get('tipo');
    type=buttons.some(b=>b.dataset.filter===requested)?requested:'all';
    search.value=params.get('q')||'';
  };
  readLocation();
  const update = () => {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const {card,text} of indexed) {
      card.hidden = (type !== 'all' && card.dataset.type !== type) || !terms.every(term => text.includes(term));
      if (!card.hidden) count++;
    }
    document.querySelector('#game-count').textContent = `${count} / ${cards.length}`;
    document.querySelector('#game-empty').hidden = count !== 0;
    const url=new URL(location.href);
    if(type==='all')url.searchParams.delete('tipo');else url.searchParams.set('tipo',type);
    if(search.value.trim())url.searchParams.set('q',search.value.trim());else url.searchParams.delete('q');
    history.replaceState(null,'',url);
    for (const button of buttons) button.setAttribute('aria-pressed',String(button.dataset.filter === type));
  };
  window.addEventListener('popstate',()=>{readLocation();update();});
  update();
  search.addEventListener('input',update);
  buttons.forEach(button => button.addEventListener('click',() => { type = button.dataset.filter; update(); }));
}
const videos = [...document.querySelectorAll('video')];
document.addEventListener('visibilitychange',() => { if (document.hidden) videos.forEach(video => video.pause()); });
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) entry.target.pause(); }));
  videos.forEach(video => observer.observe(video));
}
