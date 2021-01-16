import React from 'react';

const Img = ({attrs}) => {
    return ( 
        <img
            srcSet={attrs?.sourceSet}
            sizes={attrs?.sizes} 
            alt={`${attrs?.alt}`}
            className={attrs?.css}
            src={attrs?.path}
        />
     );
}
 
export default Img;