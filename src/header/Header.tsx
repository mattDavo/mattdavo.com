import React from 'react';

import './Header.css'
import {
    FaFacebook,
    FaFileAlt,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa';
import me from '../images/me.jpg';


import TabBar from './TabBar';

function Header(): JSX.Element {
    return (
        <div className="app-header">
            <img id="header-image" src={me} alt="Logo" />
            <div id="social-icons">
                <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthew-davidson-5b677b150/">
                    <FaLinkedin size="2em" />
                </a>
                <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/mattDavo">
                    <FaGithub size="2em" />
                </a>
                <a className="link-icon" href="mailto:mattdavo15@gmail.com">
                    <FaEnvelope size="2em" />
                </a>
                <a className="link-icon" target="_blank" rel="noopener noreferrer" href="/files/cv.pdf">
                    <FaFileAlt size="2em" />
                </a>
                <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/matthew.davidson.33234">
                    <FaFacebook size="2em" />
                </a>
                <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mattydavo15/">
                    <FaInstagram size="2em" />
                </a>
                <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://twitter.com/mattdavo">
                    <FaTwitter size="2em" />
                </a>
            </div>
            <TabBar />
            <h1 id="header-name"><a href="/">Matthew Davidson</a></h1>
        </div>
    );
}

export default Header;
