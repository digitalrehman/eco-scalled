import React, { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    position: "CEO, Runs Enterprises",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    name: "Sarah Johnson",
    position: "ABC Corporation",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    name: "Jennifer Lee",
    position: "MNO Corporation",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    name: "Michael Brown",
    position: "XYZ Inc.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text:
      "Lorem Ipsum has been the industry standard dummy text since the 1500s. It has survived not only five centuries...",
  },
  {
    name: "Emily Davis",
    position: "Creative Studio",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    text:
      "A printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...",
  },
];

const Testimonials = () => {
  const [start, setStart] = useState(0);

  const visibleCount = 3;
  const visibleTestimonials = testimonials.slice(start, start + visibleCount);

  const nextSlide = () => {
    setStart((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStart((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-r from-[#004a91] to-[#0095dc] py-16 px-4 md:px-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-xl leading-tight">
          Hear people say <br /> and reveal our{" "}
          <span className="text-white">Advertising services</span>
        </h2>

        {/* Cards Section */}
        <div className="relative flex flex-col md:flex-row justify-center items-start gap-6 min-h-[400px] transition-all duration-500">
          {visibleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 w-full md:w-1/3 p-6 md:p-14 shadow-md z-30 ${
                idx === 0
                  ? "bg-white text-black"
                  : "bg-[#0065B1] text-white rotate-2 opacity-80"
              }`}
            >
              <div className="flex items-center mb-4 gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-14 object-cover rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-md">{item.name}</h4>
                  <p className="text-sm opacity-80">{item.position}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
          <Quote className="text-5xl absolute top-0 right-0 text-white opacity-10 hidden md:block" />
        </div>

        {/* Dots & Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 px-4 gap-4">
          <div className="flex space-x-1">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === start ? "bg-white" : "bg-white/30"
                }`}
              ></span>
            ))}
          </div>
          <div className="space-x-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded bg-white text-[#0065B1] font-bold"
            >
              &#8249;
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded bg-white text-[#0065B1] font-bold"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
