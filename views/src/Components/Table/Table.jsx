import { Link } from "react-router-dom";
import { BsTrash, BsPencil } from "react-icons/bs";
import {useDispatch, useSelector} from 'react-redux';

const Table = ({ transactions}) => {
  const user = useSelector(state => state.users.usersList)
  console.log(user)
  return (
    <div className="overflow-auto">
      <table className="w-full">
        <thead className="border-t">
          <tr>
            <th className="p-3 font-semibold tracking-wide text-left">Id</th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Amount
            </th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Category
            </th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Concept
            </th>
            <th className="p-3 font-semibold tracking-wide text-left">From</th>
            <th className="p-3 font-semibold tracking-wide text-left">To</th>
            <th className="p-3 font-semibold tracking-wide text-left">Date</th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {user?.account?.transaction
            .map(
              ({ id, amount, concept, category, userFrom, userTo, date }) => {
                return (
                  <tr className="text-left border-t border-b" key={id}>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {id}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      ${amount}
                    </td>
                    <td
                      className={`px-3 py-4 text-sm font-bold whitespace-nowrap ${
                        category === "Outcome"
                          ? "text-red-500"
                          : "text-teal-500"
                      }`}
                    >
                      <p>{category}</p>
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {concept}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {userFrom}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {userTo}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {date}
                    </td>
                    <td className="px-3 py-4 flex gap-4 items-center whitespace-nowrap">
                      <Link className="hover:opacity-70 duration-200">
                        <BsPencil className="w-5 h-5" />
                      </Link>
                      <button className="hover:opacity-70 duration-200">
                        <BsTrash className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              }
            )
            .reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
