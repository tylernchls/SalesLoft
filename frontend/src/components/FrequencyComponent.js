import React, { useState, useEffect }  from 'react'
import Axios from "axios";


const GetFrequencyCount = () => {
    const [frequencyResponseData, setFrequencyResponseData] = useState([]);

    useEffect(() => {
        Axios({
            method: "GET",
            url: "http://localhost:3001/frequency",
            headers: {
                "Content-Type": "application/json"
            }
            }).then(response => {
            setFrequencyResponseData(response.data)     
            }).catch((err) => { console.log(err) }); 
    }, []);

    return (
        <div className="column-container frequency-data">
            {frequencyResponseData.map((keyName, keyIndex) => {            
                return (
                    <div className="column is-fourth" key={keyIndex}>
                    <p className="title">Email: {keyName.Email}</p>
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
    )
}

export default GetFrequencyCount



