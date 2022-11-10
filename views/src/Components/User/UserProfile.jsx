import {React, useState, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers,updateUser, } from "../../redux/features/users/usersGetSlice";
import Button from "../Buttons/Button";
import Swal from "sweetalert2";

const UserProfile = () => {

  const user = useSelector(state => state.users.usersList);
  const dispatch = useDispatch(); 
  const [stat, setStat] = useState();
  const [tooglePass, setTooglePass] = useState(false);
  const [isEdited, setIsEdited] = useState(false)
  const [edit,setEdit]= useState(true)
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    setStat({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      image: user.image
    })
  },[user])
  
  const editProfile = () => {
    setEdit(!edit)
    setTooglePass(!tooglePass);
    setStat({
      ...stat,
      password: ""
    }); 
  } 
  const handleChange = (e) => {
    setIsEdited(true)
    if (e.target.name === "file") {
      let supported = ["image/jpeg", "image/jpg", "image/svg+xml", "image/webp", "image/png"].map(img=> img=== e.target.files[0].type );
      if (supported.includes(true)) {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "zcgk2l4m");
       return setStat({
          ...stat,
          image: formData
        });
      } 
      else return 
    }
    setStat({
      ...stat,
      [e.target.name]: e.target.value
    }) 
  }
  const fireSwal = async (type, payload, confirm = null, cancel, time = 1500) => {
    document.getElementById("pass").type="password"
   let popup= await Swal.fire({
      position: "center",
     icon: `${type}`,
     showCancelButton: cancel || false,
      title: `${payload}`,
      showConfirmButton: `${confirm}`, 
      timer: `${time}`,
   });
    if (popup.isConfirmed) {
      if (!isEdited) {
        setStat({ ...stat, password: user.password })
        return
      }
      setIsEdited(false)
      return dispatch(updateUser(stat))
    }
    if (popup.dismiss) {
      isEdited && dispatch(updateUser(stat)) 
      return setIsEdited(false)
    }
    setIsEdited(false)
    return dispatch(updateUser(stat))
  }; 
 
  return (
    <div className="h-[80vh] flex justify-center ">
     <form className="h-full w-[80vw]  flex flex-col  items-center border-2" onChange={(e)=> handleChange(e)}>
        <div className="pt-8 w-9/12 flex flex-row items-center justify-between">
          <div className="sm:ml-20"></div>
                  <h1 className="text-2xl "> Your profile</h1>
          <Button preset="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm  text-center  px-5 py-1.5 "
            type="text" value={`${edit ? "Edit" : "Cancel" }`} event={editProfile}  />
        </div>
        <div className=" mb-0 mt-11  border-t-4 border-2 w-full h-1/6 flex items-center justify-between">
          <div className="h-full w-48 bg-gray-100 flex flex-col">
            <img
              className="w-full object-contain min-h-0"
              src={user.image}
              alt="Profile_image"
            />
          </div>
          <input type="file" className={`w-80  ml-2 ${edit? "hidden": "block"} `} name="file" />
          <div className=" md:ml-20"></div>
        </div>
        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center">
          <label className="pr-10  w-60" htmlFor="firstName">
            Name:
          </label>
        <input
            type="text"
            className="  w-80 border-2 w-fit rounded p-2" 
           value={stat?.firstName}
            name="firstName"
            disabled={edit}
          />
        </div>
        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center ">
          <label className="pr-10   w-60" htmlFor="lastName">
            Last name:
          </label>
          <input
            type="text"
            className=" w-80 border-2 w-fit rounded p-2"
            value={stat?.lastName}
            name="lastName"
            disabled={edit}
          />
        </div>
        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center">
          <label className="pr-10   w-60" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            className=" w-80 border-2 w-fit rounded p-2"
            value={stat?.email}
            name="email"
            disabled={edit}
          />
        </div>
        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center">
          <label className="pr-3 w-60" htmlFor="password" name="pass">
           {tooglePass ? "New password:" : "Password:"}
          </label>
          <input
            type="password"
            id="pass"
            className=" w-80 border-2 w-fit rounded p-2"
            value={edit ? user.password : stat.password}
            placeholder="Enter you new password"
            name="password"
            disabled={edit}
          />
          <h2 className="md: ml-6 md:block hidden">We value your safety. It is and will be encrypted!</h2>
        </div>
        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center">
          <label className="pr-4 md:pr-10 w-60" htmlFor="account">
            Account:
          </label>
          <input
            type="text"
            className=" w-80  "
            value={`$ ${user?.account?.money}`}
            name="account"
            disabled={true}
          />
        </div>
          <Button preset="mt-2 mb-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm  text-center  px-5 py-1.5 "
          type="submit" value="Save changes" event={() => { 
            if (stat.password.length < 1) return fireSwal("warning", "Password won't be changed", true, true, 3500)
            if (isEdited) return fireSwal("success", "Great! Your changes as been saved.")
            return fireSwal("warning", "Nothing to change over here...", false,false, 3000)
            }} /> 
      </form>
    </div>
  );
};

export default UserProfile;
