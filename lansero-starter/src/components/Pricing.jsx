import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import './Pricing.css'

const FACTORS = [
  {
    title: 'Hur stor sidan är',
    text: 'En enkel sida med några undersidor kostar mindre än en stor sajt med många sidor.',
  },
  {
    title: 'Vad den ska kunna',
    text: 'Bokning, webbutik, inloggning eller andra funktioner påverkar hur mycket arbete det blir.',
  },
  {
    title: 'Text och bilder',
    text: 'Har du eget material eller behöver du hjälp att ta fram det?',
  },
  {
    title: 'Tillval efter lanseringen',
    text: 'Hosting, domän och support kan läggas till om du vill slippa sköta det själv.',
  },
]

export default function Pricing() {
  return (
    <section id="pris" className="section pricing">
      <div className="container pricing__layout">
        <div className="pricing__intro">
          <p className="section-label">Pris</p>
          <h2 className="pricing__heading">Inga fasta paket. Ett pris vi kommer överens om.</h2>
          <p className="pricing__lead">
            Varje hemsida är olika, så vi sätter inte samma pris på alla. Vi går
            igenom vad du behöver och ger dig ett rimligt pris. Vi kommer
            överens om det innan något arbete börjar, så att du vet vad du
            betalar för.
          </p>
          <Link to="/kontakt" className="btn btn-primary pricing__cta">
            Få ett gratis prisförslag
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>
        </div>

        <div>
          <h3 className="pricing__sub">Det här påverkar priset</h3>
          <dl className="pricing__factors">
            {FACTORS.map(({ title, text }) => (
              <div key={title} className="pricing__factor">
                <dt>{title}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
