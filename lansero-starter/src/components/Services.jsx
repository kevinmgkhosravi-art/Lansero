import './Services.css'

const SERVICES = [
  {
    title: 'Skräddarsydd hemsida',
    text: 'Vi designar och bygger din hemsida från grunden, utifrån ditt varumärke och dina kunder. Inga mallar, ingen sida som ser ut som alla andra.',
    points: ['Egen design', 'Anpassad för mobil', 'Snabb laddning', 'Kontaktformulär'],
  },
  {
    title: 'SEO och synlighet',
    text: 'En snygg sida hjälper inte om ingen hittar den. Vi bygger sidan så att Google förstår den och ser till att du syns när folk söker efter det du erbjuder.',
    points: ['Teknisk SEO', 'Sidtitlar och beskrivningar', 'Google Search Console', 'Lokal synlighet'],
  },
  {
    title: 'E-handel',
    text: 'Vill du sälja på nätet bygger vi en webbutik där kunderna enkelt hittar rätt produkt och kan betala direkt.',
    points: ['Produktsidor', 'Betalning', 'Frakt', 'Orderhantering'],
  },
  {
    title: 'Hosting och domän',
    tag: 'Tillval',
    text: 'Vi kan sköta det tekniska åt dig, så att sidan ligger uppe och är säker. Har du redan ett webbhotell går det lika bra att lägga sidan där.',
    points: ['Hosting', 'Domän', 'SSL-certifikat'],
  },
  {
    title: 'Underhåll och support',
    tag: 'Tillval',
    text: 'Vi finns kvar efter lanseringen. Behöver du ändra något, lägga till en sida eller få hjälp när något krånglar är det bara att höra av dig.',
    points: ['Uppdateringar', 'Ändringar', 'Hjälp när något krånglar'],
  },
]

export default function Services() {
  return (
    <section id="tjanster" className="section services">
      <div className="container services__layout">
        <div className="services__intro">
          <p className="section-label">Tjänster</p>
          <h2 className="services__heading">Allt för att din hemsida ska fungera och synas</h2>
          <p className="services__lead">
            Varje hemsida vi gör är skräddarsydd. Du väljer själv vad du
            behöver: bara hemsidan, eller hela vägen med SEO, hosting och
            support efteråt.
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
