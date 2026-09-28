// Static site: no dependencies, tracking, forms or background video downloads.
// Public Play Store installation is not available yet (confirmed 28/09/2026).
const CONTACT_EMAIL = 'apoio@falamais.pt'
const ACCESS_SUBJECT = 'Fala+ — acesso aos testes'
const ACCESS_BODY = 'Olá! Gostaria de receber informações sobre o acesso aos testes da Fala+.\n\nPretendo utilizar a app: em família / na escola / em sessões.\n\nObrigado.'

document.documentElement.classList.add('js')
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear() })
document.querySelectorAll('[data-access-link]').forEach(link => {
  link.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(ACCESS_SUBJECT)}&body=${encodeURIComponent(ACCESS_BODY)}`
})

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#site-nav')
function closeMenu(restoreFocus = false) {
  menuToggle.setAttribute('aria-expanded', 'false')
  navigation.classList.remove('is-open')
  if (restoreFocus) menuToggle.focus()
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true'
  menuToggle.setAttribute('aria-expanded', String(open))
  navigation.classList.toggle('is-open', open)
})
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu() })
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(true)
})
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu()
})
const desktop = matchMedia('(min-width: 821px)')
desktop.addEventListener('change', () => { if (desktop.matches) closeMenu() })

const video = document.querySelector('#game-preview')
const choices = [...document.querySelectorAll('[data-demo]')]
const caption = document.querySelector('#demo-caption')
const status = document.querySelector('#demo-status')
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
let selection = 0

choices.forEach(button => button.addEventListener('click', () => {
  const current = ++selection
  const { demo, title, description } = button.dataset
  video.pause()
  choices.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)))
  video.poster = `assets/video/${demo}-demo-poster.jpg`
  video.querySelector('source').src = `assets/video/${demo}-demo.mp4`
  video.querySelector('a').href = `assets/video/${demo}-demo.mp4`
  video.setAttribute('aria-label', `Demonstração do jogo ${title}`)
  caption.textContent = `${title} · ${description}`
  status.textContent = `${title} selecionado. Use os controlos para reproduzir ou pausar.`
  video.load()
  if (matchMedia('(max-width: 540px)').matches) video.scrollIntoView({ block: 'center', behavior: 'instant' })
  // Only an explicit selection can start playback. Reduced-motion visitors
  // keep the poster until they press the native Play button themselves.
  if (!reducedMotion.matches) {
    video.play().catch(() => {
      if (current === selection) status.textContent = `${title} selecionado. Carregue em reproduzir para começar.`
    })
  }
}))
video.addEventListener('error', () => { status.textContent = 'Não foi possível carregar o vídeo. Escolha outro jogo ou tente novamente.' })
video.addEventListener('play', () => {
  const bounds = video.getBoundingClientRect()
  if (document.hidden || bounds.bottom <= 0 || bounds.top >= innerHeight) video.pause()
})
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) video.pause()
  }, { threshold: 0.1 }).observe(video)
}
document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause() })
reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) video.pause() })
window.addEventListener('pagehide', () => video.pause())
