import { User } from "lucide-react";
import React from "react";

const ScheduleConsultation = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Schedule A <span className="text-[#0065B1]">Free Consultation</span>
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Calendar View */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#0065B1] text-white p-6 w-full md:w-1/2">
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 flex items-center justify-center h-16 bg-white rounded-full mb-4">
                <User className="text-gray-400" size={35} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Meet with Ecomscaled
              </h3>
              <p className="text-sm text-center mb-4">June 2025</p>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                  <span className="font-medium" key={day}>{day}</span>
                ))}
                {Array.from({ length: 30 }, (_, i) => (
                  <span
                    key={i}
                    className={`py-1 rounded-full ${i === 1 ? "bg-white text-[#0065B1] font-bold" : "hover:bg-white hover:text-[#0065B1] cursor-pointer"}`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6 w-full md:w-1/2 bg-gray-50 border-l">
            <h4 className="text-sm font-semibold mb-3">Meeting duration</h4>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 inline-block text-xs rounded mb-4">
              30 min
            </div>
            <p className="text-sm mb-1">What time works best?</p>
            <p className="text-xs text-blue-700 mb-4">
              Showing times for June 2, 2025
            </p>
            <div className="text-xs text-gray-500 mb-2">
              UTC +05:00 Aqtau, Aqtobe, Ashgabat, Karachi...
            </div>
            <div className="h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {[
                "3:00 pm",
                "3:15 pm",
                "3:30 pm",
                "3:45 pm",
                "4:00 pm",
                "4:15 pm",
              ].map((time) => (
                <div
                  key={time}
                  className="py-1 px-2 hover:bg-blue-100 rounded cursor-pointer text-sm"
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6">Speak To An Expert</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your email address *"
              className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Contact number *"
              className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="border border-gray-300 px-4 py-2 rounded w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Service(s) You're Interested In*</option>
              <option>SEO</option>
              <option>Marketing</option>
              <option>Web Development</option>
            </select>
            <textarea
              placeholder="Additional Comments *"
              className="border border-gray-300 px-4 py-2 rounded w-full resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <p className="text-xs text-gray-500">
              If you opt-in to receive SMS communications from us, we will not
              share your phone number or related information with any external
              parties. Your SMS opt-in information is kept strictly confidential
              and used solely for the purpose of sending you the communications
              you have requested.
            </p>
            <button
              type="submit"
              className="bg-[#0065B1] text-white px-6 py-3 rounded-full font-medium hover:bg-[#004d89] transition duration-300"
            >
              Schedule A Free Consultation Now!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ScheduleConsultation;