(() => {
  const figure = document.querySelector('[data-site-animal-mascot]')
  if (!figure) return

  const canvas = figure.querySelector('.site-animal-mascot__canvas')
  const source = figure.dataset.animationSrc
  if (!canvas || !source) return

  const motionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)')
  const saveData = Boolean(navigator.connection?.saveData)
  let animation = null
  let loading = null
  let visible = false

  const loadPlayer = () => new Promise((resolve, reject) => {
    if (window.lottie) return resolve()
    const script = document.createElement('script')
    script.src = '/assets/js/lottie.min.js'
    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.head.append(script)
  })

  const loadMascot = async () => {
    if (animation || loading) return loading
    loading = (async () => {
      const response = await fetch(source, { credentials: 'omit' })
      if (!response.ok) throw new Error('Mascot animation unavailable')
      const animationData = await response.json()
      await loadPlayer()
      animation = window.lottie.loadAnimation({
        container: canvas,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData,
        rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
      })
      animation.addEventListener('DOMLoaded', () => {
        const still = Boolean(motionQuery?.matches || saveData)
        if (still) animation.goToAndStop(0, true)
        else if (visible) animation.play()
      })
    })()
    try {
      await loading
    } catch {
      figure.hidden = true
    } finally {
      loading = null
    }
  }

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        if (visible) loadMascot().then(() => {
          if (animation && visible && !motionQuery?.matches && !saveData) animation.play()
        })
        else animation?.pause()
      }, { rootMargin: '140px' })
    : null

  if (observer) observer.observe(figure)
  else {
    visible = true
    loadMascot()
  }

  motionQuery?.addEventListener?.('change', event => {
    if (!animation || saveData) return
    if (event.matches) animation.goToAndStop(0, true)
    else if (visible) animation.play()
  })
})()
