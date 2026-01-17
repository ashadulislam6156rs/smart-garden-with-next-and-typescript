import React from "react";
import { Tag, TrendingDown, ArrowRight } from "lucide-react";
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
  } = product;

  return (
    <div className="bg-white flex flex-col rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {discountPercent > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
            <TrendingDown className="w-4 h-4" />
            {discountPercent}% OFF
          </div>
        )}

        <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
          <Tag className="w-3.5 h-3.5" />
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {shortDescription}
        </p>

        {/* Price */}
        <div className="flex items-end gap-2 mb-5">
          <span className="text-2xl font-bold text-emerald-600">
            {currency ? currency : "USD"} {discountPrice}
          </span>
          {originalPrice > discountPrice && (
            <span className="text-sm text-gray-400 line-through">
              {currency ? currency : "USD"} {originalPrice}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <Link
            href={`/products/${id}`}
            className="w-full py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center justify-center gap-2 group/btn"
          >
            View Details
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
