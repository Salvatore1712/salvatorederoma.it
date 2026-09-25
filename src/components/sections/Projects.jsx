import ProjectCard from '../ui/ProjectCard.jsx'
import { projects } from '../../data/projects.js'
import Button from "../ui/Button.jsx"

function Projects() {
  return (
    <section className="projects" id="projects">
      <h4 className="projects__eyebrow">ARCHIVE & CASE STUDIES • 2023 — 2026</h4>
      <h2 className="projects__title">SELECTED WORKS & DIGITAL ARCHITECTURE</h2>
      <p className="projects__lead">A curated register of high-performance web systems, headless e-commerce, and architectural interfaces built for design-led brands worldwide.</p>
      <div className="projects__grid">
        {projects.map(({ id, ...project }) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
      <div className="projects__actions">
        <Button href={"mailto:info@salvatorederoma.it"} variant='primary'>CONTACT ME</Button>
      </div>
    </section>
  )
}

export default Projects
