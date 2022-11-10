import Loader from "../Loader/Loader";
import { RiArrowUpDownLine } from "react-icons/ri";
import { BsPencil, BsCheck2 } from "react-icons/bs";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Movement = ({ movement }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return movement === undefined ? (
    <div className="flex justify-center">
      <Loader />
    </div>
  ) : (
    <div
      className={`flex flex-col justify-center m-auto px-6 lg:px-24 gap-8 py-12 border rounded-lg ${
        movement.category === "Income"
          ? "bg-gradient-to-b from-teal-50 to-white"
          : "bg-gradient-to-b from-red-50 to-white"
      }`}
    >
      <h2 className="text-5xl font-bold text-center">$ {movement.amount}</h2>
      <div className="flex flex-col gap-6">
        <p className="flex justify-between text-lg border-b py-1">
          Transaction Id: {movement.id}
        </p>
        <div className="flex items-center border-b py-1 w-full justify-between">
          <div className="flex items-center">
            <label>Concept:</label>
            <input
              className="text-lg px-2"
              value={movement.concept}
              type="text"
              disabled={isDisabled}
            />
          </div>
          <Button
            value={
              isDisabled ? (
                <BsPencil className="w-5 h-5" />
              ) : (
                <BsCheck2 className="w-6 h-6" />
              )
            }
            event={() => setIsDisabled(!isDisabled)}
          />
        </div>
        <p className="flex justify-between text-lg border-b py-1">
          Category: {movement.category}
        </p>
        <p className="flex justify-between text-lg border-b py-1">
          Date: {movement.createdAt}
        </p>
        <p className="flex justify-between text-lg border-b py-1">From:</p>
        <p className="flex justify-between text-lg border-b py-1">To:</p>
        <div className="flex gap-10 mt-6">
          <Link
            to="/movements"
            className="flex items-center m-auto gap-1 justify-center bg-white border w-fit px-4 py-2 rounded-lg hover:border-black duration-200"
          >
            <i className="text-lg">
              <RiArrowUpDownLine />
            </i>
            <p>View all movements</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movement;
