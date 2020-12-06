import React from 'react';

const Button = ({css, text}) => {
    return ( 
        <a 
            href="!#" 
            className={`btn ${css}`}
        >{text}</a>
     );
}
 
export default Button;