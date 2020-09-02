import React from 'react';
import {
    Route,
    Switch,
    useRouteMatch,
} from 'react-router-dom';

import './Work.css';
import WorkArticle from './WorkArticle';
import { IHomeSection, SectionItem } from '../home/Home';

import data from '../home/HomeData.json';

function Work() {
    const match = useRouteMatch();
    return (
        <div id="work-container">
            <Switch>
                <Route exact path="/work">
                    <WorkPage />
                </Route>
                <Route path={`${match.path}/:topicId`}>
                    <WorkArticle />
                </Route>
            </Switch>
        </div>
    )
}

function WorkPage() {
    const workData = (data as IHomeSection[])[0];

    return (
        <div id="work-container">
            <h1>Work</h1>
            {workData.items.map((work) => (
                <div>
                    <SectionItem item={work} key={work.title} />
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Work;
