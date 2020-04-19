import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './codeStyle.css';

type IProps = React.PropsWithChildren<{}> & {
    className: string,
}

function CodeBlock(props: IProps): JSX.Element {
    const { className, children } = props;
    const language = (className || '').replace('lang-', '');
    if (className === undefined) {
        return <code>{children}</code>;
    }

    return (
        <SyntaxHighlighter language={language} useInlineStyles={false} wrapLines>
            {children}
        </SyntaxHighlighter>
    );
}

export default CodeBlock;
