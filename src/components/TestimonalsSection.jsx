import React from "react";

const TestimonialsSection = () => {
  return (
    <section
      className="py-16 "
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-500 mb-2">
            WHAT PEOPLE SAY ABOUT US
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real People. Real Results.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here's what others have experienced working with Future
            Professionals Ltd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ rating, content, author, position }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-orange-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-600 mb-4">{content}</p>

      <div className="flex items-center">
        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
          <span className="text-gray-500 font-medium">
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-gray-500">{position}</div>
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
      "FPL helps us build a strong team. Their consultants understand our needs and provide high-caliber candidates. Highly professional.",
    author: "Clara Johnson",
    position: "HR Manager",
  },
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
      "FPL helps us build a strong team. Their consultants understand our needs and provide high-caliber candidates. Highly professional.",
    author: "Clara Johnson",
    position: "HR Manager",
  },
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
      "FPL helps us build a strong team. Their consultants understand our needs and provide high-caliber candidates. Highly professional.",
    author: "Clara Johnson",
    position: "HR Manager",
  },
];

export default TestimonialsSection;
