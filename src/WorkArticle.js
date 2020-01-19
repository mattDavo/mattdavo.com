import React from 'react';
import {
    useParams
} from 'react-router-dom';

import MarkdownFile from './MarkdownFile';

function WorkArticle() {
    let { topicId } = useParams();
    return <MarkdownFile filePath={`/work/${topicId}.md`} />;
}

export default WorkArticle;
