import './App.css';
import React, { useState } from 'react'

function App() {

  let initialState = 0;
  const [count, setCount] = useState(initialState);

  const handleInc = () => {
    setCount(count + 1);
  }

  const handleDec = () => {
    if (count !== 0) {
      setCount(count - 1);
    } else {
      setCount(initialState);
    }
  }

  return (
    <div className="App">
      <button className='minus' onClick={handleDec}>-</button>
      <span>{count}</span>
      <button className='plus' onClick={handleInc}>+</button>
    </div>
  );
}

export default App;
