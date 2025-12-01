import HowItWorks from '@/components/services/HowItWorks/HowItWorks'
import OurServices from '@/components/services/ourServices/OurServices'
import ServiceHero from '@/components/services/serviceHero/ServiceHero'
import StartJourney from '@/components/services/StartJourney/StartJourney'
import React from 'react'

export default function page() {
  return (
   <div className="pt-32 text-foreground">
      <ServiceHero></ServiceHero>
        <OurServices></OurServices>
      <HowItWorks></HowItWorks>
      <StartJourney></StartJourney>
    
    </div>
  )
}
