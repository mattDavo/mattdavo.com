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

export interface IHomeSection {
    title: string;
    subtitle?: string;
    items: HomeSectionItem[];
    moreLink: string;
}

function Home() {
    const sections = (data as IHomeSection[]).map((section, i) => (
        <HomeSection
            title={section.title}
            subtitle={section.subtitle}
            items={section.items}
            key={section.title}
            moreLink={section.moreLink}
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
    items: HomeSectionItem[];
    moreLink: string;
}

interface SectionItemProps {
    item: HomeSectionItem;
}

export function SectionItem(props: SectionItemProps) {
    const {
        item: {
            tags, title, link, previewImage, subtitle, body,
        },
    } = props;

    return (
        <>
            <h4 className="title link-title section-item-title">
                {(link && <Link to={link}>{title}</Link>)
            || title}
            </h4>
            <h5 className="subtitle section-item-subtitle">{subtitle}</h5>
            <p className="section-item-body">{body}</p>
            {previewImage != null && (
                <img
                    className="section-item-preview-image"
                    src={previewImage}
                    alt={title}
                />
            )}
            <p>
                {(tags || ([] as Tag[])).map((tag) => (
                    <a
                        className="tag"
                        key={tag.title}
                        href={tag.link}
                        style={{ backgroundColor: tag.color }}
                    >
                        {tag.title}
                    </a>
                ))}
            </p>
        </>
    );
}

function HomeSection(props: IProps) {
    const {
        title, subtitle, items, moreLink,
    } = props;

    const sectionItems = (items || []).slice(0, 3).map((item) => (
        <div className="section-item" key={item.title}>
            <SectionItem item={item} />
        </div>
    ));

    return (
        <div>
            <div className="title section-heading">
                <h2 className="title section-heading-title">{title}</h2>

                {items.length > 3 && (
                    <h2>
                        <a className="section-heading-expand" href={moreLink}>More...</a>
                    </h2>
                )}
            </div>
            {subtitle && (
                <h4 className="subtitle section-subheading">{subtitle}</h4>
            )}
            <div className="section-items">{sectionItems}</div>
        </div>
    );
}

export default Home;
