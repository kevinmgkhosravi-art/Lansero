import Services from '../components/Services'
import Process from '../components/Process'
import ClosingCta from '../components/ClosingCta'
import useSeo from '../useSeo'

export default function ServicesPage() {
  useSeo('/tjanster')

  return (
    <>
      <Services />
      <Process />
      <ClosingCta />
    </>
  )
}
