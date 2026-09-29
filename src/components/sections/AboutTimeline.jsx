import { timeline } from '../../data/about.js'

function AboutTimeline() {
  return (
    <section className="about-timeline">
      <p className="eyebrow" data-reveal>Carriera</p>
      <h2 className="section-title" data-reveal style={{ '--i': 1 }}>Percorso e impatto</h2>
      <p className="section-lead" data-reveal style={{ '--i': 2 }}>Un’evoluzione cronologica tra studi di design e laboratori di ingegneria digitale.</p>

      <ol className="about-timeline__list">
        {timeline.map((item) => (
          <li
            key={item.id}
            className={`about-timeline__item ${item.current ? 'about-timeline__item--current' : ''}`}
            data-reveal
          >
            <div className="about-timeline__meta">
              <span className="about-timeline__period">{item.period}</span>
              <span className="about-timeline__place">{item.place}</span>
            </div>
            <h3 className="about-timeline__role">{item.role}</h3>
            <p className="about-timeline__company">{item.company}</p>
            <p className="about-timeline__text">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default AboutTimeline
