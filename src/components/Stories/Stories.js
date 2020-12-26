import React, {useState, useEffect} from 'react';
import Heading2 from '../utils/heading2/Heading2';
import Button from '../utils/button/Button';
import storiesData from '../../json/stories.json';
import StoryCard from './StoryCard'
import video from '../../assets/img/video.mp4';
import videobm from '../../assets/img/video.webm';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        setStories(storiesData);
    }, [])
    return ( 
        <section className="section-stories">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                    <source src={videobm} type="video/webm"/>
                    Your browser is not supported!
                </video>
            </div>
            <Heading2
                text="We make people genuinely happy"
            />

            {stories?.map((story, i) => (
                <StoryCard
                    key={i}
                    story={story}
                />
            ))}
            <div className="u-center-text u-mt-huge">
                <Button
                    css="btn-text"
                    text="Read all stories &rarr;"
                />
            </div>
        </section>
     );
}
 
export default Stories;