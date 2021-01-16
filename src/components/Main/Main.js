import React, {useState, useEffect} from 'react';
import Heading2 from '../utils/heading2/Heading2';
import Heading3 from '../utils/heading3/Heading3';
import Paragraph from '../utils/paragraph/Paragraph';
import Button from '../utils/button/Button';
import Img from '../utils/img/Img';
import image1 from '../../assets/img/nat-1-large.jpg';
import image1small from '../../assets/img/nat-1.jpg';
import image2 from '../../assets/img/nat-2-large.jpg';
import image2small from '../../assets/img/nat-2.jpg';
import image3 from '../../assets/img/nat-3-large.jpg';
import image3small from '../../assets/img/nat-3.jpg';

const Main = () => {

    const [attrs, setattrs] = useState({
        image1: {
            sourceSet: '',
            sizes: '',
            alt: '',
            css: '',
            path: ''
        },
        image2: {
            sourceSet: '',
            sizes: '',
            alt: '',
            css: '',
            path: ''
        },
        image3: {
            sourceSet: '',
            sizes: '',
            alt: '',
            css: '',
            path: ''
        },
    })

    useEffect(() => {
        setattrs({
            image1: {
                sourceSet: `${image1small} 300w, ${image1} 1000w`,
                sizes: '(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px',
                alt: 'landscape-1',
                css: 'composition__photo composition__photo--p1',
                path: image1
            },
            image2: {
                sourceSet: `${image2small} 300w, ${image2} 1000w`,
                sizes: '(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px',
                alt: 'landscape-2',
                css: 'composition__photo composition__photo--p2',
                path: image2
            },
            image3: {
                sourceSet: `${image3small} 300w, ${image3} 1000w`,
                sizes: '(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px',
                alt: 'landscape-3',
                css: 'composition__photo composition__photo--p3',
                path: image3
            }, 
        })
    }, [])

    return ( 
        <main id="section-about">
            <section className="section-about">
                <Heading2
                    text="Exciting tours for adventurous people"
                />
                <div className="row">
                    <div className="col-1-of-2">
                        <Heading3
                            text="You're going to fall in love with nature"
                            utilities="u-mb-small"
                        />
                        <Paragraph
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Porro ducimus, fugiat dolorum excepturi officiis fuga impedit odit ad 
                            velit amet natus eveniet fugit consectetur laborum placeat nisi. Sed, 
                            quaerat quasi!"
                            css="paragraph"
                        />

                        <Heading3
                            text="Live adventures like you never have before"
                            utilities="u-mb-small"
                        />
                        <Paragraph
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Blanditiis a distinctio unde reiciendis nesciunt nobis, qui ea maiores!"
                            css="paragraph"
                        />
                        <Button
                            css="btn-text"
                            text="Learn more &rarr;"
                        />
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <Img attrs={attrs.image1}/>
                            <Img attrs={attrs.image2}/>
                            <Img attrs={attrs.image3}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default Main;