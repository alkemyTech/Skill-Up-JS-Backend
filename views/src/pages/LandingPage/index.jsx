import Landing from "../../Components/Landing/Landing.jsx";
import FooterContainer from "../../Components/Footer/FooterContainer.jsx";
import HeaderContainer from "../../Components/Header/HeaderContainer.jsx";
import Swal from "sweetalert2";

const LandingPage = ({ fireSwal }) => {
  const fire = async () => {
    await Swal.fire({
      position: "start",
      icon: "error",
      showCancelButton: false,
      title: `Ups, we can't find that path you're searching for`,
      showConfirmButton: false,
      timer: 1600,
    });
    window.location.assign("http://127.0.0.1:5173")
  }
    return (
      <>
        {fireSwal && fire()}
        <HeaderContainer />
        <Landing />
        <FooterContainer />
      </>
    );
  };

export default LandingPage;