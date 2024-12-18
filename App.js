import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [Sec, setsec] = useState(0);
  const [Min, setmin] = useState(0);
  const [Hr, sethr] = useState(0)

  useEffect(() => {
    if (Sec === 60) {
      setsec(0); // Reset Sec to 0 if it reaches 60
      return; // Exit the effect early, no need to continue the interval
    }

    const interval = setInterval(() => {
      setsec(prevSec => prevSec + 1); // Increment Sec by 1 every second
    }, 1000);

    // Cleanup the interval when the component unmounts or when Sec reaches 60
    return () => clearInterval(interval);
  }, [Sec]); // The effect runs whenever `Sec` changes
  

  useEffect(() => {
    if(Min === 60) {
      setmin(0)
      return;
    }
    const interval = setInterval(() => {
      setmin(prevMin => prevMin + 1); // Increment Sec by 1 every second
    }, 60000);

    // Cleanup the interval when the component unmounts or when Sec reaches 60
    return () => clearInterval(interval);

  }, [Min]); // The effect runs whenever `Sec` changes

  useEffect(() => {
    if (Hr === 60) {
      sethr(0); // Reset Sec to 0 if it reaches 60
      return; // Exit the effect early, no need to continue the interval
    }

    const interval = setInterval(() => {
      sethr(prevHr => prevHr + 1); // Increment Sec by 1 every second
    }, 3600000);

    // Cleanup the interval when the component unmounts or when Sec reaches 60
    return () => clearInterval(interval);
  }, [Hr]); // The effect runs whenever `Sec` changes

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>STOPWATCH APP</h1>
        <p>{Hr}:{Min}:{Sec}</p>
        <a
          className="App-link"
          href=""
        >
          RESET
        </a>
      </header>
    </div>
  );
}

export default App;
