import React from 'react'
import banner from "../assets/images/background.png"
import Banner from '../components/Banner'
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

            <section className="bg-white text-gray-800 px-4 py-10 md:py-20">
                {/* Top Section */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-gray-400 h-60 md:h-80 w-full rounded-xl"></div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4">
                            Walmart Marketplace Services
                        </h2>
                        <p className="mb-4">
                            Walmart is becoming a serious player in the e-commerce world, and
                            getting in early can be a big win. But navigating the approval
                            process, policies, and backend tools can feel like learning a new
                            language. We simplify the process.
                        </p>
                        <p>
                            We help you get approved, list products properly, manage your
                            pricing, and run ads that make sense. The best part? It’s still less
                            competitive than Amazon — which means a better shot at visibility
                            and sales.
                        </p>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="max-w-6xl mx-auto mt-16 text-center">
                    <h3 className="text-lg md:text-2xl font-bold mb-10">
                        Benefits of launching Walmart Marketplace Services with EcomScaled
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base">
                        <div>
                            <h4 className="font-semibold mb-2">
                                A compliant and fully set up Walmart store
                            </h4>
                            <p>
                                We ensure your Walmart store is set up correctly, following all
                                compliance checkboxes so you can start selling without delays.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">
                                SEO-optimized listings with strategic pricing
                            </h4>
                            <p>
                                Product listings are fully optimized with keyword-rich content
                                strategies and competitively priced strategies to boost visibility
                                and conversions.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">
                                Insights and reporting to track sales
                            </h4>
                            <p>
                                Stay informed with clear, actionable reports that keep you
                                monitoring performance and make smarter business decisions.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">
                                Competitive analysis for product positioning
                            </h4>
                            <p>
                                We analyze your competitors to position your product effectively,
                                giving you a strong edge in a crowded marketplace.
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