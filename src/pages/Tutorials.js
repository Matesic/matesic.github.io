import {Card, Col, Container, Figure, Row} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {loadedTutorials} from '../data/tutorials';
import {Link} from 'react-router-dom';
import imgLoading from '../assets/images/loading.gif'

export const Tutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    const locale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;

    useEffect(() => {
        if (loadedTutorials.length <= 0) {
            setTimeout(() => {
                setTutorials(loadedTutorials);
            }, 1000);
            return;
        }

        setTutorials(loadedTutorials);
    }, []);

    return (
        <Container>
            <Container className='d-flex flex-column align-items-center pt-3 pb-5'>
                <span className='fs-1'>Tutorials</span>
                <span className='fs-6'>Collection of tutorials which assume you have basic knowledge of<br/>
                    programming and algorithm principles.</span>
            </Container>
            <Row>
                {tutorials.length <= 0
                    ? <Col xs={12} className='d-flex justify-content-center'>
                        <Figure>
                            <Figure.Image width={100} src={imgLoading} alt='loading'/>
                        </Figure>
                    </Col>
                    : tutorials.map(tutorial =>
                        <Col xs={12} md={6} lg={6} xl={4} xxl={3} key={tutorial.title} className='pb-3'>
                            <Card>
                                <Card.Body>
                                    <Container as={Link} to={'/tutorials/' + tutorial.title} className='d-flex justify-content-center'>
                                        <Figure>
                                            <Figure.Image width={100} src={tutorial.thumbnail} alt={tutorial.title}/>
                                        </Figure>
                                    </Container>
                                    <hr/>
                                    <Card.Title as={Link} to={'/tutorials/' + tutorial.title} className='fs-4'>
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
                    )
                }
            </Row>
        </Container>
    );
}