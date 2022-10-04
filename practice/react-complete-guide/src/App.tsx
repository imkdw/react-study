import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "e1", title: "First", amount: 1.49, date: new Date(2021.1, 12) },
    { id: "e2", title: "Second", amount: 2.49, date: new Date(2021.2, 12) },
    { id: "e3", title: "Third", amount: 3.49, date: new Date(2021.3, 12) },
    { id: "e4", title: "Forth", amount: 4.49, date: new Date(2021.4, 12) },
  ];
  return (
    <>
      <NewExpense />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
