import Categories from '@/components/learn/Categories/Categories'
import CommonQuestions from '@/components/learn/CommonQuestions/CommonQuestions'
import HelpCTA from '@/components/learn/HelpCTA/HelpCTA'
import LearnHero from '@/components/learn/LearnHero/LearnHero'
import React from 'react'


export default function page() {
  return (
    <div>
      <LearnHero></LearnHero>
      <Categories></Categories>
      <CommonQuestions></CommonQuestions>
      <HelpCTA></HelpCTA>
    </div>
  )
}
