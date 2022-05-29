import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Figure, ListGroup, Row} from 'react-bootstrap';
import {BsBoxArrowUpRight, BsGithub, BsLinkedin} from 'react-icons/bs';
import {ContactForm} from '../components/ContactForm';
import {Icon} from '../components/Icon';
import {Link} from 'react-router-dom';
import {skills} from '../data/skills';
import {useInterval} from '../hooks/useInterval';
import imgAlgebra from '../assets/images/algebra.png';
import imgFer from '../assets/images/fer.png';
import imgBiss from '../assets/images/biss.png';

export const Home = () => {
    const [start, , isRunning] = useInterval(() => {
        setTimer(timer + interval > 360 ? 0 : timer + interval);
    }, 100);
    const [timer, setTimer] = useState(0);
    const interval = 6;

    useEffect(() => {
        if (!isRunning) {
            start();
        }
    });

    return (
        <Container className='px-3 px-md-0'>
            <Row className='py-5 justify-content-center'>
                <Col xs={12} lg={10} xl={8}>
                    <Card className='px-3 px-md-5 py-5' border='dark'>
                        <div className='d-flex align-items-baseline pb-3'>
                            <span className='fs-1 fw-bold'>Hi</span>
                            <span className='fs-4'>, my name is Fran Matešić.</span>
                        </div>
                        <span className='fs-4 pb-3'>
                                I'm a student at&nbsp;
                            <a href={'#education'}>Algebra University College</a>
                            &nbsp;in Zagreb.</span>
                        <span className='fs-4 pb-3'>
                                Working as Java backend developer at&nbsp;
                            <a href={'#experience'}>BISS</a>
                            &nbsp;since 2021.
                            </span>
                    </Card>
                </Col>
                <Col className='d-none d-xl-flex justify-content-center align-items-center gap-5'>
                    <Link to='//linkedin.com/in/franmatesic' target='_blank'>
                        <Icon
                            color='#0d6efd'
                            size='2rem'
                            icon={<BsLinkedin/>}
                            tooltip={
                                <Container className='d-flex align-items-center gap-2'>
                                    <span className='fs-6'>LinkedIn</span>
                                    <Icon color='white' icon={<BsBoxArrowUpRight/>}/>
                                </Container>
                            }/>
                    </Link>
                    <Link to='//github.com/Matesic' target='_blank'>
                        <Icon
                            size='2rem'
                            icon={<BsGithub/>}
                            tooltip={
                                <Container className='d-flex align-items-center gap-2'>
                                    <span className='fs-6'>Github</span>
                                    <Icon color='white' icon={<BsBoxArrowUpRight/>}/>
                                </Container>
                            }/>
                    </Link>
                </Col>
            </Row>
            <Row className='pb-5 justify-content-center'>
                <Col xs={12} lg={8} xl={6} className='pb-5 pb-xl-0'>
                    <Card id='education' border='success'>
                        <Card.Header className='fs-4 text-center bg-success text-white'>Education</Card.Header>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item className='d-flex flex-row align-items-center'>
                                    <Figure>
                                        <Figure.Image
                                            width={100}
                                            src={imgAlgebra}/>
                                    </Figure>
                                    <Container fluid className='d-flex flex-column'>
                                        <span className='fs-6 fw-bold me-2'>2020 - 2023</span>
                                        <span className='fs-5'>Algebra University College</span>
                                        <span className='fs-6 text-secondary'>Software Engineering</span>
                                    </Container>
                                    <Link to='//algebra.hr' target='_blank'>
                                        <Icon size='1.5rem' icon={<BsBoxArrowUpRight/>}/>
                                    </Link>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex flex-row align-items-center'>
                                    <Figure>
                                        <Figure.Image
                                            width={100}
                                            src={imgFer}/>
                                    </Figure>
                                    <Container fluid className='d-flex flex-column'>
                                        <span className='fs-6 fw-bold me-2'>2018 - 2020</span>
                                        <span className='fs-5'>Faculty of Electrical Engineering and Computing</span>
                                        <span className='fs-6 text-secondary'>Computing</span>
                                    </Container>
                                    <Link to='//fer.unizg.hr' target='_blank'>
                                        <Icon size='1.5rem' icon={<BsBoxArrowUpRight/>}/>
                                    </Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={8} xl={6}>
                    <Card id='experience' border='primary'>
                        <Card.Header className='fs-4 text-center bg-primary text-white'>Experience</Card.Header>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item className='d-flex flex-row align-items-center'>
                                    <Figure>
                                        <Figure.Image
                                            width={100}
                                            src={imgBiss}/>
                                    </Figure>
                                    <Container fluid className='d-flex flex-column'>
                                        <span className='fs-6 fw-bold me-2'>2021 -</span>
                                        <span className='fs-5'>BISS d.o.o.</span>
                                        <span className='fs-6 text-secondary'>Java Spring Boot backend developer</span>
                                    </Container>
                                    <Link to='//biss.hr' target='_blank'>
                                        <Icon size='1.5rem' icon={<BsBoxArrowUpRight/>}/>
                                    </Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='pb-5'>
                <Col>
                    <Card id='skills' border='warning'>
                        <Card.Header className='fs-4 text-center bg-warning'>Skills</Card.Header>
                        <Card.Body className='pt-3'>
                            {skills.map((skillCategory, i) => (
                                <Row key={skillCategory.name} className='pb-3 pb-md-3'>
                                    {i > 0 && <Container className='divider d-flex d-md-none bg-secondary'/>}
                                    {skillCategory.skills.map((skill, j) =>
                                        <Col key={skill.name} xs={6} md={3} className='pt-3 pb-md-0'>
                                            <span className='d-flex flex-column align-items-center gap-1 fs-5'>
                                                    <Icon
                                                        color={`hsl(${Math.sqrt(i * i + j * j) * 30 + timer}, 100%, 50%)`}
                                                        size='2rem' icon={skill.icon}
                                                    />
                                                {skill.name}
                                                </span>
                                        </Col>
                                    )}
                                </Row>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Container className='pb-5'>
                <Row>
                    <Col xs={12} sm={1} md={2} lg={3}/>
                    <Col xs={12} sm={10} md={8} lg={6} className='px-0'>
                        <ContactForm/>
                    </Col>
                    <Col xs={12} sm={1} md={2} lg={3}/>
                </Row>
            </Container>
        </Container>
    );
}