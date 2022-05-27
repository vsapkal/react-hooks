import './App.css';
import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  let d = 0;

  const handleInc = () => {
    setCount(count + 1);
  }

  const handleDec = () => {
    if (count !== 0) {
      setCount(count - 1);
    } else {
      setCount(d);
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
