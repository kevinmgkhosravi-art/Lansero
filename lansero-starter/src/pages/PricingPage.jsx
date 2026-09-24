import Pricing from '../components/Pricing'
import ClosingCta from '../components/ClosingCta'
import useSeo from '../useSeo'

export default function PricingPage() {
  useSeo('/pris')

  return (
    <>
      <Pricing />
      <ClosingCta />
    </>
  )
}
