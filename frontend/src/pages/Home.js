import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/expenses")
      .then((res) => {
        console.log("Fetched Expenses:", res.data);
        setExpenses(res.data);
      })
      .catch((err) => console.log("Fetch Error:", err));
  }, []);

  // Function to delete an expense
  const deleteExpense = (id) => {
    axios
      .delete(`http://localhost:5000/api/expenses/${id}`)
      .then(() => {
        console.log(`Deleted expense with ID: ${id}`);
        setExpenses(expenses.filter((expense) => expense._id !== id)); // Remove from UI
      })
      .catch((err) => console.log("Delete Error:", err));
  };

  return (
    <div className="home">
      <h2>Expense List</h2>
      {expenses.length === 0 ? <p>No expenses added yet.</p> : null}

      {expenses.map((expense) => (
        <div key={expense._id} className="expense-card">
          <h3>{expense.title}</h3>
          <p>Amount: ₹{expense.amount}</p>
          <p>Category: {expense.category}</p>
          <button className="delete-btn" onClick={() => deleteExpense(expense._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
