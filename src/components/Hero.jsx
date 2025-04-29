import React from "react";
import { ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";
import SecondaryButton from "./SecondaryButton";

const BlogSection = () => {
  return (
    <section
      className="py-16"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className="mx-auto px-20">
        <div className="text-center mb-12">
          <div className="text-center justify-start text-neutral-800 text-base font-semibold font-['Bricolage_Grotesque']">
            INSIGHTS & UPDATES
          </div>
          <h2 className="w-[878.53px] text-center justify-start text-neutral-800 text-5xl font-bold font-['Bricolage_Grotesque'] mx-auto">
            Your Source for Industry Knowledge and Career Advice
          </h2>
          <p className="w-[511.48px]  text-center justify-start text-neutral-800 text-lg font-normal font-['Instrument_Sans'] leading-normal mx-auto">
            Stay ahead of the curve with our latest articles, industry news, and
            expert tips for both clients and candidates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <div className="mt-10 text-center flex items-center justify-center">
          <SecondaryButton to="/blog">See all blogs</SecondaryButton>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ image, title, date }) => {
  return (
    <div className="bg-white self-stretch p-5 h-96  rounded-[20px] overflow-hidden shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline-offset-[-1px] outline-neutral-800 ">
      <div className="self-stretch h-48  overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="self-stretch  text-2xl font-bold mb-6 ">{title}</h3>
        <div className=" px-4 py-2 rounded-[100px] text-sm  justify-start border border-neutral-400 w-fit">
          {date}
        </div>
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
