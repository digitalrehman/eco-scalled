"use client"

import { Search, PieChart, FileText, TrendingUp, BarChart3 } from "lucide-react"

export default function Component() {
  const steps = [
    {
      id: "01",
      title: "Discovery Session",
      description: "We learn about your business expectations and pain points you're experiencing.",
      icon: Search,
      color: "bg-teal-500",
      position: "top",
    },
    {
      id: "02",
      title: "Customized Solution",
      description: "Our specialists craft tailored solutions considering market trends and your business objectives.",
      icon: PieChart,
      color: "bg-slate-500",
      position: "bottom",
    },
    {
      id: "03",
      title: "Implementation Plan",
      description:
        "We provide a detailed road map, post-installation covering branding, milestones and resource allocation.",
      icon: FileText,
      color: "bg-gray-400",
      position: "top",
    },
    {
      id: "04",
      title: "Execution and Monitoring",
      description:
        "We work according to the plan laid out, continuously improving and adjusting to ensure maximum efficiency.",
      icon: TrendingUp,
      color: "bg-orange-500",
      position: "bottom",
    },
    {
      id: "05",
      title: "Data Collection & Analysis",
      description: "We're constantly gathering data to measure the results and course-correct if necessary.",
      icon: BarChart3,
      color: "bg-orange-600",
      position: "top",
    },
  ]

  return (
    <div className="w-full bg-gray-50 py-16 px-4 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900">That's How We Work</h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative mx-auto" style={{ width: "1200px", height: "500px" }}>
          {/* Step 01 - Top Left */}
          <div className="absolute top-0 left-0">
            <div className="relative group">
              {/* Circle with Icon */}
              <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                <Search className="w-10 h-10 text-teal-500" />
              </div>
              {/* Arrow Tab */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div
                    className="w-14 h-10 bg-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)" }}
                  >
                    01
                  </div>
                  <div className="absolute top-1/2 left-full w-16 h-1 bg-teal-500 transform -translate-y-1/2"></div>
                </div>
              </div>
              {/* Content Card */}
              <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-lg shadow-md p-4 z-10">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Discovery Session</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We learn about your business expectations and pain points you're experiencing.
                </p>
              </div>
            </div>
          </div>

          {/* Step 02 - Bottom Left */}
          <div className="absolute -bottom-10 left-60">
            <div className="relative group">
              {/* Circle with Icon */}
              <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                <PieChart className="w-10 h-10 text-slate-500" />
              </div>
              {/* Arrow Tab */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div
                    className="w-14 h-10 bg-slate-500 flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)" }}
                  >
                    02
                  </div>
                  <div className="absolute top-1/2 left-full w-16 h-1 bg-slate-500 transform -translate-y-1/2"></div>
                </div>
              </div>
              {/* Content Card */}
              <div className="absolute bottom-full left-0 mb-4 w-64 bg-white rounded-lg shadow-md p-4  z-10">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Customized Solution</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our specialists craft tailored solutions considering market trends and your business objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Step 03 - Top Center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-[40%]">
            <div className="relative group">
              {/* Circle with Icon */}
              <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                <FileText className="w-10 h-10 text-gray-400" />
              </div>
              {/* Arrow Tab */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div
                    className="w-14 h-10 bg-gray-400 flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)" }}
                  >
                    03
                  </div>
                  <div className="absolute top-1/2 left-full w-16 h-1 bg-gray-400 transform -translate-y-1/2"></div>
                </div>
              </div>
              {/* Content Card */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white rounded-lg shadow-md p-4  z-10">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Implementation Plan</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We provide a detailed road map, post-installation covering branding, milestones and resource
                  allocation.
                </p>
              </div>
            </div>
          </div>

          {/* Step 04 - Bottom Right */}
          <div className="absolute -bottom-10 right-60">
            <div className="relative group">
              {/* Circle with Icon */}
              <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                <TrendingUp className="w-10 h-10 text-orange-500" />
              </div>
              {/* Arrow Tab */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div
                    className="w-14 h-10 bg-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)" }}
                  >
                    04
                  </div>
                  <div className="absolute top-1/2 left-full w-16 h-1 bg-orange-500 transform -translate-y-1/2"></div>
                </div>
              </div>
              {/* Content Card */}
              <div className="absolute bottom-full right-0 mb-4 w-64 bg-white rounded-lg shadow-md p-4  z-10">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Execution and Monitoring</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We work according to the plan laid out, continuously improving and adjusting to ensure maximum
                  efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Step 05 - Top Right */}
          <div className="absolute top-0 right-20">
            <div className="relative group">
              {/* Circle with Icon */}
              <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                <BarChart3 className="w-10 h-10 text-orange-600" />
              </div>
              {/* Arrow Tab */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div
                    className="w-14 h-10 bg-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)" }}
                  >
                    05
                  </div>
                  <div className="absolute top-1/2 left-full w-16 h-1 bg-orange-600 transform -translate-y-1/2"></div>
                </div>
              </div>
              {/* Content Card */}
              <div className="absolute top-full right-0 mt-4 w-64 bg-white rounded-lg shadow-md p-4  z-10">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Data Collection & Analysis</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We're constantly gathering data to measure the results and course-correct if necessary.
                </p>
              </div>
            </div>
          </div>

          {/* Curved Dotted Connecting Lines */}
          {/* Line 1: 01 to 02 */}
          <div className="absolute top-16 left-28">
            <svg width="160" height="120" viewBox="0 0 160 120" className="overflow-visible">
              <path
                d="M 0 0 Q 40 40 80 70 Q 120 100 160 110"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
              />
            </svg>
          </div>

          {/* Line 2: 02 to 03 */}
          <div className="absolute bottom-16 left-72">
            <svg width="200" height="120" viewBox="0 0 200 120" className="overflow-visible">
              <path
                d="M 0 110 Q 50 100 100 70 Q 150 40 200 0"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
              />
            </svg>
          </div>

          {/* Line 3: 03 to 04 */}
          <div className="absolute top-16 right-72">
            <svg width="200" height="120" viewBox="0 0 200 120" className="overflow-visible">
              <path
                d="M 0 0 Q 50 40 100 70 Q 150 100 200 110"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
              />
            </svg>
          </div>

          {/* Line 4: 04 to 05 */}
          <div className="absolute bottom-16 right-28">
            <svg width="160" height="120" viewBox="0 0 160 120" className="overflow-visible">
              <path
                d="M 0 110 Q 40 100 80 70 Q 120 40 160 0"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
              />
            </svg>
          </div>

          {/* Final Arrow */}
          <div className="absolute top-14 right-0">
            <svg width="50" height="20" viewBox="0 0 50 20">
              <path
                d="M 0 10 L 35 10 M 30 5 L 40 10 L 30 15"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              {/* Step Circle and Arrow */}
              <div className="relative group mb-6">
                {/* Circle with Icon */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <step.icon
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    style={{
                      color: step.color
                        .replace("bg-", "")
                        .replace("teal-500", "#14b8a6")
                        .replace("slate-500", "#64748b")
                        .replace("gray-400", "#9ca3af")
                        .replace("orange-500", "#f97316")
                        .replace("orange-600", "#ea580c"),
                    }}
                  />
                </div>
                {/* Arrow Tab */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div
                    className={`w-12 h-8 sm:w-14 sm:h-10 ${step.color} flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md`}
                    style={{ clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)" }}
                  >
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 sm:p-6 border text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-px h-12 border-l-2 border-dashed border-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
