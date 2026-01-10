import React from 'react';
import FeatureCard from './FeatureCard';
import { Award, HeartHandshake, Leaf, Shield, ShoppingCart, Truck } from 'lucide-react';

const Feature = () => {
     const features = [
       {
         icon: ShoppingCart,
         title: "Easy Ordering",
         description:
           "Order your favorite plants and products in just a few clicks.",
         bgColor: "bg-emerald-100",
         iconColor: "text-emerald-600",
       },
       {
         icon: Truck,
         title: "Fast Delivery",
         description:
           "Safe and quick delivery handled by our experienced team.",
         bgColor: "bg-teal-100",
         iconColor: "text-teal-600",
       },
       {
         icon: Award,
         title: "Quality Products",
         description:
           "We ensure the highest quality plants and garden products.",
         bgColor: "bg-cyan-100",
         iconColor: "text-cyan-600",
       },
       {
         icon: Leaf,
         title: "Fresh & Healthy",
         description:
           "All our plants are grown organically and arrive fresh to your door.",
         bgColor: "bg-green-100",
         iconColor: "text-green-600",
       },
       {
         icon: HeartHandshake,
         title: "Expert Support",
         description:
           "Get advice from our gardening experts anytime you need help.",
         bgColor: "bg-rose-100",
         iconColor: "text-rose-600",
       },
       {
         icon: Shield,
         title: "Secure Payment",
         description:
           "Your transactions are protected with industry-standard security.",
         bgColor: "bg-blue-100",
         iconColor: "text-blue-600",
       },
     ];
    return (
      <div className=" bg-gradient-to-br from-green-50 to-teal-50 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best gardening experience with top-quality products
              and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
                iconColor={feature.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Feature;