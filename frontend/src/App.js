import './App.css';
import logo from './logo.svg';
import React, { useState, useEffect }  from 'react';
import PeopleComponent from './components/PeopleComponent';
import FrequencyComponent from './components/FrequencyComponent';
import EmailInputComponent from './components/EmailInputComponent';

const App = () => {
  const [ pageState, setPageState ] = useState('');
  useEffect(() => {
    
  }, [pageState]);

  const navToPage = (arg) => { setPageState(arg) };

  const renderPage = (pgs) => {
    switch (pgs) {
      case "people":
        return <PeopleComponent />
        
      case "frequency":
        return <FrequencyComponent />

      case "duplicates":
        return <EmailInputComponent />
      
      default:
      return null
    }
  };

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
          <div className="nav-item" onClick={() => navToPage('people')}>List People</div>
          <div className="nav-item" onClick={() => navToPage('frequency')}>View Frequency</div>
          <div className="nav-item" onClick={() => navToPage('duplicates')}>View Duplicates</div>
        </div>
      </header>

      <div className="responses">
        {renderPage(pageState)}
      </div>
    </div>
  );
}

export default App
