import React from 'react';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';

import './TabBar.css';

function TabBar(props: RouteComponentProps): JSX.Element {
    const {
        location: {
            pathname,
        },
    } = props;

    return (
        <div id="tab-bar">
            <ul>
                <li>
                    <Link
                        to="/"
                        className={`${pathname === '/' ? ' selected' : ''}`}
                    >
                        Home
                    </Link>

                </li>
                <li>
                    <Link
                        to="/about"
                        className={`${pathname === '/about' ? ' selected' : ''}`}
                    >
                        About
                    </Link>

                </li>
                <li>
                    <Link
                        to="/blog"
                        className={`${pathname.startsWith('/blog/') || pathname === '/blog' ? ' selected' : ''}`}
                    >
                        Blog
                    </Link>

                </li>
            </ul>
        </div>
    );
}

export default withRouter(TabBar);
