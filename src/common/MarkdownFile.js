import React from 'react';
import Markdown from 'markdown-to-jsx';

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
                    <Markdown
                        children={this.state.input}
                        options={{
                            overrides: {
                                img: Image,
                                NoteBlock: NoteBlock,
                                code: CodeBlock
                            }
                        }}
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

function NoteBlock(props) {
    return (
        <div className="note">
            <p>
                {props.children}
            </p>
        </div>
    );
}

function Image(props) {
    return <img {...props} style={{ maxWidth: '100%', maxHeight: '600px', margin: '5px', ...props.style}}  alt={props.src}/>
}

export default MarkdownFile;
