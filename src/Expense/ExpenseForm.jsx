import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
  });

  const userEmail = useSelector((state) => state.auth.email);

  const SubmitHandler = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `https://expensetracker-30ad5-default-rtdb.firebaseio.com/expenses/${userEmail}.json`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (res.ok) {
      props.onExpenseToggle();
      console.log(data);
    } else {
      alert("Something went wrong. Please try again");
      setFormData({
        amount: "",
        description: "",
        category: "",
      });
    }
  };

  const inputHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className={styles.ExpenseHeading}>
      <form onSubmit={SubmitHandler}>
        <label className="form-label">Amount:</label>
        <input
          className="form-control"
          value={formData.amount}
          type="number"
          name="amount"
          id="amount"
          placeholder="₹"
          onChange={inputHandler}
          required
        />

        <label className="form-label">Description:</label>
        <input
          className="form-control"
          onChange={inputHandler}
          value={formData.description}
          type="text"
          name="description"
          id="description"
          placeholder="Enter description here..."
          required
        />

        <label className="form-label">category:</label>
        <select
          value={formData.category}
          className="form-select"
          onChange={inputHandler}
          id="category"
          name="category"
          required
        >
          <option value="movie">Movies</option>
          <option value="tourism">Tourism</option>
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
        </select>
        <button className="btn btn-dark" type="submit">
          ADD EXPENCES
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
