import { IExpense } from "../types/expenses";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }: { expenses: IExpense[] }) => {
  return (
    <div>
      {expenses.map((expense: IExpense) => {
        const { id, title, amount, date } = expense;
        return <ExpenseItem id={id} title={title} amount={amount} date={date} />;
      })}
    </div>
  );
};

export default Expenses;
