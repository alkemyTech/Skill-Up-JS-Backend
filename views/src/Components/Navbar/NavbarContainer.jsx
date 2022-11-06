import React from "react";
import { Link } from "react-router-dom";

const NavbarContainer = () => {
  return (
    <>
      <Link className="block py-2 px-4 text-sm hover:text-blue-500 duration-200">
        Login
      </Link>
      <Link className="block py-2 px-4 text-sm hover:text-blue-500 duration-200">
        Signup
      </Link>
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
    </>
  );
};

export default NavbarContainer;
