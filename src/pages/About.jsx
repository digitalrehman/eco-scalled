import React from 'react';
import { assets } from '../assets/config';
import { ChevronRight } from 'lucide-react';

const About = () => {
    let aboutCard = [
        {
            title: "We Commit",
            description: "Our team of specialists is committed to producing the best results in order to make your product a success.",
            image: ""
        }, {
            title: "We Research",
            description: "Our experts know how important market research is. No work is done without extensive research of market trends.",
            image: ""
        }, {
            title: "We Deliver",
            description: "The quality of our work and your time are both of tremendous importance to us. We deliver the best results promptly!",
            image: ""
        }
    ]
    return (
        <div>
            {/* Hero Section */}
            <div className='h-[80vh] flex flex-col items-center justify-center relative w-full'>
                <img src={assets.background} alt="about image" className='w-full h-full -z-10 absolute top-0 object-cover' />
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold font-['Roboto'] text-center text-white">About <br /><span className='lg:text-7xl md:text-5xl sm:text-4xl text-3xl'>Ecomscaled</span></h1>
                <p className='text-white text-center mt-5'>
                    Our work is to make sure that we exceed your expectations <br /> and add value to your brand.
                </p>
            </div>

            {/* About Us Section */}
            <section className="bg-white text-black py-12 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-10">
                        {/* Text Content */}
                        <div className="flex-1  font-['Poppins']">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
                            <p className="text-gray-900 mb-4 leading-relaxed">
                                We started Ecomscaled with one goal — to make growth in e-commerce less messy. We’ve
                                worked behind the scenes with small brands and scaling stores alike, and one thing’s
                                clear: success happens when tech, timing, and creativity work together.
                            </p>
                            <p className="text-gray-900 leading-relaxed">
                                We’re not just service providers. We’re partners who care about where your brand is
                                going. Whether you’re stuck at the setup phase or trying to break into new platforms,
                                our job is to make the process clearer, faster, and easier for you.
                            </p>
                        </div>

                        {/* Image Box */}
                        <div className="flex-1  relative hidden lg:block">
                            <div className="w-2/3 mx-auto h-64 bg-[#ddd3d1] shadow-xl border-t-4 border-r-4 border-gray-400"></div>
                        </div>
                    </div>

                    {/* Bottom Cards */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#3e3e3e] h-44 text-white p-6 rounded-lg">
                        {/* Card */}
                        {
                            aboutCard.map((item, index) => (
                                <div key={index} className="flex flex-col font-['Poppins'] text-left ml-10">
                                    <div className="size-24 -mt-16 bg-gray-200 rounded-full mb-4"></div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-xs text-gray-300">
                                        {item.description}
                                    </p>
                                </div>

                            ))
                        }

                    </div>
                </div>
            </section>

            {/* Core Values & What Makes Us Different Section */}
            <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto space-y-20">
                    {/* Core Values Section */}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                        <div className="flex-1 hidden lg:block">
                            <div className="w-2/3 mx-auto h-80 bg-[#ddd3d1] shadow-xl border-l-4 border-b-4 border-gray-400"></div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-['Roboto'] font-black mb-4">Core Values</h2>
                            <ul className="text-gray-800 space-y-3 font-['Poppins']">
                                <li className='flex flex-col text-sm'>
                                    <span className="font-bold text-base">Transparency:</span> No fine print, no empty buzzwords.
                                </li>
                                <li className='flex flex-col text-sm'>
                                    <span className="font-bold text-base flex gap-1 items-center">Execution <ChevronRight size={18} /> Excuses:</span> We get things done.
                                </li>
                                <li className='flex flex-col text-sm'>
                                    <span className="font-bold text-base">Clarity:</span> You’ll always know what’s working and why.
                                </li>
                                <li className='flex flex-col text-sm'>
                                    <span className="font-bold text-base">Growth Mindset:</span> We don’t just follow trends — we build with intent.
                                </li>
                                <li className='flex flex-col text-sm'>
                                    <span className="font-bold text-base">People First:</span> Relationships matter more than algorithms.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* What Makes Us Different Section */}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-['Roboto'] font-black mb-4">What Makes Us Different</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We take time to understand your business. We don’t just throw ads and apps at the
                                problem — we offer solutions that fit. Our services are collaborative, strategic, and
                                focused on long-term results. We treat your brand like it’s our own.
                            </p>
                        </div>
                        <div className="flex-1 hidden lg:block">
                            <div className="w-2/3 mx-auto h-80 bg-[#ddd3d1] shadow-xl border-t-4 border-r-4 border-gray-400"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
