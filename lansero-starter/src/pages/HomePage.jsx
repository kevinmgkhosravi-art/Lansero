import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import About from '../components/About'
import useSeo from '../useSeo'

export default function HomePage() {
  useSeo('/')

  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <About />
    </>
  )
}
