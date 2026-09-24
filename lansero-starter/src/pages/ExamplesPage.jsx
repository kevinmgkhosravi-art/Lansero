import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import DemoVideo from '../demos/DemoVideo'
import ClosingCta from '../components/ClosingCta'
import useSeo from '../useSeo'
import './ExamplesPage.css'

const EXAMPLES = [
  {
    to: '/exempel/gyllene-kupan',
    name: 'Gyllene Kupan',
    type: 'Webbutik för en bigård',
    text: 'Mörk, varm design kring honungen. Produkter med filter, kundvagn och fri frakt-mätare.',
    tags: ['E-handel', 'Kundvagn', 'Video'],
    video: '/demos/honung/hero.mp4',
    poster: '/demos/honung/hero.jpg',
  },
  {
    to: '/exempel/nordsax',
    name: 'Nordsax',
    type: 'Barbershop i Norrköping',
    text: 'Svart och mässing med prislista, team och en bokning där kunden väljer tjänst, barberare och tid.',
    tags: ['Onlinebokning', 'Prislista', 'Video'],
    video: '/demos/nordsax/hero.mp4',
    poster: '/demos/nordsax/hero.jpg',
  },
]

export default function ExamplesPage() {
  useSeo('/exempel')

  return (
    <>
      <section className="section section--page-top examples">
        <div className="container">
          <h1 className="page-title examples__heading">Exempel på vad vi bygger.</h1>
          <p className="page-lead examples__lead">
            Två demosidor för påhittade företag, byggda från grunden för att visa
            vad vi kan göra för ditt. Klicka in och testa dem på riktigt.
          </p>

          <ul className="examples__list">
            {EXAMPLES.map((e) => (
              <li key={e.to}>
                <Link to={e.to} className="examples__card">
                  <div className="examples__media">
                    <DemoVideo className="examples__video" src={e.video} poster={e.poster} />
                  </div>
                  <div className="examples__body">
                    <div className="examples__title-row">
                      <h2 className="examples__name">{e.name}</h2>
                      <ArrowUpRight className="examples__arrow" size={28} weight="bold" aria-hidden="true" />
                    </div>
                    <p className="examples__type">{e.type}</p>
                    <p className="examples__text">{e.text}</p>
                    <ul className="examples__tags">
                      {e.tags.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="examples__note">Företagen är påhittade och sidorna är demos. Vill du ha något liknande för ditt företag?</p>
        </div>
      </section>
      <ClosingCta />
    </>
  )
}
