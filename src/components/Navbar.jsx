import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="h-16 px-20 py-3 inline-flex justify-between items-center shadow-sm fixed  z-100 top-0 w-full bg-white"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <Link>
        <img
          className="w-16 h-10"
          src={assets.company_logo}
          alt="Future Professionals"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="flex justify-start items-center gap-6">
        <div className="self-stretch flex justify-start items-center">
          <div className="self-stretch px-3 flex justify-center items-center gap-5">
            <NavLink
              to="/"
              className="justify-start text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-snug "
            >
              Home
            </NavLink>
            <NavLink
              to="/job-board"
              className="justify-start text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              Job Board
            </NavLink>
            <NavLink
              to="/employers"
              className="justify-start text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              For Employers
            </NavLink>
            <NavLink
              to="/jobseekers"
              className="justify-start text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              For Jobseekers
            </NavLink>
            <NavLink
              to="/about"
              className="justify-start text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className="justify-start text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              Blog
            </NavLink>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex justify-start items-center gap-4">
          <div className="px-6 py-2 bg-white rounded-[100px] shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-2">
            <div className="justify-start text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-tight">
              Login
            </div>
          </div>
          <div className="px-6 py-2 bg-green-300 rounded-[100px] shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-2">
            <div className="justify-start text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-tight">
              Signup
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
