import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const BootstrapMarkdown = (props) => {
    return (
        <ReactMarkdown
            children={props.markdown}
            remarkPlugins={[remarkGfm, remarkToc]}
            rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]}
            components={{
                table({children}) {
                    return (
                        <Table striped bordered responsive>
                            {children}
                        </Table>
                    );
                },
                code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}/>
    );
}

BootstrapMarkdown.propTypes = {
    markdown: PropTypes.string.isRequired
}