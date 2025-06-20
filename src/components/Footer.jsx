import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { assets, services_image } from "../assets/config";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white px-4 md:px-20 pt-10 text-sm ">
      <div className="max-w-7xl flex border-b border-white/10 pb-10">
        {/* Left Section */}
        <div className="space-y-4 col-span-1">
          <img src={assets.logo} alt="ECOMSCALED" className="w-44" />
          <p className="text-gray-400 max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <p className="flex items-center gap-2 text-white font-semibold">
           <img src={assets.phone} /> Maxuel Street, Frankfurt 2589 Germany.
          </p>
        </div>

        {/* Middle Navigation Columns */}
        <div className="flex-wrap flex mt-7 justify-around w-full">
          <div className="space-y-2">
            <p className="font-semibold flex items-center gap-1"><img src={assets.right_up} alt="" />Recent Work</p>
            <p className="font-semibold flex items-center gap-1"><img src={assets.right_up} alt="" />Free Consultation</p>
            <p className="font-semibold flex items-center gap-1"><img src={assets.right_up} alt="" />About us</p>
            <p className="font-semibold flex items-center gap-1"><img src={assets.right_up} alt="" />All Services</p>
          </div>
          <div className="space-y-1.5">
            <button className="w-full px-10 bg-[#0065B1] text-white py-2 rounded flex items-center justify-center gap-2">
              <Facebook className="w-4 h-4" /> FACEBOOK
            </button>
            <button className="w-full bg-[#0065B1] text-white py-2 rounded flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4" /> INSTAGRAM
            </button>
            <button className="w-full bg-[#0065B1] text-white py-2 rounded flex items-center justify-center gap-2">
              <Facebook className="w-4 h-4" /> FACEBOOK
            </button>
          </div>
          <div className="space-y-2">
            <p className="font-semibold flex items-center gap-1"><img src={assets.right_up} alt="" /> Amazon</p>
            <p className="font-semibold flex items-center gap-1"><img src={assets.right_up} alt="" /> Tiktok Shop</p>
            <p className="font-semibold flex items-center gap-1"><img src={assets.right_up} alt="" /> Walmart</p>
            <p className="font-semibold flex items-center gap-1"><img src={assets.right_up} alt="" /> Shopify</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Newsletter */}
        <div className="flex items-center bg-white rounded overflow-hidden max-w-md w-full">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-2 text-black placeholder:text-gray-400 w-full"
          />
          <button className="bg-[#0065B1] text-white px-4 py-2">Subscribe</button>
        </div>

        {/* Brand Logos */}
        <div className="flex justify-center gap-4">
          <img src={services_image.amazon} alt="Amazon" className="h-14 w-20" />
          <img src={services_image.shopify} alt="Shopify" className="h-14 w-20" />
          <img src={services_image.tiktok} alt="Tiktok" className="h-14 w-20" />
          <img src={services_image.walmart} alt="Walmart" className="h-14 w-20" />
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <p className="flex items-center gap-2">
            <Phone className="text-[#0065B1] w-4 h-4" /> ( 021 ) 666 888 0000
          </p>
          <p className="flex items-center gap-2">
            <Mail className="text-[#0065B1] w-4 h-4" /> info@ecomscaled.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 py-6 text-xs">
        © <span className="text-[#0065B1]">Ecomscaled.</span> All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
