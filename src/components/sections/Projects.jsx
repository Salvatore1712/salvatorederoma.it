import ProjectCard from '../ui/ProjectCard.jsx'
import { projects } from '../../data/projects.js'

function Projects() {
  return (
    <section className="projects" id="projects">
      {/* Apertura come la pagina About: etichetta, titolo grande, testo */}
      <div className="page-intro">
        <p className="tag" data-reveal>• Archivio e casi studio • 2023 — 2026</p>
        <h1 className="page-title" data-reveal style={{ '--i': 1 }}>Lavori selezionati e architettura digitale</h1>
        <p className="page-lead" data-reveal style={{ '--i': 2 }}>Una selezione curata di sistemi web ad alte prestazioni, e-commerce headless e interfacce dal forte impianto architettonico, realizzati per brand attenti al design in tutto il mondo.</p>
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
