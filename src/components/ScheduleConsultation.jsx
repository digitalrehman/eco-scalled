import React, { useState, useEffect } from "react";

const ScheduleConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    comments: "",
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "3:00 pm",
    "3:15 pm",
    "3:30 pm",
    "3:45 pm",
    "4:00 pm",
    "4:15 pm",
    "4:30 pm",
    "4:45 pm",
    "5:00 pm",
  ];

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const startDay = startOfMonth.getDay();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedDate: selectedDate.toDateString(),
      selectedTime,
      ...formData,
    });
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-white font-sans">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left Calendar Section */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white shadow-md">
          <h2 className="text-3xl text-center font-['Roboto'] font-black  mb-7 px-6 pt-6">Schedule A Free Consultation</h2>
          <div className="flex flex-col md:flex-row">
            <div className="bg-[#0065B1] text-white w-full md:w-1/2 p-6 text-center">
              <div className="rounded-full bg-white w-16 h-16 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Meet with Ecomscaled</h3>
              <p className="mt-1 text-sm font-semibold">
                {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
              </p>
              <div className="grid grid-cols-7 gap-2 text-xs mt-4">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                  <div key={d} className="font-bold">{d}</div>
                ))}
                {Array(startDay).fill("").map((_, idx) => (
                  <div key={"empty" + idx}></div>
                ))}
                {Array(daysInMonth).fill("").map((_, i) => {
                  const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
                  const isSelected = selectedDate.toDateString() === dayDate.toDateString();
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(dayDate)}
                      className={`p-2 rounded-full transition-all ${
                        isSelected ? "bg-white text-[#0065B1] font-bold" : "hover:bg-white hover:text-[#0065B1]"
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6">
              <h4 className="font-semibold text-sm mb-2">Meeting duration</h4>
              <p className="text-sm text-gray-600 mb-1">30 mins</p>
              <p className="text-sm mt-4 font-semibold">What time works best?</p>
              <p className="text-xs text-gray-500">Showing times for {selectedDate.toDateString()}</p>
              <p className="text-xs text-gray-500 mb-2">UTC +05:00 Aqtau, Aqtobe, Ashgabat...</p>
              <div className="max-h-48 overflow-y-auto">
                {times.map((time, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTime(time)}
                    className={`block w-full  p-2 rounded-md text-gray-400 text-center border border-gray-200 my-1 transition ${
                      selectedTime === time ? "bg-[#0065B1] text-white font-semibold" : "hover:bg-blue-100"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 shadow-md p-6 bg-white space-y-4"
        >
          <h2 className="text-3xl text-center font-['Roboto'] font-black mb-4">Speak To An Expert</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-[#0065B1]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-[#0065B1]"
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number *"
            value={formData.contact}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-[#0065B1]"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-[#0065B1]"
            required
          >
            <option value="">Service(s) You're Interested In *</option>
            <option value="SEO">SEO</option>
            <option value="Marketing">Marketing</option>
            <option value="Development">Development</option>
          </select>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            placeholder="Additional Comments *"
            className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-[#0065B1]"
          ></textarea>

          <p className="text-xs text-gray-600">
            If you opt-in to receive SMS communications from us, we will not share your phone number or related information with any external parties.
          </p>

          <button
            type="submit"
            className="bg-[#0065B1] text-white font-bold px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Schedule A Free Consultation Now!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleConsultation;
