import React, {useState} from 'react';
import Heading2 from '../utils/heading2/Heading2';

const Booking = () => {

    const [inputValues, setInputValues] = useState({
        fullname: '',
        email: '',
        radiogroup: {
            small: '',
            large: ''
        }
    });

    const [submit, setSubmit] = useState([])

    const handleInput = e => {
        const evt = e.target

        if(evt.name === 'fullname' || evt.name === 'email') {
            setInputValues({
                ...inputValues,
                [evt.name]: evt.value
            })
        } else {
            setInputValues({
                ...inputValues,
                [evt.name]: {
                    [evt.id]: evt.value
                }
            })
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        setSubmit([
            ...submit,
            inputValues
        ])
    }

    return ( 
        <section className="section-book" id="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form 
                            className="form"
                            onSubmit={handleSubmit}
                        >
                            <Heading2
                                text="Start booking now"
                                css="u-mb-medium"
                            />
                            <div className="form__group">
                                <input 
                                    type="text" 
                                    name="fullname"
                                    id="fullname"
                                    className="form__input"
                                    placeholder="Full Name"
                                    onInput={handleInput}
                                    required
                                />
                                <label htmlFor="fullname" className="form__label">Full name</label>
                            </div>
                            <div className="form__group">
                                <input 
                                    type="email" 
                                    name="email"
                                    id="email"
                                    className="form__input"
                                    placeholder="Email address"
                                    onInput={handleInput}
                                    required
                                />
                                <label htmlFor="email" className="form__label">Email address</label>
                            </div>

                            <div className="form__group">
                                <div className="form__radio-group u-mb-small">
                                    <input 
                                        type="radio" 
                                        name="radiogroup" 
                                        id="small"
                                        className="form__radio-input"
                                        onInput={handleInput}
                                    />
                                    <label htmlFor="small" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Small tour group
                                    </label>
                                </div>
                                <div className="form__radio-group">
                                    <input 
                                        type="radio" 
                                        name="radiogroup" 
                                        id="large"
                                        className="form__radio-input"
                                        onInput={handleInput}
                                    />
                                    <label htmlFor="large" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Large tour group
                                    </label>
                                </div>
                            </div>

                            <div className="form__group">
                                <button className="btn btn--green">Next step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Booking;