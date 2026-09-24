import { LEGAL_UPDATED } from '../siteConfig'
import './LegalPage.css'

export default function LegalPage({ title, intro, children }) {
  return (
    <section className="section section--page-top legal">
      <div className="container legal__inner">
        <h1 className="legal__title">{title}</h1>
        <p className="legal__updated">Senast uppdaterad {LEGAL_UPDATED}</p>
        {intro && <p className="legal__intro">{intro}</p>}
        <div className="legal__body">{children}</div>
      </div>
    </section>
  )
}
