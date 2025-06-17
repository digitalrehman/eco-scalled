import React from 'react'
import HeroSection from '../components/HeroSection'
import PartnerSection from '../components/PartnerSection'
import IndustrySlider from '../components/IndustrySlider'
import FullServiceSection from '../components/FullServiceSection'
import HowWeWorkTimeline from '../components/HowWeWorkTimeline'
import SuccessStories from '../components/SuccessStories'
import ScheduleConsultation from '../components/ScheduleConsultation'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <PartnerSection />
      <IndustrySlider />
      <FullServiceSection />
     <HowWeWorkTimeline />
     <SuccessStories />
     <ScheduleConsultation />
    </div>
  )
}

export default Home