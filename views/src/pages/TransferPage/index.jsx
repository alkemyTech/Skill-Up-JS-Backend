import HeaderContainer from "../../Components/Header/HeaderContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";

const TransferPage = () => {
  return (
    <>
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <h1 className="text-4xl font-bold">Transfer balance to another user..</h1>
      </main>
      <FooterContainer />
    </>
  );
};

export default TransferPage;
