import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { PRICE_FROM, PRICE_MONTHLY } from '../siteConfig'
import './Overview.css'

const LINKS = [
  { to: '/tjanster', title: 'Tjänster', text: 'Hemsida, hosting och support, SEO och e-handel. Och så går det till.' },
  { to: '/pris', title: 'Pris', text: `Hemsida från ${PRICE_FROM}. Hosting och support för ${PRICE_MONTHLY}.` },
  { to: '/om-oss', title: 'Om oss', text: 'Varje hemsida byggs för hand, utan mallar.' },
]

export default function Overview() {
  return (
    <section id="oversikt" className="section overview">
      <div className="container">
        <div className="overview__intro">
          <h2 className="overview__heading">En hemsida som bara ditt företag har.</h2>
          <p className="overview__lead">
            Vi designar och bygger varje sida för hand. Du väljer själv vad du
            vill ha hjälp med och vet vad det kostar innan vi börjar.
          </p>
        </div>

        <ul className="overview__links">
          {LINKS.map(({ to, title, text }) => (
            <li key={to}>
              <Link to={to} className="overview__link">
                <span className="overview__title">{title}</span>
                <span className="overview__text">{text}</span>
                <ArrowRight className="overview__arrow" size={28} weight="bold" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
