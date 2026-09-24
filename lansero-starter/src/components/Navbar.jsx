import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone } from '@phosphor-icons/react'
import { CONTACT } from '../siteConfig'
import './Navbar.css'

const LINKS = [
  { to: '/tjanster', label: 'Tjänster' },
  { to: '/pris', label: 'Pris' },
  { to: '/exempel', label: 'Exempel' },
  { to: '/om-oss', label: 'Om oss' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [overDark, setOverDark] = useState(pathname === '/')
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)
  const close = () => setOpen(false)

  useEffect(() => {
    const measure = () => {
      const y = window.scrollY
      const hero = document.querySelector('.hero')
      setOverDark(Boolean(hero) && hero.getBoundingClientRect().bottom > 72)
      setScrolled(y > 8)
      const delta = y - lastY.current
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 120)
        lastY.current = y
      }
    }
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }
    measure()
    setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  const classes = ['navbar']
  if (overDark) classes.push('on-dark')
  else if (scrolled || open) classes.push('navbar--solid')
  if (hidden && !open) classes.push('navbar--hidden')

  return (
    <header className={classes.join(' ')}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="Lansero, till startsidan" onClick={close}>
          Lansero
        </Link>

        <nav className="navbar__links" aria-label="Huvudmeny">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
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
            <NavLink key={link.to} to={link.to} onClick={close}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/kontakt" className="btn btn-primary" onClick={close}>
            Gratis prisförslag
          </Link>
        </nav>
      )}
    </header>
  )
}
