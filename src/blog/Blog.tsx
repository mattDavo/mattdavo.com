import React from 'react';
import {
    Route,
    Switch,
    Link,
} from 'react-router-dom';

import Article from './Article';
import Tag from './Tag';
import BlogArticle from './BlogArticle';
import './Blog.css';
import '../common/Tag.css';

import blogData from './BlogData.json';
import blogTags from './BlogTags.json';

function getTagData(tag: string) {
    return blogTags.filter((t) => t.id === tag)[0];
}

function renderTag(tag: string) {
    const { color, link, title } = getTagData(tag) || {};
    return (
        <Link key={tag} className="tag" to={link} style={{ backgroundColor: color }}>{title}</Link>
    );
}

function getTags(article: Article) {
    return article.tags.map(renderTag);
}

function getArticleSubtitle(article: Article) {
    const tags = getTags(article);

    const date = new Date(article.date * 1000);
    const dataStr = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    return (
        <span className="subtitle article-subtitle">
            {tags}
            <span className="article-date">
                Published on
                {dataStr}
            </span>
        </span>
    );
}

function renderArticle(article: Article, i: number) {
    const subtitle = getArticleSubtitle(article);

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

function renderArticles(articles: Article[]) {
    return articles.map(renderArticle);
}

function Blog() {
    const articles = renderArticles(blogData as Article[]);

    return (
        <div id="blog-container">
            <Switch>
                <Route exact path="/blog">
                    <h1>Developer blog</h1>
                    <p>
                        Articles on concepts/tips/techniques I learn in my life as a
                        developer.
                    </p>
                    {articles}
                </Route>
                <Route path="/blog/:blog">
                    <BlogArticle
                        blogData={blogData as Article[]}
                        blogTags={blogTags as [Tag]}
                    />
                </Route>
            </Switch>
        </div>
    );
}

export { getArticleSubtitle, renderArticles, renderTag };
export default Blog;
