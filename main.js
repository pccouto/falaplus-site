// Static site: no dependencies, tracking or background video downloads. The
// contact form posts to Web3Forms (WEB3FORMS_KEY below); without a key it
// falls back to opening the visitor's email app with the message prepared.
// The app is publicly available on Google Play from 28/10/2026.
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
      launchSent: email => `¡Gracias! Te enviaremos novedades de Habla+ a ${email}.`,
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
      launchSent: email => `Thank you! We will send Talk+ news to ${email}.`,
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
      launchSent: email => `Obrigado! Vamos enviar novidades da Fala+ para ${email}.`,
      failed: `Não foi possível enviar agora. Tente de novo ou escreva para ${CONTACT_EMAIL}.`,
      mailApp: 'A sua aplicação de email vai abrir com a mensagem preparada. Só tem de a enviar.',
      demoLabel: title => `Demonstração do jogo ${title}`,
      selected: title => `${title} selecionado. Use os controlos para reproduzir ou pausar.`,
      pressPlay: title => `${title} selecionado. Carregue em reproduzir para começar.`,
      videoError: 'Não foi possível carregar o vídeo. Escolha outro jogo ou tente novamente.',
    }

document.documentElement.classList.add('js')

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=pt.falaplus.app'
const LAUNCH_NOTICE = LANG === 'es'
  ? {
      eyebrow: 'Oferta de lanzamiento',
      title: 'Premium a mitad de precio.',
      discount: '50%',
      discountLabel: 'de descuento',
      cancel: 'Cancela cuando quieras',
      text: 'Disfruta de un 50% de descuento durante el primer mes del plan Premium de Habla+.',
      terms: 'La oferta se aplica al primer mes. Consulta el precio local y las condiciones en Google Play.',
      close: 'Cerrar aviso',
      install: 'Ver la oferta de Habla+ en Google Play',
    }
  : LANG === 'en'
    ? {
        eyebrow: 'Launch offer',
        title: 'Premium for half the price.',
        discount: '50%',
        discountLabel: 'off',
        cancel: 'Cancel anytime',
        text: 'Enjoy 50% off the first month of the Talk+ Premium plan.',
        terms: 'The offer applies to the first month. Check local pricing and full terms on Google Play.',
        close: 'Close announcement',
        install: 'See the Talk+ offer on Google Play',
      }
    : {
        eyebrow: 'Oferta de lançamento',
        title: 'Premium a metade do preço.',
        discount: '50%',
        discountLabel: 'de desconto',
        cancel: 'Cancele quando quiser',
        text: 'Aproveite 50% de desconto no primeiro mês do plano Premium da Fala+.',
        terms: 'A oferta aplica-se ao primeiro mês. Consulte o preço local e as condições no Google Play.',
        close: 'Fechar aviso',
        install: 'Ver a oferta da Fala+ no Google Play',
      }

const LAUNCH_NOTICE_KEY = 'falaplus-premium-half-price-v4'
const showLaunchNotice = () => {
  try {
    if (localStorage.getItem(LAUNCH_NOTICE_KEY)) return
  } catch {}

  const backdrop = document.createElement('div')
  backdrop.className = 'launch-popup-backdrop'
  backdrop.innerHTML = `
    <section class="launch-popup" role="dialog" aria-modal="true" aria-labelledby="launch-popup-title" aria-describedby="launch-popup-text">
      <span class="launch-popup-confetti confetti-one" aria-hidden="true"></span>
      <span class="launch-popup-confetti confetti-two" aria-hidden="true"></span>
      <span class="launch-popup-confetti confetti-three" aria-hidden="true"></span>
      <button class="launch-popup-close" type="button" aria-label="${LAUNCH_NOTICE.close}">×</button>
      <img class="launch-popup-app-icon" src="/assets/img/app-icon.png" alt="" width="92" height="92">
      <p class="launch-popup-eyebrow">${LAUNCH_NOTICE.eyebrow}</p>
      <h2 id="launch-popup-title">${LAUNCH_NOTICE.title}</h2>
      <div class="launch-popup-discount" aria-label="${LAUNCH_NOTICE.discount} ${LAUNCH_NOTICE.discountLabel}. ${LAUNCH_NOTICE.cancel}"><strong>${LAUNCH_NOTICE.discount}</strong><span>${LAUNCH_NOTICE.discountLabel}<small>${LAUNCH_NOTICE.cancel}</small></span></div>
      <p id="launch-popup-text">${LAUNCH_NOTICE.text}</p>
      <a class="launch-popup-store" href="${PLAY_STORE_URL}" target="_blank" rel="noopener" aria-label="${LAUNCH_NOTICE.install}">
        <img src="/assets/img/google-play-badge.png" alt="" width="194" height="75">
      </a>
      <small class="launch-popup-terms">${LAUNCH_NOTICE.terms}</small>
    </section>`

  const closeButton = backdrop.querySelector('.launch-popup-close')
  const dismiss = () => {
    try { localStorage.setItem(LAUNCH_NOTICE_KEY, 'dismissed') } catch {}
    backdrop.remove()
    document.body.classList.remove('launch-popup-open')
  }
  closeButton.addEventListener('click', dismiss)
  backdrop.addEventListener('click', event => { if (event.target === backdrop) dismiss() })
  backdrop.querySelector('.launch-popup-store').addEventListener('click', dismiss)
  document.addEventListener('keydown', function onKeydown(event) {
    if (event.key !== 'Escape' || !backdrop.isConnected) return
    document.removeEventListener('keydown', onKeydown)
    dismiss()
  })
  document.body.append(backdrop)
  document.body.classList.add('launch-popup-open')
  closeButton.focus()
}

showLaunchNotice()
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear() })
document.querySelectorAll('a[href="#topo"]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault()
  history.pushState(null, '', '#topo')
  window.scrollTo({ top: 0, left: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}))
// Links that open the contact form with a subject already chosen
// (e.g. "Avisem-me do lançamento").
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
document.querySelector('.header-contact').addEventListener('click', () => closeMenu())
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(true)
})
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu()
})
const desktop = matchMedia('(min-width: 1101px)')
desktop.addEventListener('change', () => { if (desktop.matches) closeMenu() })

const video = document.querySelector('#game-preview')
// Article pages have no demo video: skip the player there.
if (video) {
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
}

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
    const topicInput = contactForm.querySelector('[name="topic"]:checked')
    const topic = topicInput.closest('label').textContent.trim()
    const sentText = topicInput.value === 'launch' ? TEXT.launchSent : TEXT.sent
    const message = data.get('message').trim()
    // Hidden field that only robots fill in: pretend it worked, send nothing.
    if (data.get('botcheck')) { setStatus(sentText(email), 'success'); contactForm.reset(); return }

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
        message: message || '—',
      }).forEach(([key, value]) => payload.append(key, value))
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: payload })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.success) throw new Error(result.message || String(response.status))
      setStatus(sentText(email), 'success')
      contactForm.reset()
    } catch {
      setStatus(TEXT.failed, 'error')
    } finally {
      submit.disabled = false
    }
  })
}
