import { PRICE_FROM, PRICE_MONTHLY } from '../siteConfig'
import './Services.css'

const SERVICES = [
  {
    title: 'Skräddarsydd hemsida',
    tag: `Från ${PRICE_FROM}`,
    text: 'Designad och byggd för hand, från första skiss till färdig sida. Inga färdiga mallar. Du betalar en gång och sidan är din.',
    points: ['Egen design', 'Anpassad för mobil', 'Snabb laddning', 'Kontaktformulär'],
  },
  {
    title: 'Hosting och support',
    tag: PRICE_MONTHLY,
    text: 'Vi sköter driften av din sida och du når oss dygnet runt, alla dagar. Behöver något fixas eller ändras löser vi det åt dig. Ingen bindningstid.',
    points: ['Hosting och domän', 'SSL-certifikat', 'Support dygnet runt', 'Ändringar ingår'],
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
]

export default function Services() {
  return (
    <section className="section section--page-top services">
      <div className="container services__layout">
        <div className="services__intro">
          <h1 className="page-title services__heading">Byggt för ditt företag. Inte för alla.</h1>
          <p className="page-lead services__lead">
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
                  {tag && <span className={tag === 'Tillval' ? 'services__tag' : 'services__tag services__tag--price'}>{tag}</span>}
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
