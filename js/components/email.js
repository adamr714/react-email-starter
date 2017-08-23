import React from 'react';

export default function Email(props) {
    return (
        <div>
             {props.inbox.from}
             {props.inbox.to}
             {props.inbox.title}
             {props.inbox.content}          
        </div>
    );
};