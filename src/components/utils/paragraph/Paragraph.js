import React from 'react';

const Paragraph = ({text, css}) => {
    return ( 
        <p className={css}>
            {text}
        </p>
     );
}
 
export default Paragraph;