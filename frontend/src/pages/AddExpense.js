import React, { useState } from "react";
import axios from "axios";
import "./AddExpense.css";

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = { title, amount, category };
    
    try {
      await axios.post("http://localhost:5000/api/expenses", newExpense);
      alert("Expense added successfully!");
      setTitle("");
      setAmount("");
      setCategory("");
    } catch (error) {
      console.error(error);
      alert("Failed to add expense");
    }
  };

  return (
    <div className="form">
      <form className="add-expense-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Expense Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <button type="submit">Add Expense</button>
    </form>
    </div>
  );
};

export default AddExpense;
