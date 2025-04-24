import React from "react";
import { assets } from "../assets/assets";

const CTASection = () => {
  return (
    <section
      className="pb-16"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className=" flex items-center justify-center px-20">
        <div
          className="max-w-4xl w-full  rounded-lg text-center p-12 shadow-lg"
          style={{
            backgroundColor: "var(--color-graydark)",
            backgroundImage: `url(${assets.white_noise})`,
          }}
        >
          <div className="mb-2 text-white text-base font-semibold font-['Bricolage_Grotesque'] ">
            GET STARTED TODAY
          </div>

          <h1 className="text-5xl font-bold font-['Bricolage_Grotesque']  text-white mb-4">
            Find Your Perfect Match
          </h1>

          <p className="text-lg text-white font-normal font-['Instrument_Sans'] leading-normal mb-8">
            Ready to find the perfect candidate or take the next step in your
            career?
          </p>

          <button className="bg-green-200 shadow-[4px_4px_0px_0px_rgba(241,244,255,1.00)] hover:bg-green-300 text-gray-800 font-medium py-2 px-6 rounded-full inline-flex items-center transition-colors duration-200">
            Sign me up
            <img
              src={assets.arrowcircleupright}
              alt="arrow_sign"
              className="ml-2 w-5 h-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
