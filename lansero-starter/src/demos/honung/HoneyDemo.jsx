import { useMemo, useState } from 'react'
import { Handbag, X, Minus, Plus, ArrowRight } from '@phosphor-icons/react'
import '@fontsource/fraunces/400.css'
import '@fontsource/fraunces/600.css'
import '@fontsource/fraunces/400-italic.css'
import DemoVideo from '../DemoVideo'
import DemoBadge from '../DemoBadge'
import useSeo from '../../useSeo'
import HoneyArt from './HoneyArt'
import './HoneyDemo.css'

const V = '/demos/honung'
const FREE_SHIPPING = 500

const PRODUCTS = [
  { id: 'blomster', name: 'Blomsterhonung', size: '350 g', price: 119, type: 'Krämig', art: 'jar', color: '#E7AE45', label: 'Blomster', text: 'Krämig och mild, från sommarens ängar och klöverfält.' },
  { id: 'lind', name: 'Lindhonung', size: '350 g', price: 139, type: 'Flytande', art: 'jar', color: '#F2C94C', label: 'Lind', text: 'Ljus och blommig med en frisk ton av lindblom.' },
  { id: 'ljung', name: 'Ljunghonung', size: '250 g', price: 159, type: 'Krämig', art: 'jar', color: '#9A5613', label: 'Ljung', text: 'Mörk och kraftig, skördad från augustis ljunghed.' },
  { id: 'skog', name: 'Skogshonung', size: '350 g', price: 149, type: 'Flytande', art: 'jar', color: '#6E3A0E', label: 'Skog', text: 'Djup och maltig, från granskogarna runt gården.' },
  { id: 'vaxkaka', name: 'Vaxkaka', size: '200 g', price: 189, type: 'Special', art: 'comb', text: 'Hel bikaka direkt från ramen. Ät den som den är.' },
  { id: 'presentask', name: 'Presentask', size: '3 × 120 g', price: 349, type: 'Special', art: 'box', text: 'Lind, blomster och ljung i en ask. Perfekt som present.' },
]

const FILTERS = ['Alla', 'Flytande', 'Krämig', 'Special']

const kr = (n) => `${n.toLocaleString('sv-SE')} kr`

export default function HoneyDemo() {
  useSeo('/exempel/gyllene-kupan')
  const [filter, setFilter] = useState('Alla')
  const [cart, setCart] = useState({})
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutNote, setCheckoutNote] = useState(false)

  const visible = filter === 'Alla' ? PRODUCTS : PRODUCTS.filter((p) => p.type === filter)
  const lines = useMemo(() => PRODUCTS.filter((p) => cart[p.id]).map((p) => ({ ...p, qty: cart[p.id] })), [cart])
  const count = lines.reduce((sum, l) => sum + l.qty, 0)
  const total = lines.reduce((sum, l) => sum + l.qty * l.price, 0)
  const toFree = Math.max(0, FREE_SHIPPING - total)

  const change = (id, delta) => {
    setCheckoutNote(false)
    setCart((c) => {
      const qty = (c[id] || 0) + delta
      const next = { ...c }
      if (qty <= 0) delete next[id]
      else next[id] = qty
      return next
    })
  }

  const add = (id) => {
    change(id, 1)
    setCartOpen(true)
  }

  return (
    <div className="hk">
      <header className="hk-nav">
        <a href="#top" className="hk-logo">Gyllene Kupan</a>
        <nav className="hk-nav__links" aria-label="Meny">
          <a href="#honung">Honung</a>
          <a href="#bigarden">Bigården</a>
          <a href="#besok">Besök oss</a>
        </nav>
        <button type="button" className="hk-cart-btn" onClick={() => setCartOpen(true)} aria-label={`Kundvagn, ${count} varor`}>
          <Handbag size={22} weight="bold" aria-hidden="true" />
          {count > 0 && <span className="hk-cart-btn__count">{count}</span>}
        </button>
      </header>

      <section id="top" className="hk-hero">
        <div className="hk-hero__frame">
          <DemoVideo className="hk-hero__video" src={`${V}/hero.mp4`} poster={`${V}/hero.jpg`} eager />
          <div className="hk-hero__shade" aria-hidden="true" />
          <div className="hk-hero__content">
            <p className="hk-hero__kicker">Bigård i Kolmården sedan 1987</p>
            <h1 className="hk-hero__title">Honung som smakar <em>sommar.</em></h1>
            <p className="hk-hero__sub">
              Från våra kupor i Kolmårdens skogar till ditt frukostbord.
              Opastöriserad, oblandad och slungad för hand.
            </p>
            <div className="hk-hero__actions">
              <a href="#honung" className="hk-btn hk-btn--honey">Handla honung <ArrowRight size={18} weight="bold" aria-hidden="true" /></a>
              <a href="#besok" className="hk-btn hk-btn--light">Besök gårdsbutiken</a>
            </div>
          </div>
          <svg className="hk-seal" viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="hk-seal-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
            <circle cx="60" cy="60" r="58" />
            <text><textPath href="#hk-seal-path">NY SKÖRD 2026 · NY SKÖRD 2026 ·</textPath></text>
            <path d="M60 44 l12 7 v14 l-12 7 l-12 -7 v-14 z" />
          </svg>
        </div>
      </section>

      <div className="hk-marquee" aria-hidden="true">
        <div className="hk-marquee__track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>Opastöriserad <b>✦</b> Lokal från Kolmården <b>✦</b> Slungad för hand <b>✦</b> Fri frakt över {FREE_SHIPPING} kr <b>✦</b> Ingen tillsats, bara honung <b>✦</b>&nbsp;</span>
          ))}
        </div>
      </div>

      <section id="honung" className="hk-section">
        <div className="hk-wrap">
          <div className="hk-head">
            <h2 className="hk-h2">Årets skörd</h2>
            <div className="hk-filters" role="group" aria-label="Filtrera">
              {FILTERS.map((f) => (
                <button key={f} type="button" className={`hk-chip${filter === f ? ' is-active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <ul className="hk-grid">
            {visible.map((p) => (
              <li key={p.id} className="hk-card">
                <div className="hk-card__art"><HoneyArt product={p} /></div>
                <div className="hk-card__body">
                  <div className="hk-card__row">
                    <h3>{p.name}</h3>
                    <span className="hk-card__price">{kr(p.price)}</span>
                  </div>
                  <p className="hk-card__meta">{p.size} · {p.type}</p>
                  <p className="hk-card__text">{p.text}</p>
                  <button type="button" className="hk-btn hk-btn--gold hk-card__add" onClick={() => add(p.id)}>
                    Lägg i kundvagnen
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="bigarden" className="hk-section hk-story">
        <div className="hk-wrap hk-story__grid">
          <div className="hk-story__media">
            <DemoVideo className="hk-story__video" src={`${V}/apiary.mp4`} poster={`${V}/apiary.jpg`} />
          </div>
          <div>
            <h2 className="hk-h2">Från kupa <em>till burk.</em></h2>
            <ol className="hk-steps">
              <li><span>01</span><div><h3>Bina gör jobbet</h3><p>Våra 40 samhällen flyger fritt över ängar, lindalléer och ljunghed runt gården.</p></div></li>
              <li><span>02</span><div><h3>Vi skördar i rätt tid</h3><p>Ramarna tas först när bina själva har täckt kakan med vax. Då är honungen mogen.</p></div></li>
              <li><span>03</span><div><h3>Slungad och tappad för hand</h3><p>Honungen värms aldrig upp och blandas aldrig. Varje burk är en sort från en säsong.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="hk-quote">
        <DemoVideo className="hk-quote__video" src={`${V}/bees.mp4`} poster={`${V}/bees.jpg`} />
        <div className="hk-quote__shade" aria-hidden="true" />
        <blockquote className="hk-quote__text">
          <p>”Vi skyndar aldrig på bina. Honungen är klar när den är klar.”</p>
          <cite>Anna Lind, biodlare</cite>
        </blockquote>
      </section>

      <section id="besok" className="hk-section">
        <div className="hk-wrap hk-visit">
          <div>
            <h2 className="hk-h2">Gårdsbutiken</h2>
            <p className="hk-lead">Smaka dig igenom årets skörd, köp direkt från gården och hälsa på bina (på behörigt avstånd).</p>
          </div>
          <dl className="hk-visit__facts">
            <div><dt>Öppet</dt><dd>Lördag–söndag 10–16<br />Juni–augusti även fredag</dd></div>
            <div><dt>Adress</dt><dd>Kupvägen 7<br />Kolmården</dd></div>
            <div><dt>Kontakt</dt><dd>hej@gyllenekupan.se<br />011-00 00 00</dd></div>
          </dl>
        </div>
      </section>

      <footer className="hk-footer">
        <div className="hk-wrap hk-footer__inner">
          <span className="hk-logo">Gyllene Kupan</span>
          <p>Honung från Kolmården. Ett påhittat företag, byggt som demo av Lansero.</p>
        </div>
      </footer>

      <div className={`hk-drawer${cartOpen ? ' is-open' : ''}`} aria-hidden={!cartOpen}>
        <button type="button" className="hk-drawer__backdrop" tabIndex={cartOpen ? 0 : -1} aria-label="Stäng kundvagnen" onClick={() => setCartOpen(false)} />
        <aside className="hk-drawer__panel" role="dialog" aria-label="Kundvagn">
          <div className="hk-drawer__head">
            <h2>Kundvagn</h2>
            <button type="button" className="hk-icon-btn" tabIndex={cartOpen ? 0 : -1} onClick={() => setCartOpen(false)} aria-label="Stäng">
              <X size={22} weight="bold" aria-hidden="true" />
            </button>
          </div>

          {lines.length === 0 ? (
            <p className="hk-drawer__empty">Kundvagnen är tom. Lägg till en burk eller två.</p>
          ) : (
            <>
              <div className="hk-ship">
                <p>{toFree > 0 ? <>Handla för {kr(toFree)} till för <b>fri frakt</b>.</> : <><b>Fri frakt</b> på din beställning.</>}</p>
                <div className="hk-ship__bar"><span style={{ width: `${Math.min(100, (total / FREE_SHIPPING) * 100)}%` }} /></div>
              </div>
              <ul className="hk-lines">
                {lines.map((l) => (
                  <li key={l.id} className="hk-line">
                    <div className="hk-line__art"><HoneyArt product={l} /></div>
                    <div className="hk-line__info">
                      <p className="hk-line__name">{l.name}</p>
                      <p className="hk-line__meta">{l.size} · {kr(l.price)}</p>
                      <div className="hk-qty">
                        <button type="button" tabIndex={cartOpen ? 0 : -1} onClick={() => change(l.id, -1)} aria-label={`En ${l.name} mindre`}><Minus size={14} weight="bold" /></button>
                        <span>{l.qty}</span>
                        <button type="button" tabIndex={cartOpen ? 0 : -1} onClick={() => change(l.id, 1)} aria-label={`En ${l.name} till`}><Plus size={14} weight="bold" /></button>
                      </div>
                    </div>
                    <p className="hk-line__sum">{kr(l.qty * l.price)}</p>
                  </li>
                ))}
              </ul>
              <div className="hk-drawer__foot">
                <div className="hk-total"><span>Totalt</span><span>{kr(total)}</span></div>
                <button type="button" className="hk-btn hk-btn--gold hk-btn--block" tabIndex={cartOpen ? 0 : -1} onClick={() => setCheckoutNote(true)}>
                  Till kassan
                </button>
                {checkoutNote && <p className="hk-drawer__note" role="status">Det här är en demo, så ingen beställning skickas. Så här skulle kassan fungera på din riktiga butik.</p>}
              </div>
            </>
          )}
        </aside>
      </div>

      <DemoBadge />
    </div>
  )
}
