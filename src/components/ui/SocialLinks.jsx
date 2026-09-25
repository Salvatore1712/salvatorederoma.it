import { socials } from '../../data/socials.js'

function SocialLinks() {
  return (
    <ul className="social-links" role="list">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            className="social-links__link"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
