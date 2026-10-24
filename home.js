// Homepage only (PT, EN, ES): sections that appear on scroll and the
// call-to-action bar fixed at the bottom on phones. Without JavaScript all
// content stays visible (the hidden state needs the .js class from main.js).
const reduced = matchMedia('(prefers-reduced-motion: reduce)')

if ('IntersectionObserver' in window && !reduced.matches) {
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-in'); reveal.unobserve(entry.target) }
  }), { rootMargin: '0px 0px -8% 0px' })
  document.querySelectorAll('.reveal').forEach(node => reveal.observe(node))
} else {
  document.querySelectorAll('.reveal').forEach(node => node.classList.add('is-in'))
}

// Show the bar once the hero is out of view, hide it again near the form.
const sticky = document.querySelector('.sticky-cta')
const hero = document.querySelector('.hero')
const contact = document.querySelector('.access-section')
if (sticky && hero && contact && 'IntersectionObserver' in window) {
  let pastHero = false
  let atContact = false
  const update = () => {
    const show = pastHero && !atContact
    sticky.classList.toggle('is-visible', show)
    sticky.toggleAttribute('inert', !show)
  }
  new IntersectionObserver(([entry]) => { pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0; update() }).observe(hero)
  new IntersectionObserver(([entry]) => { atContact = entry.isIntersecting; update() }).observe(contact)
  update()
}
