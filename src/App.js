import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0)
  const [currentDate, setCurrentDate] = useState(null)
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
    fetch('/date').then(res => res.json()).then(data => {
      setCurrentDate(data.date)
    })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>The current time is {currentTime}.</p>
        <p>Today is {currentDate}</p>
      </header>
    </div>
  );
}

export default App;
