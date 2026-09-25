import { useEffect } from 'react'

// Animazione di comparsa allo scroll per tutti gli elementi [data-reveal] della pagina.
// Con `enabled` attiva aggiunge .reveal-on a <html> (gli elementi partono nascosti)
// e .is-visible a ogni elemento quando entra nello schermo.
// `key` (es. il pathname) fa ripartire l'osservazione quando cambia pagina.
export function useReveal(enabled, key) {
  useEffect(() => {
    const root = document.documentElement
    if (!enabled) {
      root.classList.remove('reveal-on')
      return
    }

    root.classList.add('reveal-on')
    const items = document.querySelectorAll('[data-reveal]:not(.is-visible)')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [enabled, key])
}
