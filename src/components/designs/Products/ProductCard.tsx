import React from "react";
import { Tag, Shield, TrendingDown, ShoppingCart, Eye } from "lucide-react";
import { TProducts } from "@/types/TProducts";
import Link from "next/link";

interface ProductCardProps {
  product: TProducts;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const {
    category,
    currency,
    discountPercent,
    discountPrice,
    image,
    id,
    originalPrice,
    shortDescription,
    title,
    warranty,
  } = product;

  return (
    <div className="bg-white flex flex-col justify-between h-[320px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-1">
            <TrendingDown className="w-4 h-4" />
            {discountPercent}% OFF
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
          <Tag className="w-3.5 h-3.5" />
          {category}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {shortDescription}
        </p>

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-emerald-600">
            {currency} {discountPrice.toFixed(2)}
          </span>
          {originalPrice > discountPrice && (
            <span className="text-lg text-gray-400 line-through">
              {currency} {originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Warranty */}
        {/* <div className="flex items-center gap-2 text-sm text-gray-600 mb-5 bg-slate-50 p-3 rounded-lg">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>{warranty}</span>
        </div> */}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Add to Cart Button */}
          <button className="flex-1 cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>

          {/* View Details Button */}
          <Link
            href={`/products/${id}`}
            className="flex-1 bg-slate-50 hover:bg-slate-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center cursor-pointer gap-2"
          >
            <Eye className="w-5 h-5" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
