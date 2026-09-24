import { useEffect, useState } from 'react'
import { ArrowRight, Check, Clock, MapPin, Scissors } from '@phosphor-icons/react'
import '@fontsource/bebas-neue/400.css'
import DemoVideo from '../DemoVideo'
import DemoBadge from '../DemoBadge'
import useSeo from '../../useSeo'
import './BarberDemo.css'

const V = '/demos/nordsax'

const SERVICES = [
  { id: 'klipp', name: 'Herrklippning', time: 45, price: 395, text: 'Klippning med sax och maskin, tvätt och styling.' },
  { id: 'fade', name: 'Skin fade', time: 50, price: 450, text: 'Fade ända ner till huden, skarpa linjer och finish.' },
  { id: 'skagg', name: 'Skäggtrim', time: 30, price: 250, text: 'Formning, trim och kontur med rakkniv.' },
  { id: 'kombo', name: 'Klippning + skägg', time: 75, price: 595, text: 'Hela paketet. Det mest bokade hos oss.' },
  { id: 'rakning', name: 'Rakning med varm handduk', time: 40, price: 395, text: 'Klassisk rakning med varma handdukar och olja.' },
  { id: 'barn', name: 'Barnklippning', time: 30, price: 295, text: 'För barn upp till 12 år.' },
]

const TEAM = [
  { id: 'elias', name: 'Elias', role: 'Fades och skin fades', years: 9 },
  { id: 'mira', name: 'Mira', role: 'Saxklippning och klassiska stilar', years: 12 },
  { id: 'jonas', name: 'Jonas', role: 'Skägg och rakning', years: 7 },
]

const SLOTS = ['10:00', '10:45', '11:30', '13:00', '13:45', '14:30', '15:15', '16:00', '16:45', '17:30']
const DAY = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör']
const MONTH = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']

function upcomingDays() {
  const days = []
  const d = new Date()
  while (days.length < 7) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() !== 0) days.push(new Date(d))
  }
  return days
}

// Deterministic "taken" slots so the demo looks realistic without a backend.
function isTaken(day, slot) {
  let h = day.getDate() * 31 + day.getMonth()
  for (const c of slot) h = (h * 17 + c.charCodeAt(0)) % 997
  return h % 3 === 0
}

export default function BarberDemo() {
  useSeo('/exempel/nordsax')
  const [days, setDays] = useState([])
  const [service, setService] = useState(null)
  const [barber, setBarber] = useState('any')
  const [day, setDay] = useState(null)
  const [slot, setSlot] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => { setDays(upcomingDays()) }, [])

  const chosen = SERVICES.find((s) => s.id === service)
  const barberName = barber === 'any' ? 'Första lediga' : TEAM.find((t) => t.id === barber)?.name
  const ready = chosen && day && slot && name.trim() && phone.trim()
  const dayLabel = (d) => `${DAY[d.getDay()]} ${d.getDate()} ${MONTH[d.getMonth()]}`

  const reset = () => {
    setService(null); setBarber('any'); setDay(null); setSlot(null); setName(''); setPhone(''); setDone(false)
  }

  const pickService = (id) => {
    setService(id)
    document.getElementById('boka')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="ns">
      <header className="ns-nav">
        <a href="#top" className="ns-logo">Nordsax</a>
        <nav className="ns-nav__links" aria-label="Meny">
          <a href="#tjanster">Tjänster</a>
          <a href="#salongen">Salongen</a>
          <a href="#team">Team</a>
        </nav>
        <a href="#boka" className="ns-btn ns-btn--brass ns-nav__cta">Boka tid</a>
      </header>

      <section id="top" className="ns-hero">
        <DemoVideo className="ns-hero__video" src={`${V}/hero.mp4`} poster={`${V}/hero.jpg`} eager />
        <div className="ns-hero__shade" aria-hidden="true" />
        <div className="ns-hero__content">
          <p className="ns-kicker"><Scissors size={16} weight="bold" aria-hidden="true" /> Barbershop i Norrköping</p>
          <h1 className="ns-hero__title">Skarpa klipp.<br />Inga genvägar.</h1>
          <p className="ns-hero__sub">Klassiska herrklippningar, fades och skäggvård med varm handduk. Boka online på en minut.</p>
          <div className="ns-hero__actions">
            <a href="#boka" className="ns-btn ns-btn--brass">Boka tid <ArrowRight size={18} weight="bold" aria-hidden="true" /></a>
            <a href="#tjanster" className="ns-btn ns-btn--ghost">Se priser</a>
          </div>
        </div>
        <div className="ns-hero__strip">
          <span><Clock size={18} aria-hidden="true" /> Mån–fre 10–19 · Lör 10–16</span>
          <span><MapPin size={18} aria-hidden="true" /> Exempelgatan 12, Norrköping</span>
        </div>
      </section>

      <section id="tjanster" className="ns-section">
        <div className="ns-wrap">
          <div className="ns-head">
            <h2 className="ns-h2">Tjänster &amp; priser</h2>
            <p className="ns-lead">Alla priser inklusive moms. Välj en tjänst för att boka direkt.</p>
          </div>
          <ul className="ns-menu">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <button type="button" className="ns-menu__item" onClick={() => pickService(s.id)}>
                  <span className="ns-menu__top">
                    <span className="ns-menu__name">{s.name}</span>
                    <span className="ns-menu__dots" aria-hidden="true" />
                    <span className="ns-menu__price">{s.price} kr</span>
                  </span>
                  <span className="ns-menu__text">{s.text} <em>{s.time} min</em></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="salongen" className="ns-salon">
        <DemoVideo className="ns-salon__video" src={`${V}/salong.mp4`} poster={`${V}/salong.jpg`} />
        <div className="ns-salon__shade" aria-hidden="true" />
        <div className="ns-wrap ns-salon__content">
          <h2 className="ns-salon__title">Stolen är redo.</h2>
          <p>Tre stolar, varma handdukar och en kaffe medan du väntar. Salongen ligger mitt i stan, två minuter från Resecentrum.</p>
        </div>
      </section>

      <section id="team" className="ns-section">
        <div className="ns-wrap">
          <h2 className="ns-h2">Teamet</h2>
          <ul className="ns-team">
            {TEAM.map((t) => (
              <li key={t.id} className="ns-team__card">
                <span className="ns-team__mono" aria-hidden="true">{t.name[0]}</span>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
                <p className="ns-team__years">{t.years} år i yrket</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="boka" className="ns-section ns-book">
        <div className="ns-wrap">
          <h2 className="ns-h2">Boka tid</h2>

          {done ? (
            <div className="ns-done" role="status">
              <span className="ns-done__icon"><Check size={32} weight="bold" aria-hidden="true" /></span>
              <h3>Tack {name.trim()}, du är bokad!</h3>
              <p>{chosen.name} · {dayLabel(day)} kl {slot} · {barberName}</p>
              <p className="ns-done__note">Det här är en demo, så ingen tid har bokats på riktigt.</p>
              <button type="button" className="ns-btn ns-btn--ghost" onClick={reset}>Gör en ny bokning</button>
            </div>
          ) : (
            <div className="ns-book__grid">
              <div className="ns-steps">
                <fieldset className="ns-step">
                  <legend><span>1</span> Tjänst</legend>
                  <div className="ns-options">
                    {SERVICES.map((s) => (
                      <button key={s.id} type="button" className={`ns-option${service === s.id ? ' is-active' : ''}`} aria-pressed={service === s.id} onClick={() => setService(s.id)}>
                        <span>{s.name}</span><small>{s.time} min · {s.price} kr</small>
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="ns-step">
                  <legend><span>2</span> Barberare</legend>
                  <div className="ns-options ns-options--row">
                    {[{ id: 'any', name: 'Första lediga' }, ...TEAM].map((t) => (
                      <button key={t.id} type="button" className={`ns-option${barber === t.id ? ' is-active' : ''}`} aria-pressed={barber === t.id} onClick={() => setBarber(t.id)}>
                        <span>{t.name}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="ns-step">
                  <legend><span>3</span> Dag och tid</legend>
                  <div className="ns-days">
                    {days.map((d) => (
                      <button key={d.toDateString()} type="button" className={`ns-day${day?.toDateString() === d.toDateString() ? ' is-active' : ''}`} aria-pressed={day?.toDateString() === d.toDateString()} onClick={() => { setDay(d); setSlot(null) }}>
                        <small>{DAY[d.getDay()]}</small><strong>{d.getDate()}</strong><small>{MONTH[d.getMonth()]}</small>
                      </button>
                    ))}
                  </div>
                  {day && (
                    <div className="ns-slots">
                      {SLOTS.filter((s) => day.getDay() !== 6 || s < '15:30').map((s) => {
                        const taken = isTaken(day, s)
                        return (
                          <button key={s} type="button" disabled={taken} className={`ns-slot${slot === s ? ' is-active' : ''}`} aria-pressed={slot === s} onClick={() => setSlot(s)}>
                            {s}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </fieldset>

                <fieldset className="ns-step">
                  <legend><span>4</span> Dina uppgifter</legend>
                  <div className="ns-fields">
                    <label>Namn<input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
                    <label>Telefon<input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
                  </div>
                </fieldset>
              </div>

              <aside className="ns-summary">
                <h3>Din bokning</h3>
                <dl>
                  <div><dt>Tjänst</dt><dd>{chosen ? chosen.name : '–'}</dd></div>
                  <div><dt>Barberare</dt><dd>{barberName}</dd></div>
                  <div><dt>Tid</dt><dd>{day && slot ? `${dayLabel(day)} kl ${slot}` : '–'}</dd></div>
                  <div><dt>Pris</dt><dd>{chosen ? `${chosen.price} kr` : '–'}</dd></div>
                </dl>
                <button type="button" className="ns-btn ns-btn--brass ns-btn--block" disabled={!ready} onClick={() => setDone(true)}>
                  Bekräfta bokning
                </button>
                {!ready && <p className="ns-summary__hint">Välj tjänst, dag, tid och fyll i dina uppgifter.</p>}
              </aside>
            </div>
          )}
        </div>
      </section>

      <footer className="ns-footer">
        <div className="ns-wrap ns-footer__inner">
          <span className="ns-logo">Nordsax</span>
          <p>Mån–fre 10–19 · Lör 10–16 · Sön stängt</p>
          <p>Exempelgatan 12, Norrköping · Ett påhittat företag, byggt som demo av Lansero.</p>
        </div>
      </footer>

      <DemoBadge />
    </div>
  )
}
