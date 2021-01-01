import React, { useRef } from 'react';

const Navigation = () => {

    const toggle = useRef(false);

    const navItems = [
        {
            title:"About natours",
            ref:"#section-about"
        },
        {
            title:"Your benefits",
            ref:"#section-features"
        },
        {
            title:"Popular tours",
            ref:"#section-tours"
        },
        {
            title:"Stories",
            ref:"#section-stories"
        },
        {
            title:"Book now",
            ref:"#section-book"
        },
    ]

    const handleClick = () => {
        toggle.current.checked = false;
    }
    
    return ( 
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" ref={toggle}/>
            <label htmlFor="navi-toggle" className="navigation__button"><span className="navigation__icon">&nbsp;</span></label>
            
            <div className="navigation__background">&nbsp;</div>
            
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    {navItems.map((item, i) => (
                        <li className="navigation__item" key={i} onClick={handleClick}>
                            <a href={item.ref} className="navigation__link"><span>0{i + 1}</span>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
     );
}
 
export default Navigation;