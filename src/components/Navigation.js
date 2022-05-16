import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <header className='sticky-top fixed-top'>
            <Navbar bg='light' variant='light'>
                <Container fluid className='px-1 px-md-3 px-xl-5'>
                    <Navbar.Brand as={Link} to='/'>
                        <Container fluid className='d-flex gap-2 align-items-center unselectable py-0'>
                            <img src={'icons/logo-light.png'} alt='logo' className='non-draggable' style={{width: '2rem'}}/>
                            <span className='fs-4'>Fran Matešić</span>
                        </Container>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
};

