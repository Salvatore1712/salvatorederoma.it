import SocialLinks from '../ui/SocialLinks.jsx'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {year} Salvatore De Roma</p>
        <hr className='footer__line'/>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
