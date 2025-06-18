import React from 'react'
import Banner from '../components/Banner'
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-400 h-60 md:h-80 w-full rounded-xl"></div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
          Shopify Store Development

          </h2>
          <p className="mb-4">
          Think of your Shopify store as your brand’s home online. It’s the one place where you control the full experience — so it better feel good, look sharp, and be ridiculously easy to shop.

          </p>
          <p>
          We don’t just design your store; we make sure it performs. From navigation and UX to apps and optimization, we set you up for long-term success.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h3 className="text-lg md:text-2xl font-bold mb-10">
        Benefits of launching Shopify Store Development
        with EcomScaled
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base">
          <div>
            <h4 className="font-semibold mb-2">
            A modern, mobile-friendly store

            </h4>
            <p>
            Your store will look great and work flawlessly on every device, ensuring a smooth shopping experience for mobile users.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
            Conversion-focused design with fast load times

            </h4>
            <p>
            We design with purpose — clean layouts, clear CTAs, and lightning-fast performance to turn visitors into buyers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
            Full backend setup for easy management
            </h4>
            <p>
            From product uploads to payment gateways, we handle the complete backend so you can manage your store with ease.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
            Post-launch support if needed
            </h4>
            <p>
            Even after launch, we’re here to help — offering support and guidance to keep your store running smoothly.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">
            Ready To Launch
          </button>
        </div>
      </div>
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