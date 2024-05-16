
import React, { useState } from 'react';
import './CounterApp.css';

function CounterApp() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setCount((prevCount) => prevCount + 1);
      setName('');
      // Trigger animation
      const counter = document.getElementById('count');
      counter.classList.add('animate');
      setTimeout(() => {
        counter.classList.remove('animate');
      }, 300); // Animation duration should match CSS
    }
  };

  return (
    <div className="counter-app">
      <h1>Complex Counter App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p id="count" className="count">Count: {count}</p>
    </div>
  );
}

export default CounterApp;
