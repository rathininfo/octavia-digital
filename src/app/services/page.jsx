import HowItWorks from '@/components/HowItWorks/HowItWorks'
import OurServices from '@/components/ourServices/OurServices'
import ServiceHero from '@/components/serviceHero/ServiceHero'
import StartJourney from '@/components/StartJourney/StartJourney'
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
