
import React, { useState } from 'react';

function CounterApp() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setCount(prevCount => prevCount + 1);
      setName('');
    }
  };

  return (
    <div>
      <h1>Complex Counter App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Count: {count}</p>
    </div>
  );
}
export default CounterApp
