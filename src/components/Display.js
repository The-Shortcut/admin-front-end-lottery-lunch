import React from "react";

const Display = ({ emails }) => {
  return (
    <div>
      <h3>Generated emails are</h3>
      {emails.map((i, key) => (
        <div key={key} className='emailsContainer'>
          {i.map((email, key) => (
            <p className='email' key={key}>
              {email}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Display;
