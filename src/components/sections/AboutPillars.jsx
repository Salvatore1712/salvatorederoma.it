import Icon from '../ui/Icon.jsx'
import { pillars } from '../../data/about.js'

function AboutPillars() {
  return (
    <section className="about-pillars">
      <p className="about-eyebrow">Capability framework</p>
      <h2 className="about-section-title">Technical Specialization Matrix</h2>
      <p className="about-section-lead">Modular architectural proficiencies built for high-throughput resilience.</p>

      <div className="about-pillars__grid">
        {pillars.map((pillar, index) => (
          <article key={pillar.id} className="about-pillars__card">
            <div className="about-pillars__head">
              <span className="about-pillars__number">
                Pillar {String(index + 1).padStart(2, '0')}
              </span>
              <Icon name={pillar.icon} />
            </div>
            <h3 className="about-pillars__title">{pillar.title}</h3>
            <p className="about-pillars__text">{pillar.text}</p>
            <ul className="about-pillars__tags" role="list">
              {pillar.tags.map((tag) => (
                <li key={tag} className="about-tag about-tag--light">{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutPillars
