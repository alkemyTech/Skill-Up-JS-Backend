import { Routes, Route } from "react-router-dom";
import ExampleContainer from "./Components/ExampleComponent/ExampleContainer";
import DashboardContainer from "./Components/Dashboard/DashboardContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExampleContainer />} />
      <Route path="/dashboard" element={<DashboardContainer />} />
    </Routes>
  );
}

export default App;
