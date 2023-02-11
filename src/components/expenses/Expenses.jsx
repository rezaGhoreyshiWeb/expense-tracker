import React, { useState } from "react";
import "../../styles/Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
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
        <ExpenseItem
          title={items[0].title}
          date={items[0].date}
          amount={items[0].amount}
        />
        <ExpenseItem
          title={items[1].title}
          date={items[1].date}
          amount={items[1].amount}
        />
        <ExpenseItem
          title={items[2].title}
          date={items[2].date}
          amount={items[2].amount}
        />
        <ExpenseItem
          title={items[3].title}
          date={items[3].date}
          amount={items[3].amount}
        />
      </Card>
    </div>
  );
}
