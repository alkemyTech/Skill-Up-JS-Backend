import HeaderContainer from "../../Components/Header/HeaderContainer.jsx";
import FooterContainer from "../../Components/Footer/FooterContainer.jsx";
import MovementContainer from "../../Components/Movement.jsx/MovementContainer.jsx";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

const MovementPage = () => {
  

  return (
    <>
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <Link
          className="font-bold flex items-center hover:text-teal-600 duration-200"
          to="/dashboard"
        >
          <i className="text-3xl">
            <BsArrowLeftShort />
          </i>
          <p className="text-2xl">Back to Dashboard</p>
        </Link>
        <MovementContainer />
      </main>
      <FooterContainer />
    </>
  );
};

export default MovementPage;
