import React from 'react'
import banner from "../assets/images/background.png"
import { Banner, Benefit, ShopAbout } from '../components/Banner'
import OurProcess from '../components/OurProcess '
import PricingPlans from '../components/PricingPlans'
import FullServiceSection from '../components/FullServiceSection'
import SuccessStories from '../components/SuccessStories'
import ScheduleConsultation from '../components/ScheduleConsultation'
import Testimonials from '../components/Testimonials'
const Amazon = () => {
    return (
        <div>
            <Banner image={banner} title={"Amazon Brand Management"} />
            <section className="bg-white text-black font-['Poppins'] px-4 py-10 md:py-20">

                <ShopAbout image="" data={{
                    title: "Amazon Brand Management",
                    description1: "Selling on Amazon goes way beyond uploading a few product images and writing a description. It’s about understanding the algorithm, optimizing every touchpoint, and building a brand that stands out in a sea of sellers. That’s exactly what we help you do.",
                    description2: "We take care of your listings, visuals, ads, FBA logistics, and customer reviews — and we keep you in the loop with clear updates and data. Whether you’re a first-time seller or trying to take your store to the next level, we work with you to build something sustainable and scalable."
                }} />

                {/* Benefits Section */}
                <Benefit main={"Benefits of launching amazon Account & ListingManagement Services with EcomScaled"} data={[{
                    title: "A fully optimized Amazon storefront",
                    description: "We design your storefront to reflect your brand and boost customer trust, leading to higher engagement and sales."
                }, {
                    title: "High-converting product pages",
                    description: "Each product page is crafted with compelling copy, optimized images, and strategic SEO to drive conversions."
                }, {
                    title: "Strategic advertising campaigns",
                    description: "From Sponsored Ads to DSP, we manage data-driven campaigns that deliver measurable ROI and scalable growth."
                }, {
                    title: "Inventory and fulfillment support",
                    description: "Never go out of stock or overspend. We streamline your inventory and fulfillment to match demand and reduce waste."
                }]} />
            </section>
            <OurProcess process={{
                step1: "Listing Optimization (Title, Bullets, Backend SEO)",
                step2: "A+ Content & Brand Store Design",
                step3: "PPC Campaign Setup & Management",
                step4: "Product & Market Research",
                step5: " Keyword & Competitor Analysis",
                step6: "Review Strategy & Feedback Requests",
            }} />
            <PricingPlans />
            <FullServiceSection />
            <SuccessStories />
            <ScheduleConsultation />
            <Testimonials />
        </div>
    )
}

export default Amazon