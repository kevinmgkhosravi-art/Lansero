import About from '../components/About'
import ClosingCta from '../components/ClosingCta'
import useSeo from '../useSeo'

export default function AboutPage() {
  useSeo('/om-oss')

  return (
    <>
      <About />
      <ClosingCta />
    </>
  )
}
