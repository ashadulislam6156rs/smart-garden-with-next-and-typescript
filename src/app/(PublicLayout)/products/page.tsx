"use client"
import ProductCard from '@/components/designs/Products/ProductCard';
import { TProducts } from '@/types/TProducts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Sparkles } from 'lucide-react';

const Products = () => {
     const [products, setProducts] = useState<TProducts[]>([]);
     const [loading, setLoading] = useState(true);

 useEffect(() => {
   async function fetchProducts() {
     try {
       const res = await axios.get("/api/products");
       setProducts(res.data);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }

   fetchProducts();
 }, []);
    
    


    return (
      <div className="w-full bg-gradient-to-br py-10 from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Our Collection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore Our Products
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover a carefully curated selection of premium plants and
              garden products to transform your space into a green paradise
            </p>
          </div>
          {/* Products Count */}
          <div className="mb-8">
            <p className="text-gray-600 font-medium">
              Showing{" "}
              <span className="text-emerald-600 font-bold">
                {products.length}
              </span>{" "}
              products
            </p>
          </div>
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Products;