import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Envelope, Phone, DiscordLogo, PaperPlaneTilt, CheckCircle } from '@phosphor-icons/react'
import { CONTACT } from '../siteConfig'
import './Contact.css'

const EMPTY_FORM = { name: '', email: '', phone: '', message: '', website: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setForm(EMPTY_FORM)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="section contact">
      <div className="container">
        <p className="section-label">Kontakt</p>
        <h1 className="contact__heading">Berätta om ditt projekt</h1>
        <p className="contact__intro">
          Skriv några rader om ditt företag och vad du behöver, så återkommer
          vi med ett prisförslag. Du kan också ringa eller mejla oss direkt.
        </p>

        <div className="contact__grid">
          <div className="contact__cards">
            <a
              href={`mailto:${CONTACT.email}`}
              className="bar bar-dark contact__card"
            >
              <Envelope size={26} weight="bold" aria-hidden="true" />
              <div>
                <h3>Mejla oss</h3>
                <p>{CONTACT.email}</p>
              </div>
            </a>

            <a
              href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
              className="bar bar-dark contact__card"
            >
              <Phone size={26} weight="bold" aria-hidden="true" />
              <div>
                <h3>Ring oss</h3>
                <p>{CONTACT.phone}</p>
              </div>
            </a>

            <a
              href={`https://discord.com/users/${CONTACT.discordUserId}`}
              target="_blank"
              rel="noreferrer"
              className="bar bar-dark contact__card"
            >
              <DiscordLogo size={26} weight="bold" aria-hidden="true" />
              <div>
                <h3>Lägg till oss på Discord</h3>
                <p>Öppna profilen och skicka en vänförfrågan</p>
              </div>
            </a>
          </div>

          {status === 'sent' ? (
            <div className="contact__thanks" role="status">
              <CheckCircle size={40} weight="bold" aria-hidden="true" />
              <h2>Tack, vi har fått ditt meddelande!</h2>
              <p>
                Vi läser det och hör av oss så snart vi kan. Brådskar det går det
                bra att ringa oss på{' '}
                <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>{CONTACT.phone}</a>.
              </p>
            </div>
          ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__honeypot" aria-hidden="true">
              <label htmlFor="website">Lämna tomt</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="name">Namn</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">E-post</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="phone">Telefon <span className="contact__optional">(valfritt)</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Meddelande</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <p className="contact__privacy">
              Vi använder bara dina uppgifter för att svara dig. Läs mer i vår{' '}
              <Link to="/integritetspolicy">integritetspolicy</Link>.
            </p>

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Skickar…' : 'Skicka meddelande'}
              <PaperPlaneTilt size={18} weight="bold" aria-hidden="true" />
            </button>

            <p className="contact__status" role="alert">
              {status === 'error' && (
                <>
                  Något gick fel och meddelandet skickades inte. Mejla oss på{' '}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> eller ring{' '}
                  <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>{CONTACT.phone}</a>.
                </>
              )}
            </p>
          </form>
          )}
        </div>
      </div>
    </section>
  )
}
