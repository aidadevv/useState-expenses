import React, { useState } from "react";
import "./ExpensesForm.css";

function ExpensesForm() {
  // const [title , setTitle] = useState('')
  // const [amount , setAmount] = useState('')
  // const [date , setDate] = useState('')
  const [userInputs, setUserInputs] = useState({
    title: "",
    date: "",
    amount: "",
  });
  const inputChangeHandler = (e) => {
    if (e.target.name === "title") {
      setUserInputs({
        ...userInputs,
        title: e.target.value,
      });
    } else if (e.target.name === "amount") {
      setUserInputs({
        ...userInputs,
        amount: e.target.value,
      });
    } else if (e.target.name === "date") {
      setUserInputs({
        ...userInputs,
        date: e.target.value,
      });
    }
  };

  // const titleChangeHandler = (e) => {
  //   setUserInputs({
  //     ...userInputs,
  //     title: e.target.value,
  //   });
  // };

  // const amountChangeHandler = (e) => {
  //   setUserInputs({
  //     ...userInputs,
  //     amount: e.target.value,
  //   });
  // };

  // const dateChangeHandler = (e) => {
  //   setUserInputs({
  //     ...userInputs,
  //     date: e.target.value,
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInputs);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input name="title" onChange={inputChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Price</label>
          <input name="amount" onChange={inputChangeHandler} type="number" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input name="date" onChange={inputChangeHandler} type="date" />
        </div>
        <div className="new-expense__actions">
          <button> Add expenses</button>
        </div>
      </div>
    </form>
  );
}

export default ExpensesForm;
