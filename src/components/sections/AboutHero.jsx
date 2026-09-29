import Icon from '../ui/Icon.jsx'
import { stats } from '../../data/about.js'

function AboutHero() {
  return (
    <section className="page-intro">
      <p className="tag" data-reveal>• Web developer & design essenziale • Base in Italia / Clienti in tutto il mondo</p>
      <h1 className="page-title" data-reveal style={{ '--i': 1 }}>Design pulito, codice solido, risultati concreti</h1>
      <p className="page-lead" data-reveal style={{ '--i': 2 }}>
        Progetto e sviluppo siti web in cui è la semplicità a fare la differenza: gerarchia
        tipografica chiara, interfacce intuitive e codice veloce e accessibile. Spazi digitali che
        aiutano i brand a comunicare con chiarezza e a trasformare i visitatori in clienti.
      </p>
      <p className="tag tag--strong" data-reveal style={{ '--i': 3 }}>Headless • Alte prestazioni</p>

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
