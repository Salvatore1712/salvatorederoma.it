import Card from '../ui/Card.jsx'
import { capabilities, stack } from '../../data/services.js'

function Services() {
  return (
    <>
      {/* Capability e tecnologie: card numeriche e tag come nella pagina About */}
      <section className="services" id="services">
        <h2 className="section-heading" data-reveal>Competenze chiave</h2>
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

        <h3 className="section-heading services__stack-heading" data-reveal>Stack tecnologico</h3>
        <ul className="tag-list" role="list" data-reveal>
          {stack.map((item) => (
            <li key={item} className="tag tag--light">{item}</li>
          ))}
        </ul>
      </section>

      {/* Metodo: tre card come i pillar della pagina About */}
      <section className="focus">
        <p className="eyebrow" data-reveal>Metodo</p>
        <h2 className="section-title" data-reveal style={{ '--i': 1 }}>Un approccio strategico alla crescita digitale</h2>
        <div className="focus__grid">
          <Card title={"Analisi degli obiettivi"} text={"Studio approfondito del pubblico di riferimento, dei benchmark di settore e degli obiettivi commerciali, per definire la proposta di valore prima ancora di scrivere una riga di codice."} number={"01"} data-reveal></Card>
          <Card title={"Design mirato"} text={"Gerarchie intuitive, spaziature studiate e un’estetica contemporanea che trasmettono autorevolezza al primo sguardo e guidano le azioni dell’utente in modo naturale."} number={"02"} data-reveal style={{ '--i': 1 }}></Card>
          <Card title={"Sviluppo accurato"} text={"Markup semantico pulito, asset ottimizzati, responsive curato in ogni dettaglio e solide basi SEO, pensati per crescere nel tempo."} number={"03"} data-reveal style={{ '--i': 2 }}></Card>
        </div>
      </section>
    </>
  )
}

export default Services
