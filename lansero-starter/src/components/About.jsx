import './About.css'

export default function About() {
  return (
    <section className="section section--page-top about">
      <div className="container about__layout">
        <div>
          <h1 className="page-title about__heading">Varje hemsida byggs för hand.</h1>
        </div>

        <div className="about__body">
          <p className="about__lead">
            Lansero är en webbyrå som skräddarsyr hemsidor efter varje kund. Vi
            utgår från ditt företag, dina kunder och vad sidan ska uppnå, och
            bygger därifrån. Inga färdiga mallar.
          </p>
          <p>
            Du bestämmer själv hur mycket vi ska ta hand om. Vissa vill bara ha
            en hemsida. Andra vill att vi också sköter drift och support, och
            når oss dygnet runt när något behöver ändras. Oavsett vilket
            vet du vad det kostar innan vi börjar, och vi är inte klara förrän
            du är nöjd.
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
        </div>
      </div>
    </section>
  )
}
