import React from 'react';
import {
    useParams
} from 'react-router-dom';

import { getArticleSubtitle } from './Blog';
import MarkdownFile from './MarkdownFile';

function BlogArticle(props) {
    let { blog } = useParams();
    
    let blogData = props.blogData.filter((d) => d.link === `/blog/${blog}`)[0] || {};
    let title = blogData.title;
    let subtitle = getArticleSubtitle(blogData);
    console.log(blogData);
    
    return (
        <div>
            <h1 className="title">{title}</h1>
            {subtitle}
            <MarkdownFile filePath={`/blog/${blog}.md`} />
        </div>
    );
}

export default BlogArticle;
