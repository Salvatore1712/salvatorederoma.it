import Button from '../ui/Button.jsx'

// Riquadro nero finale, stesso stile della call to action della pagina About
function Contact() {
  return (
    <section className="cta contact" id="contact">
      <h2 className="cta__title" data-reveal>Vuoi portare la tua presenza digitale a un livello superiore?</h2>
      <p className="cta__text" data-reveal style={{ '--i': 1 }}>Costruiamo insieme un sito che valorizzi il tuo brand con chiarezza e generi richieste commerciali qualificate. Contattami direttamente via email o telefono.</p>
      <div className="cta__actions" data-reveal style={{ '--i': 2 }}>
        <Button href="mailto:info@salvatorederoma.it" variant="secondary">CONTATTAMI</Button>
      </div>
    </section>
  )
}

export default Contact
