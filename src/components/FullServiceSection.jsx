import React from "react";
import { assets } from "../assets/config";

const services = Array(8).fill({
  title: "Amazon FBA Automation",
  description:
    "Streamline your operations and scale your business with automated solutions.",
});

export default function FullServiceSection() {
  return (
    <div className="min-h-screen bg-white rounded-lg p-4 md:p-10">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-6">
        We Provide Full Range Services
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
        <p className="font-semibold text-center text-[#0065B1]">
          Amazon Account & <br /> Listing Management
        </p>
        <p className="font-semibold text-center">TikTok Shop <br /> Setup & Automation</p>
        <p className="font-semibold text-center">Walmart Marketplace <br /> Launch & Growth</p>
        <p className="font-semibold text-center">Shopify Store <br /> Design & Optimization</p>
        <p className="font-semibold text-center">Paid Ads & <br /> Ecommerce Marketing</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="card-flip w-full h-64 relative rounded-xl overflow-hidden"
          >
            <div className="card-inner w-full h-full">
              <div className="card-front bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-start text-left">
                <img
                  src={assets.automation}
                  className="w-16 mb-2 transition-transform duration-500"
                  alt="icon"
                />
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
              <div className="card-back bg-[#0065B1] text-white rounded-xl p-6 flex flex-col justify-start text-left">
                <img
                  src={assets.automation}
                  className="w-16 mb-2 transition-transform duration-500 brightness-0 invert"
                  alt="icon"
                />
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-2 bg-[#0065B1] text-white rounded-full font-medium shadow hover:bg-blue-600 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}
