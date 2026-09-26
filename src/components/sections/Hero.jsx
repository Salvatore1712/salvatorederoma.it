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
      <h2 className='hero__title--medium hero__enter' style={{ '--i': 4 }}>Turning concept into interactive websites.</h2>
      <p className="hero__subtitle hero__enter" style={{ '--i': 5 }}>
        A website is not just a showcase, but a positioning tool designed to attract clients and strengthen long-term value.
      </p>

      {/* bottoni CTA */}
      <div className="hero__actions hero__enter" style={{ '--i': 6 }}>
        <Button href="mailto:info@salvatorederoma.it">CONTACT ME</Button>
        <Button to="/project" variant="secondary">
          VIEW PROJECT
        </Button>
      </div>
    </section>
  )
}

export default Hero
