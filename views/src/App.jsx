import "./App.css";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import DashboardContainer from "./Components/Dashboard/DashboardContainer";
import Landing from "./Components/Landing/Landing";
import Layout from "./Components/Layout/Layout";
=======
import DashboardPage from "./pages/DashboardPage";
import FooterContainer from "./Components/Footer/FooterContainer";
>>>>>>> development

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Layout />}>
      <Route index element={<Landing />}/>
      <Route path="/dashboard" element={<DashboardContainer />} />
      </Route>
=======
      <Route path="/" element={<FooterContainer />} />
      <Route path="/dashboard" element={<DashboardPage />} />
>>>>>>> development
    </Routes>
  );
}

export default App;
