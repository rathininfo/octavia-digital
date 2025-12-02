
import FAQSection from '@/components/pricing/FAQSection/FAQSection'
import GetStartedSection from '@/components/pricing/GetStartedSection/GetStartedSection'
import PricingHero from '@/components/pricing/PricingHero/PricingHero'
import PricingSection from '@/components/pricing/PricingSection/PricingSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <PricingHero></PricingHero>
      <PricingSection></PricingSection>
      <FAQSection></FAQSection>
    <GetStartedSection></GetStartedSection>
    </div>
  )
}
