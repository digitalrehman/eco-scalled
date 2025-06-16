// File: FullServiceTabs.jsx

import React, { useState } from "react";

const data = {
  "Amazon Account & Listing Management": [
    {
      title: "Amazon FBA Automation",
      desc: "Streamline your operations and scale your business with automated solutions.",
      icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
    },
    {
      title: "Listing Optimization",
      desc: "Improve product visibility and increase sales with optimized listings.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828774.png",
    },
    {
      title: "Inventory Management",
      desc: "Manage stock levels effectively and avoid overselling.",
      icon: "https://cdn-icons-png.flaticon.com/512/743/743007.png",
    },
    {
      title: "Account Health Monitoring",
      desc: "Keep your Amazon seller account in good standing at all times.",
      icon: "https://cdn-icons-png.flaticon.com/512/263/263115.png",
    },
  ],
  "TikTok Shop Setup & Automation": [
    {
      title: "Shop Creation",
      desc: "Setup your TikTok store with best practices and conversion optimization.",
      icon: "https://cdn-icons-png.flaticon.com/512/1384/1384031.png",
    },
    {
      title: "Automation Tools",
      desc: "Save time using advanced tools to automate repetitive tasks.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    },
    {
      title: "Product Syncing",
      desc: "Ensure your TikTok shop stays in sync with your main store.",
      icon: "https://cdn-icons-png.flaticon.com/512/7476/7476812.png",
    },
    {
      title: "Content Integration",
      desc: "Integrate viral content to boost product discoverability.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
  ],
  "Walmart Marketplace Launch & Growth": [
    {
      title: "Store Setup",
      desc: "Get started with Walmart Marketplace the right way.",
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      title: "Bulk Upload",
      desc: "Upload thousands of products efficiently.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png",
    },
    {
      title: "Walmart SEO",
      desc: "Optimize listings for Walmart's search algorithm.",
      icon: "https://cdn-icons-png.flaticon.com/512/1008/1008887.png",
    },
    {
      title: "Growth Strategy",
      desc: "Get tailored strategies to grow and scale your sales.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828867.png",
    },
  ],
  "Shopify Store Design & Optimization": [
    {
      title: "Custom Theme Design",
      desc: "Visually stunning and fast-loading Shopify stores.",
      icon: "https://cdn-icons-png.flaticon.com/512/1063/1063376.png",
    },
    {
      title: "Conversion Optimization",
      desc: "Maximize your store's conversion rate.",
      icon: "https://cdn-icons-png.flaticon.com/512/4204/4204616.png",
    },
    {
      title: "App Integration",
      desc: "Enhance functionality with Shopify apps.",
      icon: "https://cdn-icons-png.flaticon.com/512/545/545705.png",
    },
    {
      title: "Mobile Optimization",
      desc: "Ensure a seamless shopping experience on mobile.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828910.png",
    },
  ],
  "Paid Ads & E-commerce Marketing": [
    {
      title: "Facebook & IG Ads",
      desc: "Reach your audience with high-converting ads.",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
      title: "Google Shopping",
      desc: "Get listed on Google Shopping for maximum reach.",
      icon: "https://cdn-icons-png.flaticon.com/512/888/888870.png",
    },
    {
      title: "Email Marketing",
      desc: "Retain customers and increase sales via email.",
      icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    },
    {
      title: "Performance Reports",
      desc: "Track campaign performance in real time.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828833.png",
    },
  ],
};

const tabs = Object.keys(data);

export default function FullServiceSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We Provide Full Range Services
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 border-b-2 transition ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {data[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="shadow-xl cursor-pointer hover:scale-105 transition rounded-lg shadow-sm hover:shadow-md p-5 text-center transition"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mx-auto mb-3"
              />
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}
