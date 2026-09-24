import { Check } from '@phosphor-icons/react'
import { PRICE_FROM, PRICE_MONTHLY } from '../siteConfig'
import './Pricing.css'

const PLANS = [
  {
    title: 'Hemsida',
    price: `Från ${PRICE_FROM}`,
    billing: 'Engångskostnad',
    text: 'Handbyggd för ditt företag. Du betalar en gång och sidan är din.',
    items: ['Egen design, ingen mall', 'Anpassad för mobil och dator', 'Snabb laddning', 'Kontaktformulär', 'Vi jobbar tills du är nöjd'],
  },
  {
    title: 'Hosting och support',
    price: PRICE_MONTHLY,
    billing: 'Ingen bindningstid',
    text: 'Vi sköter driften och du når oss när du behöver hjälp.',
    items: ['Hosting och domän', 'SSL-certifikat', 'Support dygnet runt, alla dagar', 'Ändringar ingår', 'En månads uppsägningstid'],
  },
]

const ADDONS = [
  { title: 'SEO och synlighet', text: 'Synlighet på Google när kunder söker efter det du erbjuder.' },
  { title: 'E-handel', text: 'En webbutik där dina kunder kan handla direkt på sidan.' },
]

export default function Pricing() {
  return (
    <section className="section section--page-top pricing">
      <div className="container">
        <header className="pricing__header">
          <h1 className="pricing__heading">Från {PRICE_FROM}</h1>
          <p className="pricing__lead">
            Inga fasta paket. Hemsidan betalar du en gång, och priset utgår från
            vad just din sida behöver. Du vet exakt vad det kostar innan vi
            börjar.
          </p>
        </header>

        <div className="pricing__plans">
          {PLANS.map(({ title, price, billing, text, items }) => (
            <article key={title} className="pricing__plan">
              <h2 className="pricing__plan-title">{title}</h2>
              <p className="pricing__price">{price}</p>
              <p className="pricing__billing">{billing}</p>
              <p className="pricing__plan-text">{text}</p>
              <ul className="pricing__items">
                {items.map((item) => (
                  <li key={item}>
                    <Check size={18} weight="bold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="pricing__addons">
          <h2 className="pricing__addons-title">Tillval</h2>
          <ul>
            {ADDONS.map(({ title, text }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="pricing__addon-price">Pris enligt offert</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
