import React from 'react';

import './Header.css'
import me from './images/me.jpg';

import {
    FaFacebook,
    FaFileAlt,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";

import TabBar from './TabBar';

class Header extends React.Component {
    
    render() {
        return (
            <div className="app-header">
                <img id="header-image" src={me} alt="Logo" />
                <div id="social-icons">
                    <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthew-davidson-5b677b150/">
                        <FaLinkedin size='2em'/>
                    </a>
                    <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/mattDavo">
                        <FaGithub size='2em' />
                    </a>
                    <a className="link-icon" href="mailto:mattdavo15@gmail.com">
                        <FaEnvelope size='2em' />
                    </a>
                    <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1cICfzFlLP0tjJas94PhyQvSm1qDhJP5elnOF9gqtvMo/export?format=pdf">
                        <FaFileAlt size='2em' />
                    </a>
                    <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/matthew.davidson.33234">
                        <FaFacebook size='2em' />
                    </a>
                    <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mattydavo15/">
                        <FaInstagram size='2em' />
                    </a>
                    <a className="link-icon" target="_blank" rel="noopener noreferrer" href="https://twitter.com/mattdavo">
                        <FaTwitter size='2em' />
                    </a>
                </div>
                <TabBar />
                <h1 id="header-name"><a href="/">Matthew Davidson</a></h1>
            </div>
        );
    }
}

export default Header;
