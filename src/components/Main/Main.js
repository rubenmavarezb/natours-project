import React from 'react';
import Heading2 from '../utils/heading2/Heading2';
import Heading3 from '../utils/heading3/Heading3';
import Paragraph from '../utils/paragraph/Paragraph';
import Button from '../utils/button/Button';

const Main = () => {
    return ( 
        <main>
            <section className="section-about">
                <div className="u-center-text u-mb-big">
                    <Heading2
                        text="Exciting tours for adventurous people"
                    />
                </div>
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
                        />

                        <Heading3
                            text="Live adventures like you never have before"
                            utilities="u-mb-small"
                        />
                        <Paragraph
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Blanditiis a distinctio unde reiciendis nesciunt nobis, qui ea maiores!"
                        />
                        <Button
                            css="btn-text"
                            text="Learn more &rarr;"
                        />
                    </div>
                    <div className="col-1-of-2">
                        image
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default Main;