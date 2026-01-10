"use client"
import { ArrowRight, Check, Clock, Flame, Heart, ShoppingBag, Star, Zap } from "lucide-react";
import { useState } from "react";

const OfferCard = ({
  image,
  title,
  originalPrice,
  discountPrice,
  discount,
  features,
  badge,
  badgeColor,
  timeLeft,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge */}
        <div
          className={`absolute top-4 left-4 ${badgeColor} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2`}
        >
          {badge === "Hot Deal" && <Flame className="w-4 h-4" />}
          {badge === "Flash Sale" && <Zap className="w-4 h-4" />}
          {badge === "Best Seller" && <Star className="w-4 h-4 fill-white" />}
          {badge}
        </div>

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 bg-white text-red-600 px-3 py-2 rounded-full font-bold text-lg shadow-lg">
          -{discount}%
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* Time Left */}
        {timeLeft && (
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {timeLeft}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>

        {/* Features */}
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price Section */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl font-bold text-emerald-600">
            ${discountPrice}
          </span>
          <span className="text-xl text-gray-400 line-through">
            ${originalPrice}
          </span>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center justify-center gap-2 group/btn">
          <ShoppingBag className="w-5 h-5" />
          Add to Cart
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
