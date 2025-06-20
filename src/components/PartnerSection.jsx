import React from "react";
import Marquee from "react-fast-marquee";
import { assets, companies } from "../assets/config";

export default function PartnerSection() {
  return (
    <div className="w-full pt-1">
      {/* Infinite Logo Slider */}
      <Marquee gradient={false} speed={50}>
        {companies.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="partner"
            className="h-28 object-contain"
          />
        ))}
      </Marquee>

      {/* Main Section */}
      <div className="w-full mx-auto bg-gray-50 flex flex-col md:flex-row items-center mt-12 px-4 gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.about}
            alt="happy woman"
            className="max-w-sm"
          />
        </div>

        {/* Text Content */}
        <div className="w-full font-['Roboto'] md:w-1/2 py-3">
          <h2 className="text-3xl font-black">Why Work With Us</h2>
          <p className="text-lg font-semibold  mb-2">
            Your growth deserves more than a template.
          </p>
          <p className="text-sm text-gray-600 mb-5">
            At EcommerceXL, we blend strategic thinking with hands-on expertise to deliver customized ecommerce solutions.
          </p>

          {/* Checklist */}
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "We know the backend of every major platform",
              "No cookie-cutter playbooks — everything’s customized",
              "Transparent communication, always",
              "A lean team with deep expertise",
              "Built to support brands at every growth stage",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <img src={assets.checkbox} alt="" />
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Get Started</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Get A Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}
