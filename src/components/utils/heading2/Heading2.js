import React from 'react';

const Heading = ({text, css}) => {
    return ( 
        <div className={css ? `${css}` : "u-center-text u-mb-big"}>
            <h2 className="heading-secondary">
                {text}
            </h2>
        </div>

     );
}
 
export default Heading;