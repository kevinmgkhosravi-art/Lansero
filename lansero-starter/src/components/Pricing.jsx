import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { PRICE_FROM } from '../siteConfig'
import './Pricing.css'

const OPTIONS = [
  {
    title: 'Hemsida',
    price: `Från ${PRICE_FROM}`,
    text: 'Handbyggd för ditt företag och anpassad för både mobil och dator.',
  },
  {
    title: 'Hosting och domän',
    price: 'Tillval',
    text: 'Vi sköter driften och din adress, så att sidan ligger uppe och är säker.',
  },
  {
    title: 'Support och ändringar',
    price: 'Tillval',
    text: 'Ändringar och uppdateringar när du behöver dem.',
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
            Inga fasta paket. Priset utgår från vad din hemsida behöver, och du
            vet exakt vad det kostar innan vi börjar.
          </p>
          <p className="pricing__note">
            Köp bara hemsidan, eller låt oss sköta mer åt dig.
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
