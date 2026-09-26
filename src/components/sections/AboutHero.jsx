import Icon from '../ui/Icon.jsx'
import { stats } from '../../data/about.js'

function AboutHero() {
  return (
    <section className="page-intro">
      <p className="tag" data-reveal>• Architectural roots & digital rigor • Est. Italy / Global clients</p>
      <h1 className="page-title" data-reveal style={{ '--i': 1 }}>Engineering purposeful digital architecture</h1>
      <p className="page-lead" data-reveal style={{ '--i': 2 }}>
        Bridging the gap between timeless architectural thinking, clean typographic hierarchy,
        and sub-second web performance. Creating digital systems that command authority and
        scale effortlessly.
      </p>
      <p className="tag tag--strong" data-reveal style={{ '--i': 3 }}>Headless • High performance</p>

      <ul className="stats" role="list">
        {stats.map((stat, index) => (
          <li key={stat.id} className="stats__item" data-reveal style={{ '--i': index % 2 }}>
            <div className="stats__head">
              <span className="stats__label">{stat.label}</span>
              <Icon
                name={stat.icon}
                className={`stats__icon ${stat.accent ? 'stats__icon--accent' : ''}`}
              />
            </div>
            <p className="stats__value">{stat.value}</p>
            <p className="stats__text">{stat.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AboutHero
