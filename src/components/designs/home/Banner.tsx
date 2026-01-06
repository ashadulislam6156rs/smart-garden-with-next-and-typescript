"use client";
import React, { useState, useEffect } from "react";
import { Leaf, ShoppingCart, Truck, Award } from "lucide-react";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      title: "Create Your Dream Garden",
      subtitle:
        "Thousands of plants, flowers, and garden products at your fingertips",
      bg: "from-emerald-600 to-teal-700",
      image:
        "https://i.pinimg.com/736x/3a/47/c5/3a47c5359b1a39759ce8ddb23ef9ffbc.jpg",
    },
    {
      title: "Fast & Secure Delivery",
      subtitle: "Fresh plants and flowers delivered straight to your doorstep",
      bg: "from-green-600 to-emerald-700",
      image:
        "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80",
    },
    {
      title: "Expert Advice & Support",
      subtitle: "Gardening tips and full support always by your side",
      bg: "from-teal-600 to-cyan-700",
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="w-full relative">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gradient-to-br ${
            slide.bg
          } transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      ))}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto md:px-4 relative z-10">
        <div
          className="relative overflow-hidden rounded-3xl "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[550px] md:h-[450px] flex items-center">
            <div className="container mx-auto">
              <div className="max-w-3xl">
                {/* Brand */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    SmartGarden
                  </h1>
                </div>

                {/* Slide Content */}
                <div className="space-y-6 relative">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ${
                        currentSlide === index
                          ? "opacity-100 translate-y-0 relative"
                          : "opacity-0 translate-y-6 absolute top-0 left-0"
                      }`}
                    >
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-lg md:text-xl text-white/90 mb-8">
                        {slide.subtitle}
                      </p>
                    </div>
                  ))}

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg">
                      Order Now
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/30 transition-all border-2 border-white/50">
                      Read More
                    </button>
                  </div>
                </div>             
              </div>
            </div>
          </div>

          

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-12 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
