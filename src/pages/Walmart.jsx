import React from 'react'
import banner from "../assets/images/background.png"
import { Banner, Benefit, ShopAbout } from '../components/Banner'
import OurProcess from '../components/OurProcess '
import PricingPlans from '../components/PricingPlans'
import FullServiceSection from '../components/FullServiceSection'
import SuccessStories from '../components/SuccessStories'
import ScheduleConsultation from '../components/ScheduleConsultation'
import Testimonials from '../components/Testimonials'
const Walmart = () => {
    return (
        <div>
            <Banner image={banner} title={"Walmart Marketplace"} />


            <section className="bg-white text-gray-800 px-4 py-10 md:py-20">
                {/* Top Section */}
                <ShopAbout image="" data={{
                    title: " Walmart Marketplace Services",
                    description1: "Walmart is becoming a serious player in the e-commerce world, and getting in early can be a big win. But navigating the approval process, policies, and backend tools can feel like learning a new language. We simplify the process.",
                    description2: " We help you get approved, list products properly, manage your pricing, and run ads that make sense. The best part? It’s still less competitive than Amazon — which means a better shot at visibility and sales.."
                }} />

                {/* Benefits Section */}
                <Benefit main={"Benefits of launching Walmart Marketplace Services with EcomScaled"} data={[{
                    title: "A compliant and fully set up Walmart store",
                    description: "We ensure your Walmart store is set up correctly, following all compliance standards so you can start selling without delays."
                }, {
                    title: "SEO-optimized listings with strategic pricing",
                    description: "Product listings are fully optimized with high-ranking keywords and competitive pricing strategies to boost visibility and conversions."
                }, {
                    title: "Insights and reporting to track sales",
                    description: "Stay informed with clear, actionable reports that help you monitor performance and make smarter business decisions."
                }, {
                    title: "Competitive analysis for product positioning",
                    description: "We analyze top competitors to position your products effectively, giving you a strong edge in a crowded marketplace."
                }]} />

            </section>
            <OurProcess process={{
                step1: " Listing Optimization (SEO, Titles, Descriptions)",
                step2: "Repricing Tools & Strategy",
                step3: "Advertising Campaigns & Promotion Setup",
                step4: "Account Approval & Seller Onboarding",
                step5: "Product Categorization & Listing Setup",
                step6: "Performance Tracking & Ongoing Improvements",
            }} />
            <PricingPlans />
            <FullServiceSection />
            <SuccessStories />
            <ScheduleConsultation />
            <Testimonials />
        </div>
    )
}

export default Walmart