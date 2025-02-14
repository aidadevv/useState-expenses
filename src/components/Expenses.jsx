import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
