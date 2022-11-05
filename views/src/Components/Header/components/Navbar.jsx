const Navbar = ({ navs, handleToggle }) => {
  return (
    <nav>
      <ul
        className={`lg:flex ${
          handleToggle ? "flex" : "hidden"
        } gap-4 lg:flex-row lg:text-left flex-col pt-8 lg:pt-0`}
      >
        {navs.map(({ text, url }) => (
          <li key={text}>
            <a
              href={url}
              className="duration-200 hover:text-blue-500 border-b lg:border-none flex py-1"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
