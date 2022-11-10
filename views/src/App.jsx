import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import UserProfile from "./Components/User/UserProfile";
import FormLoginRegister from "./Components/Forms/FormLoginRegister";
import LoginPage from "./pages/LoginPage";
import About from "./Components/About/About";


function App() {
  return (
    <Routes>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
