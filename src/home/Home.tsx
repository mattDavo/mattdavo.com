import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import '../common/Tag.css';

import data from './HomeData.json'

interface Tag {
    title: string;
    link: string;
    color: string;
}

interface HomeSectionItem {
    title: string;
    subtitle?: string;
    body?: string;
    previewImage?: string;
    link?: string;
    tags?: [Tag];
}

interface HomeSection {
    title: string;
    subtitle?: string;
    items: [HomeSectionItem];
}

function Home() {
    const sections = (data as HomeSection[]).map((section, i) => (
        <HomeSection
            title={section.title}
            subtitle={section.subtitle}
            items={section.items}
            key={section.title}
        />
    ));
    return (
        <div id="home">
            {sections}
        </div>
    );
}

interface IProps {
    title: string;
    subtitle?: string;
    items: [HomeSectionItem];
}

function HomeSection(props: IProps) {
    const { title, subtitle, items } = props;

    const sectionItems = (items || []).map((item) => {
        const tags = (item.tags || [] as Tag[]).map((tag) => (
            <a
                className="tag"
                key={tag.title}
                href={tag.link}
                style={{ backgroundColor: tag.color }}
            >
                {tag.title}
            </a>
        ));
        return (
            <div className="section-item" key={item.title}>
                <h4 className="title link-title section-item-title">
                    {(item.link
                    && (
                        <Link to={item.link}>
                            {item.title}
                        </Link>
                    )) || (item.title)}
                </h4>
                <h5 className="subtitle section-item-subtitle">{item.subtitle}</h5>
                <p className="section-item-body">{item.body}</p>
                {item.previewImage != null
                    && <img className="section-item-preview-image" src={item.previewImage} alt={item.title} />}
                <p>
                    {tags}
                </p>
            </div>
        );
    })

    return (
        <div>
            <div className="title section-heading">
                <h2 className="title section-heading-title">{title}</h2>
                {/* <h2 className="section-heading-expand"><a href="/">SEE ALL...</a></h2> */}
            </div>
            {subtitle
                && <h4 className="subtitle section-subheading">{subtitle}</h4>}
            <div className="section-items">
                {sectionItems}
            </div>
        </div>
    );
}

export default Home;
