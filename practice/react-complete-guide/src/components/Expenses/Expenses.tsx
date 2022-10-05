import { IExpense } from "../../types/expenses";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ expenses }: { expenses: IExpense[] }) => {
  const [filterdYear, setFilterdYear] = useState(
    String(new Date().getFullYear())
  );

  const filterChangeHandler = (selectYear: string) => {
    setFilterdYear(selectYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filterdYear}
      />
      {expenses.map((expense: IExpense) => {
        const { id, title, amount, date } = expense;
        return (
          <ExpenseItem title={title} amount={amount} date={date} key={id} />
        );
      })}
    </Card>
  );
};

export default Expenses;
