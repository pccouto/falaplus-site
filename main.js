// Fala+ — site de apresentação.
//
// Ligação da app no Google Play: é o ÚNICO sítio a alterar. Todos os botões
// com o atributo data-play-link passam a apontar para aqui.
const PLAY_URL = 'https://play.google.com/store/apps/details?id=pt.falaplus.app'

document.querySelectorAll('[data-play-link]').forEach((link) => {
  link.href = PLAY_URL
  link.rel = 'noopener'
})

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear())
})

// Os vídeos dos jogos só carregam e tocam quando aparecem no ecrã (e param
// quando saem), para a página abrir depressa mesmo com rede móvel. Quem
// pediu menos movimento ao sistema vê só a imagem de capa.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const videos = document.querySelectorAll('video[data-autoplay]')

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.play().catch(() => {})
      } else {
        target.pause()
      }
    })
  }, { threshold: 0.35 })
  videos.forEach((video) => observer.observe(video))
}
