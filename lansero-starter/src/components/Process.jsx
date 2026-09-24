import './Process.css'

const STEPS = [
  {
    title: 'Vi pratar',
    text: 'Du berättar om ditt företag, dina kunder och vad sidan ska göra. Du förbinder dig inte till något.',
  },
  {
    title: 'Förslag och pris',
    text: 'Du får en offert med vad som ingår, vad det kostar och när det blir klart. Vi börjar inte förrän du har sagt ja.',
  },
  {
    title: 'Design',
    text: 'Vi tar fram hur sidan ska se ut. Du ser den innan något byggs och säger vad du vill ändra.',
  },
  {
    title: 'Bygge',
    text: 'Vi bygger sidan, gör den snabb och ser till att den fungerar i mobilen och syns på Google.',
  },
  {
    title: 'Lansering',
    text: 'När du har godkänt allt går sidan live. Vill du kan vi sköta hosting och hjälpa dig med ändringar efteråt.',
  },
]

export default function Process() {
  return (
    <section id="sa-gar-det-till" className="section process">
      <div className="container">
        <p className="section-label">Så går det till</p>
        <h2 className="process__heading">Från första samtalet till färdig sida</h2>

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
