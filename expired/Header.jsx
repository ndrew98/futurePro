import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="h-16 px-4 sm:px-6 md:px-10 lg:px-20 py-3 flex justify-between items-center shadow-sm fixed z-50 top-0 w-full"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
        backgroundColor: "var(--color-background)",
      }}
    >
      <div className="flex items-center">
        <Link>
          <img
            className="w-12 sm:w-14 md:w-16 h-8 sm:h-9 md:h-10"
            src={assets.company_logo}
            alt="Future Professionals"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-neutral-800" />
        ) : (
          <Menu className="w-6 h-6 text-neutral-800" />
        )}
      </button>

      {/* Desktop Nav - Hidden on mobile */}
      <div className="hidden md:flex justify-start items-center gap-3 lg:gap-6">
        <div className="self-stretch flex justify-start items-center">
          <div className="self-stretch px-1 lg:px-3 flex justify-center items-center gap-2 lg:gap-5">
            <NavLink
              to="/"
              className="justify-start text-neutral-800 text-sm lg:text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              Home
            </NavLink>
            <NavLink
              to="/job-board"
              className="justify-start text-neutral-800 text-sm lg:text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              Job Board
            </NavLink>
            <NavLink
              to="/employers"
              className="justify-start text-neutral-800 text-sm lg:text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              For Employers
            </NavLink>
            <NavLink
              to="/jobseekers"
              className="justify-start text-neutral-800 text-sm lg:text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              For Jobseekers
            </NavLink>
            <NavLink
              to="/about"
              className="justify-start text-neutral-800 text-sm lg:text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className="justify-start text-neutral-800 text-sm lg:text-base font-medium font-['Bricolage_Grotesque'] leading-snug"
            >
              Blog
            </NavLink>
          </div>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="flex justify-start items-center gap-2 lg:gap-4">
          <div className="px-3 lg:px-6 py-1 lg:py-2 bg-white rounded-full shadow-[2px_2px_0px_0px_rgba(28,35,35,1.00)] md:shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-2">
            <div className="justify-start text-neutral-800 text-sm lg:text-base font-medium font-['Bricolage_Grotesque'] leading-tight">
              Login
            </div>
          </div>
          <div className="px-3 lg:px-6 py-1 lg:py-2 bg-green-300 rounded-full shadow-[2px_2px_0px_0px_rgba(28,35,35,1.00)] md:shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-2">
            <div className="justify-start text-neutral-800 text-sm lg:text-base font-medium font-['Bricolage_Grotesque'] leading-tight">
              Signup
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Width Dropdown */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-lg py-4 px-6 z-40"
          style={{
            backgroundImage: `url(${assets.white_noise})`,
            backgroundColor: "var(--color-background)",
          }}
        >
          <NavLink
            to="/"
            className="block py-3 text-neutral-800 font-medium font-['Bricolage_Grotesque'] border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/job-board"
            className="block py-3 text-neutral-800 font-medium font-['Bricolage_Grotesque'] border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Job Board
          </NavLink>
          <NavLink
            to="/employers"
            className="block py-3 text-neutral-800 font-medium font-['Bricolage_Grotesque'] border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            For Employers
          </NavLink>
          <NavLink
            to="/jobseekers"
            className="block py-3 text-neutral-800 font-medium font-['Bricolage_Grotesque'] border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            For Jobseekers
          </NavLink>
          <NavLink
            to="/about"
            className="block py-3 text-neutral-800 font-medium font-['Bricolage_Grotesque'] border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/blog"
            className="block py-3 text-neutral-800 font-medium font-['Bricolage_Grotesque'] border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </NavLink>

          <div className="mt-6 flex flex-col space-y-3">
            <div className="py-2 bg-white rounded-full shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-offset-[-1px] outline-neutral-800 flex justify-center items-center">
              <div className="text-neutral-800 text-base font-medium font-['Bricolage_Grotesque']">
                Login
              </div>
            </div>
            <div className="py-2 bg-green-300 rounded-full shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-offset-[-1px] outline-neutral-800 flex justify-center items-center">
              <div className="text-neutral-800 text-base font-medium font-['Bricolage_Grotesque']">
                Signup
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
