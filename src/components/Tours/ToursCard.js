import React from 'react';
import Button from '../utils/button/Button';

const ToursCard = ({card, getCard}) => {
    
    if(!card) return null;

    const { id, title, features, price } = card;


    return ( 
        <div className="col-1-of-3">
            <article className="card">
                <div className="card__side card__side--front">
                    <div className={`card__picture card__picture--${id}`}>
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className={`card__heading-span card__heading-span--${id}`}>
                            {title}
                        </span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            {features.map((feature, i) => (
                                <li key={`${feature}-${i}-${id}`}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`card__side card__side--back card__side--back-${id}`}>
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">${price}</p>
                        </div>
                        <Button
                            text="Book now!"
                            css="btn btn--white"
                            event={(e) => getCard(e, id)}
                        />
                    </div>
                </div>
            </article>
        </div>
     );
}
 
export default ToursCard;