import Icon from '../ui/Icon.jsx'
import { stats } from '../../data/about.js'

function AboutHero() {
  return (
    <section className="about-hero">
      <p className="about-tag">• Architectural roots & digital rigor • Est. Italy / Global clients</p>
      <h1 className="about-hero__title">Engineering purposeful digital architecture</h1>
      <p className="about-hero__lead">
        Bridging the gap between timeless architectural thinking, clean typographic hierarchy,
        and sub-second web performance. Creating digital systems that command authority and
        scale effortlessly.
      </p>
      <p className="about-tag about-tag--strong">Headless • High performance</p>

      <ul className="about-stats" role="list">
        {stats.map((stat) => (
          <li key={stat.id} className="about-stats__item">
            <div className="about-stats__head">
              <span className="about-stats__label">{stat.label}</span>
              <Icon
                name={stat.icon}
                className={`about-stats__icon ${stat.accent ? 'about-stats__icon--accent' : ''}`}
              />
            </div>
            <p className="about-stats__value">{stat.value}</p>
            <p className="about-stats__text">{stat.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AboutHero
