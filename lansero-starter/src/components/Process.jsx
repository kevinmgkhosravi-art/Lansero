import './Process.css'

const STEPS = [
  {
    title: 'Samtal',
    text: 'Du berättar om ditt företag och vad sidan ska uppnå. Samtalet är alltid kostnadsfritt och du binder dig inte till något.',
  },
  {
    title: 'Prisförslag',
    text: 'Du får ett pris och en tidsplan. Vi sätter igång först när du har sagt ja.',
  },
  {
    title: 'Design',
    text: 'Du ser hur sidan ska se ut innan vi bygger den, och vi jobbar med den tills du är nöjd.',
  },
  {
    title: 'Bygge',
    text: 'Vi bygger sidan för hand, gör den snabb och ser till att den fungerar i mobilen och syns på Google.',
  },
  {
    title: 'Lansering',
    text: 'Sidan går live när du är nöjd. Med hosting och support når du oss sedan dygnet runt, alla dagar.',
  },
]

export default function Process() {
  return (
    <section id="sa-gar-det-till" className="section section--soft process">
      <div className="container">
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
