import Button from '../ui/Button.jsx'

// Riquadro nero finale, stesso stile della call to action della pagina About
function Contact() {
  return (
    <section className="cta contact" id="contact">
      <h2 className="cta__title" data-reveal>Ready to elevate your digital presence?</h2>
      <p className="cta__text" data-reveal style={{ '--i': 1 }}>Let's construct a site that clarifies your brand and drives qualified business inquiries. Reach out directly via email or telephone.</p>
      <div className="cta__actions" data-reveal style={{ '--i': 2 }}>
        <Button href="mailto:info@salvatorederoma.it" variant="secondary">CONTACT ME</Button>
      </div>
    </section>
  )
}

export default Contact
