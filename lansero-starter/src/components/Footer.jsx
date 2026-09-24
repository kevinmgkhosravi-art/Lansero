import { Link } from 'react-router-dom'
import { CONTACT, COMPANY } from '../siteConfig'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">Lansero</Link>
            <p>Skräddarsydda hemsidor, byggda för hand.</p>
          </div>

          <nav className="footer__col" aria-label="Sidor">
            <p className="footer__heading">Sidor</p>
            <Link to="/tjanster">Tjänster</Link>
            <Link to="/pris">Pris</Link>
            <Link to="/exempel">Exempel</Link>
            <Link to="/om-oss">Om oss</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>

          <div className="footer__col">
            <p className="footer__heading">Kontakt</p>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>{CONTACT.phone}</a>
            <span>{COMPANY.city}</span>
          </div>

          <nav className="footer__col" aria-label="Juridiskt">
            <p className="footer__heading">Juridiskt</p>
            <Link to="/villkor">Villkor</Link>
            <Link to="/integritetspolicy">Integritetspolicy</Link>
          </nav>
        </div>

        <p className="footer__copy">&copy; {new Date().getFullYear()} {COMPANY.name}</p>
      </div>
    </footer>
  )
}
