import Button from '../ui/Button.jsx'

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title" data-reveal>Ready to elevate your digital presence?</h2>
      <p className="contact__subtitle" data-reveal style={{ '--i': 1 }}>Let's construct a site that clarifies your brand and drives qualified business inquiries. Reach out directly via email or telephone.</p>
      <div className='contact__box' data-reveal style={{ '--i': 2 }}>
        <Button href="mailto:info@salvatorederoma.it">CONTACT ME</Button>
      </div>
      
    </section>
  )
}

export default Contact
