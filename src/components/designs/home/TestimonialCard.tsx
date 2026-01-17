import React from "react";
import { Star, Quote } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number; 
  text: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  image,
  rating,
  text,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Quote className="w-12 h-12 text-emerald-200" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow italic">
        {text}
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover ring-4 ring-emerald-50"
        />
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
          <p className="text-gray-500 text-sm">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
