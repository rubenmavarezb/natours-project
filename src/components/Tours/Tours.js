import React, { useEffect, useState } from 'react';
import Heading2 from '../utils/heading2/Heading2';
import Button from '../utils/button/Button';
import toursData from '../../json/tours.json';
import ToursCard from './ToursCard';

const Tours = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(toursData);
    }, [cards])

    return ( 
        <section className="section-tours">
            <Heading2
                text="Most popular tours"
            />
            <div className="row">
                {cards.map((card, i) => (
                    <ToursCard
                        key={i}
                        card={card}
                    />
                ))}
            </div>

            <div className="u-center-text u-mt-huge">
                <Button
                    css="btn btn--green"
                    text="Discover all tours"
                />
            </div>

        </section>
     );
}
 
export default Tours;