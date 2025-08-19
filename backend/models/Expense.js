import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true }, // Ensure this exists!
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Expense", expenseSchema);
