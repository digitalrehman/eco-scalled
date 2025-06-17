import { Quote } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, Runs Enterprises",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
      style: "bg-white text-black",
    },
    {
      name: "Sarah Johnson",
      position: "ABC Corporation",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
      style: "bg-[#0065B1] text-white rotate-2",
    },
    {
      name: "Jennifer Lee",
      position: "MNO Corporation",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
      style: "bg-[#0065B1] text-white -rotate-2",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#004a91] to-[#0095dc] py-16 px-4 md:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-lg leading-tight">
          Hear people say <br /> and reveal our <span className="text-white">Advertising services</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 relative">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`max-w-sm w-full p-6 rounded shadow-md transform ${item.style}`}
            >
              <div className="flex items-center mb-4 gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-md">{item.name}</h4>
                  <p className="text-sm opacity-80">{item.position}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}

          {/* Quote icon */}
          <Quote className="text-5xl absolute top-0 right-0 text-white opacity-10" />
        </div>

        {/* Dots and Arrows */}
        <div className="flex justify-between items-center mt-10 px-4">
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`w-2 h-2 rounded-full ${dot === 0 ? "bg-white" : "bg-white/30"}`}
              ></span>
            ))}
          </div>
          <div className="space-x-2">
            <button className="w-8 h-8 rounded bg-white text-[#0065B1]">&#8249;</button>
            <button className="w-8 h-8 rounded bg-white text-[#0065B1]">&#8250;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
