import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Debugging log

    const { title, amount, category } = req.body;

    // Ensure all fields are provided
    if (!title || !amount || !category) {
      console.log("Validation Failed: Missing Fields"); // Debugging log
      return res.status(400).json({ error: "All fields are required" });
    }

    const newExpense = new Expense({ title, amount, category });
    await newExpense.save();

    console.log("Expense Saved Successfully:", newExpense); // Debugging log
    res.status(201).json({ message: "Expense added successfully" });

  } catch (error) {
    console.error("Error Adding Expense:", error);
    res.status(500).json({ error: "Failed to add expense" });
  }
});

router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    console.log("Fetched from DB:", expenses); // ✅ Check if data is retrieved
    res.json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error });
  }
});
export default router;
