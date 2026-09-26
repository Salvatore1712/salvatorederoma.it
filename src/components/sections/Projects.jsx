import ProjectCard from '../ui/ProjectCard.jsx'
import { projects } from '../../data/projects.js'

function Projects() {
  return (
    <section className="projects" id="projects">
      {/* Apertura come la pagina About: etichetta, titolo grande, testo */}
      <div className="page-intro">
        <p className="tag" data-reveal>• Archive & case studies • 2023 — 2026</p>
        <h1 className="page-title" data-reveal style={{ '--i': 1 }}>Selected works & digital architecture</h1>
        <p className="page-lead" data-reveal style={{ '--i': 2 }}>A curated register of high-performance web systems, headless e-commerce, and architectural interfaces built for design-led brands worldwide.</p>
      </div>
      <div className="projects__grid">
        {projects.map(({ id, ...project }, index) => (
          <ProjectCard key={id} {...project} data-reveal style={{ '--i': index % 3 }} />
        ))}
      </div>
    </section>
  )
}

export default Projects
