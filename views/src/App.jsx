import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Layout from "./Components/Layout/Layout";
import UserProfile from "./Components/User/UserProfile";
import FormLoginRegister from "./Components/Forms/FormLoginRegister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/user/profile/" element={<UserProfile />} />
        <Route path="/login" element={<FormLoginRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
