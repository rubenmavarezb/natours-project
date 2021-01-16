import React, {useState, useEffect} from 'react';
import Heading2 from '../utils/heading2/Heading2';
import Heading3 from '../utils/heading3/Heading3';
import Button from '../utils/button/Button';
import Img from '../utils/img/Img';

const Popup = ({popup, open, setOpen}) => {
    const [attrs, setattrs] = useState({
        image1: {
            sourceSet: '',
            sizes: '',
            alt: '',
            css: '',
            path: '',
            path2: '',
        },
        image2: {
            sourceSet: '',
            sizes: '',
            alt: '',
            css: '',
            path: '',
            path2: '',
        },
    })

    const { title, img, img_secondary } = popup;

    const image = require(`../../assets/img/${img}`);
    const imageSecondary = require(`../../assets/img/${img_secondary}`);

    useEffect(() => {
        setattrs({
            image1: {
                sourceSet: image.default,
                sizes: '(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px',
                alt: 'Tour',
                css: 'popup__img',
                path: image.default
            },
            image2: {
                sourceSet: imageSecondary.default,
                sizes: '(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px',
                alt: 'Tour2',
                css: 'popup__img',
                path: image.default
            },
        })
        //eslint-disable-next-line
    }, [])

    if(!popup) return null;

    return (
        <div className={open ? "popup open" : "popup"}>
            <div className="popup__content">
                <div className="popup__left">
                    <Img attrs={attrs.image1}/>
                    <Img attrs={attrs.image2}/>
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