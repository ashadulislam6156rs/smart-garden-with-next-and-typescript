"use client";
import React, { useState, useEffect } from "react";
import { Leaf, ShoppingCart, Truck, Award, Star } from "lucide-react";
import Image from "next/image";

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

    const images = [
      "https://plus.unsplash.com/premium_photo-1663076538857-8e712ff5b25f?q=80&w=1207&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1663089153028-2d7b5e01d0f8?q=80&w=1170&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1752197111527-413df7f78dce?q=80&w=1169&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1661771517284-363d0f17b038?q=80&w=2670&auto=format&fit=crop",
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
    <div className="w-full relative overflow-hidden">
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

          <div className="relative h-[550px] md:h-[450px] flex items-center">
            <div className="container mx-auto flex justify-between items-center">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    SmartGarden
                  </h1>
                </div>

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

              {/* Banner Image - Professional Design */}
              <div className="hidden lg:flex h-full relative justify-center items-center">
                <div className="relative">
                  {/* Main grid container */}
                  <div className="relative grid grid-cols-2 gap-4">
                    {images.map((img, idx) => {
                      const shapes = [
                        {
                          rounded: "rounded-tl-[4rem] rounded-br-3xl",
                          size: "w-36 h-34 xl:w-44 xl:h-42",
                        },
                        {
                          rounded: "rounded-tr-[4rem] rounded-bl-3xl",
                          size: "w-36 h-34 xl:w-44 xl:h-42",
                        },
                        {
                          rounded: "rounded-bl-[4rem] rounded-tr-3xl",
                          size: "w-36 h-34 xl:w-44 xl:h-42",
                        },
                        {
                          rounded: "rounded-br-[4rem] rounded-tl-3xl",
                          size: "w-36 h-34 xl:w-44 xl:h-42",
                        },
                      ];

                      return (
                        <div
                          key={idx}
                          className={`overflow-hidden ${shapes[idx].size} ${shapes[idx].rounded} relative group shadow-2xl`}
                        >
                          <Image
                            alt={`Garden image ${idx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700 group-hover:rotate-2"
                            src={img}
                            fill
                            sizes="(max-width: 1280px) 144px, 176px"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 group-hover:opacity-0 transition-opacity duration-500"></div>

                          {/* Border accent */}
                          <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300 rounded-[inherit]"></div>
                        </div>
                      );
                    })}

                    {/* Center badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-white to-emerald-50 rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10 group">
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/30 transition-all"></div>
                      <Star className="w-9 h-9 xl:w-8 xl:h-8 text-emerald-600 fill-emerald-600 relative z-10 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
