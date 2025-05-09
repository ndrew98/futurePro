import React from "react";
import { ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";
import SecondaryButton from "./SecondaryButton";

const BlogSection = () => {
  return (
    <section
      className="py-8 md:py-16"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className="w-full mx-auto px-4 md:px-8 lg:px-20 ">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
          <div className="flex flex-col items-center gap-2">
            <div className="text-center text-neutral-800 text-base font-semibold font-['Bricolage_Grotesque']">
              INSIGHTS & UPDATES
            </div>
            <h2 className="text-center text-neutral-800 text-2xl md:text-3xl lg:text-5xl font-bold font-['Bricolage_Grotesque'] w-full-sm mx-auto">
              Your Source for Industry Knowledge and Career Advice
            </h2>
          </div>
          <p className="text-center text-neutral-800 text-sm md:text-base font-normal font-['Instrument_Sans'] leading-tight max-w-lg">
            Stay ahead of the curve with our latest articles, industry news, and
            expert tips for both clients and candidates.
          </p>
        </div>

        {/* Blog Cards - Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* Blog Cards - Mobile View (Horizontal Scrolling) */}
        <div className="md:hidden w-full overflow-x-auto pb-6 mb-8">
          <div className="inline-flex gap-4 px-4">
            {blogPosts.map((post, index) => (
              <MobileBlogCard key={index} {...post} />
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <SecondaryButton to="/blog">
            <span className="flex items-center gap-2">
              See all blogs
              <ChevronRight size={20} />
            </span>
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};

// Desktop and Tablet Blog Card
const BlogCard = ({ image, title, date }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-1 outline-offset-[-1px] outline-neutral-800 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)] gap-2">
        <h3 className="text-neutral-800 text-base md:text-lg font-bold font-['Bricolage_Grotesque'] leading-tight">
          {title}
        </h3>
        <div className="px-4 py-2 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex justify-center items-center w-fit">
          <div className="text-neutral-800 text-xs font-normal font-['Instrument_Sans'] leading-none">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Blog Card (sized for horizontal scrolling)
const MobileBlogCard = ({ image, title, date }) => {
  return (
    <div className="w-72 flex-shrink-0 p-3 bg-white rounded-[20px] shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex flex-col gap-2.5">
      <img
        className="w-full h-48 rounded-xl object-cover"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between flex-1 gap-2">
        <h3 className="text-neutral-800 text-base font-bold font-['Bricolage_Grotesque'] leading-tight">
          {title}
        </h3>
        <div className="px-4 py-2 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex justify-center items-center w-fit">
          <div className="text-neutral-800 text-xs font-normal font-['Instrument_Sans'] leading-none">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample blog post data
const blogPosts = [
  {
    image: assets.card_image || "https://placehold.co/254x184",
    title: "Top 5 Interview Tips for Job Seekers in the Tech Industry",
    date: "August 26, 2025",
  },
  {
    image: assets.card_image || "https://placehold.co/254x184",
    title: "The Ultimate Guide to Onboarding New Hires for Long-Term Success",
    date: "October 26, 2025",
  },
  {
    image: assets.card_image || "https://placehold.co/254x184",
    title: "Navigating the Changing Landscape of Jobs in London",
    date: "July 26, 2023",
  },
];

export default BlogSection;
