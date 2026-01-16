"use client"

import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { 
  ShoppingCart, Heart, Share2, Star, CheckCircle, 
  Truck, Shield, RefreshCw, Package, Droplets, 
  Sun, AlertCircle, Store, Mail, ChevronLeft, ChevronRight
} from 'lucide-react';

const ProductDetails = () => {

    const params = useParams();
    const id = params?.productId as string;

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
      async function fetchEvents() {
        try {
          const res = await axios.get(`/api/products/${id}`);
          setProduct(res.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }

      fetchEvents();
    }, [id]);

    

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6 flex items-center gap-2">
            <span className="hover:text-emerald-600 cursor-pointer">Home</span>
            <span>/</span>
            <span className="hover:text-emerald-600 cursor-pointer">
              {product.category}
            </span>
            <span>/</span>
            <span className="text-gray-800 font-medium">{product.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden aspect-square">
                <img
                  src={product.gallery[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 ${product.badge.color} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg`}
                >
                  {product.badge.text}
                </div>

                {/* Time Left */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-sm text-gray-800 shadow-lg">
                  ⏰ {product.timeLeft}
                </div>

                {/* Navigation Arrows */}
                {product.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setSelectedImage(
                          (selectedImage - 1 + product.gallery.length) %
                            product.gallery.length
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                      onClick={() =>
                        setSelectedImage(
                          (selectedImage + 1) % product.gallery.length
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3">
                {product.gallery?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 aspect-square rounded-xl overflow-hidden transition-all ${
                      selectedImage === index
                        ? "ring-4 ring-emerald-500 scale-105"
                        : "ring-2 ring-gray-200 hover:ring-emerald-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="space-y-6">
              {/* Title & Rating */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                  {product.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  {product.title}
                </h1>

                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating.average)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    {product.rating.average} ({product.rating.totalReviews}{" "}
                    reviews)
                  </span>
                </div>

                <p className="text-gray-600 text-lg">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-emerald-600">
                    {product.pricing.currency} {product.pricing.discountPrice}
                  </span>
                  <span className="text-2xl text-gray-400 line-through">
                    {product.pricing.currency} {product.pricing.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold text-sm">
                    Save {product.pricing.discountPercent}%
                  </span>
                </div>
                <p className="text-gray-600">
                  Tax included. Shipping calculated at checkout.
                </p>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">
                  {product.stock.status} - Only {product.stock.quantity} left!
                </span>
              </div>

              {/* Quantity & Actions */}
              <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-semibold">Quantity:</span>
                  <div className="flex items-center border-2 border-gray-200 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange("decrement")}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors font-bold text-xl"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 font-semibold text-lg border-x-2 border-gray-200">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increment")}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="bg-white border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 p-4 rounded-xl transition-all">
                    <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
                  </button>
                  <button className="bg-white border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 p-4 rounded-xl transition-all">
                    <Share2 className="w-6 h-6 text-gray-600 hover:text-emerald-600" />
                  </button>
                </div>

                <button className="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-md">
                  Buy Now
                </button>
              </div>

              {/* Delivery Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-md">
                  <Truck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800 text-sm">
                    {product.delivery.shippingCost} Shipping
                  </p>
                  <p className="text-xs text-gray-600">
                    {product.delivery.estimatedTime}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-md">
                  <RefreshCw className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800 text-sm">
                    Easy Returns
                  </p>
                  <p className="text-xs text-gray-600">
                    {product.delivery.returnPolicy}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-md">
                  <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800 text-sm">
                    Warranty
                  </p>
                  <p className="text-xs text-gray-600">{product.warranty}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Details Tabs */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Package className="w-6 h-6 text-emerald-600" />
                  Product Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features?.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-emerald-50 p-4 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Plant Count:</span>
                    <span className="font-semibold text-gray-800">
                      {product.specifications.plantCount}
                    </span>
                  </div>
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Pot Material:</span>
                    <span className="font-semibold text-gray-800">
                      {product.specifications.potMaterial}
                    </span>
                  </div>
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Sun className="w-4 h-4" />
                      Light Requirement:
                    </span>
                    <span className="font-semibold text-gray-800">
                      {product.specifications.lightRequirement}
                    </span>
                  </div>
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Droplets className="w-4 h-4" />
                      Watering:
                    </span>
                    <span className="font-semibold text-gray-800">
                      {product.specifications.wateringFrequency}
                    </span>
                  </div>
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Pet Friendly:</span>
                    <span
                      className={`font-semibold ${
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

              {/* Care Instructions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-emerald-600" />
                  Care Instructions
                </h2>
                <div className="space-y-3">
                  {product.careInstructions?.map((instruction, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-gray-700">{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seller Info */}
              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Seller Information
                </h2>
                <div className="bg-emerald-50 rounded-xl p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-600 text-white p-4 rounded-full">
                      <Store className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          {product.seller.name}
                        </h3>
                        {product.seller.verified && (
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{product.seller.supportEmail}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;