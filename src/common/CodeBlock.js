import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import './codeStyle.css';

class CodeBlock extends React.Component {

    render() {
        const { className, children } = this.props;
        const language = (className || "").replace('lang-', '');
        if (className === undefined) {
            return (<code>{children}</code>);
        }
        
        return (
            <SyntaxHighlighter language={language} useInlineStyles={false} wrapLines={true}>
                {children}
            </SyntaxHighlighter>
        );
    }
}

export default CodeBlock;
