import DashboardContainer from "../../Components/Dashboard/DashboardContainer.jsx";
import FooterContainer from "../../Components/Footer/FooterContainer.jsx";
import HeaderContainer from "../../Components/Header/HeaderContainer.jsx";

const DashboardPage = () => {
  return (
    <>
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <h1 className="text-4xl font-bold">My Dashboard</h1>
        <DashboardContainer />
      </main>
      <FooterContainer />
    </>
  );
};

export default DashboardPage;
