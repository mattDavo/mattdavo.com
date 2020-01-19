import React from 'react';
import { withRouter } from 'react-router-dom';

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
                    <li><a
                        href="/"
                        className={`` + (this.props.location.pathname === '/' ? ' selected' : '')}
                    >
                        Home
                    </a></li>
                    <li><a
                        href="/about"
                        className={`` + (this.props.location.pathname === '/about' ? ' selected' : '')}
                    >
                        About
                    </a></li>
                    <li><a
                        href="/blog"
                        className={`` + (this.props.location.pathname.startsWith('/blog/') || this.props.location.pathname === '/blog' ? ' selected' : '')}
                    >
                        Blog
                    </a></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(TabBar);
