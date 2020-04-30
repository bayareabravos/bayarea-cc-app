import React from 'react';
import logo from './bayareacc-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Bay Area Cricket Club
        </p>
        <a
          className="App-link"
          href="https://cricclubs.com/NCCA/viewInternalClub.do?internalClubId=14&clubId=1191"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Under Construction! Please visit our club page in CricClubs for now.
        </a>
      </header>
    </div>
  );
}

export default App;
