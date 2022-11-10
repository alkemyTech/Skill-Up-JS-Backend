import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../../redux/features/users/usersGetSlice";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Movement = () => {
  const user = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();
  const params = useParams();
  const [currMovement, setCurrMovement] = useState({});

  useEffect(() => {
    setCurrMovement(user?.account?.transaction.find((t) => t.id === params.id));
  }, [setCurrMovement, user]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(currMovement);

  return (
    <div className="flex justify-center">
      {currMovement === undefined ? <Loader /> : <h1>{currMovement.id}</h1>}
    </div>
  );
};

export default Movement;
