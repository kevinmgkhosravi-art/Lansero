import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { PRICE_FROM, PRICE_MONTHLY } from '../siteConfig'
import './Pricing.css'

const OPTIONS = [
  {
    title: 'Hemsida',
    price: `Från ${PRICE_FROM}`,
    text: 'Engångskostnad. Handbyggd för ditt företag och anpassad för både mobil och dator.',
  },
  {
    title: 'Hosting och support',
    price: PRICE_MONTHLY,
    text: 'Drift, säkerhet och support dygnet runt, alla dagar. Ändringar ingår och det finns ingen bindningstid.',
  },
  {
    title: 'SEO',
    price: 'Tillval',
    text: 'Synlighet på Google när kunder söker efter det du erbjuder.',
  },
  {
    title: 'E-handel',
    price: 'Tillval',
    text: 'En webbutik där dina kunder kan handla direkt på sidan.',
  },
]

export default function Pricing() {
  return (
    <section id="pris" className="section pricing">
      <div className="container pricing__layout">
        <div className="pricing__intro">
          <p className="section-label">Pris</p>
          <h2 className="pricing__heading">Från {PRICE_FROM}</h2>
          <p className="pricing__lead">
            Inga fasta paket. Hemsidan betalar du en gång, och priset utgår
            från vad just din sida behöver. Du vet exakt vad det kostar innan
            vi börjar.
          </p>
          <p className="pricing__note">
            Vill du att vi sköter drift och support kostar det {PRICE_MONTHLY},
            utan bindningstid.
          </p>
          <Link to="/kontakt" className="btn btn-primary pricing__cta">
            Få ett gratis prisförslag
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>
        </div>

        <ul className="pricing__options">
          {OPTIONS.map(({ title, price, text }) => (
            <li key={title} className="pricing__option">
              <div className="pricing__option-head">
                <h3>{title}</h3>
                <span className={price === 'Tillval' ? 'pricing__tag' : 'pricing__price'}>{price}</span>
              </div>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
