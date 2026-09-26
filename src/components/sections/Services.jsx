import Card from '../ui/Card.jsx'
import { capabilities, stack } from '../../data/services.js'

function Services() {
  return (
    <>
      {/* Capability e tecnologie: card numeriche e tag come nella pagina About */}
      <section className="services" id="services">
        <h2 className="section-heading" data-reveal>Core capabilities</h2>
        <ul className="stats" role="list">
          {capabilities.map((cap, index) => (
            <li key={cap.id} className="stats__item" data-reveal style={{ '--i': index % 2 }}>
              <div className="stats__head">
                <span className="stats__label">{String(cap.id).padStart(2, '0')}</span>
              </div>
              <p className="stats__value services__value">{cap.title}</p>
              <p className="stats__text">{cap.accent}</p>
            </li>
          ))}
        </ul>

        <h3 className="section-heading services__stack-heading" data-reveal>Tech stack</h3>
        <ul className="tag-list" role="list" data-reveal>
          {stack.map((item) => (
            <li key={item} className="tag tag--light">{item}</li>
          ))}
        </ul>
      </section>

      {/* Metodo: tre card come i pillar della pagina About */}
      <section className="focus">
        <p className="eyebrow" data-reveal>Approach</p>
        <h2 className="section-title" data-reveal style={{ '--i': 1 }}>Strategic approach to digital growth</h2>
        <div className="focus__grid">
          <Card title={"Objective Analysis"} text={"In-depth assessment of target audiences, industry benchmarks, and commercial goals. Clarifying the core value prosition before typing a single character of markup."} number={"01"} data-reveal></Card>
          <Card title={"Targeted Design"} text={"Crafting intuitive hierarchy, purposeful spacing, and contemporary aesthetics that command immediate respect and guide user action seamlessly."} number={"02"} data-reveal style={{ '--i': 1 }}></Card>
          <Card title={"Precise Development"} text={"Clean semantic markup, optimized asset pipelines, rigorous responsiveness, and robust SEO infrastructure engineered for long-term scalability."} number={"03"} data-reveal style={{ '--i': 2 }}></Card>
        </div>
      </section>
    </>
  )
}

export default Services
