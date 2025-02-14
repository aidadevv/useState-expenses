import React from "react";
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((el) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            price={el.price}
            date={el.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
