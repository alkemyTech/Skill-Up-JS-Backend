import HeaderContainer from "../../Components/Header/HeaderContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";
import {motion} from 'framer-motion';
const TransferPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <h1 className="text-4xl font-bold">Transfer balance to another user..</h1>
      </main>
      <FooterContainer />
    </motion.div>
  );
};

export default TransferPage;
