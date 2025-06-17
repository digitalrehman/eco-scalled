"use client"

import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"
import { assets, services_image } from "../assets/config"

export default function Component() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Left Section - Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
             
             <img src={assets.logo} alt="" />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <div className="flex items-start text-sm text-gray-400">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              <span>Marwal Street, Frankfurt 2349 Germany</span>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="text-orange-400 font-semibold mb-4">Recent Work</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Free Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All Services
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Platform Links */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex space-x-3 mb-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-orange-400 font-semibold mb-4">Amazon</div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  TikTok Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Walmart
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Shopify
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Logos and Contact */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Platform Logos */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">amazon</div>
                <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">Shopify</div>
              </div>

              {/* Product Images */}
              <div className="flex space-x-2 mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded overflow-hidden">
                  <img
                    src={services_image.tiktok_1}
                    alt="Product 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded overflow-hidden">
                  <img
                    src={services_image.shopify_1}
                    alt="Product 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-orange-400" />
                <span className="text-gray-400">(021) 658 888 0000</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-orange-400" />
                <span className="text-gray-400">info@ecomscaled.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Newsletter and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Newsletter */}
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-gray-900 px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">© ECOMSCALED All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
