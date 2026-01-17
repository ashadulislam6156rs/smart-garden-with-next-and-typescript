"use client"
import { Flame, Zap } from "lucide-react";
import OfferCard from "./OfferCard";
import DealBanner from "./DealBanner";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { TProducts } from "@/types/TProducts";

const SpecialOffers = () => {
  const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<TProducts[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products/offers");
      setProducts(res?.data);
    } catch (err) {
      toast.error("Failed to fetch Products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading....</p>
  }
 

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider bg-emerald-100 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <Flame className="w-4 h-4" />
              Limited Time Only
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6 mb-4">
            Special Offers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Grab these amazing deals before they are gone! Up to 40% off on
            selected plant collections.
          </p>
        </div>

        {/* Banner */}
        <div className="mb-12">
          <DealBanner
            title="Weekend Mega Sale!"
            subtitle="Extra 10% off when you buy 2 or more items"
            ctaText="Shop All Deals"
            bgGradient="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"
            icon={Zap}
          />
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-7">
          {products?.map((offer, index) => (
            <OfferCard key={index} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
