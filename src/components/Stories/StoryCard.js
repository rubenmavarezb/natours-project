import React from 'react';
import Heading3 from '../utils/heading3/Heading3';
import Paragraph from '../utils/paragraph/Paragraph';
import Img from '../utils/img/Img';

const StoryCard = ({story}) => {

    if(!story) return null;

    const { heading, comment, client, img } = story;

    const image = require(`../../assets/img/${img}`);

    const attrs = {
        sourceSet: image.default,
        sizes: '',
        alt: 'Person on a tour',
        css: 'story__img',
        path: image.default
    }

    return ( 
        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <Img
                        attrs={attrs}
                    />
                    <figcaption className="story__caption">{client}</figcaption>
                </figure>
                <div className="story__text">
                    <Heading3
                        text={heading}
                        utilities="u-mb-small"
                    />
                    <Paragraph
                        text={comment}
                    />
                </div>
            </div>
        </div>

     );
}
 
export default StoryCard;