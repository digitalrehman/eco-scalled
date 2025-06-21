import React from 'react'
import banner from "../assets/images/background.png"
import { Banner, Benefit, ShopAbout } from '../components/Banner'
import Testimonials from '../components/Testimonials'
import ScheduleConsultation from '../components/ScheduleConsultation'
import SuccessStories from '../components/SuccessStories'
import FullServiceSection from '../components/FullServiceSection'
import PricingPlans from '../components/PricingPlans'
import OurProcess from '../components/OurProcess '


const TikTok = () => {
  return (
    <div>
      <Banner image={banner} title={"TikTok Automation"} />


      <section className="bg-white text-gray-800 px-4 py-10 md:py-20">
        {/* Top Section */}

        <ShopAbout image="" data={{
          title: "TikTok Shop Automation",
          description1: "TikTok Shop is where content meets commerce — and it's exploding. If you’ve got a product with visual appeal or trending potential, we can help you tap into TikTok’s massive user base without the stress of setting up or running it alone.",
          description2: "We’ll handle the store setup, connect you with creators, manage your orders, and track your performance — so you can stay focused on growing your brand."
        }} />

        {/* Benefits Section */}
        <Benefit main={"Benefits of launching TikTok Shop Automation Services with EcomScaled"} data={[{
          title: " A working TikTok Shop in days, not weeks",
          description: "We launch your TikTok Shop fast — fully set up and ready to sell within days, so you don’t miss out on trends."
        }, {
          title: "Ongoing creator management and video content support",
          description: "From finding the right creators to managing content, we handle it all to keep your brand active and engaging on TikTok."
        }, {
          title: "Order tracking and delivery integration",
          description: "Seamless integration with order tracking and delivery systems ensures a smooth shopping experience for your customers."
        }, {
          title: "Strategy to go viral and stay visible",
          description: "We craft data-backed content strategies to help your brand go viral and maintain visibility in TikTok’s fast-paced ecosystem."
        }]} />
      </section>
      <OurProcess process={{
        step1: "Creator Partnerships & Video Planning",
        step2: "Order Fulfillment & Backend Logistics",
        step3: "Campaign Monitoring & Retargeting",
        step4: "Product Selection & Trend Research",
        step5: "TikTok Shop Setup & Account Verification",
        step6: "Order Fulfillment & Backend Logistics",
      }} />
      <PricingPlans />
      <FullServiceSection />
      <SuccessStories />
      <ScheduleConsultation />
      <Testimonials />
    </div>
  )
}

export default TikTok