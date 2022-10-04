import { IExpense } from "../../types/expenses";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ expenses }: { expenses: IExpense[] }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense: IExpense) => {
        const { id, title, amount, date } = expense;
        return <ExpenseItem id={id} title={title} amount={amount} date={date} />;
      })}
    </Card>
  );
};

export default Expenses;
