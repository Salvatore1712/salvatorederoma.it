import { useRef } from 'react'
import Button from '../ui/Button.jsx'
import { useLens } from '../../hooks/useLens.js'
import { useMediaQuery } from '../../hooks/useMediaQuery.js'
import { highlight } from '../../utils/highlight.js'
// Il codice mostrato sotto la lente è quello vero di questa sezione
import heroJsx from './Hero.jsx?raw'
import heroScss from '../../scss/components/_hero.scss?raw'
import lensJs from '../../hooks/useLens.js?raw'

const source = `// Hero.jsx\n${heroJsx}\n/* _hero.scss */\n${heroScss}\n// useLens.js\n${lensJs}\n`
const sourceHtml = highlight(source + source)

// Contenuto della hero: renderizzato due volte, normale e come copia "a raggi X".
// data-inspect: evidenziato dalla lente (desktop) — data-reveal: compare allo scroll (mobile), --i = ordine
function HeroContent({ contentRef }) {
  return (
    <div className="hero__content" ref={contentRef}>
      <p className='about-tag hero__tag' data-inspect data-reveal style={{ '--i': 0 }}>• Salvatore De Roma</p>
      <h1 className="hero__title" data-inspect data-reveal style={{ '--i': 1 }}>WEB DEVELOPER</h1>
      <h2 className='hero__title--medium' data-inspect data-reveal style={{ '--i': 2 }}>Turning concept into interactive websites.</h2>
      <p className="hero__subtitle" data-inspect data-reveal style={{ '--i': 3 }}>
        A website is not just a showcase, but a positioning tool designed to attract clients and strengthen long-term value.
      </p>

      {/* bottoni CTA */}
      <div className="hero__actions" data-reveal style={{ '--i': 4 }}>
        <Button href="mailto:info@salvatorederoma.it" data-inspect>CONTACT ME</Button>
        <Button to="/project" variant="secondary" data-inspect>
          VIEW PROJECT
        </Button>
      </div>
    </div>
  )
}

function Hero() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const inspectRef = useRef(null)
  // Lente solo su desktop (su mobile il testo compare allo scroll, vedi useReveal in App)
  const isDesktop = useMediaQuery('(min-width: 1025px)')
  useLens(heroRef, contentRef, inspectRef, isDesktop)

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__layer">
        <HeroContent contentRef={contentRef} />
      </div>

      {isDesktop && (
        <>
          <p className="hero__hint">
            <span className="hero__hint-dot" aria-hidden="true" />
            Move your cursor over this section to see the code underneath.
          </p>

          {/* Strato a raggi X: stesso layout, visibile solo dentro la lente */}
          <div className="hero__layer hero__xray" aria-hidden="true" inert>
            <pre className="hero__source" dangerouslySetInnerHTML={{ __html: sourceHtml }} />
            <HeroContent />
            <div className="hero__inspect" ref={inspectRef}>
              <span className="hero__inspect-tag" />
            </div>
          </div>
          <div className="hero__ring" aria-hidden="true" />
        </>
      )}
    </section>
  )
}

export default Hero
