import Icon from '../ui/Icon.jsx'
import { pillars } from '../../data/about.js'

function AboutPillars() {
  return (
    <section className="about-pillars">
      <p className="eyebrow">Quadro delle competenze</p>
      <h2 className="section-title">Matrice delle specializzazioni tecniche</h2>
      <p className="section-lead">Competenze architetturali modulari, pensate per restare solide anche sotto carichi elevati.</p>

      <div className="about-pillars__grid">
        {pillars.map((pillar, index) => (
          <article key={pillar.id} className="about-pillars__card">
            <div className="about-pillars__head">
              <span className="about-pillars__number">
                Pilastro {String(index + 1).padStart(2, '0')}
              </span>
              <Icon name={pillar.icon} />
            </div>
            <h3 className="about-pillars__title">{pillar.title}</h3>
            <p className="about-pillars__text">{pillar.text}</p>
            <ul className="about-pillars__tags" role="list">
              {pillar.tags.map((tag) => (
                <li key={tag} className="tag tag--light">{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutPillars
