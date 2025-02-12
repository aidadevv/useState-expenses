import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItem(props) {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(props.title);


  const titleChangeHandler = () => {
    setTitle("updated");
  };

  const countHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{title}</h2>

      <button onClick={titleChangeHandler}>updated</button>
      <button onClick={countHandler}>Increment</button>

      <div className="expense-item__price">{count}</div>
    </div>
  );
}

export default ExpenseItem;
