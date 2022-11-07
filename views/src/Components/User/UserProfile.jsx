import React from "react";
import image from "../../../public/wallet.png";
import Button from "../Buttons/Button"
const UserProfile = () => {
  const user = {
    firstName: "juan manuel 'el ricky' ",
    lastName: "fernandefuseral",
    email: "fernandefuseral@test.test",
    password: "************",
    account: {
      money: 9000,
      isBlocked: false,
    },
    transactions: 10,
  };

  return (
    <div className="h-[80vh] flex justify-center ">
      <form className="h-full w-[80vw]  flex flex-col  items-center border-2">
        <div className="pt-8 w-9/12 flex flex-row items-center justify-between">
          <div className="sm:ml-20"></div>
                  <h1 className="text-2xl "> Your profile</h1>
                  <Button preset="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm  text-center  px-5 py-1.5 "
                    type="submit" value="Edit" />
        </div>
        <div className=" mb-0 mt-11  border-t-4 border-2 w-full h-1/6 flex items-center justify-between">
          <div className="h-full w-48 bg-gray-100 flex flex-col">
            <img
              className="w-full object-contain min-h-0"
              src={image}
              alt="Profile_image"
            />
          </div>

          <input type="file" className=" w-80 hidden" />
          <div className="ml-20"></div>
        </div>
        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center">
          <label className="pr-10  w-60" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            className=" w-80"
            value={user.firstName}
            name="name"
            disabled={true}
          />
        </div>
        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center">
          <label className="pr-10   w-60" htmlFor="LastName">
            Last name:
          </label>
          <input
            type="text"
            className=" w-80"
            value={user.lastName}
            name="LastName"
            disabled={true}
          />
        </div>

        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center">
          <label className="pr-10   w-60" htmlFor="Email">
            Email:
          </label>
          <input
            type="text"
            className=" w-80"
            value={user.email}
            name="Email"
            disabled={true}
          />
        </div>
        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center">
          <label className="pr-1 w-60" htmlFor="password">
            Password:
          </label>
          <input
            type="text"
            className=" w-80"
            value={user.password}
            name="password"
            disabled={true}
          />
        </div>
        <div className="mb-0 border-2 px-10 w-full h-1/6 flex items-center">
          <label className="pr-10 w-60" htmlFor="account">
            Account:
          </label>
          <input
            type="text"
            className=" w-80"
            value={user.account.money}
            name="account"
            disabled={true}
          />
        </div>
        <button
          type="s"
          className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
