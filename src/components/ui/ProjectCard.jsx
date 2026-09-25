import { Link } from 'react-router'

// Card progetto: tutta la card è cliccabile.
// `to` per le route interne, `href` per link esterni; senza nessuno dei due la card non è un link.
// Senza `image` mostra un placeholder.
function ProjectCard({ title, text, category, stack = [], image, to, href }) {
  const content = (
    <>
      <div className="project-card__media">
        {image ? (
          <img className="project-card__image" src={image} alt="" loading="lazy" />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        )}
        {category && <span className="project-card__badge">{category}</span>}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        {text && <p className="project-card__text">{text}</p>}

        <div className="project-card__footer">
          <p className="project-card__stack">{stack.join(' / ')}</p>
          {(to || href) && (
            <svg className="project-card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          )}
        </div>
      </div>
    </>
  )

  if (to) {
    return <Link className="project-card" to={to}>{content}</Link>
  }

  if (href) {
    return (
      <a className="project-card" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return <article className="project-card">{content}</article>
}

export default ProjectCard
