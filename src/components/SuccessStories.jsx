import React from "react";
import { assets } from "../assets/config";

const SuccessStories = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Success <span className="text-[#0065B1]">Stories</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Our ecommerce success stories speak for themselves! Multiple
            businesses and social platforms have benefitted greatly by making use
            of our quality e-commerce expertise to be able to gauge maximum
            profit margins as well as a greater customer base.
          </p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#0065B1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#004d89] transition duration-300">
              Get Started
            </button>
            <button className="border border-[#0065B1] text-[#0065B1] px-6 py-2 rounded-full font-medium hover:bg-[#0065B1] hover:text-white transition duration-300">
              Get A Quote
            </button>
          </div>
        </div>

        {/* Right Image Carousel*/} 
            <img
              src={assets.mobile}
              alt="Story 1"
              className="w-full h-auto rounded-lg"
            />
      </div>
    </section>
  );
};

export default SuccessStories;
