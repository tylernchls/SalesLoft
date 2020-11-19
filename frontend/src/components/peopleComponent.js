import React, { useState, useEffect }  from 'react';
import DuplicateEmailComponent from './DuplicateEmailComponent';
import Axios from "axios";


 const GetPeopleData = () => {  
    const [responseData, setResponseData] = useState([]); 

    useEffect(() => {
        Axios({
            method: "GET",
            url: "http://localhost:3001/people",
            headers: {
                "Content-Type": "application/json"
            }
            }).then(response => {
            setResponseData(response.data)     
            }).catch((err) => { console.log(err) }); 
    }, []);

    return (
        <div className="column-container">
          {responseData.map((person, index) => {
            return ( 
              <div className="peopleData" key={index}> 
                <p><span className="bold">Name: </span> {person.name}</p>
                <p><span className="bold">Email: </span>{person.email}</p>
                <p><span className="bold">Title: </span>{person.title}</p>
              </div>
            )
          })}
        </div>
    )
}

export default GetPeopleData;