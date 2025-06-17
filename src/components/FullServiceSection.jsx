import React from "react";
import { assets } from "../assets/config";

// Example SVG icon for Amazon FBA Automation (replace with your own if needed)
const ServiceIcon = () => (
  <svg className="w-12 h-12 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="8" width="18" height="8" rx="2" />
    <path d="M7 8V6a5 5 0 0110 0v2" />
  </svg>
);

const navTabs = [
  "Amazon Account & Listing Management",
  "TikTok Shop Setup & Automation",
  "Walmart Marketplace Launch & Growth",
  "Shopify Store Design & Optimization",
  "Paid Ads & Ecommerce Marketing",
];

const services = Array(8).fill({
  title: "Amazon FBA Automation",
  description: "Streamline your operations and scale your business with automated solutions.",
});

export default function FullServiceSection() {
  return (
    <div className="min-h-screen bg-white  border-blue-400 rounded-lg p-4 md:p-10">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        We Provide Full Range Services
      </h2>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
        {navTabs.map((tab, idx) => (
          <span
            key={tab}
            className={`cursor-pointer ${
              idx === 0
                ? "text-blue-500 underline font-medium"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {services.map((service, idx) => (
        <div
        key={idx}
        className="group bg-white hover:bg-[#0065B1] duration-300 hover:text-white rounded-xl shadow border border-gray-200 p-6 flex flex-col items-center text-center"
      >
        <img
          src={assets.automation}
          className="w-16 mb-2 transition mr-auto duration-300 group-hover:brightness-0 group-hover:invert"
        />
        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
        <p className="text-sm">{service.description}</p>
      </div>
      
       
        ))}
      </div>

      {/* Contact Us Button */}
      <div className="flex justify-center">
        <button className="px-8 py-2 bg-blue-500 text-white rounded-full font-medium shadow hover:bg-blue-600 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}
