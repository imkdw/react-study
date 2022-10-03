import ExpenseDate from "./ExpenseDate";
import "./ExponseItem.css";

interface IExpenseProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

function ExpenseItem({ id, title, amount, date }: IExpenseProps) {
  return (
    <div className="expense-item" key={id}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
