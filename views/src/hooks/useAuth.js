import axios from "axios";
import { endPoints } from "../services/api";
import { useDispatch } from "react-redux";

function useAuth() {
  const dispatch = useDispatch();
  const signIn = async (email, password) => {
    const options = {
      Headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    console.log({email, password})
    console.log(endPoints.auth)
    try {
      const { data } = await axios.post(endPoints.auth.login, { email, password }, options);
      console.log({ data });
      if (data) {
        localStorage.setItem("access_token", data.token)
      }
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        throw error;
      }
      throw error;
    }
    await dispatch(getUsers())
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    delete axios.defaults.headers.Authorization;
  };

  return { signIn, logout };
}

export {useAuth}
