// Static site: no dependencies, tracking or background video downloads. The
// contact form posts to Web3Forms (WEB3FORMS_KEY below); without a key it
// falls back to opening the visitor's email app with the message prepared.
// Public Play Store installation is not available yet (confirmed 28/09/2026).
// Shared by the Portuguese page (/), the English one (/en/, app name Talk+)
// and the Spanish one (/es/, app name Habla+).
const CONTACT_EMAIL = 'apoio@falamais.pt'
// Public access key from web3forms.com (made for apoio@falamais.pt). Empty = email-app fallback.
const WEB3FORMS_KEY = '5b7206fa-93ca-4310-a50e-ca59aa0bca00'
const LANG = document.documentElement.lang.slice(0, 2)
const TEXT = LANG === 'es'
  ? {
      brand: 'Habla+',
      sending: 'Enviando…',
      sent: email => `¡Gracias! Hemos recibido tu mensaje y responderemos a ${email} lo antes posible.`,
      failed: `No se pudo enviar ahora. Inténtalo de nuevo o escribe a ${CONTACT_EMAIL}.`,
      mailApp: 'Se abrirá tu aplicación de email con el mensaje preparado. Solo tienes que enviarlo.',
      demoLabel: title => `Demostración del juego ${title}`,
      selected: title => `${title} seleccionado. Usa los controles para reproducir o pausar.`,
      pressPlay: title => `${title} seleccionado. Pulsa reproducir para empezar.`,
      videoError: 'No se pudo cargar el vídeo. Elige otro juego o inténtalo de nuevo.',
    }
  : LANG === 'en'
  ? {
      brand: 'Talk+',
      sending: 'Sending…',
      sent: email => `Thank you! We have received your message and will reply to ${email} as soon as possible.`,
      failed: `The message could not be sent right now. Please try again or write to ${CONTACT_EMAIL}.`,
      mailApp: 'Your email app will open with the message ready. You just need to send it.',
      demoLabel: title => `Demo of the ${title} game`,
      selected: title => `${title} selected. Use the controls to play or pause.`,
      pressPlay: title => `${title} selected. Press play to start.`,
      videoError: 'The video could not be loaded. Choose another game or try again.',
    }
  : {
      brand: 'Fala+',
      sending: 'A enviar…',
      sent: email => `Obrigado! Recebemos a sua mensagem e vamos responder para ${email} o mais rápido possível.`,
      failed: `Não foi possível enviar agora. Tente de novo ou escreva para ${CONTACT_EMAIL}.`,
      mailApp: 'A sua aplicação de email vai abrir com a mensagem preparada. Só tem de a enviar.',
      demoLabel: title => `Demonstração do jogo ${title}`,
      selected: title => `${title} selecionado. Use os controlos para reproduzir ou pausar.`,
      pressPlay: title => `${title} selecionado. Carregue em reproduzir para começar.`,
      videoError: 'Não foi possível carregar o vídeo. Escolha outro jogo ou tente novamente.',
    }

document.documentElement.classList.add('js')
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear() })
// Links that open the contact form with a subject already chosen
// (e.g. "Pedir acesso aos testes").
const contactForm = document.querySelector('#contact-form')
document.querySelectorAll('[data-contact-topic]').forEach(link => link.addEventListener('click', () => {
  const topic = contactForm?.querySelector(`[name="topic"][value="${link.dataset.contactTopic}"]`)
  if (topic) topic.checked = true
}))

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
const desktop = matchMedia('(min-width: 1101px)')
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

if (contactForm) {
  const formStatus = contactForm.querySelector('.form-status')
  const submit = contactForm.querySelector('button[type="submit"]')
  const setStatus = (text, kind = '') => {
    formStatus.textContent = text
    formStatus.className = `form-status${kind ? ` is-${kind}` : ''}`
  }
  contactForm.addEventListener('submit', async event => {
    event.preventDefault()
    if (!contactForm.reportValidity()) return
    const data = new FormData(contactForm)
    const name = data.get('name').trim()
    const email = data.get('email').trim()
    const topic = contactForm.querySelector('[name="topic"]:checked').closest('label').textContent.trim()
    const message = data.get('message').trim()
    // Hidden field that only robots fill in: pretend it worked, send nothing.
    if (data.get('botcheck')) { setStatus(TEXT.sent(email), 'success'); contactForm.reset(); return }

    if (!WEB3FORMS_KEY) {
      const body = `${message}\n\n— ${name} (${email})`
      setStatus(TEXT.mailApp)
      location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${TEXT.brand} — ${topic}`)}&body=${encodeURIComponent(body)}`
      return
    }

    submit.disabled = true
    setStatus(TEXT.sending)
    try {
      // Plain form data (no JSON content type): a "simple" CORS request, so
      // the browser does not send the preflight Web3Forms rejects.
      const payload = new FormData()
      Object.entries({
        access_key: WEB3FORMS_KEY,
        subject: `Site ${TEXT.brand} (${LANG.toUpperCase()}) — ${topic}`,
        from_name: `Site ${TEXT.brand}`,
        name,
        email,
        topic,
        language: LANG.toUpperCase(),
        message,
      }).forEach(([key, value]) => payload.append(key, value))
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: payload })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.success) throw new Error(result.message || String(response.status))
      setStatus(TEXT.sent(email), 'success')
      contactForm.reset()
    } catch {
      setStatus(TEXT.failed, 'error')
    } finally {
      submit.disabled = false
    }
  })
}
