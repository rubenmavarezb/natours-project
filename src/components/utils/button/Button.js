import React from 'react';

const Button = ({css, text, event}) => {
    return ( 
        <a 
            href="!#" 
            className={`${css}`}
            onClick={event && event}
        >{text}</a>
     );
}
 
export default Button;