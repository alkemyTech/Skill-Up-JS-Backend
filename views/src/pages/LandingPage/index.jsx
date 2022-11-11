import Landing from "../../Components/Landing/Landing.jsx";
import FooterContainer from "../../Components/Footer/FooterContainer.jsx";
import HeaderContainer from "../../Components/Header/HeaderContainer.jsx";
import {motion} from 'framer-motion';

const LandingPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <HeaderContainer />
      <Landing />
      <FooterContainer />
    </motion.div>
  );
};

export default LandingPage;