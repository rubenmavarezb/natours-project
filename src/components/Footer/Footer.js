import React from 'react';
import logo from "../../assets/img/logo-green-2x.png"

const Footer = () => {
    const listItems = [
        'Company',
        'Contact us',
        'Carrers',
        'Privacy Policy',
        'Terms'
    ]

    return ( 
        <footer className="footer">
            <div className="footer__logo-box">
                <img 
                    src= {logo}
                    alt="Full logo" 
                    className="footer__logo"
                />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            {listItems.map((item, i) => (
                                <li className="footer__item" key={i}>
                                    <a href="!#" className="footer__link">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built with the design of <a href="!#" className="footer__link">Jonas Schmedtmann</a> for his online course <a href="!#" className="footer__link">Advanced CSS and Sass</a>. Copyright &copy; by Jonas Schemedmann and develop in React by <a href="!#" className="footer__link">Ruben Mavarez</a>. I'm 100% allowed to use this webpage for both personal and commercial use, but always giving credit to the original author, Jonas Schmedtmann.
                    </p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;