import React from 'react';
import ReactMarkdown from "react-markdown";

import './MarkdownFile.css'
import CodeBlock from "./CodeBlock";

class MarkdownFile extends React.Component {

    constructor(props) {
        super(props);
        this.state = { finished: false };
    }

    componentDidMount() {
        fetch(this.props.filePath)
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({
                    input: text,
                    finished: true
                })
            })
            .catch((e) => {
                console.log(e);
                this.setState({ finished: true })
            })
    }

    render() {
        if (this.state.input) {
            return (
                <div className="markdown-container">
                    <ReactMarkdown
                        source={this.state.input}
                        renderers={{ code: CodeBlock, image: Image, blockquote: Blockquote }}
                        escapeHtml={false}
                    />
                </div>
            );
        }
        else if (this.state.finished) {
            return (
                <div className="markdown-container not-found">
                    <h2>There doesn't seem to be anything here...</h2>
                </div>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }
}

function Blockquote(props) {
    return (
        <blockquote>
            {props.children}
        </blockquote>
    );
}

function Image(props) {
    return <img {...props} style={{ maxWidth: '100%', maxHeight: '600px' }} alt={props.src}/>
}

export default MarkdownFile;
