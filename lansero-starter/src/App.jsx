import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'
import ExamplesPage from './pages/ExamplesPage'
import HoneyDemo from './demos/honung/HoneyDemo'
import BarberDemo from './demos/nordsax/BarberDemo'
import { ROUTES } from './routes'

const PAGES = {
  '/': HomePage,
  '/tjanster': ServicesPage,
  '/pris': PricingPage,
  '/om-oss': AboutPage,
  '/exempel': ExamplesPage,
  '/exempel/gyllene-kupan': HoneyDemo,
  '/exempel/nordsax': BarberDemo,
  '/kontakt': ContactPage,
  '/integritetspolicy': PrivacyPage,
  '/villkor': TermsPage,
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isDemo = ROUTES.some((r) => r.demo && r.path === pathname)

  return (
    <div className="page">
      <ScrollManager />
      {!isDemo && <Navbar />}
      <main>
        <Routes>
          {ROUTES.map(({ path }) => {
            const Page = PAGES[path]
            return <Route key={path} path={path} element={<Page />} />
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isDemo && <Footer />}
    </div>
  )
}
