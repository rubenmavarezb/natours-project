import React from 'react';
import Heading2 from '../utils/heading2/Heading2';
import Heading3 from '../utils/heading3/Heading3';
import Paragraph from '../utils/paragraph/Paragraph';
import Button from '../utils/button/Button';
import Img from '../utils/img/Img';
import image1 from '../../assets/img/nat-1-large.jpg';
import image2 from '../../assets/img/nat-2-large.jpg';
import image3 from '../../assets/img/nat-3-large.jpg';

const Main = () => {
    return ( 
        <main>
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
                            <Img path={image1} alt="Photo 1" css="composition__photo composition__photo--p1"/>
                            <Img path={image2} alt="Photo 2" css="composition__photo composition__photo--p2"/>
                            <Img path={image3} alt="Photo 3" css="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default Main;