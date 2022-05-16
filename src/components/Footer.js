import React from 'react';
import {Col, Container, Navbar, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {BsBoxArrowUpRight, BsGithub, BsLinkedin} from 'react-icons/bs';
import {Icon} from './Icon';

const Footer = () => {
    return (
        <footer className='d-flex bg-light py-5 mt-auto'>
            <Container>
                <Row className='gap-3 gap-md-0'>
                    <Col xs={12} md={6}
                         className='d-flex justify-content-evenly align-items-center flex-row order-md-last pb-1 pb-md-0'>
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
                    <Col xs={12} md={6} className='d-flex justify-content-center align-items-center flex-column'>
                        <Navbar.Brand as={Link} to='/' className='d-flex align-items-center gap-1'>
                            <img src={'icons/logo-light.png'} alt='logo' className='non-draggable' style={{width: '2.25rem'}}/>
                            <span className='text-secondary fs-3'>
                                Fran Matešić
                            </span>
                        </Navbar.Brand>
                        <span>
                            © Fran Matešić, {new Date().getFullYear()}
                        </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
