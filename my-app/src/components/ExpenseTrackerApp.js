import React, { useState } from 'react';

// Expense Tracker App component
function ExpenseTrackerApp() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, newExpense]);
    setNewExpense({ description: '', amount: '', category: '' });
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          value={newExpense.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="amount"
          value={newExpense.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <select
          name="category"
          value={newExpense.category}
          onChange={handleChange}
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} - ${expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTrackerApp;
