import React from "react";
import FooterContainer from "../../Components/Footer/FooterContainer.jsx";
import { FormLogin } from "../../Components/Forms/formLogin.jsx";
import FormLoginRegister from "../../Components/Forms/FormLoginRegister.jsx";
import HeaderContainer from "../../Components/Header/HeaderContainer.jsx";

const LoginPage = () => {
  return (
    <>
      <HeaderContainer />
      <FormLoginRegister />
      <FooterContainer />
    </>
  );
};

export default LoginPage;
