import React from 'react'
import HeroSection from '../components/HeroSection'
import PartnerSection from '../components/PartnerSection'
import IndustrySlider from '../components/IndustrySlider'
import FullServiceSection from '../components/FullServiceSection'
import work from "../assets/images/work.png"
const Home = () => {
  return (
    <div>
      <HeroSection />
      <PartnerSection />
      <IndustrySlider />
      <FullServiceSection />
      <img src={work} alt="" className='w-11/12 h-full mx-auto' />
    </div>
  )
}

export default Home