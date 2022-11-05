import { useState } from "react";

import Header from "./Header.jsx";

const HeaderContainer = () => {
  const [handleToggle, setHandleToggle] = useState(false);

  const navs = [
    { text: "Login", url: "/api/login" },
    { text: "Register", url: "/api/register" },
    { text: "Balance charge", url: "/balance/charge" },
    { text: "Expenses", url: "/expenses" },
    { text: "Balance", url: "/balance" },
    { text: "Movements", url: "/movements" },
    { text: "Transfers", url: "/transfers" },
  ];

  return (
    <>
      <Header
        navs={navs}
        handleToggle={handleToggle}
        setHandleToggle={setHandleToggle}
      />
    </>
  );
};

export default HeaderContainer;
