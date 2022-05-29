import {Link, useNavigate, useParams} from 'react-router-dom';
import {Button, Card, Container} from 'react-bootstrap';
import {BootstrapMarkdown} from '../components/BootstrapMarkdown';
import {loadedTutorials} from '../data/tutorials';
import React, {useEffect, useState} from 'react';

export const Tutorial = () => {
    const navigate = useNavigate();
    const [markdown, setMarkdown] = useState({content: '<div align="center">Loading</div>'});
    const {title} = useParams();

    useEffect(() => {
        if (loadedTutorials.length <= 0) {
            setTimeout(() => {
                findAndSetMarkdown();
            }, 1000);
            return;
        }

        findAndSetMarkdown();
    }, []);

    const findAndSetMarkdown = () => {
        const md = loadedTutorials.find(t => t.title === title);
        if (md === undefined || md === null) {
            navigate('/tutorials');
            return;
        }
        setMarkdown(md);
    }

    return (
        <Container id='back-to-top' className='my-3 px-3 px-md-0'>
            <Card className='mb-3'>
                <Card.Header className='fs-4'>
                    <Link to='/tutorials'>Tutorials</Link>
                    {markdown.category !== null
                        ? <span> / <Link to={'/tutorials#' + markdown.category}>{markdown.category}</Link></span>
                        : null}
                </Card.Header>
                <Card.Body className='px-3 px-md-5'>
                    <BootstrapMarkdown markdown={markdown.content}/>
                </Card.Body>
            </Card>
            <Container className='d-flex justify-content-center'>
                <Button variant='secondary'>
                    <a href='#back-to-top' className='text-light'>Back to top</a>
                </Button>
            </Container>
        </Container>
    );
}