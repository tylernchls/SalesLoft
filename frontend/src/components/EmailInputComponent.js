import React, { useState, useEffect }  from 'react';
import GetPossibleDuplicateEmails from './DuplicateEmailComponent';

const EmailInput = () => {    
    const [email, setEmail] = useState(" ");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Submitting Email ${email}`);
      GetPossibleDuplicateEmails(email)
    };  

    // useEffect(() => {

    // }, []);
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

export default EmailInput