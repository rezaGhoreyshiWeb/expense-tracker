import ExpenseItem from "./ExpenseItem";
import "../../styles/ExpensesList.css";

export default function ExpensesList({ filteredExpenses }) {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback "> Found No expenses </h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </ul>
  );
}
