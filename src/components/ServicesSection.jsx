import React from "react";
import Marquee from "react-fast-marquee";
import { assets } from "../assets/assets";

const ServicesSection = () => {
  return (
    <section
      className="py-16 px-4"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className="mx-auto mb:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-neutral-800 text-base font-semibold font-['Bricolage_Grotesque'] mb-2">
            OUR SERVICES
          </div>
          <h2 className="text-5xl text-neutral-800 font-bold font-['Bricolage_Grotesque'] leading-[62.4px] mb-6">
            Tailored Recruitment Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-800 text-lg font-normal font-['Instrument_Sans'] leading-normal">
            Every company is different. Every professional is unique. That's why
            we offer tailored recruitment solutions to suit your needs however
            specific they may be.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-md outline-[6px] outline-offset-[-6px] outline-white text-center"
              style={{ backgroundColor: "var(--color-background)" }}
            >
              <div className={`mb-4 ${service.color}`}>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-12 w-12 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Industry Tags */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Marquee>
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex mx-4 px-6 py-3 gap-3 bg-white rounded-[100px] shadow-md text-gray-700 text-sm font-medium whitespace-nowrap overflow-hidden"
              >
                <span className="w-5 h-5 mx-auto">{industry.icon}</span>
                <span className="text-neutral-800 text-base font-semibold font-['Instrument_Sans']">
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

// Service cards list
const services = [
  {
    title: "Permanent Recruitment",
    icon: assets.permanent_icon,
    color: "text-blue-500",
    description:
      "We specialize in finding top-tier talent for permanent positions, ensuring a perfect fit for both clients and candidates.",
  },
  {
    title: "Temporary Recruitment",
    icon: assets.temporary_icon,
    color: "text-green-500",
    description:
      "Our temporary recruitment solutions provide flexibility and access to skilled professionals for short-term or project-based roles.",
  },
  {
    title: "Contractual Recruitment",
    icon: assets.contractual_icon,
    color: "text-orange-500",
    description:
      "We connect businesses with specialized talent for specific projects, offering both clients and candidates tailored solutions.",
  },
];

// Industry icons
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
