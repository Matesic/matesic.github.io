import {Alert, Button, Card, Col, Container, Form, Row} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {sha512} from 'js-sha512';
import {send} from '@emailjs/browser';

const defaultAlert = {
    show: false,
    variant: 'primary',
    message: 'message'
};
let timeoutID = 0;

export const ContactForm = () => {
    const [validated, setValidated] = useState(false);
    const [alert, setAlert] = useState(defaultAlert);
    const [emailSent, setEmailSent] = useState(false);

    const emailSentKey = sha512('emailSent');

    useEffect(() => {
        checkEmailSentExpiry();
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        setValidated(true);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        handleMessage(form, event.target.elements);
    }

    const handleMessage = (form, elements) => {
        checkEmailSentExpiry();
        if (emailSent) {
            openAlert('danger', 'One message per day!');
            return;
        }

        const [email, name, message] = elements;
        const templateParams = {
            reply_to: email.value,
            from_name: name.value,
            message: message.value
        }

        send('service_8xrxgpq', 'template_6hzpyda', templateParams, 'vD4_rNE89yuN-e3ke')
            .then(() => {
                setEmailSentExpiry();
                openAlert('success', 'Message sent!');
                form.reset();
                setValidated(false);
            });
    }

    const setEmailSentExpiry = () => {
        setEmailSent(true);
        localStorage.setItem(emailSentKey, JSON.stringify(new Date().getTime() + 86400000));
    }

    const checkEmailSentExpiry = () => {
        const emailSent = localStorage.getItem(emailSentKey);
        if (!emailSent) {
            return;
        }

        const emailSentExpiry = JSON.parse(emailSent);

        if (emailSentExpiry < new Date().getTime()) {
            localStorage.removeItem(emailSentKey);
            setEmailSent(false);
            return;
        }

        setEmailSent(true);
    }

    const openAlert = (variant, message) => {
        setAlert({show: true, variant: variant, message: message});

        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            setAlert(defaultAlert);
        }, 3000);
    }

    return (
        <>
            <Card className='px-4 py-3' border='primary'>
                <Container fluid className='d-flex justify-content-center'>
                    <h2>Contact me</h2>
                </Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className='mb-1'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            id='email'
                            type='email'
                            required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid email address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mb-1'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            id='name'
                            required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            id='message'
                            as='textarea'
                            rows={5}
                            required
                            style={{resize: 'none'}}/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                        <Col xs={4}>
                            <Button type='submit' className='px-4'>Send</Button>
                        </Col>
                        <Col xs={8}>
                            {alert.show && <Alert className='mb-0 py-1' variant={alert.variant}>
                                {alert.message}
                            </Alert>}
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    );
}