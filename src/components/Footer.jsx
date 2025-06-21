import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import { assets, services_image } from "../assets/config";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white px-4 md:px-20 pt-10 text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto border-b border-white/10 pb-10 flex flex-col md:flex-row gap-10">
        {/* Left Column */}
        <div className="space-y-4 md:w-1/3">
          <img src={assets.logo} alt="ECOMSCALED" className="w-44" />
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="flex items-start gap-2 text-white font-semibold">
            <img src={assets.phone} alt="address" className="w-5 h-5 mt-1" />
            Maxuel Street, Frankfurt 2589 Germany.
          </p>
        </div>

        {/* Middle Navigation Columns */}
        <div className="flex flex-wrap gap-8 justify-between md:w-2/3">
          <div className="space-y-2 min-w-[140px]">
            <p className="font-semibold flex items-center gap-1">
              <img src={assets.right_up} alt="" /> Recent Work
            </p>
            <p className="font-semibold flex items-center gap-1">
              <img src={assets.right_up} alt="" /> Free Consultation
            </p>
            <p className="font-semibold flex items-center gap-1">
              <img src={assets.right_up} alt="" /> About us
            </p>
            <p className="font-semibold flex items-center gap-1">
              <img src={assets.right_up} alt="" /> All Services
            </p>
          </div>

          <div className="space-y-2 min-w-[140px] w-full sm:w-auto">
            <button className="w-full bg-[#0065B1] py-2 rounded flex items-center justify-center gap-2">
              <Facebook className="w-4 h-4" /> FACEBOOK
            </button>
            <button className="w-full bg-[#0065B1] py-2 rounded flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4" /> INSTAGRAM
            </button>
            <button className="w-full bg-[#0065B1] py-2 rounded flex items-center justify-center gap-2">
              <Facebook className="w-4 h-4" /> FACEBOOK
            </button>
          </div>

          <div className="space-y-2 min-w-[140px]">
            <p className="font-semibold flex items-center gap-1">
              <img src={assets.right_up} alt="" /> Amazon
            </p>
            <p className="font-semibold flex items-center gap-1">
              <img src={assets.right_up} alt="" /> Tiktok Shop
            </p>
            <p className="font-semibold flex items-center gap-1">
              <img src={assets.right_up} alt="" /> Walmart
            </p>
            <p className="font-semibold flex items-center gap-1">
              <img src={assets.right_up} alt="" /> Shopify
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Newsletter */}
        <div className="flex w-full md:w-1/3 items-center bg-white rounded overflow-hidden">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-2 text-black w-full placeholder:text-gray-400"
          />
          <button className="bg-[#0065B1] text-white px-4 py-2 whitespace-nowrap">
            Subscribe
          </button>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-4 md:justify-center">
          <img src={services_image.amazon} alt="Amazon" className="h-14 w-20" />
          <img src={services_image.shopify} alt="Shopify" className="h-14 w-20" />
          <img src={services_image.tiktok} alt="Tiktok" className="h-14 w-20" />
          <img src={services_image.walmart} alt="Walmart" className="h-14 w-20" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end gap-2 text-sm">
          <p className="flex items-center gap-2">
            <Phone className="text-[#0065B1] w-4 h-4" /> (021) 666 888 0000
          </p>
          <p className="flex items-center gap-2">
            <Mail className="text-[#0065B1] w-4 h-4" /> info@ecomscaled.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 py-6 text-xs">
        © <span className="text-[#0065B1]">Ecomscaled.</span> All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
