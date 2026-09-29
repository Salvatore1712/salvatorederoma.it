import Button from '../ui/Button.jsx'

function AboutCta() {
  return (
    <section className="cta" data-reveal>
      <div className="cta__top">
        <span className="cta__status">Disponibilità Q2 / Q3 2025</span>
        <span className="cta__slots">Posti limitati</span>
      </div>

      <h2 className="cta__title">Hai un progetto in mente? Realizziamo insieme qualcosa di eccezionale.</h2>
      <p className="cta__text">
        Al momento accetto un numero selezionato di incarichi di architettura frontend, migrazione
        a piattaforme headless e consulenza sulle prestazioni.
      </p>

      <div className="cta__actions">
        <Button href="mailto:info@salvatorederoma.it" variant="secondary">CONTATTAMI</Button>
      </div>

      <p className="cta__footer">
        Prima risposta entro <strong>24 ore lavorative</strong>
      </p>
    </section>
  )
}

export default AboutCta
