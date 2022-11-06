import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "./NavbarContainer";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  const [state, setState] = useState(false);
  const hiddenClick = () => {
    setState(!state);
  };

  return (
    <nav className="shadow border-t p-6">
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
              <Link className="block py-2 px-4 text-sm hover:text-blue-500 duration-200">
                Balance charge
              </Link>
              <Link className="block py-2 px-4 text-sm hover:text-blue-500 duration-200">
                Expenses
              </Link>
              <Link className="block py-2 px-4 text-sm hover:text-blue-500 duration-200">
                Balance
              </Link>
              <Link className="block py-2 px-4 text-sm hover:text-blue-500 duration-200">
                Movements
              </Link>
              <Link className="block py-2 px-4 text-sm hover:text-blue-500 duration-200">
                Transfers
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link className="py-4 px-3 hover:text-blue-500 duration-200">Login</Link>
            <Link className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Signup
            </Link>
          </div>
          <div className="md:hidden flex-items-center">
            <button onClick={hiddenClick} className="mobile-menu button">
              <BiMenuAltLeft className="mt-4 w-6 h-6 hover:text-blue-500 duration-200" />
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden ml-5 w-fit">
        {state ? <NavbarContainer /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
