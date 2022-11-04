import { HiBars3, HiXMark } from "react-icons/hi2";

const Toggle = ({ handleToggle, setHandleToggle }) => {
  return (
    <button
      className="right-16 lg:hidden"
      onClick={() => setHandleToggle(!handleToggle)}
    >
      {!handleToggle ? (
        <HiBars3 className="w-8 h-8"/>
      ) : (
        <HiXMark className="w-8 h-8" />
      )}
    </button>
  );
};

export default Toggle;
