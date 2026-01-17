"use client";
import React from "react";
import { Home, Search, ArrowLeft, Leaf, Sprout } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Plant Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <Leaf
            className="w-16 h-16 text-emerald-400 animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <Sprout
            className="w-20 h-20 text-teal-500 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <Leaf
            className="w-16 h-16 text-emerald-400 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-none">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 opacity-30 -z-10"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Looks like this plant has wilted away. The page you are looking for
            does not exist or has been moved to a new garden.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={"/"}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => router.back()}
            className="inline-flex cursor-pointer items-center gap-2 bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Additional Help Text */}
        <div className="mt-12 text-gray-500">
          <p className="text-sm">
            Need help? Contact us at{" "}
            <a
              href="mailto:support@smartgarden.ai"
              className="text-emerald-600 font-semibold hover:underline"
            >
              support@smartgarden.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
