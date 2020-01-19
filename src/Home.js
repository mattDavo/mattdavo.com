import React from 'react';

import './Home.css';
import './Tag.css';

import data from './HomeData.json'

class Home extends React.Component {
    
    render() {
        let sections = data.map((section, i) => {
            return (
                <HomeSection
                    title={section.title}
                    subtitle={section.subtitle}
                    items={section.items}
                    key={i}
                />
            )
        });
        return (
            <div id="home">
                {sections}
            </div>
        );
    }
    
}

class HomeSection extends React.Component {

    render() {
        let sectionItems = (this.props.items || []).map((item, i) => {
            let tags = (item.tags || []).map((tag, i) => {
                return (
                <a
                    className="tag"
                    key={i}
                    href={tag.link}
                    style={{'backgroundColor': tag.color}}
                >
                    {tag.title}
                </a>
                );
            });
            return (
                <div className="section-item" key={i}>
                    <h4 className="title link-title section-item-title">
                        <a href={item.link}>
                            {item.title}
                        </a>
                    </h4>
                    <h5 className="subtitle section-item-subtitle">{item.subtitle}</h5>
                    <p className="section-item-body">{item.body}</p>
                    {item.previewImage != null &&
                        <img className="section-item-preview-image" src={item.previewImage} alt={item.title} />
                    }
                    <p>
                        {tags}
                    </p>
                </div>
            );
        })
        
        return (
            <div>
                <div className="title section-heading">
                    <h2 className="title section-heading-title">{this.props.title}</h2>
                    {/* <h2 className="section-heading-expand"><a href="/">SEE ALL...</a></h2> */}
                </div>
                {this.props.subtitle &&
                    <h4 className="subtitle section-subheading">{this.props.subtitle}</h4>
                }
                <div className="section-items">
                    {sectionItems}
                </div>
            </div>
        );
    }

}

export default Home;
