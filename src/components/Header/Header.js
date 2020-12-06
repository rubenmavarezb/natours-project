import React from 'react';
import logo from '../../assets/img/logo-white.png';
import Button from '../utils/Button'


const Header = () => {

    return ( 
        <header className="header">
            <figure className="header__logo-box">
                <img src={logo} alt="main logo" className="header__logo"/>
            </figure>
            <div className='header__text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Outdoors</span>
                    <span className='heading-primary--sub'>is where life happens</span>
                </h1>
                <Button
                    css="btn--white btn--animated"
                    text="Discover our tours"
                />
            </div>
        </header>
     );
}
 
export default Header;