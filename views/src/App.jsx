import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import FooterContainer from "./Components/Footer/FooterContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FooterContainer />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
