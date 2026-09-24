import { PRICE_FROM } from '../siteConfig'
import './Services.css'

const SERVICES = [
  {
    title: 'Skräddarsydd hemsida',
    tag: `Från ${PRICE_FROM}`,
    text: 'Designad och byggd för hand, från första skiss till färdig sida. Ingen mall och ingen AI-genererad standardsida, utan en hemsida som bara ditt företag har.',
    points: ['Egen design', 'Anpassad för mobil', 'Snabb laddning', 'Kontaktformulär'],
  },
  {
    title: 'SEO och synlighet',
    tag: 'Tillval',
    text: 'Vi bygger sidan så att Google förstår den och hjälper dig att synas när kunder söker efter det du erbjuder.',
    points: ['Teknisk SEO', 'Sidtitlar och beskrivningar', 'Google Search Console', 'Lokal synlighet'],
  },
  {
    title: 'E-handel',
    tag: 'Tillval',
    text: 'En webbutik som är enkel att handla i för dina kunder och enkel att sköta för dig.',
    points: ['Produktsidor', 'Betalning', 'Frakt', 'Orderhantering'],
  },
  {
    title: 'Hosting och domän',
    tag: 'Tillval',
    text: 'Vi sköter driften, så att sidan ligger uppe och är säker. Har du redan ett webbhotell fungerar det också.',
    points: ['Hosting', 'Domän', 'SSL-certifikat'],
  },
  {
    title: 'Underhåll och support',
    tag: 'Tillval',
    text: 'Behöver du ändra något eller lägga till en sida gör vi det åt dig. Du slipper lära dig tekniken själv.',
    points: ['Uppdateringar', 'Ändringar', 'Hjälp när något krånglar'],
  },
]

export default function Services() {
  return (
    <section id="tjanster" className="section services">
      <div className="container services__layout">
        <div className="services__intro">
          <p className="section-label">Tjänster</p>
          <h2 className="services__heading">Byggt för ditt företag. Inte för alla.</h2>
          <p className="services__lead">
            Vi börjar med hemsidan och du väljer själv vad du vill lägga till.
            Du betalar bara för det du behöver.
          </p>
        </div>

        <ol className="services__list">
          {SERVICES.map(({ title, tag, text, points }, i) => (
            <li key={title} className="services__item">
              <span className="services__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="services__body">
                <h3 className="services__title">
                  {title}
                  {tag && <span className="services__tag">{tag}</span>}
                </h3>
                <p className="services__text">{text}</p>
                <ul className="services__points">
                  {points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
