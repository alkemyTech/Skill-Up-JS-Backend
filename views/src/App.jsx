import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Layout from "./Components/Layout/Layout";
import UserProfile from "./Components/User/UserProfile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/user/profile/:id" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
