import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">
              Kritik <span className="text-yellow-400">Dev.</span>
            </span>
          </div>
          <div className="flex">
            <div className="hidden md:flex md:items-center space-x-4">
              <Link
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                activeClass="bg-gray-900 text-white"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                activeClass="bg-gray-900 text-white"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
              >
                About
              </Link>
              <Link
                to="skill"
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                activeClass="bg-gray-900 text-white"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Skill
              </Link>
              <Link
                to="project"
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                activeClass="bg-gray-900 text-white"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Project
              </Link>
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                activeClass="bg-gray-900 text-white"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-white inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            <Link
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              activeClass="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              activeClass="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
            >
              About
            </Link>
            <Link
              to="skill"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              activeClass="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skill
            </Link>
            <Link
              to="project"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              activeClass="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Project
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              activeClass="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
