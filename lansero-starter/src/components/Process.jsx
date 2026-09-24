import './Process.css'

const STEPS = [
  {
    title: 'Samtal',
    text: 'Du berättar om ditt företag och vad sidan ska uppnå. Det är kostnadsfritt och du binder dig inte till något.',
  },
  {
    title: 'Prisförslag',
    text: 'Du får ett pris och en tidsplan. Vi sätter igång först när du har sagt ja.',
  },
  {
    title: 'Design',
    text: 'Du ser hur sidan ska se ut och säger vad du vill ändra, innan vi börjar bygga.',
  },
  {
    title: 'Bygge',
    text: 'Vi bygger sidan för hand, gör den snabb och ser till att den fungerar i mobilen och syns på Google.',
  },
  {
    title: 'Lansering',
    text: 'Sidan går live när du har godkänt den. Vill du kan vi sköta drift och ändringar efteråt.',
  },
]

export default function Process() {
  return (
    <section id="sa-gar-det-till" className="section process">
      <div className="container">
        <p className="section-label">Så går det till</p>
        <h2 className="process__heading">Från första samtal till färdig sida</h2>

        <ol className="process__steps">
          {STEPS.map(({ title, text }, i) => (
            <li key={title} className="process__step">
              <span className="process__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="process__title">{title}</h3>
              <p className="process__text">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
