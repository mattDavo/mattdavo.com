import React from 'react';

import './Footer.css';

function Footer(): JSX.Element {
    return (
        <div id="app-footer">
            <p className="footer-text">Copyright © Matthew Davidson 2020</p>
            <p className="footer-text">
                Site made with
                {' '}
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>
                .
            </p>
            <p className="footer-text">
                Source code available on
                {' '}
                <a href="https://github.com/mattDavo/mattdavo.com">Github</a>
                .
            </p>
        </div>
    );
}

export default Footer;
