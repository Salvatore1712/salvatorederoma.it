import { Link } from 'react-router'
import Nav from './Nav.jsx'
import mark from '../../assets/marchio_salvatorederoma.png'
import logo from '../../assets/logo_salvatorederoma.png'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo" to="/">
          {/* Desktop: logo completo — mobile: solo il marchio */}
          <picture>
            <source media="(min-width: 1025px)" srcSet={logo} />
            <img src={mark} alt="salvatorederoma.it — Web Developer" className='header__logo__icon'/>
          </picture>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header
