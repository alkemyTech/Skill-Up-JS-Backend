import { useState } from "react";
import { MdOutlineSpaceDashboard, MdAttachMoney, MdMoneyOff } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { RiArrowUpDownLine } from "react-icons/ri";
import Header from "./Header.jsx";

const HeaderContainer = () => {
  const [handleToggle, setHandleToggle] = useState(false);

  const navs = [
    {
      text: "Dashboard",
      url: "/dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      text: "Movements",
      url: "/movements",
      icon: <RiArrowUpDownLine />,
    },
    { text: "Balance charge", url: "/charge", icon: <MdAttachMoney /> },
    { text: "Expense", url: "/expense", icon: <MdMoneyOff /> },
    { text: "Transfer", url: "/transfer", icon: <BiTransfer /> },
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
