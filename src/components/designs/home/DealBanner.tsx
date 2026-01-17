import { ArrowRight } from "lucide-react";
import React from "react";

interface DealBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  bgGradient: string;
  icon: React.ComponentType<{ className?: string }>; // Icon component
}

const DealBanner: React.FC<DealBannerProps> = ({
  title,
  subtitle,
  ctaText,
  bgGradient,
  icon: Icon,
}) => {
  return (
    <div
      className={`${bgGradient} rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
            <Icon className="w-12 h-12" />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{title}</h3>
            <p className="text-white/90 text-lg">{subtitle}</p>
          </div>
        </div>
        <button className="bg-white text-gray-800 font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all whitespace-nowrap flex items-center gap-2">
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DealBanner;
