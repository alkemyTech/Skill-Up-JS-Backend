import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import UserProfile from "./Components/User/UserProfile";
import FormLoginRegister from "./Components/Forms/FormLoginRegister";
import LoginPage from "./pages/LoginPage";
import About from "./Components/About/About";
import MovementPage from "./pages/MovementPage";
import MovementsPage from "./pages/MovementsPage";
import BalanceChargePage from "./pages/BalanceChargePage"
import ExpensePage from "./pages/ExpensePage";
import TransferPage from "./pages/TransferPage";


function App() {
  return (
    <Routes>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/movements" element={<MovementsPage />} />
      <Route path="/movements/:id" element={<MovementPage />} />
      <Route path="/charge" element={<BalanceChargePage />}/>
      <Route path="/expense" element={<ExpensePage />} />
      <Route path="/transfer" element={<TransferPage />} />
    </Routes>
  );
}

export default App;
