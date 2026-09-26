import { useEffect, useRef } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery.js'

const TRAIL_LIFE = 600 // ms di vita di ogni punto della scia

// Cursore personalizzato (solo versione desktop, sopra i 1024px, con mouse): pallino nero che segue il puntatore
// e, quando si muove, lascia una scia sfumata. mix-blend-mode "difference" lo rende
// nero sulle zone chiare e chiaro sulle zone scure (es. il riquadro .cta).
function CursorTrail() {
  const enabled = useMediaQuery('(hover: hover) and (pointer: fine) and (min-width: 1025px)')
  const dotRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement
    const points = []
    let raf = 0
    let width = 0
    let height = 0

    root.classList.add('has-custom-cursor')

    function resize() {
      const dpr = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw() {
      raf = 0
      const now = performance.now()
      while (points.length && now - points[0].t > TRAIL_LIFE) points.shift()

      ctx.clearRect(0, 0, width, height)
      for (const p of points) {
        const life = 1 - (now - p.t) / TRAIL_LIFE // 1 → 0
        const r = 4 + 14 * life
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r)
        g.addColorStop(0, `rgba(255, 255, 255, ${0.1 * life})`)
        g.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()
      }
      if (points.length) raf = requestAnimationFrame(draw)
    }

    function onMove(e) {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      dot.classList.add('cursor__dot--visible')
      // Ingrandisce il pallino sopra link e bottoni
      dot.classList.toggle('cursor__dot--hover', !!e.target.closest?.('a, button'))
      if (reduce) return
      // Punti intermedi ogni ~4px: l'alone resta continuo anche con movimenti veloci
      const t = performance.now()
      const last = points[points.length - 1]
      if (last) {
        const steps = Math.min(40, Math.floor(Math.hypot(e.clientX - last.x, e.clientY - last.y) / 4))
        for (let i = 1; i < steps; i++) {
          const k = i / steps
          points.push({ x: last.x + (e.clientX - last.x) * k, y: last.y + (e.clientY - last.y) * k, t: last.t + (t - last.t) * k })
        }
      }
      points.push({ x: e.clientX, y: e.clientY, t })
      if (!raf) raf = requestAnimationFrame(draw)
    }

    function onLeave() {
      dot.classList.remove('cursor__dot--visible')
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="cursor" aria-hidden="true">
      <canvas className="cursor__trail" ref={canvasRef} />
      <div className="cursor__dot" ref={dotRef} />
    </div>
  )
}

export default CursorTrail
