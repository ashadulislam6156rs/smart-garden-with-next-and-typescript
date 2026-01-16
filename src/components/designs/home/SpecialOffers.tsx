import {  Flame, Zap } from "lucide-react";
import OfferCard from "./OfferCard";
import DealBanner from "./DealBanner";
import { TSpecial } from "@/types/TSpecial";

const SpecialOffers = () => {
  const offers: TSpecial[] = [
    {
      image:
        "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&h=600&fit=crop",
      title: "Indoor Plant Bundle",
      originalPrice: 149.99,
      discountPrice: 89.99,
      discount: 40,
      badge: "Hot Deal",
      badgeColor: "bg-gradient-to-r from-red-500 to-orange-500",
      timeLeft: "2h 45m left",
      features: [
        "5 Premium Indoor Plants",
        "Free Decorative Pots",
        "Care Guide Included",
        "Free Delivery",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&h=600&fit=crop",
      title: "Succulent Collection",
      originalPrice: 79.99,
      discountPrice: 47.99,
      discount: 40,
      badge: "Flash Sale",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      timeLeft: "5h 12m left",
      features: [
        "10 Assorted Succulents",
        "Mini Planters Included",
        "Low Maintenance",
        "Perfect for Beginners",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      title: "Herb Garden Starter Kit",
      originalPrice: 59.99,
      discountPrice: 35.99,
      discount: 40,
      badge: "Best Seller",
      badgeColor: "bg-gradient-to-r from-amber-500 to-yellow-500",
      timeLeft: "1 day left",
      features: [
        "6 Organic Herb Seeds",
        "Growing Kit & Soil",
        "Watering Guide",
        "Recipe Book Included",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=800&h=600&fit=crop",
      title: "Tropical Paradise Set",
      originalPrice: 199.99,
      discountPrice: 119.99,
      discount: 40,
      badge: "Hot Deal",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      timeLeft: "3h 28m left",
      features: [
        "3 Large Tropical Plants",
        "Premium Ceramic Pots",
        "Plant Food & Fertilizer",
        "Expert Support",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop",
      title: "Air Purifying Plant Pack",
      originalPrice: 129.99,
      discountPrice: 77.99,
      discount: 40,
      badge: "Flash Sale",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      timeLeft: "8h 00m left",
      features: [
        "4 Air Purifying Plants",
        "NASA Approved Species",
        "Modern Planters",
        "Health Benefits Guide",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&h=600&fit=crop",
      title: "Flowering Plants Collection",
      originalPrice: 89.99,
      discountPrice: 53.99,
      discount: 40,
      badge: "Best Seller",
      badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500",
      timeLeft: "12h left",
      features: [
        "6 Blooming Plants",
        "Colorful Variety",
        "Long-lasting Flowers",
        "Care Instructions",
      ],
    },
  ];

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
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mt-6 mb-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <OfferCard key={index} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
