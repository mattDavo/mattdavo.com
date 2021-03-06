import React from 'react';

import './NotFound.css';

function NotFoundComponent(): JSX.Element {
    return (
        <div className="not-found-container">
            <h2>{'Hmmm, yeah there isn\'t anything here...'}</h2>
            <h3 className="Not-found-subtext">Are you sure that you have the right link?</h3>
        </div>
    )
}

export default NotFoundComponent;
