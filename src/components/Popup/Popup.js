import React from 'react';
import Heading2 from '../utils/heading2/Heading2';
import Heading3 from '../utils/heading3/Heading3';
import Button from '../utils/button/Button';

const Popup = ({popup, open, setOpen}) => {
    if(!popup) return null;

    const { title, img, img_secondary } = popup;

    const image = require(`../../assets/img/${img}`);
    const imageSecondary = require(`../../assets/img/${img_secondary}`);

    return (
        <div className={open ? "popup open" : "popup"}>
            <div className="popup__content">
                <div className="popup__left">
                    <img src={image.default} alt="Tour" className="popup__img"/>
                    <img src={imageSecondary.default} alt="Tour2" className="popup__img"/>
                </div>
                <div className="popup__right">
                    <div 
                        className="popup__close" 
                        onClick={() => setOpen(false)}
                    >&times;</div>
                    <Heading2
                        text="Start booking now"
                        css="heading-secondary u-mb-small"
                    />
                    <Heading3
                        utilities="u-mb-small"
                        text={`Important - Please read these terms before booking ${title}`}
                    />
                    <p className="popup__text">
                        Aliquam pretium rutrum vestibulum. Suspendisse metus orci, dapibus sit amet erat vitae, varius semper lectus. Nullam in tellus lacus. Phasellus sed urna sed sapien ullamcorper pulvinar. Curabitur sit amet ante sit amet nibh auctor tempus. Donec a metus eu quam rutrum rhoncus. Nulla ornare purus eu nulla gravida, a luctus urna pretium. Curabitur varius a diam efficitur eleifend. Pellentesque nulla orci, tristique in sem ac, volutpat porttitor quam. Pellentesque in justo vel nunc imperdiet feugiat. Etiam eget enim porta odio tempus accumsan. In hac habitasse platea dictumst. Nam tristique risus finibus velit dictum, vestibulum ornare justo tincidunt. Aliquam eu turpis vehicula, cursus nunc sed, iaculis quam. Curabitur a sodales lorem.
                    </p>
                    <Button
                        css='btn btn--green'
                        text="Book now"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Popup;