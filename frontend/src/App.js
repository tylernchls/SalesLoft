import logo from './logo.svg';
import Axios from "axios";
import React from 'react'
import './App.css';

function App() {

  const [responseData, setResponseData] = React.useState([])
  const [frequencyResponseData, setFrequencyResponseData] = React.useState([])
  const [DuplicateEmailResponseData, setDuplicateEmailResponseData] = React.useState([])

  /// TODO: bring consts into according function
  /// TODO: turn all functions into Components and just render the components
  /// TODO: Send api request using hooks and rid of axios
  /// TODO: Clear data and render new data when another nav item is clicked
  /// TODO: Code Cleanup
  /// TODo: README & Developer notes

  function getPeopleData () {  
    Axios({
      method: "GET",
      url: "http://localhost:3001/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      setResponseData(response.data)     
    }).catch((err) => { console.log(err) });
  }

  function getFrequencyCount () {
    Axios({
      method: "GET",
      url: "http://localhost:3001/frequency",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {        
      setFrequencyResponseData(response.data);
    }).catch((err) => { console.log(err) });
  }

  function getPossibleDuplicateEmails (string) {   
    Axios({
      method: "POST",
      url: "http://localhost:3001/duplicates",
      data: string,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(response => {         
      setDuplicateEmailResponseData(response.data);          
    }).catch((err) => { console.log(err) });
  }

  function EmailInput() {    
    const [email, setEmail] = React.useState(" ");

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Submitting Email ${email}`);
      getPossibleDuplicateEmails(email)
    };
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
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
          <div className="nav-item" onClick={getPeopleData}>List All People</div>
          <div className="nav-item" onClick={getFrequencyCount}>View Frequency</div>
          <div className="nav-item"View Possible Dupilcates><EmailInput/></div>
        </div>
      </header>
      <div className="column-container">
          {responseData.map((person, index) => {
            return ( 
            <div className="peopleData" key={index}> 
              <p><span className="bold">Name:</span> {person.name}</p>
              <p><span className="bold">Email:</span>{person.email}</p>
              <p><span className="bold">Title:</span> {person.title}</p>
            </div>
            )
          })}
      </div>
      
        {frequencyResponseData.map((keyName, keyIndex) => {            
          return (
            <div className="column-container frequency-data">
              <div className="column is-fourth" key={keyIndex}>
                <p>Email: {keyName.Email}</p>
                <div className="column-container header">
                  <div className="column">Character</div>
                  <div className="column">Count</div>
                </div>
                  {Object.keys(keyName.Frequency).map((key) => {
                    return (
                      <div className="column-container table-data">
                        <div className="column">{key}:</div>
                        <div className="column">{keyName.Frequency[key]}</div>
                      </div>
                    )      
                  })}
              </div>
            </div>
          )
        })}

        {Object.keys(DuplicateEmailResponseData).map((key) => {
          return(
            <div className="column-container">
              <div key={key}></div>
                <p>{key}:</p>
                <p>{DuplicateEmailResponseData[key]}</p>
            </div>
          )
        })}
    
      <div className="column-container">
          <div className="column"></div>
      </div>
    </div>
  );
}

export default App
