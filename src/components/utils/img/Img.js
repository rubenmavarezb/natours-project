import React from 'react';

const Img = ({path, alt, css}) => {
    return ( 
        <img src={path} alt={alt} className={css} />
     );
}
 
export default Img;