import React from 'react';

const Heading = ({text}) => {
    return ( 
        <div className="u-center-text u-mb-big">
            <h2 className="heading-secondary">
                {text}
            </h2>
        </div>

     );
}
 
export default Heading;