import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="navbar py-4 shadow-sm"
      style={{ backgroundColor: "var( --color-background)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={assets.company_logo}
              alt="Future Professionals"
              className="h-8"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-[12px] lg:16px xl:text-[16px]">
            <NavLink to="/" className="text-black hover:text-blue-600">
              Home
            </NavLink>
            <NavLink to="/job-board" className="text-black hover:text-blue-600">
              Job Board
            </NavLink>
            <NavLink to="/employers" className="text-black hover:text-blue-600">
              For Employers
            </NavLink>
            <NavLink
              to="/jobseekers"
              className="text-black hover:text-blue-600"
            >
              For Jobseekers
            </NavLink>
            <NavLink to="/about" className="text-black hover:text-blue-600">
              About Us
            </NavLink>
            <NavLink to="/blog" className="text-black hover:text-blue-600">
              Blog
            </NavLink>
          </div>

          {/* Auth Buttons - With custom color and dark shadow styling */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/login"
              className="main-button text-black bg-white border border-gray-300 py-2 px-6 rounded-full hover:border-gray-400 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className=" main-button text-black py-2 px-7 transition-colors"
              style={{
                backgroundColor: "#92FFBF",
              }}
            >
              Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t">
            <Link to="/" className="block py-2 text-black hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/job-board"
              className="block py-2 text-black hover:text-blue-600"
            >
              Job Board
            </Link>
            <Link
              to="/employers"
              className="block py-2 text-black hover:text-blue-600"
            >
              For Employers
            </Link>
            <Link
              to="/jobseekers"
              className="block py-2 text-black hover:text-blue-600"
            >
              For Jobseekers
            </Link>
            <Link
              to="/about"
              className="block py-2 text-black hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-black hover:text-blue-600"
            >
              Blog
            </Link>
            <div className="mt-4 flex flex-col space-y-2">
              <Link
                to="/login"
                className="text-center text-black border  border-gray-300 py-2 rounded-full hover:border-gray-400"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 1)" }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-center text-black py-2 rounded-full"
                style={{
                  backgroundColor: "#40ED8D",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 1)",
                }}
              >
                Signup
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
