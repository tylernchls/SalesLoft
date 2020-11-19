import React, { useState }  from 'react';
import Axios from "axios";
import DuplicateEmailComponent from './DuplicateEmailComponent';

const EmailInput = () => {    
    const [email, setEmail] = useState(" ");
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
      alert(`Submitting Email ${email}`);    
      getPossibleDuplicateEmail(email)
    };  
    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <input text="Enter email address" type="submit" value="Submit" />
      </form>
      {Object.keys(duplicateEmailResponseData).length > 0 && <DuplicateEmailComponent data={duplicateEmailResponseData} />} 
      </div>
    );
}

export default EmailInput