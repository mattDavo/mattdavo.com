import React from 'react';
import {
    useParams,
} from 'react-router-dom';

import MarkdownFile from '../common/MarkdownFile';
import workData from './WorkData.json';
import NotFoundComponent from '../app/NotFoundComponent';

function WorkArticle() {
    const { topicId = '' } = useParams();
    if (!(workData as string[]).includes(topicId)) {
        return <NotFoundComponent />
    }

    return <MarkdownFile filePath={`/content/work/${topicId}.md`} />;
}

export default WorkArticle;
