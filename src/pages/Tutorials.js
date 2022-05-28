import {Card, Col, Container, Figure, Row} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';

export const Tutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    const locale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;

    useEffect(() => {
        const context = require.context('../tutorials', false, /\.md$/);

        context.keys().forEach(fileName => {
            const moduleName = fileName.replace(/(\.)/, '');

            if (tutorials.findIndex(t => t.fileName === fileName) !== -1) {
                return;
            }

            import('../tutorials' + moduleName)
                .then(module => {
                    fetch(module.default)
                        .then(res => res.text())
                        .then(md => {
                            const title = md.match(/\[title]:\s*#\s*\((.*?)\)/);
                            const description = md.match(/\[description]:\s*#\s*\((.*?)\)/);
                            const thumbnail = md.match(/\[thumbnail]:\s*#\s*\((.*?)\)/);
                            const publishedDate = md.match(/\[published]:\s*#\s*\((.*?)\)/);
                            const content = md.replace(/'/, '\\\'');
                            setTutorials([...tutorials, {
                                fileName: fileName,
                                title: title[1],
                                description: description[1],
                                thumbnail: thumbnail[1],
                                publishedDate: new Date(publishedDate[1]),
                                content: content
                            }]);
                        });
                });
        });

        const sorted = tutorials.sort((t1, t2) => t1.publishedDate.getTime() > t2.publishedDate.getTime());
        setTutorials(sorted);
    });

    return (
        <Container>
            <Container className='d-flex flex-column align-items-center pt-3 pb-5'>
                <span className='fs-1'>Tutorials</span>
                <span className='fs-6'>Collection of tutorials which assume you have basic knowledge of<br/>
                    programming and algorithm principles.</span>
            </Container>
            <Row>
                {tutorials.map(tutorial =>
                    <Col xs={12} md={6} lg={4} xl={3} key={tutorial.title} className='pb-3'>
                        <Card>
                            <Card.Body>
                                <Figure>
                                    <Figure.Image width={100} src={tutorial.thumbnail} alt={tutorial.title}/>
                                </Figure>
                                <hr/>
                                <Card.Title>
                                    {tutorial.title}
                                </Card.Title>
                                <Card.Text>
                                    {tutorial.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='text-muted text-center'>
                                {tutorial.publishedDate.toLocaleDateString(locale)}
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
        // <Container className='bg-light py-3 my-3'>
        //     <BootstrapMarkdown markdown={markdown.content}/>
        // </Container>
    );
}