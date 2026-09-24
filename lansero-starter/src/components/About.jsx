import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import './About.css'

export default function About() {
  return (
    <section id="om-oss" className="section about">
      <div className="container about__layout">
        <div>
          <p className="section-label">Om oss</p>
          <h2 className="about__heading">Varje hemsida byggs för hand.</h2>
        </div>

        <div className="about__body">
          <p className="about__lead">
            Lansero är en webbyrå som skräddarsyr hemsidor efter varje kund. Vi
            utgår från ditt företag, dina kunder och vad sidan ska uppnå, och
            bygger därifrån. Inga mallar och inga AI-genererade standardsidor.
          </p>
          <p>
            Du bestämmer själv hur mycket vi ska ta hand om. Vissa vill bara ha
            en hemsida. Andra vill att vi också sköter drift, ändringar och
            synlighet på Google. Oavsett vilket vet du vad det kostar innan vi
            börjar.
          </p>
          <p>
            Lansero leds av grundaren Kevin Khosravi, som kombinerar flera års
            erfarenhet av försäljning med en utbildning inom webbutveckling.
            Därför bygger vi sidor som gör det enkelt för dina kunder att förstå
            vad du erbjuder och att höra av sig.
          </p>

          <p className="about__signature">
            Kevin Khosravi
            <span>Grundare, Lansero</span>
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
