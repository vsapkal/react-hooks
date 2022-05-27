import './App.css';
import React, { useState } from 'react'

function App() {

  const [state, setState] = useState({
    count: 0,
    theme: 'Blue'
  });

  let count = state.count;
  let theme = state.theme;


  const handleInc = () => {
    if (count < 0 || count === 0) {
      setState({
        count: count + 1,
        theme: 'red'
      });
    } else {
      setState({
        count: count + 1,
        theme: theme
      });
    }
  }

  const handleDec = () => {
    setState(count - 1);
    if (count < 0 || count === 0) {
      setState({
        count: count - 1,
        theme: 'red'
      });
    } else {
      setState({
        count: count - 1,
        theme: theme
      });
    }
  }

  return (
    <div className="App">
      <button className='minus' onClick={handleDec}>-</button>
      <span>{count} </span>
      <span>{theme}</span>
      <button className='plus' onClick={handleInc}>+</button>
    </div>
  );
}

export default App;
