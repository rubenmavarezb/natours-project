import React from 'react';

const Heading3 = ({text, utilities}) => {

    const styles = utilities ? `heading-tertiary ${utilities}` : 'heading-tertiary';

    return ( 
        <h3 className={styles}>
            {text}
        </h3>
     );
}
 
export default Heading3;