import { Link } from 'react-router-dom'
import { CONTACT, COMPANY } from '../siteConfig'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Link to="/" className="footer__logo">Lansero</Link>
        </div>

        <nav className="footer__links" aria-label="Sidfot">
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/villkor">Villkor</Link>
          <Link to="/integritetspolicy">Integritetspolicy</Link>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </nav>

        <p className="footer__copy">&copy; {new Date().getFullYear()} {COMPANY.name}</p>
      </div>
    </footer>
  )
}
