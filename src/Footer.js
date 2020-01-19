import React from 'react';

import './Footer.css';

class Footer extends React.Component {
    
    render() {
        return (
            <div id="app-footer">
                <p className="footer-text">Copyright © Matthew Davidson 2020</p>
                <p className="footer-text">Site made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a></p>
            </div>
        );
    }
}

export default Footer;
