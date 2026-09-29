import Button from '../ui/Button.jsx'

// Hero: all'apertura il titolo si compone parola per parola da una maschera,
// poi entrano sottotitolo, testo e bottoni (animazione in _hero.scss, --i = ordine)
function Hero() {
  return (
    <section className="hero">
      <p className='tag hero__tag hero__enter' style={{ '--i': 0 }}>• Salvatore De Roma</p>
      <h1 className="hero__title">
        <span className="hero__word"><span className="hero__word-inner" style={{ '--i': 1 }}>WEB</span></span>{' '}
        <span className="hero__word"><span className="hero__word-inner" style={{ '--i': 2 }}>DEVELOPER</span></span>
      </h1>
      <h2 className='hero__title--medium hero__enter' style={{ '--i': 4 }}>Trasformo le idee in siti web interattivi.</h2>
      <p className="hero__subtitle hero__enter" style={{ '--i': 5 }}>
        Un sito web non è solo una vetrina, ma uno strumento di posizionamento pensato per attrarre clienti e generare valore nel tempo.
      </p>

      {/* bottoni CTA */}
      <div className="hero__actions hero__enter" style={{ '--i': 6 }}>
        <Button href="mailto:info@salvatorederoma.it">CONTATTAMI</Button>
        <Button to="/project" variant="secondary">
          VEDI I PROGETTI
        </Button>
      </div>
    </section>
  )
}

export default Hero
