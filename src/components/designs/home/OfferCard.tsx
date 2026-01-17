"use client";

import {
  ArrowRight,
  Check,
  Clock,
  Flame,
  Heart,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type OfferProps = {
  offer: {
    id: string;
    title: string;
    category: string;
    image: string;
    shortDescription: string;
    currency: string;
    originalPrice: number;
    discountPrice: number;
    discountPercent: number;
    stock: string;
    stockQuantity: number;
  };
};

const OfferCard = ({ offer }: OfferProps) => {
  const {
    id,
    title,
    image,
    shortDescription,
    currency,
    originalPrice,
    discountPrice,
    discountPercent,
    stock,
    stockQuantity,
  } = offer;

  const [isFavorite, setIsFavorite] = useState(false);

  // Badge logic
  const badge =
    discountPercent >= 50
      ? "Hot Deal"
      : discountPercent >= 30
      ? "Flash Sale"
      : "Best Seller";

  const badgeColor =
    badge === "Hot Deal"
      ? "bg-gradient-to-r from-red-500 to-orange-500"
      : badge === "Flash Sale"
      ? "bg-gradient-to-r from-purple-500 to-pink-500"
      : "bg-gradient-to-r from-amber-500 to-yellow-500";

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
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

        {/* Discount */}
        <div className="absolute top-4 right-4 bg-white text-red-600 px-3 py-2 rounded-full font-bold text-lg shadow-lg">
          -{discountPercent}%
        </div>

        {/* Favorite */}
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

        {/* Stock info */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {stock === "In Stock"
            ? `${stockQuantity} left`
            : "Out of stock"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 ">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>

        {/* Features (auto generated) */}
        <ul className="space-y-2 mb-4">
          <li className="flex items-center gap-2 text-gray-600">
            <Check className="w-4 h-4 text-emerald-600" />
            {stock === "In Stock" ? "Available Now" : "Unavailable"}
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <Check className="w-4 h-4 text-emerald-600" />
            Secure Payment
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <Check className="w-4 h-4 text-emerald-600" />
            Fast Delivery
          </li>
        </ul>

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl font-bold text-emerald-600">
            {currency}
            {discountPrice}
          </span>
          <span className="text-xl text-gray-400 line-through">
            {currency}
            {originalPrice}
          </span>
        </div>

        {/* Button */}
        <Link
          href={`/products/${id}`}
          className="w-full py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center justify-center gap-2 group/btn"
        >
          View Details
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
