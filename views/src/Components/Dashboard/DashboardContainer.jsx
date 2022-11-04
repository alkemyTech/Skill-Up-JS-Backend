import { useState } from "react";
import Dashboard from "./Dashboard";

const DashboardContainer = () => {
  const [state] = useState('Dashboard')

  return (
    <>
      <Dashboard state={state}/>
    </>
  );
};

export default DashboardContainer;
