import logo from './logo.svg';
import React from 'react'
import './App.css';
import PeopleComponent from './components/PeopleComponent';
import FrequencyComponent from './components/FrequencyComponent';
import DuplicateEmailComponent from './components/DuplicateEmailComponent';
import EmailInputComponent from './components/EmailInputComponent';

  /// TODO: bring consts into according function
  /// TODO: turn all functions into Components and just render the components
  /// TODO: Clear data and render new data when another nav item is clicked
  /// TODO: Code Cleanup
  /// TODo: README & Developer notes


const App = () => {

   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/tylernchls/SalesLoft"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tyler Nichols
        </a>
        <div className="nav">
          <div className="nav-item">List All People</div>
          <div className="nav-item">View Frequency</div>
          <div className="nav-item"View Possible Dupilcates>View Possible Duplicates</div>
        </div>
      </header>
    
      <div className="column-container">
          <div className="column"></div>
      </div>

      <PeopleComponent />
    </div>
  );
}

export default App
