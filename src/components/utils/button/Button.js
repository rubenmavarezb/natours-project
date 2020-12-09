import React from 'react';

const Button = ({css, text}) => {
    return ( 
        <a 
            href="!#" 
            className={`${css}`}
        >{text}</a>
     );
}
 
export default Button;