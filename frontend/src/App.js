import logo from './logo.svg';
import Axios from "axios";
import React from 'react'
import './App.css';

function App() {

  let [responseData, setResponseData] = React.useState([])
  let [frequencyResponseData, setFrequencyResponseData] = React.useState([])

  // const getPeopleData = () => {
  //   fetch('/')
  //     .then(result => result.json())
  //     .then(body => {console.log('body', body);
  //     });
  // };
  
  function getPeopleData () {  
    Axios({
      method: "GET",
      url: "http://localhost:3001/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      setResponseData(response.data)     
    });
  }

  function getFrequencyCount () {
    Axios({
      method: "GET",
      url: "http://localhost:3001/frequency",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log('resssssss', response.data);          
      setFrequencyResponseData(response.data);
           
    });
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
          <div className="nav-item">View Possible Dupilcates</div>
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
      <div className="column-container frequency-data">
        {frequencyResponseData.map((keyName, keyIndex) => {            
          return (
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
          )
        })}
      </div>
      <div className="column-container">
          <div className="column"></div>
      </div>
    </div>
  );
}

export default App
