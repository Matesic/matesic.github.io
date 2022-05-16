import {Button, Col, Container, Row} from 'react-bootstrap';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Error = () => {
    const navigate = useNavigate();

    return (
        <Container className='h-75'>
            <Row className='h-100'>
                <Col xs={12} lg={6} className='d-flex align-items-center'>
                    <Container>
                        <Container className='d-flex flex-column px-0'>
                            <span className='fs-1 fw-bold'>Nothing here...</span>
                            <span className='fs-5 text-secondary'>Looks like this page does not exist.</span>
                        </Container>
                        <Button variant='outline-primary mt-2' size='lg' onClick={() => navigate(-1)}>
                            Go back
                        </Button>
                    </Container>
                </Col>
                <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center'>
                    <span className='layer-font unselectable' style={{fontSize: 'calc(5rem + 20vw)'}}>404</span>
                </Col>
            </Row>
        </Container>
    );
}