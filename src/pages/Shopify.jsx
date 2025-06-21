import React from 'react'
import { Banner, Benefit, ShopAbout } from '../components/Banner'
import banner from "../assets/images/background.png"
import OurProcess from '../components/OurProcess '
import PricingPlans from '../components/PricingPlans'
import FullServiceSection from '../components/FullServiceSection'
import SuccessStories from '../components/SuccessStories'
import ScheduleConsultation from '../components/ScheduleConsultation'
import Testimonials from '../components/Testimonials'
const Shopify = () => {
  return (
    <div>
      <Banner image={banner} title={"Shopify Store Development"} />


      <section className="bg-white text-gray-800 px-4 py-10 md:py-20">

        {/* Top Section */}
        <ShopAbout image="" data={{
          title: "Shopify Store Development",
          description1: "Think of your Shopify store as your brand’s home online. It’s the one place where you control the full experience — so it better feel good, look sharp, and be ridiculously easy to shop.",
          description2: "We don’t just design your store; we make sure it performs. From navigation and UX to apps and optimization, we set you up for long-term success."
        }} />


        <Benefit main={"Benefits of launching Shopify Store Development with EcomScaled"} data={[{
          title: "A modern, mobile-friendly store",
          description: "Your store will look great and work flawlessly on every device, ensuring a smooth shopping experience for mobile users."
        }, {
          title: "Conversion-focused design with fast load times",
          description: "We design with purpose — clean layouts, clear CTAs, and lightning-fast performance to turn visitors into buyers."
        }, {
          title: "Full backend setup for easy management",
          description: "From product uploads to payment gateways, we handle the complete backend so you can manage your store with ease."
        }, {
          title: "Post-launch support if needed",
          description: "Even after launch, we’re here to help — offering support and guidance to keep your store running smoothly."
        }]} />
      </section>
      <OurProcess process={{
        step1: "Page-by-Page Design & Product Upload",
        step2: "App Integration (Reviews, Email, Analytics)",
        step3: "Checkout Flow & Payment Gateway Setup",
        step4: "Discovery & Brand Alignment",
        step5: "Wireframe and Theme Selection",
        step6: "Testing & Mobile Optimization",
      }} />
      <PricingPlans />
      <FullServiceSection />
      <SuccessStories />
      <ScheduleConsultation />
      <Testimonials />
    </div>
  )
}

export default Shopify