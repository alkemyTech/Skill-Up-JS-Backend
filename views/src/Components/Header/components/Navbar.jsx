import { Link } from "react-router-dom";

const Navbar = ({ navs, handleToggle }) => {
  return (
    <nav
      className={`lg:flex items-center ${
        handleToggle ? "flex" : "hidden"
      } gap-4 lg:flex-row lg:text-left flex-col w-full justify-between`}
    >
      <div className="flex flex-col w-full lg:flex-row gap-6">
        {navs.map(({ text, url }) => (
          <Link
            to={url}
            key={text}
            className="duration-200 hover:text-teal-500 border-b lg:border-none flex"
          >
            {text}
          </Link>
        ))}
      </div>
      <div className="flex justify-end w-full lg:w-fit gap-4">
        <Link
          className="py-4 px-3 hover:text-teal-500 duration-200"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          to="/login"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
