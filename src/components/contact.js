import React from 'react';
import Message from './alert';

const Contact = () => {
    return(
        <div style={{padding:"3rem"}}>
           <span> contact</span>
           {/* function call with paramenters in onCLick function */}
           <button onClick={() => Message("Message sent")}>Click me </button>
        </div>
    )
}


export default Contact;