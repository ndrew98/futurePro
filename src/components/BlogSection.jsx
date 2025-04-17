import React from "react";
import { ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";

const BlogSection = () => {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-500 mb-2">INSIGHTS & UPDATES</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Source for Industry Knowledge and Career Advice
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest articles, industry news, and
            expert tips for both clients and candidates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-full inline-flex items-center gap-2 hover:bg-gray-50 transition">
            See all blogs
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ image, title, date }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md border border-black"
      style={{ boxShadow: "4px 4px 2px rgba(0, 0, 0, 1)" }}
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </div>
  );
};

// Sample blog post data
const blogPosts = [
  {
    image: assets.card_image,
    title: "Top 5 Interview Tips for Job Seekers in the Tech Industry",
    date: "August 26, 2025",
  },
  {
    image: assets.card_image,
    title: "The Ultimate Guide to Onboarding New Hires for Long-Term Success",
    date: "October 26, 2025",
  },
  {
    image: assets.card_image,
    title: "Navigating the Changing Landscape of Jobs in London",
    date: "July 26, 2023",
  },
];

export default BlogSection;
