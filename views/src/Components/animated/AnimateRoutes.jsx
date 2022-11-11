import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import DashboardPage from "../../pages/DashboardPage";
// import FormLoginRegister from "./Components/Forms/FormLoginRegister";
import LoginPage from "../../pages/LoginPage";
import MovementPage from "../../pages/MovementPage";
import MovementsPage from "../../pages/MovementsPage";
import BalanceChargePage from "../../pages/BalanceChargePage"
import ExpensePage from "../../pages/ExpensePage";
import TransferPage from "../../pages/TransferPage";
import About from '../About/About';
import UserPage from "../../pages/UserPage";

const AnimateRoutes = () => {
    const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/movements" element={<MovementsPage />} />
      <Route path="/movements/:id" element={<MovementPage />} />
      <Route path="/charge" element={<BalanceChargePage />}/>
      <Route path="/expense" element={<ExpensePage />} />
      <Route path="/transfer" element={<TransferPage />} />
      <Route path="*" element={<LandingPage fireSwal={true} />} /> {/* if no route matchs, redirects to landing */}
    </Routes>
  )
}

export default AnimateRoutes;