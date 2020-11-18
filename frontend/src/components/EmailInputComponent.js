import React, { useState, useEffect }  from 'react';

const EmailInput = () => {    
    const [email, setEmail] = useState(" ");

    useEffect(() => {
        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Submitting Email ${email}`);
            getPossibleDuplicateEmails(email)
        };

    }, []);
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