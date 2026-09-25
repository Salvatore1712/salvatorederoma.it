import Button from '../ui/Button.jsx'

function AboutCta() {
  return (
    <section className="about-cta" data-reveal>
      <div className="about-cta__top">
        <span className="about-cta__status">Booking Q2 / Q3 2025</span>
        <span className="about-cta__slots">Limited slots</span>
      </div>

      <h2 className="about-cta__title">Have a project in mind? Let’s build something exceptional together.</h2>
      <p className="about-cta__text">
        Currently accepting select contracts for frontend architecture, headless re-platforming,
        and performance advisory.
      </p>

      <div className="about-cta__actions">
        <Button href="mailto:info@salvatorederoma.it" variant="secondary">CONTACT ME</Button>
      </div>

      <p className="about-cta__footer">
        First response target <strong>&lt; 24 business hours</strong>
      </p>
    </section>
  )
}

export default AboutCta
