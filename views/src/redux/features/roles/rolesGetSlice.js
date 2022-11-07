import { getUsers } from "../users/usersGetSlice";
import { addRoles } from "./rolesSlice";

export const createRoles = (value) => {
 return async(dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/roles', value)
    dispatch(addRoles(res.data));
    dispatch(getUsers);
  } catch (err) {
    console.log(err)
  };
 };
};