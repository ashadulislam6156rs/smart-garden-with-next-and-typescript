"use client";
import React from "react";
import { Sparkles, Leaf, Target, Users, Award, TrendingUp } from "lucide-react";

export default function AboutSmartGarden() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make gardening accessible and enjoyable for everyone through smart technology and quality products.",
      color: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: Leaf,
      title: "Quality First",
      description:
        "We source only the finest plants and garden products, ensuring every item meets our high standards.",
      color: "from-teal-500 to-cyan-500",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: Users,
      title: "Customer Care",
      description:
        "Our dedicated team provides expert guidance and support throughout your gardening journey.",
      color: "from-cyan-500 to-blue-500",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Leveraging AI and smart solutions to revolutionize the way you experience gardening.",
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers", color: "text-emerald-600" },
    { number: "500+", label: "Plant Varieties", color: "text-teal-600" },
    { number: "50+", label: "Expert Team", color: "text-cyan-600" },
    { number: "99%", label: "Satisfaction Rate", color: "text-green-600" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-100 via-emerald-50 to-teal-100 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-5 py-2 rounded-full font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              SmartGarden
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are revolutionizing the gardening experience by combining natures
            beauty with cutting-edge technology. Our platform brings premium
            plants and expert care right to your doorstep.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div
                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-7">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-emerald-100"
            >
              <div className="flex items-start gap-6">
                {/* Icon Container */}
                <div
                  className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  {/* Decorative Gradient Line */}
                  <div
                    className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
