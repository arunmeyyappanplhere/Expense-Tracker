import React from "react";
import axios from "axios";
const Expense = () => {
  const addExpenseHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await axios
      .post("http://localhost:8000/api/expense", {
        email: formData.get("email"),
        title: formData.get("title"),
        amount: formData.get("amount"),
        category: formData.get("cateogry"),
        date: formData.get("date"),
        method: formData.get("method"),
        note: formData.get("note"),
      })
      .then((res) => console.log(res.message))
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <h1>Add Expense</h1>
      <form action="" onSubmit={(e) => addExpenseHandler(e)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" />
        <label htmlFor="category">Category</label>
        <input type="text" id="category" name="category" disabled />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" />
        <label htmlFor="method">Method</label>
        <select id="method" name="method">
          <option value="cash">Cash</option>
          <option value="upi">UPI</option>
          <option value="card">Card</option>
          <option value="emi">EMI</option>
        </select>
        <label htmlFor="note">Note</label>
        <input type="text" id="note" name="note" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Expense;
