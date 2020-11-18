import logo from './logo.svg';
import React, { useState, useEffect }  from 'react';
import './App.css';
import PeopleComponent from './components/PeopleComponent';
import FrequencyComponent from './components/FrequencyComponent';
import DuplicateEmailComponent from './components/DuplicateEmailComponent';
import EmailInputComponent from './components/EmailInputComponent';

  // TODO: Clear data and render new data when another nav item is clicked
  // TODO: Add routing
  // TODO: Code Cleanup
  // TODo: README & Developer notes


const App = () => {
  const [ pageState, setPageState ] = useState('');
  useEffect(() => {
    console.log('useEffect', pageState);
      
  }, [pageState]);

  const navToPage = (arg) => { setPageState(arg) };

  const renderPage = (pgs) => {
    switch (pgs) {
      case "people":
        return <PeopleComponent />
        break;
        
      case "frequency":
        return <FrequencyComponent />
        break;

      case "duplicates":
        return <DuplicateEmailComponent />
        break;
    
      default:
      return null
        break;
    }
  }

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
          <div className="nav-item" onClick={() => navToPage('people')}>List People
            {renderPage(pageState)}
          </div>
          <div className="nav-item" onClick={() => navToPage('frequency')}>View Frequency
            {renderPage(pageState)}
          </div>
          <div className="nav-item" onClick={() => navToPage('duplicates')}>View Duplicates
            {renderPage(pageState)}
          </div>
        </div>
      </header>

      {/* <div className="column-container">
          <div className="column"></div>
      </div> */}
    </div>
  );
}

export default App
