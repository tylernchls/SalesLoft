import React, { useState, useEffect }  from 'react'
import Axios from "axios";

const GetPossibleDuplicateEmails = (string) => {   
    const [DuplicateEmailResponseData, setDuplicateEmailResponseData] = useState([]);

    useEffect(() => {
        Axios({
            method: "GET",
            url: "http://localhost:3001/duplicates",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
            }).then(response => {
                setDuplicateEmailResponseData(response.data);    
            }).catch((err) => { console.log(err) }); 
    }, []);

    return (
        <div className="column-container">
            {Object.keys(DuplicateEmailResponseData).map((key) => {
                return (
                   <div>
                        <div key={key}></div>
                        <p>{key}:</p>
                        <p>{DuplicateEmailResponseData[key]}</p>
                   </div>      
                )
            })}
        </div>
    )
}

export default GetPossibleDuplicateEmails