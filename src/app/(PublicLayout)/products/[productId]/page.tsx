"use client"

import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  CheckCircle,
  Truck,
  Shield,
  RefreshCw,
  Package,
  Clock,
  ChevronLeft,
  ChevronRight,
  Eye,
  Award,
} from "lucide-react";
import { TProductDetails } from '@/types/TProductDetails';

const ProductDetails = () => {

    const params = useParams();
    const id = params?.productId as string;

    const [product, setProduct] = useState<TProductDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
   const [activeTab, setActiveTab] = useState("description");
  

  useEffect(() => {
    if (!id) return;

    async function fetchProducts() {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [id]);


  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : Math.max(1, prev - 1)
    );
  };



  if (loading || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!id) {
    return <p>Product Not Found</p>;
  }
    

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Top Info Bar */}
        <div className="bg-emerald-600 text-white py-2 text-center text-sm">
          <p>
            ✨ Free Shipping on Orders Over $100 | 🎁 Special Discount Today!
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6 flex items-center gap-2">
            <span className="hover:text-emerald-600 cursor-pointer">Home</span>
            <span>/</span>
            <span className="hover:text-emerald-600 cursor-pointer">
              {product.category}
            </span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            {/* Left: Image Gallery - 5 columns */}
            <div className="flex-1">
              <div className="sticky md:top-6 space-y-3">
                {/* Main Image */}
                <div className="relative bg-white rounded-lg border border-gray-200 overflow-hidden aspect-square">
                  <img
                    src={product.gallery[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Badge */}
                  <div
                    className={`absolute top-3 left-3 ${product.badge.color} text-white px-3 py-1.5 rounded-md font-bold text-xs shadow-lg`}
                  >
                    {product.badge.text}
                  </div>

                  {/* Navigation Arrows */}
                  {product.gallery.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setSelectedImage(
                            (selectedImage - 1 + product.gallery.length) %
                              product.gallery.length,
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-800" />
                      </button>
                      <button
                        onClick={() =>
                          setSelectedImage(
                            (selectedImage + 1) % product.gallery.length,
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-800" />
                      </button>
                    </>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 cursor-pointer bg-white border border-gray-300 hover:border-emerald-500 text-gray-700 font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Wishlist
                  </button>
                  <button className="flex-1 cursor-pointer bg-white border border-gray-300 hover:border-emerald-500 text-gray-700 font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Product Details - 7 columns */}
            <div className="flex-1 space-y-5">
              {/* Product Header */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-md text-xs font-semibold">
                    {product.category}
                  </span>
                  {product.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {product.timeLeft}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h1>

                {/* Rating & Stock */}
                <div className="flex flex-wrap pb-3 items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)]?.map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating.average)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating.average} ({product.rating.totalReviews}{" "}
                      reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-700">
                      {product.stock.status}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl md:text-4xl font-bold text-emerald-600">
                      {product.pricing.currency} {product.pricing.discountPrice}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      {product.pricing.currency} {product.pricing.originalPrice}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2.5 py-1 rounded-md font-bold text-sm">
                      -{product.pricing.discountPercent}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Tax included. Shipping calculated at checkout.
                  </p>
                </div>

                {/* Key Features Quick View */}
                <div className="grid grid-cols-2 gap-2 mb-5 pb-6 border-b border-gray-200">
                  {product.features.slice(0, 4)?.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex mb-3 items-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Quantity & Actions */}
                <div className="space-y-3 pt-3">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-medium text-sm">
                      Quantity:
                    </span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange("decrement")}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors font-semibold text-lg"
                      >
                        -
                      </button>
                      <span className="px-5 py-2 font-semibold border-x border-gray-300 min-w-[60px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange("increment")}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors font-semibold text-lg"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.stock.quantity} available)
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-2 rounded-lg transition-all shadow-md hover:shadow-lg flex cursor-pointer items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                    <button className="bg-emerald-600 flex-1 text-white font-bold py-2 rounded-lg transition-all shadow-md flex items-center cursor-pointer justify-center gap-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Delivery & Services */}
              <div className="flex md:flex-row flex-col py-3 justify-between items-center gap-5">
                <div className="bg-white flex-1 border border-gray-200 rounded-lg p-4 text-center">
                  <Truck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    {product.delivery.shippingCost} Shipping
                  </p>
                  <p className="text-xs text-gray-600">
                    {product.delivery.estimatedTime}
                  </p>
                </div>
                <div className="bg-white flex-1 border border-gray-200 rounded-lg p-4 text-center">
                  <RefreshCw className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    Easy Returns
                  </p>
                  <p className="text-xs text-gray-600">
                    {product.delivery.returnPolicy}
                  </p>
                </div>
                <div className="bg-white flex-1 border border-gray-200 rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    Warranty
                  </p>
                  <p className="text-xs text-gray-600">{product.warranty}</p>
                </div>
              </div>

              {/* Seller Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Sold By
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900">
                          {product.seller.name}
                        </h4>
                        {product.seller.verified && (
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                        )}
                      </div>
                      <p className="text-xs text-gray-600">
                        {product.seller.supportEmail}
                      </p>
                    </div>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 cursor-pointer py-2 rounded-lg transition-all text-sm">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="border-b border-gray-200 flex">
              <button
                onClick={() => setActiveTab("description")}
                className={`flex-1 py-4 cursor-pointer px-6 font-semibold text-sm transition-all ${
                  activeTab === "description"
                    ? "text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("specifications")}
                className={`flex-1 py-4 cursor-pointer px-6 font-semibold text-sm transition-all ${
                  activeTab === "specifications"
                    ? "text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`flex-1 py-4 px-6 cursor-pointer font-semibold text-sm transition-all ${
                  activeTab === "reviews"
                    ? "text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Reviews ({product.rating.totalReviews})
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "description" && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Package className="w-5 h-5 text-emerald-600" />
                      Product Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {product.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features?.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Care Instructions
                    </h3>
                    <div className="space-y-2">
                      {Array.isArray(product?.careInstructions) &&
                      product.careInstructions.length > 0 ? (
                        product.careInstructions.map((instruction, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                          >
                            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">
                              {idx + 1}
                            </div>
                            <span className="text-gray-700 text-sm">
                              {instruction}
                            </span>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-400 text-sm">
                          No care instructions available
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Product Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">
                        Plant Count:
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">
                        {product.specifications.plantCount}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">
                        Pot Material:
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">
                        {product.specifications.potMaterial}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">
                        Light Requirement:
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">
                        {product.specifications.lightRequirement}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">
                        Watering Frequency:
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">
                        {product.specifications.wateringFrequency}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">
                        Pet Friendly:
                      </span>
                      <span
                        className={`font-semibold text-sm ${
                          product.specifications.petFriendly
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      >
                        {product.specifications.petFriendly ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <div className="text-center py-12 text-gray-500">
                    <Star className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-sm">Customer reviews will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;