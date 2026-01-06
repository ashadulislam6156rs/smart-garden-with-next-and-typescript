"use client";
import React from "react";
import { Search, CheckCircle, Truck, Home, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Browse & Order",
      description:
        "Explore our wide collection of plants, flowers, and garden products. Select your favorites and place your order easily.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      id: 2,
      icon: CheckCircle,
      title: "Verify & Process",
      description:
        "Our admin team carefully reviews and verifies your order to ensure quality and accuracy before processing.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      id: 3,
      icon: Truck,
      title: "Assign Delivery",
      description:
        "A professional delivery person is assigned to your order for safe and timely transportation to your location.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      id: 4,
      icon: Home,
      title: "Receive at Doorstep",
      description:
        "Your fresh plants and products arrive safely at your doorstep, ready to beautify your garden.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold mb-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Simple & Seamless Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From browsing to delivery, we have made getting your dream garden
            easier than ever
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 via-cyan-200 to-green-200 mx-24"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div
                className={`${step.bgColor} rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-white`}
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {step.id}
                  </div>

                  {/* Arrow Icon for desktop */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block text-gray-300 w-6 h-6 absolute -right-8 top-8" />
                  )}
                </div>

                {/* Icon */}
                <div
                  className={`${step.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110`}
                >
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Element */}
                <div
                  className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${step.color}`}
                ></div>
              </div>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
