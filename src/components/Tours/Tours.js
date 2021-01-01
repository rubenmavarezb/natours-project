import React, { useEffect, useState } from 'react';
import Heading2 from '../utils/heading2/Heading2';
import Button from '../utils/button/Button';
import toursData from '../../json/tours.json';
import ToursCard from './ToursCard';
import Popup from '../Popup/Popup'

const Tours = () => {
    const [cards, setCards] = useState([]);
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState({});

    const getCard = (e, id) => {
        e.preventDefault()
        const data = cards.filter(card => card.id === id)[0];
        setPopup(data);
        setOpen(true)
    }

    useEffect(() => {
        setCards(toursData);
    }, [cards])

    return (
        <> 
            <section className="section-tours" id="section-tours">
                <Heading2
                    text="Most popular tours"
                />
                <div className="row">
                    {cards.map((card, i) => (
                        <ToursCard
                            key={i}
                            card={card}
                            getCard={getCard}
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

            {open && <Popup popup={popup} open={open} setOpen={setOpen}/>}
        </>
     );
}
 
export default Tours;