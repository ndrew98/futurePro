import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div
        className="w-full h-80 px-20 py-12 inline-flex justify-between items-start"
        style={{
          backgroundImage: `url(${assets.black_noise})`,
          backgroundColor: "var(--color-graydark)",
        }}
      >
        <div className=" inline-flex flex-col justify-start items-start gap-6">
          <img
            src={assets.footer_company_logo}
            alt=""
            className="mx-auto h-36"
          />

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
              <div>
                <img src={assets.mappin} alt="" />
              </div>
              <div className="flex-1 justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                9-17 Queens Court, Eastern Road, Romford, Essex RM1 3NG
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div>
                <img src={assets.clock} alt="" />
              </div>
              <div className="flex-1 justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                MON – FRI : 08:00am – 05:00pm
              </div>
            </div>
            <div className="inline-flex justify-start items-center gap-2.5">
              <div>
                <img src={assets.phone} alt="" />
              </div>
              <div className="justify-start text-blue-50 text-sm font-normal font-['Instrument_Sans'] leading-tight">
                020 3815 9492
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div>
                <img src={assets.envelope} alt="" />
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
              <p>
                <a
                  href="#"
                  className="text-white text-sm font-normal font-['Instrument_Sans'] leading-tight"
                >
                  LinkedIn
                </a>
                <span className="mx-2 text-white">|</span>
                <a
                  href="#"
                  className="text-white text-sm font-normal font-['Instrument_Sans'] leading-tight"
                >
                  Facebook
                </a>
                <span className="mx-2 text-white">|</span>
                <a
                  href="#"
                  className="text-white text-sm font-normal font-['Instrument_Sans'] leading-tight"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
