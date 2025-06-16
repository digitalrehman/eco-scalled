// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { assets, services_image } from "../assets/config";

const services = [
    {
        title: "Amazon Brand Management",
        icon: services_image.amazon,
        small_icon: services_image.amazon_1,
        path: "/services/amazon",
    },
    {
        title: "Shopify Store Development",
        icon: services_image.shopify,
        small_icon: services_image.shopify_1,
        path: "/services/shopify",
    },
    {
        title: "Tiktok Shop Automation",
        icon: services_image.tiktok,
        small_icon: services_image.tiktok_1,
        path: "/services/tiktok",
    },
    {
        title: "Walmart Marketplace",
        icon: services_image.walmart,
        small_icon: services_image.walmart_1,
        path: "/services/walmart",
    },
    {
        title: "Ecommerce Marketing",
        icon: services_image.ecommerce,
        small_icon: services_image.ecommerce_1,
        path: "/services/marketing",
    },
];

const Navbar = () => {
    // At the top of your component:
    const [showServices, setShowServices] = useState(false);


    const [mobileMenu, setMobileMenu] = useState(false);
    const handleServiceToggle = () => {
        setShowServices(prev => !prev);
    };

    return (
        <nav className="bg-white shadow-md w-full z-20">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={assets.logo} alt="Logo" className="w-32" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/" className="hover:text-blue-600 font-medium">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-blue-600 font-medium">
                        About
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative">
                        <button
                            className="flex items-center gap-1 hover:text-blue-600 font-medium"
                            onClick={handleServiceToggle}
                        >
                            Services <ChevronDown className="mt-1" />
                        </button>

                        {showServices && (
                            <div className="absolute top-12 -left-120 bg-[#1E1E1E] text-white p-4 rounded-lg shadow-lg flex gap-4 z-50 w-max max-w-[95vw] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                                {services.map((service, index) => (
                                    <Link
                                        to={service.path}
                                        key={index}
                                        onClick={() => setShowServices(false)}
                                        className="flex flex-col items-center justify-center bg-[#0065B1] hover:bg-blue-600 transition-all p-3 rounded-md w-[120px] h-[130px] text-center"
                                    >
                                        <img src={service.icon} className="size-36 m rounded-lg mb-2" alt="icon" />
                                        <div className="flex items-center">
                                            <img src={service.small_icon} className="size-5 rounded-md " alt="icon" />
                                            <div className="w-0.5 h-5 bg-white mx-1"></div>
                                            <span className="text-[10px]  leading-tight">{service.title}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>


                    <Link
                        to="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white shadow-md">
                    <Link to="/" className="hover:text-blue-600">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-blue-600">
                        About
                    </Link>

                    {/* Click to toggle mobile services */}
                    <details className="text-blue-700">
                        <summary className="cursor-pointer text-lg font-medium">
                            Services
                        </summary>
                        <div className="pl-4 flex flex-col md:flex-row gap-2 mt-2">
                            {services.map((service, idx) => (
                                <Link
                                    to={service.path}
                                    key={idx}
                                    className="text-sm text-gray-700"
                                >
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                    </details>

                    <Link
                        to="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-full"
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
