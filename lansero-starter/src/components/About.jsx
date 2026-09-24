import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import './About.css'

const FACTS = [
  { value: 'Skräddarsytt', label: 'Varje sida byggs från grunden' },
  { value: 'Helheten', label: 'Design, utveckling, SEO och drift' },
  { value: 'Norrköping', label: 'Där vi har vår bas' },
]

export default function About() {
  return (
    <section id="om-oss" className="section about">
      <div className="container">
        <div className="about__layout">
          <div>
            <p className="section-label">Om oss</p>
            <h2 className="about__heading">Vi bygger hemsidor som driver affärer.</h2>
          </div>

          <div className="about__body">
            <p className="about__lead">
              Lansero är en webbyrå i Norrköping som designar och bygger
              skräddarsydda hemsidor för företag. Vi kombinerar design, teknik
              och förståelse för försäljning, eftersom en hemsida ska göra mer
              än att se bra ut. Den ska ge dig fler kunder.
            </p>
            <p>
              Vi tar ansvar för helheten: hur sidan ser ut, hur den fungerar,
              hur den syns på Google och hur den sköts efter lanseringen. Du
              har en kontakt genom hela projektet och vet alltid var arbetet
              står.
            </p>
          </div>
        </div>

        <dl className="about__facts">
          {FACTS.map(({ value, label }) => (
            <div key={value} className="about__fact">
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>

        <div className="about__founder">
          <div className="about__founder-name">
            <p className="about__founder-title">Grundare</p>
            <h3>Kevin Khosravi</h3>
          </div>
          <div className="about__founder-text">
            <p>
              Kevin grundade Lansero med flera års erfarenhet av försäljning
              och en utbildning inom webbutveckling. Att ha mött kunder varje
              dag präglar hur vi arbetar: vi bygger sidor som är enkla att
              förstå, som känns trygga och som gör det lätt för besökaren att
              ta nästa steg.
            </p>
            <p>
              Kevin leder varje projekt personligen, från första samtalet till
              färdig sida.
            </p>
            <Link to="/kontakt" className="btn btn-primary about__cta">
              Få ett gratis prisförslag
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
