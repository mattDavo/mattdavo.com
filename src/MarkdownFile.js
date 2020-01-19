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
        try {
            const readmePath = require(process.env.PUBLIC_URL + '.' + this.props.filePath);
            fetch(readmePath)
                .then(response => {
                    return response.text()
                })
                .then(text => {
                    this.setState({
                        input: text,
                        finished: true
                    })
                })
        }
        catch {
            this.setState({ finished: true })
        }
    }

    render() {
        if (this.state.input) {
            return (
                <div className="markdown-container">
                    <ReactMarkdown
                        source={this.state.input}
                        renderers={{ code: CodeBlock, image: Image }}
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

function Image(props) {
    return <img {...props} style={{ maxWidth: '100%', maxHeight: '600px' }} alt={props.src}/>
}

export default MarkdownFile;
