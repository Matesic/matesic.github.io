import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <header className='fixed-top'>
            <Navbar bg='light' variant='light' collapseOnSelect expand='md'>
                <Container fluid className='px-1 px-md-3 px-xl-5'>
                    <Navbar.Brand as={Link} to='/'>
                        <Container fluid className='d-flex gap-2 align-items-center unselectable py-0'>
                            <img src={'images/logo/logo-light.png'} alt='logo' className='non-draggable' style={{width: '2rem'}}/>
                            <span className='fs-4'>Fran Matešić</span>
                        </Container>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='collapse-navbar'/>
                    <Navbar.Collapse id='collapse-navbar' className='justify-content-end me-5'>
                        <Nav className='text-center'>
                            <Nav.Link as={Link} to='/' className='d-block d-md-none'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/tutorials'>Tutorials</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

