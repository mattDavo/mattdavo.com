import React from 'react';
import { useParams } from 'react-router-dom';

import './Tags.css';
import blogData from '../blog/BlogData.json';
import blogTags from '../blog/BlogTags.json';
import { renderArticles, renderTag } from '../blog/Blog';
import Article from '../blog/Article';

function Tags() {
    const { tag = '' } = useParams();

    const tagData = blogTags.filter((t) => t.id === tag)[0];
    if (!tagData) {
        return (
            <div id="tags-container">
                <h2 className="title centered-text">
                    {`'${tag}' does not match any known tags.`}
                </h2>
            </div>
        );
    }

    const matchingBlogs = (blogData as Article[]).filter((b) => b.tags.includes(tag));
    const articles = renderArticles(matchingBlogs);

    return (
        <div id="tags-container">
            <h1 className="title">
                Articles with tag:
                {' '}
                {renderTag(tag)}
            </h1>
            {articles}
        </div>
    )
}

export default Tags;
