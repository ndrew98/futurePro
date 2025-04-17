import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="bg-gray-900 text-white py-8 px-6"
      style={{ backgroundColor: "var(--color-graydark)" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {/* Logo section - left column */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img src={assets.company_logo} alt="" />
            </div>
            <h2 className="text-lg font-bold uppercase tracking-wider">
              Future Professionals
            </h2>

            {/* Copyright at bottom */}
            <div className="mt-8 text-xs text-gray-500 text-center">
              © 2025 Future Professionals Ltd. All rights reserved.
              <br />
              Registered in England & Wales
            </div>
          </div>

          {/* Center column - Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                <span>
                  9-17 Queens Court, Eastern Road,
                  <br />
                  Romford, Essex RM1 3NH
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                <span>MON - FRI: 08:00am - 05:00pm</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                <span>020 3815 8402</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                <span>info@futureprofessionalsltd.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Right column - split between Quick Links and Connect With Us */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Job Board
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="text-sm">
              <a href="#" className="hover:text-blue-400">
                LinkedIn
              </a>
              <span className="mx-2 text-gray-500">|</span>
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
              <span className="mx-2 text-gray-500">|</span>
              <a href="#" className="hover:text-blue-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
