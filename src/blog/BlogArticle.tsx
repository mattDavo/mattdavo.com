import React from 'react';
import {
    useParams,
} from 'react-router-dom';

import Article from './Article';
import Tag from './Tag';
import { getArticleSubtitle } from './Blog';
import MarkdownFile from '../common/MarkdownFile';
import NotFoundComponent from '../app/NotFoundComponent';

function BlogArticle(props: { blogData: Article[]; blogTags: [Tag] }) {
    const { blog } = useParams();

    const { blogData = [] } = props;
    const article = blogData.filter((d) => d.link === `/blog/${blog}`)[0];

    if (typeof article === 'undefined') {
        return <NotFoundComponent />;
    }

    const { title } = article;
    const subtitle = getArticleSubtitle(article);

    return (
        <div>
            <h1 className="title">{title}</h1>
            {subtitle}
            <MarkdownFile filePath={`/content/blog/${blog}.md`} />
        </div>
    );
}

export default BlogArticle;
