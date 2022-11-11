import HeaderContainer from "../../Components/Header/HeaderContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";
import FormTransaction from "../../Components/Forms/FormTransaction"

const TransferPage = () => {
  return (
    <>
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <FormTransaction />
      </main>
      <FooterContainer />
    </>
  );
};

export default TransferPage;
