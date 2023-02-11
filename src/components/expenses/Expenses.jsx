import React, { useState } from "react";
import "../../styles/Expenses.css";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );
  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  const allYears = [
    ...new Set(
      items.map((item) => {
        return new Date(item.date).getFullYear().toString();
      })
    ),
  ];

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          allYears={allYears}
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
