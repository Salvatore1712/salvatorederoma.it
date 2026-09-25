import { useEffect } from 'react'

// Lente "a raggi X": un cerchio segue il puntatore e mostra lo strato di codice sotto la hero.
// Aggiorna le variabili CSS --x, --y, --r, --s, --px, --py sull'elemento hero.
// Gli elementi con [data-inspect] vengono evidenziati come nei DevTools.
export function useLens(heroRef, contentRef, inspectRef, enabled = true) {
  useEffect(() => {
    if (!enabled) return
    const hero = heroRef.current
    const content = contentRef.current
    const box = inspectRef.current
    if (!hero || !content || !box) return

    const tag = box.querySelector('.hero__inspect-tag')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = [...content.querySelectorAll('[data-inspect]')]

    let R = readLens()
    const s = { x: 0, y: 0, tx: 0, ty: 0, r: 0, tr: 0 }
    let raf = 0
    let intro = null
    let current = null
    let hideTimer = 0
    let introTimer = 0
    let disposed = false

    function readLens() {
      return parseFloat(getComputedStyle(hero).getPropertyValue('--lens')) || 130
    }
    function local(e) {
      const b = hero.getBoundingClientRect()
      return { x: e.clientX - b.left, y: e.clientY - b.top }
    }
    function wake() {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    // Su touch la lente si chiude da sola dopo un attimo
    function armHide(ms = 1400) {
      clearTimeout(hideTimer)
      hideTimer = setTimeout(() => { s.tr = 0; wake() }, ms)
    }

    function onMove(e) {
      intro = null
      const p = local(e)
      s.tx = p.x
      s.ty = p.y
      if (s.r < 1) { s.x = p.x; s.y = p.y }
      s.tr = R
      wake()
      if (e.pointerType !== 'mouse') armHide()
    }
    function onDown(e) {
      if (e.pointerType === 'mouse') return
      intro = null
      const p = local(e)
      s.x = s.tx = p.x
      s.y = s.ty = p.y
      s.tr = R
      wake()
      armHide()
    }
    function onLeave(e) {
      if (e.pointerType === 'mouse') { s.tr = 0; wake() }
    }
    function onCancel() {
      armHide(600)
    }
    function onResize() {
      R = readLens()
      if (current) place(current)
    }

    function tick(t) {
      raf = 0
      if (intro) {
        const p = Math.min(1, (t - intro.t0) / intro.d)
        const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
        s.tx = intro.x0 + (intro.x1 - intro.x0) * ease
        s.ty = intro.y - Math.sin(p * Math.PI) * 18
        if (p >= 1) { intro = null; s.tr = 0 }
      }

      // Inseguimento morbido (immediato con reduced motion)
      const k = reduce ? 1 : 0.2
      const kr = reduce ? 1 : 0.14
      s.x += (s.tx - s.x) * k
      s.y += (s.ty - s.y) * k
      s.r += (s.tr - s.r) * kr
      if (Math.abs(s.tr - s.r) < 0.4) s.r = s.tr

      const w = hero.clientWidth
      const h = hero.clientHeight
      hero.style.setProperty('--x', s.x.toFixed(1) + 'px')
      hero.style.setProperty('--y', s.y.toFixed(1) + 'px')
      hero.style.setProperty('--r', s.r.toFixed(1) + 'px')
      hero.style.setProperty('--s', (s.r / R).toFixed(3))
      hero.style.setProperty('--px', ((w / 2 - s.x) * 0.05).toFixed(1) + 'px')
      hero.style.setProperty('--py', ((h / 2 - s.y) * 0.05).toFixed(1) + 'px')
      inspect()

      const moving = intro || Math.abs(s.tx - s.x) > 0.3 || Math.abs(s.ty - s.y) > 0.3 || s.r !== s.tr
      if (moving) raf = requestAnimationFrame(tick)
    }

    // Evidenzia l'elemento sotto il centro della lente, con tag e dimensioni
    function inspect() {
      let hit = null
      if (s.r > R * 0.5) {
        const hb = hero.getBoundingClientRect()
        const x = s.x + hb.left
        const y = s.y + hb.top
        for (const el of targets) {
          const b = el.getBoundingClientRect()
          if (x >= b.left && x <= b.right && y >= b.top && y <= b.bottom) hit = el
        }
      }
      if (hit !== current) {
        current = hit
        box.classList.toggle('hero__inspect--on', !!hit)
        if (hit) place(hit)
      }
    }
    function place(el) {
      const hb = hero.getBoundingClientRect()
      const b = el.getBoundingClientRect()
      const x = b.left - hb.left
      const y = b.top - hb.top
      Object.assign(box.style, { left: x + 'px', top: y + 'px', width: b.width + 'px', height: b.height + 'px' })
      box.classList.toggle('hero__inspect--below', y < 34)
      const cls = [...el.classList].map((c) => '.' + c).join('')
      tag.innerHTML = '<b>' + el.tagName.toLowerCase() + cls + '</b>' + Math.round(b.width) + ' × ' + Math.round(b.height)
    }

    // Una sola passata dimostrativa sul titolo, per far scoprire l'effetto
    function runIntro() {
      if (disposed || reduce || s.tr) return
      const title = content.querySelector('.hero__title')
      if (!title) return
      const hb = hero.getBoundingClientRect()
      const b = title.getBoundingClientRect()
      const y = b.top - hb.top + b.height * 0.5
      intro = {
        t0: performance.now(),
        d: 2400,
        y,
        x0: b.left - hb.left + b.width * 0.12,
        x1: b.left - hb.left + b.width * 0.88,
      }
      s.x = s.tx = intro.x0
      s.y = s.ty = y
      s.tr = R
      wake()
    }

    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerdown', onDown)
    hero.addEventListener('pointerleave', onLeave)
    hero.addEventListener('pointercancel', onCancel)
    window.addEventListener('resize', onResize)
    ;(document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
      introTimer = setTimeout(runIntro, 600)
    })

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      clearTimeout(hideTimer)
      clearTimeout(introTimer)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerdown', onDown)
      hero.removeEventListener('pointerleave', onLeave)
      hero.removeEventListener('pointercancel', onCancel)
      window.removeEventListener('resize', onResize)
    }
  }, [heroRef, contentRef, inspectRef, enabled])
}
