import React from 'react';
import Markdown from 'markdown-to-jsx';

import './MarkdownFile.css'
import CodeBlock from './CodeBlock';

function NoteBlock(props: React.PropsWithChildren<{}>) {
    const { children } = props;

    return (
        <div className="note">
            <p>{children}</p>
        </div>
    );
}

function Image(props: { src: string; style: object }) {
    const { src, style } = props;

    return (
        <img
            {...props}
            style={{
                maxWidth: '100%',
                maxHeight: '600px',
                margin: '5px',
                ...style,
            }}
            alt={src}
        />
    );
}

interface IProps {
    filePath: string;
}

interface IState {
    finished: boolean;
    input: string;
    success: boolean
}

class MarkdownFile extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            finished: false,
            input: '',
            success: false,
        };
    }

    componentDidMount() {
        const { filePath } = this.props;

        fetch(filePath)
            .then((response) => response.text())
            .then((text) => {
                console.log(text);
                console.log(filePath);
                this.setState({
                    input: text,
                    finished: true,
                    success: true,
                })
            })
            .catch(() => {
                this.setState({ finished: true, success: false })
            })
    }

    render() {
        const { input, finished, success } = this.state;
        if (input && success === true) {
            return (
                <div className="markdown-container">
                    <Markdown
                        // eslint-disable-next-line react/no-children-prop
                        children={input}
                        options={{
                            overrides: {
                                img: Image,
                                NoteBlock,
                                code: CodeBlock,
                            },
                        }}
                    />

                </div>
            );
        }
        if (finished && !success) {
            return (
                <div className="markdown-container not-found">
                    <h2>{'There doesn\'t seem to be anything here...'}</h2>
                </div>
            )
        }

        return (
            <div />
        )
    }
}

export default MarkdownFile;
