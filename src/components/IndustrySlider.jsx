import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/config";

const industries = [
  { title: "Fashion & Apparel", img: assets.image },
  { title: "Beauty & Skincare", img: assets.image1 },
  { title: "Health & Wellness", img: assets.image2 },
  { title: "Home & Living", img: assets.image3 },
  { title: "Electronics", img: assets.image1 },
  { title: "Fitness & Sports", img: assets.image2 },
];

export default function IndustrySlider() {
  const visibleCards = 4;
  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < industries.length - visibleCards) setIndex(index + 1);
  };

  return (
    <div className="py-10 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold my-4">
            Industries We Work With
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 text-blue-600" />
            </button>
            <button
              onClick={next}
              disabled={index >= industries.length - visibleCards}
              className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* For small screens: scrollable */}
          <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
            {industries.map((item, i) => (
              <div
                key={i}
                className="min-w-[75%] sm:min-w-[60%] flex-shrink-0"
              >
                <div className="rounded-md shadow hover:shadow-lg transition">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                  <div className="p-2 text-center font-medium text-sm">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* For md+ screens: slider with buttons */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 25}%)` }}
            >
              {industries.map((item, i) => (
                <div key={i} className="w-1/4 px-2 flex-shrink-0">
                  <div className="rounded-md shadow hover:shadow-lg transition">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-t-md"
                    />
                    <div className="p-2 text-center font-medium text-sm md:text-base">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
