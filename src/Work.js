import React from 'react';
import {
    Route,
    Switch,
    useRouteMatch
} from 'react-router-dom';

import './Work.css';
import WorkArticle from './WorkArticle';

function Work() {
    let match = useRouteMatch();
    return (
        <div id="work-container">
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <WorkArticle />
                </Route>
            </Switch>
        </div>
    )
}

export default Work;
