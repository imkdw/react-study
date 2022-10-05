import { IExpense } from "../../types/expenses";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }: { onAddExpense: any }) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onAddExpense={onAddExpense}
      />
    </div>
  );
};

export default NewExpense;
