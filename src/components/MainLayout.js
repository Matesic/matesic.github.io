import React from 'react';
import {Navigation} from './Navigation';
import Footer from './Footer';
import {Container} from 'react-bootstrap';

export const MainLayout = (props) => {
    return (
        <>
            <Navigation/>
            <Container fluid className='px-0 pt-5 mt-4'>
                {props.children}
            </Container>
            <Footer/>
        </>
    );
}