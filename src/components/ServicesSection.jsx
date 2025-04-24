import React from "react";
import Marquee from "react-fast-marquee";
import { assets } from "../assets/assets";

// Ensure the assets object contains the required properties
// Example:
// const assets = {
//   stethoscope: "path/to/stethoscope-icon.svg",
//   coins: "path/to/coins-icon.svg",
//   graduationcap: "path/to/graduationcap-icon.svg",
//   gravel: "path/to/gravel-icon.svg",
//   bed: "path/to/bed-icon.svg",
//   hardhat: "path/to/hardhat-icon.svg",
// };

const ServicesSection = () => {
  return (
    <section
      className="py-16 "
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className="mx-auto px-20">
        <div className="text-center mb-12">
          <div className=" text-neutral-800 text-base font-semibold font-['Bricolage_Grotesque'] mb-2">
            OUR SERVICES
          </div>
          <h2 className="text-5xl text-neutral-800 md:text-5xl font-bold font-['Bricolage_Grotesque'] leading-[62.40px] mb-6">
            Tailored Recruitment Solutions
          </h2>
          <p className="max-w-3xl mx-auto self-stretch text-neutral-800 text-lg  font-normal font-['Instrument_Sans'] leading-normal">
            Every company is different. Every professional is unique. That's why
            we offer tailored recruitment solutions to suit your needs however
            specific they may be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Permanent Recruitment */}
          <div
            className=" p-8 rounded-xl shadow-md  outline-[6px] outline-offset-[-6px] outline-white text-center "
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
            className=" p-8 rounded-xl shadow-md  outline-[6px] outline-offset-[-6px] outline-white text-center "
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
            className=" p-8 rounded-xl shadow-md  outline-[6px] outline-offset-[-6px] outline-white text-center "
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
                className="flex mx-4 px-6 py-3 gap-3 bg-white rounded-[100px]  shadow-md  text-gray-700 text-sm font-medium whitespace-nowrap overflow-hidden"
              >
                <span className="w-5 h-5 mx-auto"> {industry.icon}</span>
                <span className="text-center justify-start text-neutral-800 text-base font-semibold font-['Instrument_Sans']">
                  {industry.name}
                </span>
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
    name: "Healthcare",
    icon: <img src={assets.stethoscope} alt="Healthcare" className="h-6 w-6" />,
  },
  {
    name: "Finance",
    icon: <img src={assets.coins} alt="Finance" className="h-6 w-6" />,
  },
  {
    name: "Education",
    icon: (
      <img src={assets.graduationcap} alt="Education" className="h-6 w-6" />
    ),
  },
  {
    name: "Legal Services",
    icon: <img src={assets.gavel} alt="Legal Services" className="h-6 w-6" />,
  },
  {
    name: "Hospitality",
    icon: <img src={assets.bed} alt="Hospitality" className="h-6 w-6" />,
  },
  {
    name: "Industrial",
    icon: <img src={assets.hardhat} alt="Industrial" className="h-6 w-6" />,
  },
  {
    name: "Healthcare",
    icon: <img src={assets.stethoscope} alt="Healthcare" className="h-6 w-6" />,
  },
  {
    name: "Finance",
    icon: <img src={assets.coins} alt="Finance" className="h-6 w-6" />,
  },
];

export default ServicesSection;
