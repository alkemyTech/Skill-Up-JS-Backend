import HeaderContainer from "../../Components/Header/HeaderContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";
import FormPayment from "../../Components/Forms/FormPayment";
import {motion} from 'framer-motion';
const ExpensePage = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
       <FormPayment />
      </main>
      <FooterContainer />
    </motion.div>
  );
};

export default ExpensePage;
