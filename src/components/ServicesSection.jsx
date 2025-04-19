import React from "react";
import { Building, Clock, FileText } from "lucide-react";
import Marquee from "react-fast-marquee";
import { assets } from "../assets/assets";

const ServicesSection = () => {
  return (
    <section
      className="py-16 "
      style={{ backgroundColor: "var( --color-background)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-500 mb-2">OUR SERVICES</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tailored Recruitment Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Every company is different. Every professional is unique. That's why
            we offer tailored recruitment solutions to suit your needs however
            specific they may be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Permanent Recruitment */}
          <div
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <div className="text-blue-500 mb-4">
              <img
                src={assets.permanent_icon}
                alt=""
                className="h-12 w-12 mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Permanent Recruitment</h3>
            <p className="text-gray-600">
              We specialize in finding top-tier talent for permanent positions,
              ensuring a perfect fit for both clients and candidates.
            </p>
          </div>

          {/* Temporary Recruitment */}
          <div
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <div className="text-green-500 mb-4">
              <img
                src={assets.temporary_icon}
                alt=""
                className="h-12 w-12 mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Temporary Recruitment</h3>
            <p className="text-gray-600">
              Our temporary recruitment solutions provide flexibility and access
              to skilled professionals for short-term or project-based roles.
            </p>
          </div>

          {/* Contractual Recruitment */}
          <div
            className=" p-8 rounded-xl shadow-md border border-gray-100 text-center "
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <div className="text-orange-500 mb-4 text-center">
              <img
                src={assets.contractual_icon}
                alt=""
                className="h-12 w-12 mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Contractual Recruitment</h3>
            <p className="text-gray-600">
              We connect businesses with specialized talent for specific
              projects, offering both clients and candidates tailored solutions.
            </p>
          </div>
        </div>

        {/* Industry icons */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Marquee>
            {industries.map((industry, index) => (
              <div
                key={index}
                className="mx-4 px-6 py-3 bg-white shadow-md rounded-full text-gray-700 text-sm font-medium whitespace-nowrap"
              >
                {industry.icon}
                {industry.name}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

// Industry list with icons
const industries = [
  {
    name: "Construction",
    icon: <Building className="h-5 w-5 text-gray-500" />,
  },
  {
    name: "Healthcare",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
    ),
  },
  {
    name: "Finance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Education",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    name: "Legal Services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
  {
    name: "Hospitality",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
        />
      </svg>
    ),
  },
];

export default ServicesSection;
