import React, { useRef, useState, useCallback } from "react";
import { assets } from "../assets/config";

const SuccessStories = () => {
  const slides = [
    assets.slider1,
    assets.slider2,
    assets.slider1,
    assets.slider2,
    assets.slider1,
    assets.slider2,
    assets.slider1,
    assets.slider2,
    assets.slider1,
    assets.slider2,
  ];

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });

  const handleMouseDown = useCallback((e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setDragStart({
      x: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - dragStart.x) * 1.5;
      scrollRef.current.scrollLeft = dragStart.scrollLeft - walk;
    },
    [isDragging, dragStart]
  );

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-6">
              Success <span className="text-[#0065B1]">Stories</span>
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
              Our ecommerce success stories speak for themselves! Multiple businesses and social platforms have
              benefitted greatly by making use of our quality e‑commerce expertise to be able to gauge maximum profit
              margins as well as a greater customer base.
            </p>
            <p className="text-gray-700 mb-6 lg:mb-8 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#0065B1] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#004d89] transition duration-300 text-sm sm:text-base">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-[#0065B1] text-[#0065B1] px-6 py-2.5 rounded-full font-medium hover:bg-[#0065B1] hover:text-white transition duration-300 text-sm sm:text-base">
                Get A Quote
              </button>
            </div>
          </div>

          {/* Right Content - Mobile Frame */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[300px]">
              {/* Mobile Frame Container */}
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                {/* Screen Bezel */}
                <div className="bg-white rounded-[2rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-gray-100 h-6 flex items-center justify-between px-4 text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`flex overflow-x-auto scrollbar-hide h-[400px] sm:h-[450px] lg:h-[500px] ${
                      isDragging ? "cursor-grabbing" : "cursor-grab"
                    }`}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {slides.map((img, idx) => (
                      <div key={idx} className="flex-shrink-0 w-full">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Success Story ${idx + 1}`}
                          className="w-[90%] mx-auto h-full object-cover select-none"
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#0065B1] transition-colors duration-200 cursor-pointer"
                    onClick={() => {
                      if (scrollRef.current) {
                        scrollRef.current.scrollTo({
                          left: idx * scrollRef.current.clientWidth,
                          behavior: "smooth",
                        });
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
