import {Card, Col, Container, Figure, Row} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {latestTutorials, tutorialData} from '../data/tutorials';
import {Link} from 'react-router-dom';
import parseHTML from 'html-react-parser';
import imgLoading from '../assets/images/loading.gif';

export const Tutorials = () => {
    const [keys, setKeys] = useState([]);
    const locale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;

    useEffect(() => {
        const set = () => {
            setKeys(Array.from(tutorialData.keys()));
        }

        if (tutorialData.size === 0) {
            setTimeout(() => {
                set();
            }, 1000);
            return;
        }
        set();
    }, []);

    const toCamelCase = (value) => {
        return value.substring(0, 1).toUpperCase() + value.substring(1);
    }

    const renderTutorial = (value) => {
        return (
            <Col xs={12} md={6} lg={6} xl={4} xxl={3} key={value.fileName} className='pb-3'>
                <Card>
                    <Card.Body>
                        <Container as={Link}
                                   to={'/tutorials/' + value.category.toLowerCase() + '/' + value.title}
                                   className='d-flex justify-content-center'>
                            <Figure>
                                <Figure.Image width={100} src={value.thumbnail} alt={value.title}/>
                            </Figure>
                        </Container>
                        <hr/>
                        <Card.Title as={Link}
                                    to={'/tutorials/' + value.category.toLowerCase() + '/' + value.title}
                                    className='fs-4'>
                            {value.title}
                        </Card.Title>
                        <Card.Text>
                            {value.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted text-center'>
                        {value.publishedDate.toLocaleDateString(locale)}
                    </Card.Footer>
                </Card>
            </Col>
        )
    }

    return (
        <Container>
            <Container className='d-flex flex-column align-items-center pt-3 pb-5'>
                <span className='fs-1'>Tutorials</span>
                <span className='fs-6'>Collection of tutorials which assume you have basic knowledge of<br/>
                    programming and algorithm principles.</span>
            </Container>
            <hr/>
            <Container className='d-flex flex-column align-items-center mb-3'>
                <h1>Latest</h1>
            </Container>
            <Row className='mb-3'>
                {
                    keys.length === 0
                        ? <Col xs={12} className='d-flex justify-content-center'>
                            <Figure>
                                <Figure.Image width={100} src={imgLoading} alt='loading'/>
                            </Figure>
                        </Col>
                        : latestTutorials.slice(0, 4).map(value => renderTutorial(value))}
            </Row>
            {
                keys.length === 0
                    ? <Col xs={12} className='d-flex justify-content-center'>
                        <Figure>
                            <Figure.Image width={100} src={imgLoading} alt='loading'/>
                        </Figure>
                    </Col>
                    : keys.map(key =>
                        <Row key={key} className='mb-3'>
                            <hr/>
                            <Container id={key} className='d-flex flex-column align-items-center mb-3'>
                                <h1>{toCamelCase(key)}</h1>
                                <p>{parseHTML(tutorialData.get(key).description)}</p>
                            </Container>
                            {tutorialData.get(key).tutorials.map(value => renderTutorial(value))}
                        </Row>)
            }
        </Container>
    );
}