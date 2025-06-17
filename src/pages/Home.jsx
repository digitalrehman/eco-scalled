import React from 'react'
import HeroSection from '../components/HeroSection'
import PartnerSection from '../components/PartnerSection'
import IndustrySlider from '../components/IndustrySlider'
import FullServiceSection from '../components/FullServiceSection'
import work from "../assets/images/work.png"
import HowWeWorkTimeline from '../components/HowWeWorkTimeline'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <PartnerSection />
      <IndustrySlider />
      <FullServiceSection />
     <HowWeWorkTimeline />
    </div>
  )
}

export default Home