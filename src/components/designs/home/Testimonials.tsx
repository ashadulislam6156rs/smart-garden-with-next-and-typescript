"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      company: "Green Haven",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5,
      text: "The quality of plants I received was exceptional! My garden has never looked better. The delivery was prompt and the team was very professional. Highly recommend!",
    },
    {
      name: "David Chen",
      role: "Landscape Designer",
      company: "Urban Oasis",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5,
      text: "As a professional landscaper, I need reliable suppliers. This company delivers consistently high-quality plants and their customer service is outstanding. They're my go-to partner.",
    },
    {
      name: "Emma Rodriguez",
      role: "Garden Enthusiast",
      company: "Bloom Studios",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 5,
      text: "I'm amazed by the variety and health of the plants. The expert advice I received helped me create the perfect indoor garden. Thank you for making gardening so accessible!",
    },
    {
      name: "Michael Park",
      role: "Property Manager",
      company: "GreenSpace Co",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 5,
      text: "Managing multiple properties means I need bulk orders delivered on time. This service has been flawless. The plants arrive healthy and the pricing is competitive.",
    },
    {
      name: "Lisa Thompson",
      role: "Restaurant Owner",
      company: "The Garden Bistro",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      rating: 5,
      text: "We use fresh herbs from here in our restaurant. The quality is restaurant-grade and the organic certification gives our customers confidence. Excellent partnership!",
    },
    {
      name: "James Wilson",
      role: "Urban Farmer",
      company: "City Harvest",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      rating: 5,
      text: "The starter plants and seeds I ordered exceeded expectations. Great germination rates and healthy growth. This company truly understands what farmers need.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * 3,
    currentIndex * 3 + 3
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider bg-emerald-100 px-4 py-2 rounded-full">
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mt-6 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            spaces with our premium plants and services.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Mobile Single Card View */}
        <div className="md:hidden mb-12">
          <TestimonialCard
            {...testimonials[currentIndex % testimonials.length]}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="bg-white hover:bg-emerald-50 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-emerald-600"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white hover:bg-emerald-50 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
              5000+
            </div>
            <div className="text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
              4.9
            </div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
              98%
            </div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
