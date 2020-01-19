import React from 'react';

import './About.css';

class About extends React.Component {
    
    render() {
        return (
            <div id="about-container">
                <h1 className="title">Hello</h1>
                <p className="subtitle">Hey I'm Matt, welcome to my site!</p>
                <p className="subtitle">I'm a keen Computer Scientist graduating from the University of New South Wales, Sydney in 2020. I love to work on cool projects, in particular packages and developer tools and am always trying to learn something new to build better software. I have experience working with python as a data engineer and building native iOS and macOS apps. In my spare time I like to contribute to the open source community.</p>
                <p className="subtitle">When I'm not behind a keyboard, I'm probably playing golf, listening to music, grabbing a Chicken Parma with mates, travelling the world or all of the above!</p>
            </div>
        );
    }
}

export default About;
