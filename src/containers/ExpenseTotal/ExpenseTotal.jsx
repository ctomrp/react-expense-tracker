import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const income = useSelector((store)=>store.EXPENSE.income);
  const expenseList = useSelector((store)=>store.EXPENSE.expenseList);
  const totalExpense = expenseList.reduce((acc, expense) => {
    return acc + expense.price;
  }, 0)
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpense}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{income - totalExpense}</div>
      </div>
    </div>
  );
}
