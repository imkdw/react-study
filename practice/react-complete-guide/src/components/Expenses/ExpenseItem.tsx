import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExponseItem.css";
import { useState } from "react";

interface IExpenseProps {
  title: string;
  amount: number;
  date: Date;
}

function ExpenseItem({ title, amount, date }: IExpenseProps) {
  const [title1, setTitle1] = useState(title);

  const clickHandler = () => {
    setTitle1("Holy Shit");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{title1}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
