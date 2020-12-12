import React from 'react';
import Icon from '../utils/icon/Icon';
import Heading3 from '../utils/heading3/Heading3';
import Paragraph from '../utils/paragraph/Paragraph';

const FeatureBox = ({card}) => {

    const { icon, title, paragraph } = card

    return (
        <div className="col-1-of-4">
            <div className="feature-box">
                <Icon
                    css={`feature-box__icon ${icon}`}
                />
                <Heading3
                    text={title}
                    utilities="u-mb-small"
                />
                <Paragraph
                    text={paragraph}
                    css="feature-box__text"
                />
            </div>
        </div>
     );
}
 
export default FeatureBox;