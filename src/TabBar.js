import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './TabBar.css';

class TabBar extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            selected: 'home'
        };
    }
    
    render() {
        return (
            <div id="tab-bar">
                <ul>
                    <li><Link
                        to="/"
                        className={`` + (this.props.location.pathname === '/' ? ' selected' : '')}
                    >
                        Home
                    </Link></li>
                    <li><Link
                        to="/about"
                        className={`` + (this.props.location.pathname === '/about' ? ' selected' : '')}
                    >
                        About
                    </Link></li>
                    <li><Link
                        to="/blog"
                        className={`` + (this.props.location.pathname.startsWith('/blog/') || this.props.location.pathname === '/blog' ? ' selected' : '')}
                    >
                        Blog
                    </Link></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(TabBar);
