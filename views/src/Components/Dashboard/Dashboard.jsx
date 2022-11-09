import BalanceCard from "./components/BalanceCard";
import TransferCard from "./components/TransferCard";
import Table from "../Table/Table";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getUsers } from "../../redux/features/users/usersGetSlice";


const Dashboard = ({ transactions, transactionsLength }) => {
  const user = useSelector(state => state.users.usersList)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getUsers())
  },[]);


  return (
    <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
      <h1 className="text-4xl font-bold">My Dashboard</h1>
      <section className="flex flex-col lg:flex-row gap-16">
        <div className="flex flex-col flex-wrap lg:w-1/3 justify-between gap-16">
          <BalanceCard />
          <TransferCard />
        </div>
        <div className="lg:w-2/3 flex flex-col h-fit border rounded-lg p-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
            <p className="text-2xl font-bold opacity-80 pb-6">
              Last transactions
            </p>
            
            <p className="text-lg opacity-80 pb-6">
              Total transactions: {user?.account?.transaction?.length}
            </p>
          </div>
          <Table transactions={transactions} />
          <Link className="mt-6 ml-auto px-4 py-2 border rounded-lg hover:border-black duration-200">
            View all
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
