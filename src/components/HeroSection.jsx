import { Link } from "react-router-dom";
import { assets, services_image } from "../assets/config";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="background text-white py-10 px-4 md:px-12 lg:px-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <p className="text-sm flex items-center gap-3 text-green-400 font-semibold mb-1">
            Excellent <span className="ml-2 flex align-middle gap-1.5">{Array(5).fill("").map((_,index)=>(<Star size={18} key={index} />))}</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Built to Scale. Backed by Strategy.
          </h1>
          <p className="text-gray-300 mt-3 mb-6">
            From Amazon listings to TikTok Shops — we help brands grow smarter, not harder.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/amazon"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
            >
              <img src={services_image.amazon_1} alt="Amazon" className="rounded-full w-8 h-8" />
              <span className="text-blue-600 font-semibold">Amazon FBA Automation</span>
            </Link>
            <Link
              to="/walmart"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
            >
              <img src={services_image.walmart_1} alt="Walmart" className="rounded-full w-8 h-8" />
              <span className="text-blue-600 font-semibold text-sm">Walmart Automation</span>
            </Link>
            <Link
              to="/shopify"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
            >
              <img src={services_image.shopify_1} alt="Shopify" className="w-8 rounded-full h-8" />
              <span className="text-blue-600 font-semibold text-sm">Shopify Dropshipping Automation</span>
            </Link>
            <Link
              to="/tiktok"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
            >
              <img src={services_image.tiktok_1} alt="TikTok" className="w-8 rounded-full h-8" />
              <span className="text-blue-600 font-semibold text-sm">Tiktok Shop Automation</span>
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Ecomscaled is your e-commerce partner for everything from store setup to
            marketplace expansion. We work with ambitious brands to streamline their
            backend and scale their sales across platforms like Amazon, Shopify, Walmart,
            and TikTok.
          </p>
        </div>

        {/* Right Side Images */}
        <div className="lg:w-1/2 relative min-h-[400px] w-full ">
          <img src={assets.banner} alt="Main" className="absolute md:right-10 right-1/3 bottom-0 w-60 lg:w-80 z-10" />
          <img src={assets.hero_walmart} alt="Walmart" className="absolute top-10 right-40 w-36" />
          <img src={assets.hero_tiktok} alt="TikTok" className="absolute top-30 md:right-0 left-30 w-36" />
          <img src={assets.hero_shopify} alt="Shopify" className="absolute bottom-10 md:-right-10 left-16 w-28" />
          <img src={assets.hero_amazon} alt="Amazon Card" className="absolute bottom-20 md:right-40 right-20 w-40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
