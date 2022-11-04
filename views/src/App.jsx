import { Routes, Route } from "react-router-dom";
import DashboardContainer from "./Components/Dashboard/DashboardContainer";
import Landing from "./Components/Landing/Landing";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Landing />}/>
      <Route path="/dashboard" element={<DashboardContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
