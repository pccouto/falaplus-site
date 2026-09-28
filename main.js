// Static site: no dependencies, tracking, forms or background video downloads.
// Public Play Store installation is not available yet (confirmed 28/09/2026).
// Shared by the Portuguese page (/) and the English one (/en/, app name Talk+).
const CONTACT_EMAIL = 'apoio@falamais.pt'
const EN = document.documentElement.lang.startsWith('en')
const TEXT = EN
  ? {
      accessSubject: 'Talk+ — test access',
      accessBody: 'Hello! I would like to receive information about joining the Talk+ tests.\n\nI plan to use the app: with my family / at school / in sessions.\n\nThank you.',
      demoLabel: title => `Demo of the ${title} game`,
      selected: title => `${title} selected. Use the controls to play or pause.`,
      pressPlay: title => `${title} selected. Press play to start.`,
      videoError: 'The video could not be loaded. Choose another game or try again.',
    }
  : {
      accessSubject: 'Fala+ — acesso aos testes',
      accessBody: 'Olá! Gostaria de receber informações sobre o acesso aos testes da Fala+.\n\nPretendo utilizar a app: em família / na escola / em sessões.\n\nObrigado.',
      demoLabel: title => `Demonstração do jogo ${title}`,
      selected: title => `${title} selecionado. Use os controlos para reproduzir ou pausar.`,
      pressPlay: title => `${title} selecionado. Carregue em reproduzir para começar.`,
      videoError: 'Não foi possível carregar o vídeo. Escolha outro jogo ou tente novamente.',
    }

document.documentElement.classList.add('js')
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear() })
document.querySelectorAll('[data-access-link]').forEach(link => {
  link.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(TEXT.accessSubject)}&body=${encodeURIComponent(TEXT.accessBody)}`
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
// Video folder relative to the current page ('' on /, '../' on /en/),
// taken from the initial poster so both pages share this script.
const videoDir = video.getAttribute('poster').replace(/[^/]*$/, '')
let selection = 0

choices.forEach(button => button.addEventListener('click', () => {
  const current = ++selection
  const { demo, title, description } = button.dataset
  video.pause()
  choices.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)))
  video.poster = `${videoDir}${demo}-demo-poster.jpg`
  video.querySelector('source').src = `${videoDir}${demo}-demo.mp4`
  video.querySelector('a').href = `${videoDir}${demo}-demo.mp4`
  video.setAttribute('aria-label', TEXT.demoLabel(title))
  caption.textContent = `${title} · ${description}`
  status.textContent = TEXT.selected(title)
  video.load()
  if (matchMedia('(max-width: 540px)').matches) video.scrollIntoView({ block: 'center', behavior: 'instant' })
  // Only an explicit selection can start playback. Reduced-motion visitors
  // keep the poster until they press the native Play button themselves.
  if (!reducedMotion.matches) {
    video.play().catch(() => {
      if (current === selection) status.textContent = TEXT.pressPlay(title)
    })
  }
}))
video.addEventListener('error', () => { status.textContent = TEXT.videoError })
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
