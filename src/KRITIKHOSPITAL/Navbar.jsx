import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white md:text-3xl">
            SAHU<span className="text-pink-500">FOUNDATION</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-black font-semibold' : 'text-black hover:text-white'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-black font-semibold' : 'text-black hover:text-white'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-black font-semibold' : 'text-black hover:text-white'
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                isActive ? 'text-black font-semibold' : 'text-black hover:text-white'
              }
            >
              Appointment
            </NavLink>
            <NavLink
              to="/eligibility"
              className={({ isActive }) =>
                isActive ? 'text-black font-semibold' : 'text-black hover:text-white'
              }
            >
              Eligibility
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? 'text-black font-semibold' : 'text-black hover:text-white'
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? 'text-black font-semibold' : 'text-black hover:text-white'
              }
            >
              Team
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-400 to-blue-500 shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            <NavLink to="/" className="text-black hover:text-white" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className="text-black hover:text-white" onClick={toggleMenu}>
              About Us
            </NavLink>
            <NavLink to="/contact" className="text-black hover:text-white" onClick={toggleMenu}>
              Contact Us
            </NavLink>
            <NavLink to="/appointment" className="text-black hover:text-white" onClick={toggleMenu}>
              Appointment
            </NavLink>
            <NavLink to="/eligibility" className="text-black hover:text-white" onClick={toggleMenu}>
              Eligibility
            </NavLink>
            <NavLink to="/service" className="text-black hover:text-white" onClick={toggleMenu}>
              Services
            </NavLink>
            <NavLink to="/team" className="text-black hover:text-white" onClick={toggleMenu}>
              Team
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
