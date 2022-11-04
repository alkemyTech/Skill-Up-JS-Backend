import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [state, setState] = useState(false);
  const hiddenClick = () => {
    setState(!state);
  };

  return (
    <nav className="bg-gray-100 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link
                className="flex items-center py-2 px-3 text-gray-700"
                to={""}
              >
               <img
                  className="h-10 w-10 mr-1 mb-2"
                  src={"wallet.png"}
                  alt="logo-wallet"
                /> 
                <span className="font-bold hover:text-teal-700">Wallet</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link className="py-4 px-3 text-gray-700 hover:text-teal-700">
                Features
              </Link>
              <Link className="py-4 px-3 text-gray-700 hover:text-teal-700">
                Pricing
              </Link>
              <Link className="py-4 px-3 text-gray-700 hover:text-teal-700">
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link className="py-4 px-3">Login</Link>
            <Link className="py-1 px-4 bg-teal-600 hover:bg-teal-400 text-gray-900 hover:text-white rounded shadow transition duration-300">
              Signup
            </Link>
          </div>
          <div className="md:hidden flex-items-center">
            <button onClick={hiddenClick} className="mobile-menu button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-4 text-teal-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {state ? (
        <div className="md:hidden ml-5">
          <Link className="block py-2 px-4 text-sm hover:text-teal-700">
            Features
          </Link>
          <Link className="block py-2 px-4 text-sm hover:text-teal-700">
            Pricing
          </Link>
          <Link className="block py-2 px-4 text-sm hover:text-teal-700">
            About
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
