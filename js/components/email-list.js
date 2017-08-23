import React from 'react';
import Email from './email';

export default function EmailList(props) {
    const emails = Object.keys(props.emails).map((emailId, index) => {
        const email = props.emails[emailId];
        return (
            <p key={index}>
                <Email id={email.inbox.id} from={email.inbox.from} 
                to={eamil.inbox.to}
                />
            </p>    
        );    
    });

    return (
        <div>
            {emails}
        </div>   
    );
};