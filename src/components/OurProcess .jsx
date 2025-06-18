import React from "react";


const OurProcess = ({process}) => {
    const processSteps = [
        process.step1,
        process.step2,
        process.step3,
        process.step4,
        process.step5,
        process.step6  
    ];
  return (
    <section className="bg-white px-4 py-16 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Our process</h2>

        {/* Step flow */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative w-40 h-40 rounded-full flex items-center justify-center text-center p-4 shadow-lg text-sm font-medium text-gray-700
                bg-white z-10
                ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-blue-400 to-purple-500"
                    : "bg-gradient-to-br from-yellow-400 to-red-400"
                }
              `}
            >
              <div className="bg-white w-36 h-36 rounded-full flex items-center justify-center p-4 shadow-inner text-xs md:text-sm">
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">
            Ready To Launch
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
