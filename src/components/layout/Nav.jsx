import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { navigation } from '../../data/navigation.js'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((open) => !open)
  const closeMenu = () => setIsOpen(false)

  // Blocca lo scroll della pagina e chiude con Esc quando il menu è aperto
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    // Su desktop il menu è sempre visibile: se la finestra si allarga, chiude il menu mobile
    const desktop = window.matchMedia('(min-width: 1025px)')
    const onResize = (event) => {
      if (event.matches) closeMenu()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onResize)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onResize)
    }
  }, [isOpen])

  return (
    <nav className="nav" aria-label="Navigazione principale">
      <button
        className={`nav__toggle ${isOpen ? 'nav__toggle--open' : ''}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="nav-menu"
        aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
        onClick={toggleMenu}
      >
        <span className="nav__toggle-line" />
        <span className="nav__toggle-line" />
      </button>

      <div
        className={`nav__menu ${isOpen ? 'nav__menu--open' : ''}`}
        id="nav-menu"
      >
        <ul className="nav__list" role="list">
          {navigation.map((item) => (
            <li key={item.to}>
              <NavLink
                className={({ isActive }) =>
                  `nav__link ${isActive ? 'nav__link--active' : ''}`
                }
                to={item.to}
                end
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
