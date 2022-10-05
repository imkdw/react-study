import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: "e1", title: "First", amount: 1.49, date: new Date(2020.1, 12) },
    { id: "e2", title: "Second", amount: 2.49, date: new Date(2021.2, 12) },
    { id: "e3", title: "Third", amount: 3.49, date: new Date(2022.3, 12) },
    { id: "e4", title: "Forth", amount: 4.49, date: new Date(2022.4, 12) },
  ]);

  const addExpenseHandler = (expense: any) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
