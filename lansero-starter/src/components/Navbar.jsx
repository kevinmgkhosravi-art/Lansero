import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from '@phosphor-icons/react'
import { CONTACT } from '../siteConfig'
import './Navbar.css'

const LINKS = [
  { to: '/#tjanster', label: 'Tjänster' },
  { to: '/#pris', label: 'Pris' },
  { to: '/#om-oss', label: 'Om oss' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const close = () => setOpen(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY.current
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > 120)
          lastY.current = y
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className={`navbar${hidden && !open ? ' navbar--hidden' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="Lansero, till startsidan" onClick={close}>
          Lansero
        </Link>

        <nav className="navbar__links" aria-label="Huvudmeny">
          {LINKS.map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </nav>

        <Link to="/kontakt" className="btn btn-primary navbar__cta">
          Gratis prisförslag
        </Link>

        <a
          href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
          className="navbar__call"
          aria-label={`Ring oss på ${CONTACT.phone}`}
        >
          <Phone size={20} weight="bold" aria-hidden="true" />
          Ring
        </a>

        <button
          type="button"
          className="navbar__burger"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile" aria-label="Mobilmeny">
          {LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={close}>
              {link.label}
            </Link>
          ))}
          <Link to="/kontakt" className="btn btn-primary" onClick={close}>
            Gratis prisförslag
          </Link>
        </nav>
      )}
    </header>
  )
}
