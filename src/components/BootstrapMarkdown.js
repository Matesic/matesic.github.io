import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import PropTypes from 'prop-types';
import {Container, Figure, Table} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {stackoverflowLight} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {TooltipButton} from './TooltipButton';
import Zoom from 'react-medium-image-zoom';

export const BootstrapMarkdown = (props) => {
    return (
        <ReactMarkdown
            children={props.markdown}
            remarkPlugins={[remarkGfm, remarkToc]}
            rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]}
            components={{
                code({inline, children, language}) {
                    return !inline ? (
                        <Container className='d-flex flex-row justify-content-between align-items-center bg-light rounded'>
                            <SyntaxHighlighter
                                className='bg-light mb-0 fs-6'
                                style={stackoverflowLight}
                                children={String(children).replace(/\n$/, '')}
                                language={language}
                            />
                            <TooltipButton
                                variant='dark'
                                style='my-2'
                                tooltip='Copied'
                                tooltipStyle='bg-success text-white'
                                placement='left'
                                onClick={() => navigator.clipboard.writeText(children)}>
                                Copy
                            </TooltipButton>
                        </Container>
                    ) : (
                        <code>
                            {children}
                        </code>
                    )
                },
                table({children}) {
                    return (
                        <Table responsive striped bordered>
                            {children}
                        </Table>
                    );
                },
                img({src, alt, width, title}) {
                    const zoom = title !== undefined && title.indexOf('zoom') !== -1;
                    return (
                        <>
                            {zoom ? <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.66)'>
                                    <Figure>
                                        <Figure.Image src={src} alt={alt} width={width}/>
                                    </Figure>
                                </Zoom>
                                : <img src={src} alt={alt} width={width}/>
                            }
                        </>
                    )
                }
            }}/>
    );
}

BootstrapMarkdown.propTypes = {
    markdown: PropTypes.string.isRequired
}