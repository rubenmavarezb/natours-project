import React, { useState, useEffect } from 'react';
import FeatureBox from './FeatureBox';
import featuresData from '../../json/features.json';

const Features = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(featuresData);
    }, [cards])

    return ( 
        <section className="section-features" id="section-features">
            <div className="row">
                {cards?.map((card, i) => (
                    <FeatureBox
                        key={i}
                        card={card}
                    />
                ))}
            </div>
        </section>
     );
}
 
export default Features;