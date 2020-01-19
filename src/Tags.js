import React from 'react';
import { useParams } from 'react-router-dom';

import './Tags.css';
import blogData from './BlogData.json';
import blogTags from './BlogTags.json';
import { renderArticles, renderTag } from './Blog';



function Tags() {
    let { tag } = useParams();
    
    let tagData = blogTags.filter((t) =>  t.id === tag )[0];
    if (!tagData) {
        return (
            <div id="tags-container">
                <h2 className="title centered-text">'{tag}' does not match any known tags.</h2>
            </div>
        );
    }
    
    let matchingBlogs = blogData.filter((b) => b.tags.includes(tag));
    let articles = renderArticles(matchingBlogs);
    
    return (
        <div id="tags-container">
            <h1 className="title">Articles with tag: {renderTag(tag)}</h1>
            {articles}
        </div>
    )
}

export default Tags;
