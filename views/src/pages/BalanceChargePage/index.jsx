import HeaderContainer from "../../Components/Header/HeaderContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";

const BalanceChargePage = () => {
  return (
    <>
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <h1 className="text-4xl font-bold">Charge balance to your wallet.</h1>
      
      </main>
      <FooterContainer />
    </>
  );
};

export default BalanceChargePage;
