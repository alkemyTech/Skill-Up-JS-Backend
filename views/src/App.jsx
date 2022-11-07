import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
