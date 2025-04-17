import React from "react";
import { Search, Briefcase } from "lucide-react";

const HeroSection1 = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Connecting <span className="text-blue-500">Talents</span> with{" "}
              <span className="text-blue-500">Opportunity</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We help professionals and businesses thrive through tailored
              recruitment solutions across London and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-green-500 text-white rounded-full flex items-center gap-2 hover:bg-green-600 transition">
                I'm Hiring
                <Briefcase className="h-5 w-5" />
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full flex items-center gap-2 hover:bg-gray-50 transition">
                Find a Job
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full opacity-70 z-0"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-100 rounded-full opacity-70 z-0"></div>

            {/* Professionals images with stats */}
            <div className="relative z-10 flex">
              <div className="bg-pink-100 rounded-3xl overflow-hidden p-4 mr-4">
                <img
                  src="/api/placeholder/300/400"
                  alt="Professional"
                  className="rounded-2xl mb-4"
                />
                <div className="bg-white p-3 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Full time</div>
                  <div className="flex flex-col">
                    <span>Experience</span>
                    <div className="flex">
                      <span className="text-orange-500">★★★★★</span>
                    </div>
                    <span>Work Relevance</span>
                    <div className="flex">
                      <span className="text-orange-500">★★★★★</span>
                    </div>
                    <span>Skills</span>
                    <div className="flex">
                      <span className="text-orange-500">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 rounded-3xl overflow-hidden p-4">
                <img
                  src="/api/placeholder/300/400"
                  alt="Professional"
                  className="rounded-2xl mb-4"
                />
                <div className="bg-white p-3 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Part time</div>
                  <div className="flex flex-col">
                    <span>Experience</span>
                    <div className="flex">
                      <span className="text-orange-500">★★★★★</span>
                    </div>
                    <span>Work Relevance</span>
                    <div className="flex">
                      <span className="text-orange-500">★★★★★</span>
                    </div>
                    <span>Skills</span>
                    <div className="flex">
                      <span className="text-orange-500">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center mt-16 gap-8 md:gap-16">
          <div className="text-center">
            <div className="font-bold text-2xl md:text-3xl">20+</div>
            <div className="text-gray-600">Years Combined Expertise</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-2xl md:text-3xl">1000+</div>
            <div className="text-gray-600">Successful Placements</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
