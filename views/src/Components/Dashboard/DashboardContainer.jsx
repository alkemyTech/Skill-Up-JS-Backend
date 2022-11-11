import Dashboard from "./Dashboard.jsx";
import { useEffect } from "react";
import { getUsers } from "../../redux/features/users/usersGetSlice";
import { useDispatch, useSelector } from "react-redux";

const DashboardContainer = () => {
  const user = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Dashboard user={user}/>
    </>
  );
};

export default DashboardContainer;
