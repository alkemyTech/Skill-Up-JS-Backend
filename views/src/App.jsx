import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import UserProfile from "./Components/User/UserProfile";
import FormLoginRegister from "./Components/Forms/FormLoginRegister";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/login" element={<FormLoginRegister />} />
    </Routes>
  );
}

export default App;
