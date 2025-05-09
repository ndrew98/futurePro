import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="w-full px-4 py-12 md:px-20 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-8"
      style={{
        backgroundImage: `url(${assets.black_noise})`,
        backgroundColor: "var(--color-graydark)",
      }}
    >
      {/* Logo and Copyright */}
      <div className="flex flex-col items-start gap-6">
        <img
          src={assets.footer_company_logo}
          alt="Company Logo"
          className="w-72 h-40"
        />
        <div className="text-blue-50 text-xs leading-none space-y-1">
          <div>© 2025 Future Professionals Ltd. All rights reserved.</div>
          <div>Registered in England & Wales.</div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col gap-4">
        <h3 className="text-blue-50 text-base font-semibold">Quick Links</h3>
        <div className="flex flex-col gap-1">
          {["Home", "About Us", "Our Services", "Job Board"].map(
            (link, idx) => (
              <a
                key={idx}
                href="#"
                className="text-blue-50 text-sm hover:text-blue-300"
              >
                {link}
              </a>
            )
          )}
        </div>
      </div>

      {/* Get in Touch */}
      <div className="flex flex-col gap-4">
        <h3 className="text-blue-50 text-base font-semibold">Get in Touch</h3>
        <div className="space-y-3 text-blue-50 text-sm">
          <div className="flex gap-2 items-start">
            <MapPin className="w-5 h-5 text-blue-50" />
            <p>9-17 Queens Court, Eastern Road, Romford, Essex RM1 3NG</p>
          </div>
          <div className="flex gap-2 items-center">
            <Clock className="w-5 h-5 text-blue-50" />
            <p>MON – FRI : 08:00am – 05:00pm</p>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="w-5 h-5 text-blue-50" />
            <p>020 3815 9492</p>
          </div>
          <div className="flex gap-2 items-center">
            <Mail className="w-5 h-5 text-blue-50" />
            <p>info@futureprofessionalsltd.co.uk</p>
          </div>
        </div>
      </div>

      {/* Connect With Us */}
      <div className="flex flex-col gap-4">
        <h3 className="text-blue-50 text-base font-semibold">
          Connect With Us
        </h3>
        <div className="flex gap-4 text-sm text-blue-50">
          {["LinkedIn", "Facebook", "Instagram"].map((platform, idx) => (
            <a key={idx} href="#" className="hover:text-blue-300">
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
