import React from 'react';
import logo2x from "../../assets/img/logo-green-2x.png";
import logo1x from "../../assets/img/logo-green-1x.png";
import logoSmall1x from "../../assets/img/logo-green-small-1x.png";
import logoSmall2x from "../../assets/img/logo-green-small-2x.png";

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
                <picture className="footer__logo">
                    <source srcSet={`${logoSmall1x} 1x, ${logoSmall2x} 2x`} media="(max-width: 37.5em)"/>
                    <img 
                    srcSet= {`${logo1x} 1x, ${logo2x} 2x`}
                    alt="Full logo" 
                />
                </picture>

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