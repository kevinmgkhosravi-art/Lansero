import { Link } from 'react-router-dom'
import useSeo from '../useSeo'
import '../components/LegalPage.css'

export default function NotFoundPage() {
  useSeo('/404')

  return (
    <section className="section legal">
      <div className="container legal__inner">
        <p className="section-label">404</p>
        <h1 className="legal__title">Sidan finns inte</h1>
        <p className="legal__intro">
          Länken kan vara fel eller så har sidan flyttats.
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>
          Till startsidan
        </Link>
      </div>
    </section>
  )
}
