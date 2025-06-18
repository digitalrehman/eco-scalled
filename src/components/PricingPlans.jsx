import React from "react";

const plans = [
  {
    title: "STARTER",
    subtitle: "Starter",
    desc: "For new sellers",
    details: "Up to 10 SKUs with basic ads and listing setup",
    color: "bg-blue-300",
  },
  {
    title: "GROWTH",
    subtitle: "Growth",
    desc: "For small-to-mid sellers",
    details: "Up to 50 SKUs A+ content, ads, and reports.",
    color: "bg-blue-400",
  },
  {
    title: "PREMIUM",
    subtitle: "Premium",
    desc: "For established brands",
    details: "Unlimited SKUs full account management and scaling strategy.",
    color: "bg-blue-600",
  },
];

const PricingPlans = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          Choose the right plan to <br className="hidden md:block" />
          scale your brand
        </h2>
        <p className="text-gray-600 mb-12">
          Whether you're launching, growing, or dominating the market — we have
          a package tailored for every stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg flex flex-col justify-between"
            >
              {/* Top Color Section */}
              <div
                className={`${plan.color} h-24 relative`}
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 80%, 0 100%)", // creates slight wave
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">
                    {plan.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-6 flex flex-col items-center text-center space-y-3">
                <h4 className="text-lg font-bold">{plan.subtitle}</h4>
                <p className="text-gray-600 text-sm">{plan.desc}</p>
                <p className="text-gray-600 text-sm">{plan.details}</p>

                {/* Button */}
                <button className="mt-4 bg-blue-500 text-white px-5 py-2 text-sm rounded-full hover:bg-blue-600 transition-all">
                  PURCHASE NOW
                </button>
              </div>

              {/* Bottom bar */}
              <div className="h-2 bg-blue-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
