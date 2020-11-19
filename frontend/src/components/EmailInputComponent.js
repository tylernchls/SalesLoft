import React, { useState }  from 'react';
import Axios from "axios";
import DuplicateEmailComponent from './DuplicateEmailComponent';

const EmailInput = () => {    
    const [email, setEmail] = useState("");
    const [duplicateEmailResponseData, setDuplicateEmailResponseData] = useState({});

    const getPossibleDuplicateEmail = (email) => {
        Axios({
            method: "POST",
            url: "http://localhost:3001/duplicates",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: email
            }).then(response => {
                setDuplicateEmailResponseData(response.data);    
            }).catch((err) => { console.log(err) }); 
    };

    const handleSubmit = (e) => {
      e.preventDefault();   
      getPossibleDuplicateEmail(email)
    };  
    return (
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <h3>Enter email address to check for possible duplicate</h3>

            {Object.keys(duplicateEmailResponseData).length > 0 && <DuplicateEmailComponent data={duplicateEmailResponseData} />} 

            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div>
              <button className="submit" disabled={!email} >Submit</button>
            </div>
        </form>
      </div>
    );
}

export default EmailInput