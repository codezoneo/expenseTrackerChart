
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseChart from "./expenseChart";

import "./ExpenseItem.css";

function ExpenseTracker({ onAddExpense, expenses }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [filter, setFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      id: expenses ? expenses.length + 1 : 1,
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onAddExpense(newExpense);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setShowForm(false); 
  };

  const filteredExpenses = expenses
    ? expenses.filter((expense) =>
        expense.title.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>

      <label>
        Filter Expenses:
        <input type="text" value={filter} onChange={filterChangeHandler} />
      </label>

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}

      <ExpenseChart expenses={expenses} />

      {showForm ? (
        <form onSubmit={submitHandler}>
          <label>
            Expense Title:
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </label>
          <label>
            Expense Amount:
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </label>
          <label>
            Expense Date:
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </label>
          <button type="submit">Add Expense</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      ) : (
        
        <button type="button" onClick={() => setShowForm(true)}>
          Add Expense
        </button>
      )}
    </div>
  );
}

export default ExpenseTracker;
