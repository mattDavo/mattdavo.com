import React from 'react';
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

import BlogArticle from './BlogArticle';
import './Blog.css';
import './Tag.css';

import blogData from './BlogData.json';
import blogTags from './BlogTags.json';

function getTagData(tag) {
    return blogTags.filter((t) => t.id === tag)[0];
}

function renderTag(tag, i) {
    let { color, link, title } = getTagData(tag) || {};
    return (
        <Link key={i} className="tag" to={link} style={{ backgroundColor: color }}>{title}</Link>
    );
}

function getTags(article) {
    return article.tags.map(renderTag);
}

function getArticleSubtitle(article) {
    let tags = getTags(article);
    
    let date = new Date(article.date * 1000);
    let dataStr = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    
    return (<span className="subtitle article-subtitle">{tags}<span className="article-date">Published on {dataStr}</span></span>);
}

function renderArticle(article, i) {
    let subtitle = getArticleSubtitle(article);

    return (
        <div key={i}>
            <hr />
            <h2 className="title article-title link-title">
                <Link to={article.link}>
                    {article.title}
                </Link>
            </h2>
            {subtitle}
            <p className="subtitle article-summary">{article.summary}</p>
        </div>
    );
}

function renderArticles(articles) {
    return articles.map(renderArticle);
}

class Blog extends React.Component {
    
    
    
    render() {
        let articles = renderArticles(blogData);
        
        return (
            <div id="blog-container">
                <Switch>
                    <Route exact path="/blog">
                        <h1>Weekly Articles</h1>
                        <p>Articles on what I learn each week in my life as a developer.</p>
                        {articles}
                    </Route>
                    <Route path="/blog/:blog">
                        <BlogArticle blogData={blogData} blogTags={blogTags}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export { getArticleSubtitle, renderArticles, renderTag };
export default Blog;
