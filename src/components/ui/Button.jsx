import { Link } from 'react-router'

// `to` per le route interne (navigazione SPA), `href` per link esterni, mailto e ancore
function Button({ to, href, variant = 'primary', children, ...props }) {
  const className = `button button--${variant}`

  if (to) {
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={className} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  )
}

export default Button
