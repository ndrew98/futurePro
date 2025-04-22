import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-80 px-20 py-12 inline-flex justify-between items-start">
        <div className="w-72 inline-flex flex-col justify-start items-start gap-6">
          <img className="w-72 h-40" src="https://placehold.co/280x161" />
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-start text-blue-50 text-xs font-normal font-['Instrument_Sans'] leading-none">
              © 2025 Future Professionals Ltd. All rights reserved.
            </div>
            <div className="self-stretch justify-start text-blue-50 text-xs font-normal font-['Instrument_Sans'] leading-none">
              Registered in England & Wales.
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-blue-50 text-base font-semibold font-['Bricolage_Grotesque'] leading-tight">
            Quick Links
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="inline-flex justify-center items-center gap-2.5">
              <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                Home
              </div>
            </div>
            <div className="inline-flex justify-center items-center gap-2.5">
              <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                About Us
              </div>
            </div>
            <div className="inline-flex justify-center items-center gap-2.5">
              <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                Our Services
              </div>
            </div>
            <div className="inline-flex justify-center items-center gap-2.5">
              <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                Job Board
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-blue-50 text-base font-semibold font-['Bricolage_Grotesque'] leading-tight">
            Get in Touch
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch inline-flex justify-start items-start gap-2.5">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-5 h-5 left-0 top-0 absolute" />
                <div className="w-3.5 h-4 left-[3.12px] top-[1.25px] absolute bg-blue-50" />
              </div>
              <div className="flex-1 justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                9-17 Queens Court, Eastern Road, Romford, Essex RM1 3NG
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-5 h-5 left-0 top-0 absolute" />
                <div className="w-4 h-4 left-[1.88px] top-[1.88px] absolute bg-blue-50" />
              </div>
              <div className="flex-1 justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                MON – FRI : 08:00am – 05:00pm
              </div>
            </div>
            <div className="inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-5 h-5 left-0 top-0 absolute" />
                <div className="w-4 h-4 left-[2.50px] top-[1.88px] absolute bg-blue-50" />
              </div>
              <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                020 3815 9492
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-5 h-5 left-0 top-0 absolute" />
                <div className="w-4 h-3 left-[1.88px] top-[3.75px] absolute bg-blue-50" />
              </div>
              <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                info@futureprofessionalsltd.co.uk
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-blue-50 text-base font-semibold font-['Bricolage_Grotesque'] leading-tight">
            Connect With Us
          </div>
          <div className="inline-flex justify-start items-start gap-5">
            <div className="flex justify-center items-center gap-2.5">
              <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                LinkedIn
              </div>
            </div>
            <div className="px-3 border-l border-r border-blue-50 flex justify-center items-center gap-2.5">
              <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                Facebook
              </div>
            </div>
            <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
              Instagram
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
