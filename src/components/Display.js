import React from 'react';

const Display = ({emails}) => {
    return (
        <div> 
            <h3>Generated emails are</h3>
         {emails.map((i)=><div className='emailsContainer'>{i.map(email => <p className='email'>{email}</p>)}</div>)}
        </div>
    )
}
export default Display;
