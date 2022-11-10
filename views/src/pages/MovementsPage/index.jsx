import HeaderContainer from "../../Components/Header/HeaderContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";
import MovementsContainer from "../../Components/Movements/MovementsContainer";

const MovementsPage = () => {
  return (
    <>
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <h1 className="text-4xl font-bold">My Movements</h1>
        <MovementsContainer />
      </main>
      <FooterContainer />
    </>
  );
};

export default MovementsPage;
