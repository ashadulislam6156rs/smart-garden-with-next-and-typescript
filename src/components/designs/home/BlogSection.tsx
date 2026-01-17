"use client";
import React from "react";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Indoor Plant Care",
      excerpt:
        "Discover the secrets to keeping your indoor plants thriving all year round with these expert-approved techniques.",
      image:
        "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&h=600&fit=crop",
      category: "Care Tips",
      author: "Sarah Johnson",
      date: "Jan 15, 2026",
      readTime: "5 min read",
      color: "from-emerald-500 to-teal-500",
      categoryBg: "bg-emerald-100",
      categoryText: "text-emerald-700",
    },
    {
      id: 2,
      title: "Creating Your Dream Garden: A Beginner's Guide",
      excerpt:
        "Learn how to plan, design, and create a beautiful garden space from scratch with our comprehensive guide.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "Gardening",
      author: "Michael Chen",
      date: "Jan 12, 2026",
      readTime: "8 min read",
      color: "from-teal-500 to-cyan-500",
      categoryBg: "bg-teal-100",
      categoryText: "text-teal-700",
    },
    {
      id: 3,
      title: "The Benefits of Smart Gardening Technology",
      excerpt:
        "Explore how AI and smart devices are revolutionizing the way we garden and care for our plants.",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
      category: "Technology",
      author: "Emily Rodriguez",
      date: "Jan 10, 2026",
      readTime: "6 min read",
      color: "from-cyan-500 to-blue-500",
      categoryBg: "bg-cyan-100",
      categoryText: "text-cyan-700",
    },
    {
      id: 4,
      title: "Seasonal Plant Selection: What to Grow Now",
      excerpt:
        "Find out which plants are perfect for the current season and how to make the most of your garden space.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      category: "Seasonal",
      author: "David Park",
      date: "Jan 8, 2026",
      readTime: "7 min read",
      color: "from-green-500 to-emerald-500",
      categoryBg: "bg-green-100",
      categoryText: "text-green-700",
    },
    {
      id: 5,
      title: "Organic Pest Control Methods That Work",
      excerpt:
        "Say goodbye to harmful chemicals with these natural and effective pest control solutions for your garden.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      category: "Care Tips",
      author: "Lisa Anderson",
      date: "Jan 5, 2026",
      readTime: "5 min read",
      color: "from-emerald-500 to-teal-500",
      categoryBg: "bg-emerald-100",
      categoryText: "text-emerald-700",
    },
    {
      id: 6,
      title: "Water-Saving Techniques for Sustainable Gardens",
      excerpt:
        "Learn practical strategies to reduce water consumption while maintaining a lush and healthy garden.",
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=600&fit=crop",
      category: "Sustainability",
      author: "James Wilson",
      date: "Jan 3, 2026",
      readTime: "6 min read",
      color: "from-teal-500 to-cyan-500",
      categoryBg: "bg-teal-100",
      categoryText: "text-teal-700",
    },
    {
      id: 7,
      title: "Indoor Plants That Improve Air Quality",
      excerpt:
        "Discover the best indoor plants that naturally purify air and create a healthier, more refreshing living environment.",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop",
      category: "Indoor Plants",
      author: "Sarah Johnson",
      date: "Feb 3, 2026",
      readTime: "6 min read",
      color: "from-emerald-500 to-green-500",
      categoryBg: "bg-emerald-100",
      categoryText: "text-emerald-700",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-5 py-2 rounded-full font-semibold mb-4 shadow-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Our Blog
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Latest Garden{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tips, guides, and inspiration to help you create and maintain your perfect garden
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-7">
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-full overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 ${blogPosts[0].categoryBg} ${blogPosts[0].categoryText} px-4 py-2 rounded-full font-semibold text-sm`}>
                  <Tag className="w-4 h-4 inline mr-1" />
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className={`inline-flex items-center gap-2 ${blogPosts[0].categoryBg} ${blogPosts[0].categoryText} px-3 py-1 rounded-full font-semibold text-sm w-fit mb-4`}>
                  {blogPosts[0].category}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-fit">
                  Read Full Article
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className={`absolute top-4 left-4 ${post.categoryBg} ${post.categoryText} px-3 py-1 rounded-full font-semibold text-xs`}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                {/* Read More Link */}
                {/* <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button> */}
              </div>

              {/* Decorative Gradient Line */}
              <div className={`h-1 w-full bg-gradient-to-r ${post.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
}