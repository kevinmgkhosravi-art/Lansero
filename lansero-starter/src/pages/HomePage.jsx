import Hero from '../components/Hero'
import Overview from '../components/Overview'
import ClosingCta from '../components/ClosingCta'
import useSeo from '../useSeo'

export default function HomePage() {
  useSeo('/')

  return (
    <>
      <Hero />
      <div className="sheet">
        <Overview />
        <ClosingCta />
      </div>
    </>
  )
}
