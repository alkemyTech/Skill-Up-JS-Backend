import {React, useState, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers,updateUser } from "../../redux/features/users/usersGetSlice";
import Swal from "sweetalert2";
import { Form, Formik } from "formik";
import FormItem from "../Forms/components/FormItem";
import Botton from "../Buttons/Button";
import { updateSchema } from "../Forms/components/validateSchema";

const UserPerfil = () => {
  const user = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [errFile, setErrFile] = useState(false);
  
  const handleFile = (file) => {
    let supported = ["image/jpeg", "image/jpg", "image/svg+xml", "image/webp", "image/png"].map(img => img === file.type);
    if (supported.includes(true)) {
      console.log("supported")
      let formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "zcgk2l4m");
      setFile(formData);
      setErrFile(false)
    }
    else {
      setErrFile(true)
      setFile("")
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
      <section className="flex flex-col items-center justify-center min-h-[80vh] md:mx-40 mx-10  w-[80vw] bg-gray-100">
    
          <div className="pt-0 w-9/12 flex flex-row items-center justify-between">
          <div className="sm:ml-20"></div>
          <h1 className="text-2xl mb-20 "> Your profile</h1>
          <Botton preset="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm  text-center  px-5 py-1.5 "
            type="text" value="Edit" />     
 </div>
      {user && 
        <Formik
          enableReinitialize={true}
         initialValues={{ firstName: `${user.firstName || ""}`, lastName:`${user?.lastName || ""}`, email: `${user?.email || ""}`, password: "" }} // no me renderizaba el usuario que traía
          validationSchema={updateSchema} 
        onSubmit={(values) => {
          dispatch(updateUser(values, file))
          Swal.fire("Nice! your changes has been saved", undefined, "success")
         } } 
         className="flex flex-row items-center justify-center lg:justify-start"
           >
               
               {(props) => (
                   
                   <Form className="h-[60vh] w-[80vw]  flex flex-col justify-evenly  items-center ">
                       
             <div className=" w-full mt-0 ml-10 flex flex-row">
             <div className="h-full w-48 bg-gray-100 flex flex-row">
             <img
               className="w-full object-contain min-h-0"
               src={user?.image}
               alt="Profile_image"
             />
           </div>       
                           <FormItem
                               classLabel="hidden"
                               classInput="w-[40vw] px-4 py-2 mt-2  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                 type="file"
                 onChange={(e)=> handleFile(e.target.files[0])}
                 name="file"
                />                
                <div className="mr-10">
                <span className={`md:mr-96 ${!errFile && "hidden"} ${errFile && "text-red-900"}`}>Not supported, try another or leave it!</span>
                </div>
             </div>
             <div className="border-2 w-full mt-10">
               <FormItem
                 classLabel="ml-6 mr-20"
                 labelText="Nombre:"
                 classInput="w-[40vw] px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                 type="text"
                 name="firstName"
                 placeholder="Nombre"
               />
             </div>
             <div className="border-2 w-full mt-10">
               <FormItem
                 classLabel="ml-6 mr-20"
                 labelText="Apellido:"
                 classInput="w-[40vw] px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                 type="text"
                 name="lastName"
                 placeholder="Apellido"
               />
             </div>
             <div className="border-2 w-full mt-10">
               <FormItem
                 classLabel="ml-6 mr-20"
                 labelText="Email:"
                 classInput="w-[40vw] ml-6 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                 name="email"
                 type="email"
                 placeholder="email"
               />
             </div>
             <div className="border-2 w-full mt-10">
               <FormItem
                 classLabel="ml-6 mr-20"
                 labelText="Pasword:"
                 classInput="w-[40vw] px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                 name="password"
                 type="password"
                 placeholder="password"
               />
             </div>
 
             <button
                type="submit"
               className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
             >Save changes </button>
           </Form>
         )}
       </Formik>
      }
     
    </section>
  );
};
export default UserPerfil;
