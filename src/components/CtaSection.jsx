import React from "react";
import { ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section
      className="py-16 "
      style={{ backgroundColor: "var( --color-background)" }}
    >
      <div className=" flex items-center justify-center p-4">
        <div
          className="max-w-4xl w-full  rounded-lg text-center p-12 shadow-lg"
          style={{ backgroundColor: "var(--color-graydark)" }}
        >
          <div className="mb-2 text-gray-400 uppercase text-sm font-medium tracking-wider">
            GET STARTED TODAY
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Find Your Perfect Match
          </h1>

          <p className="text-gray-300 mb-8">
            Ready to find the perfect candidate or take the next step in your
            career?
          </p>

          <button className="bg-green-200 hover:bg-green-300 text-gray-800 font-medium py-2 px-6 rounded-full inline-flex items-center transition-colors duration-200">
            Sign me up
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
