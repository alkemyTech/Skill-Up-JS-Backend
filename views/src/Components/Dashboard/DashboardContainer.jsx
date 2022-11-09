import Dashboard from "./Dashboard.jsx";

const DashboardContainer = () => {
  const transactions = [
    {
      id: 1,
      amount: 2000,
      concept: "Rent",
      category: "Outcome",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 2,
      amount: 2000,
      concept: "Rent",
      category: "Income",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 3,
      amount: 2000,
      concept: "Rent",
      category: "Income",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 4,
      amount: 2000,
      concept: "Rent",
      category: "Outcome",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 5,
      amount: 2000,
      concept: "Rent",
      category: "Outcome",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 6,
      amount: 2000,
      concept: "Rent",
      category: "Outcome",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 7,
      amount: 2000,
      concept: "Rent",
      category: "Income",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 8,
      amount: 2000,
      concept: "Rent",
      category: "Outcome",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 9,
      amount: 2000,
      concept: "Rent",
      category: "Income",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 10,
      amount: 2000,
      concept: "Rent",
      category: "Outcome",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 11,
      amount: 2000,
      concept: "Rent",
      category: "Outcome",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 12,
      amount: 2000,
      concept: "Rent",
      category: "Outcome",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
    {
      id: 13,
      amount: 2000,
      concept: "Rent",
      category: "Outcome",
      userFrom: "Tomas",
      userTo: "Tomas",
      date: "11/8/2022",
    },
  ];

  return (
    <>
      <Dashboard
        transactions={transactions.slice(
          transactions.length - 10,
          transactions.length
        )}
        transactionsLength={transactions.length}
      />
    </>
  );
};

export default DashboardContainer;
