import Navbar from "./components/Navbar.jsx";
import Logo from "./components/Logo.jsx";
import Toggle from "./components/Toggle.jsx";

const Header = ({ navs, handleToggle, setHandleToggle }) => {
  return (
    <header className="p-6 lg:px-16 flex flex-col lg:flex-row lg:items-center justify-between border-b">
      <div className="flex justify-between">
        <Logo />
        <div className="flex items-center">
          <Toggle
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
          />
        </div>
      </div>
      <Navbar navs={navs} handleToggle={handleToggle} />
    </header>
  );
};

export default Header;
