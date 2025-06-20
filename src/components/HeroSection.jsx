import { Link } from "react-router-dom";
import { assets, services_image } from "../assets/config";
import { Star } from "lucide-react";

const Hero = () => {
  let services = [
    {
      title: "Amazon FBA Automation",
      icon: services_image.amazon_1,
      path: "/amazon",
    },{
      title: "Walmart Automation",
      icon: services_image.walmart_1,
      path: "/walmart",
    },{
      title: "Shopify Dropshipping Automation",
      icon: services_image.shopify_1,
      path: "/shopify",
    },{
      title: "Tiktok Shop Automation",
      icon: services_image.tiktok_1,
      path: "/tiktok",
    }
  ]
  return (
    <section className="background text-white py-10 px-4 md:px-12 lg:px-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="lg:w-[60%]">
          <div className=" flex  items-center gap-2 text-white mb-4">
           <span className="text-2xl font-semibold "> Excellent</span> <span className="ml-2 flex align-middle gap-1.5"><img src={assets.star} className="w-24"  /></span> <span className="text-sm">Trustpilot</span>
          </div>
          <h1 className="text-3xl font-['Poppins'] md:text-4xl lg:text-5xl font-bold leading-tight">
            Built to Scale. Backed by Strategy.
          </h1>
          <p className="text-gray-300 text-sm font-['Poppins'] mt-3 mb-6">
            From Amazon listings to TikTok Shops — we help brands grow smarter, not harder.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap font-['Afacad'] gap-4">
            {
              services.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className="flex items-center gap-3 bg-white  pl-2 pr-3 py-1.5  rounded-full shadow-md hover:scale-105 transition"
            >
              <img src={service.icon} alt="Amazon" className="rounded-full size-8" />
              <span className="text-[#00ADEE] text-lg font-semibold">{service.title}</span>
            </Link>

              ))
            }
           
          </div>

          <p className="mt-6 text-sm text-white font-['Poppins']">
            Ecomscaled is your e-commerce partner for everything from store setup to
            marketplace expansion. We work with ambitious brands to streamline their
            backend and scale their sales across platforms like Amazon, Shopify, Walmart,
            and TikTok.
          </p>
        </div>

        {/* Right Side Images */}
        <div className="lg:w-[40%] relative min-h-[400px] w-full ">
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
