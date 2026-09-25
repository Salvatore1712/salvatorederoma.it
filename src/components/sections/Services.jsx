import Card from '../ui/Card.jsx'
import { capabilities, stack } from '../../data/services.js'

function Services() {
  return (
    <section className="services" id="services">
      <h3 className='services__title' data-reveal>CORE CAPABILITIES</h3>
      <div className='capabilities'>
        {capabilities.map((cap, index) => (
          <p key={cap.id} className='services__capability' data-reveal style={{ '--i': index }}>
            <span className='services__capability-title'>{cap.title}</span>{' '}
            <span className='services__capability-accent'>{cap.accent}</span>
          </p>
        ))}
      </div>

      {/* skill */}
      <ul className='stack' role='list' data-reveal>
        {stack.map((item) => (
          <li key={item} className='stack__item'>{item}</li>
        ))}
      </ul>
      <div className='focus'>
        <h2 className='focus__title' data-reveal>Strategic approach to digital growth</h2>
        <Card title={"Objective Analysis"} text={"In-depth assessment of target audiences, industry benchmarks, and commercial goals. Clarifying the core value prosition before typing a single character of markup."} number={"01"} data-reveal></Card>
        <Card title={"Targeted Design"} text={"Crafting intuitive hierarchy, purposeful spacing, and contemporary aesthetics that command immediate respect and guide user action seamlessly."} number={"02"} data-reveal></Card>
        <Card title={"Precise Development"} text={"Clean semantic markup, optimized asset pipelines, rigorous responsiveness, and robust SEO infrastructure engineered for long-term scalability."} number={"03"} data-reveal></Card>
      </div>
      
      
    </section>
  )
}

export default Services
