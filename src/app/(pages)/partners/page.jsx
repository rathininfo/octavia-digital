import DistributionNetwork from '@/components/partners/DistributionNetwork/DistributionNetwork'
import PartnersHero from '@/components/partners/PartnersHero/PartnersHero'
import PartnershipBenefits from '@/components/partners/PartnershipBenefits/PartnershipBenefits'
import CTASection from '@/components/partners/StartDistributingCTA/CTASection'
import React from 'react'

export default function page() {
  return (
    <div className='mt-20'>
      <PartnersHero></PartnersHero>
    <DistributionNetwork></DistributionNetwork>
    <PartnershipBenefits></PartnershipBenefits>
    <CTASection></CTASection>
    </div>
  )
}
