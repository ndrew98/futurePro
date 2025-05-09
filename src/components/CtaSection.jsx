import React from "react";
import { assets } from "../assets/assets";

const CTASection = () => {
  return (
    <section
      className="pb-8 md:pb-16"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      {/* Desktop/Tablet View */}
      <div className="hidden md:flex items-center justify-center px-4 md:px-8 lg:px-20">
        <div
          className="w-full max-w-4xl rounded-lg text-center p-12 shadow-lg"
          style={{
            backgroundColor: "var(--color-graydark)",
            backgroundImage: `url(${assets.white_noise})`,
          }}
        >
          <div className="mb-2 text-white text-base font-semibold font-['Bricolage_Grotesque']">
            GET STARTED TODAY
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold font-['Bricolage_Grotesque'] text-white mb-4">
            Find Your Perfect Match
          </h2>

          <p className="text-lg text-white font-normal font-['Instrument_Sans'] leading-normal mb-8">
            Ready to find the perfect candidate or take the next step in your
            career?
          </p>

          <button className="bg-green-300 shadow-[4px_4px_0px_0px_rgba(241,244,255,1.00)] hover:bg-green-200 text-neutral-800 font-medium py-3 px-6 rounded-full inline-flex items-center gap-2 outline outline-1 outline-offset-[-1px] outline-neutral-800">
            <span className="font-medium font-['Bricolage_Grotesque'] leading-tight">
              Sign me up
            </span>
            <img
              src={assets.arrowcircleupright}
              alt="arrow_sign"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      {/* Mobile View - Based on reference */}
      <div className="md:hidden flex items-center justify-center px-4">
        <div className="w-full px-4 py-12 flex flex-col justify-start items-center gap-12">
          <div
            className="self-stretch px-4 py-20 rounded-3xl flex flex-col justify-start items-center gap-6"
            style={{
              backgroundColor: "var(--color-graydark)",
              backgroundImage: `url(${assets.white_noise})`,
            }}
          >
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex flex-col justify-start items-center gap-2">
                <div className="text-center text-blue-50 text-base font-semibold font-['Bricolage_Grotesque']">
                  GET STARTED TODAY
                </div>
                <h2 className="self-stretch text-center text-blue-50 text-3xl font-bold font-['Bricolage_Grotesque'] leading-10">
                  Find Your Perfect Match
                </h2>
              </div>
              <p className="self-stretch text-center text-blue-50 text-base font-normal font-['Instrument_Sans'] leading-tight">
                Ready to find the perfect candidate or take the next step in
                your career?
              </p>
            </div>
            <button className="px-6 py-3 bg-green-300 rounded-[100px] shadow-[4px_4px_0px_0px_rgba(241,244,255,1.00)] outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-center items-center gap-2">
              <span className="text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-tight">
                Sign me up
              </span>
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-5 h-5 absolute left-[2.25px] top-[2.25px] bg-neutral-800" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
