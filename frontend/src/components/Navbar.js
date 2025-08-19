import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Expense Tracker</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add-expense">Add Expense</Link>
      </div>
    </nav>
  );
};

export default Navbar;
