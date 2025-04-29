import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile-sized on initial render
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      className="w-full p-6 md:p-20 inline-flex flex-col justify-start items-center gap-6 md:gap-12"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className="mx-auto flex flex-col w-full ">
        <div className="text-center items-center mb-6">
          <div className="text-center justify-start text-neutral-800 text-sm md:text-base font-semibold font-['Bricolage_Grotesque']">
            WHAT PEOPLE SAY ABOUT US
          </div>
          <h2 className="text-center justify-start text-neutral-800 text-3xl md:text-5xl font-bold font-['Bricolage_Grotesque'] mb-4 md:mb-6">
            Real People. Real Results.
          </h2>
          <p className="w-full max-w-xs md:max-w-md text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-['Instrument_Sans'] leading-normal mx-auto">
            Here's what others have experienced working with Future
            Professionals Ltd.
          </p>
        </div>

        {/* Testimonial display - desktop vs mobile */}
        {isMobile ? (
          <MobileTestimonials testimonials={testimonials} />
        ) : (
          <DesktopTestimonials testimonials={testimonials} />
        )}
      </div>
    </section>
  );
};

// Mobile version with horizontal scrolling
const MobileTestimonials = ({ testimonials }) => {
  return (
    <div className="w-full overflow-x-auto pb-6">
      <div className="inline-flex gap-4 px-2 min-w-max">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-72 flex-shrink-0">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Desktop version with grouped layout
const DesktopTestimonials = ({ testimonials }) => {
  return (
    <div className="self-stretch flex flex-row gap-5">
      {/* Group 1: 1st and 2nd */}
      <div className="flex flex-col gap-5 justify-start">
        <TestimonialCard {...testimonials[0]} />
        <TestimonialCard {...testimonials[1]} />
      </div>

      {/* Group 2: 3rd only */}
      <div className="flex justify-center w-full">
        <TestimonialCard {...testimonials[2]} />
      </div>

      {/* Group 3: 4th and 5th */}
      <div className="flex flex-col gap-5 justify-end">
        <TestimonialCard {...testimonials[3]} />
        <TestimonialCard {...testimonials[4]} />
      </div>
    </div>
  );
};

const TestimonialCard = ({ rating, content, author, position }) => {
  return (
    <div className="flex-1 min-w-[270px] self-stretch p-4 md:p-5 bg-blue-50 rounded-[20px] outline-[6px] outline-offset-[-6px] outline-white flex flex-col justify-between items-start gap-4 md:gap-6">
      <div className="px-3 md:px-4 py-1 md:py-2 rounded-full outline-1 outline-neutral-400 inline-flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-2 h-2 md:w-3 md:h-3 ${
              i < rating ? "text-orange-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-neutral-800 text-sm md:text-base font-normal font-['Instrument_Sans'] leading-tight">
        {content}
      </p>

      <div className="inline-flex justify-start items-start gap-2">
        <div className="w-8 h-8 md:w-9 md:h-9 bg-zinc-300 rounded-full flex justify-center items-center">
          <span className="text-gray-500 text-xs md:text-sm font-medium">
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div className="inline-flex flex-col justify-start items-start">
          <div className="text-neutral-800 text-xs md:text-sm font-semibold font-['Bricolage_Grotesque'] leading-tight">
            {author}
          </div>
          <div className="text-neutral-800 text-xs font-normal font-['Instrument_Sans'] leading-none">
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample testimonial data
const testimonials = [
  {
    rating: 5,
    content:
      "FPL helps us build a strong team. Their consultants understand our needs and provide high-caliber candidates. Highly professional.",
    author: "Clara Johnson",
    position: "HR Manager",
  },
  {
    rating: 5,
    content:
      "Their support goes beyond expectations. We rely on them to deliver talent quickly and efficiently. A real game changer.",
    author: "Michael Smith",
    position: "Talent Lead",
  },
  {
    rating: 5,
    content:
      "FPL provided expert insights and a deep understanding of our industry. They helped us grow with the right people.",
    author: "Sarah Williams",
    position: "CEO",
  },
  {
    rating: 5,
    content:
      "The professionalism and dedication from FPL is unmatched. We value their partnership greatly and see great long-term potential.",
    author: "David Brown",
    position: "CTO",
  },
  {
    rating: 5,
    content:
      "Thanks to FPL, our team is more capable than ever. They truly understand people and business needs.",
    author: "Jessica Lee",
    position: "Operations Manager",
  },
];

export default TestimonialsSection;
