import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const nav = useNavigate();
  const data = useSelector((data) => {
    return data.allpro.product;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-2xl">MDmart</span>
          </div>
          <div className="flex">
            {/* Hidden on mobile */}
            <div className="hidden md:flex md:items-center">
              <NavLink
                exact
                to="/addnew"
                activeClassName="bg-gray-900 text-white"
                className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
              >
                Addnew
              </NavLink>
              <select
                onChange={(e) => nav(e.target.value)}
                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2"
                style={{ width: '120px' }} // Set fixed width here
              >
                <option value="">Grocery</option>
                <option value="fancy">Fancy</option>
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
              </select>
              <NavLink
                exact
                to="/addcarts"
                activeClassName="bg-gray-900 text-white"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <AddShoppingCartIcon />
                <span className="ml-1">{data.length}</span>
              </NavLink>
            </div>
            {/* Mobile menu toggle */}
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
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <NavLink
              exact
              to="/addnew"
              activeClassName="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Addnew
            </NavLink>
            <select
              onChange={(e) => nav(e.target.value)}
              className="bg-gray-900 text-white px-1 py-2 rounded-md text-sm font-medium ml-2"
              style={{ width: '120px' }} // Set fixed width here
            >
              <option value="">Grocery</option>
              <option value="fancy">Fancy</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
            </select>
            <NavLink
              to="/addcarts"
              activeClassName="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <AddShoppingCartIcon />
              <span className="ml-1">{data.length}</span>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
