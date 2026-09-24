import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import './About.css'

export default function About() {
  return (
    <section id="om-oss" className="section about">
      <div className="container">
        <div className="about__bar">
          <p className="section-label">Om oss</p>
          <h2>Du pratar direkt med oss som bygger.</h2>
          <p className="about__text">
            Ingen säljare i mellanledet. Vi ställer frågorna som behövs, visar
            hur sidan ser ut innan den går live och bygger den så att den kan
            växa i takt med ditt företag.
          </p>
          <Link to="/kontakt" className="btn btn-primary about__cta">
            Få ett gratis prisförslag
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
