import {Link, useNavigate, useParams} from 'react-router-dom';
import {Card, Container} from 'react-bootstrap';
import {BootstrapMarkdown} from '../components/BootstrapMarkdown';
import {tutorialData} from '../data/tutorials';
import React, {useEffect, useState} from 'react';

export const Tutorial = () => {
    const navigate = useNavigate();
    const [markdown, setMarkdown] = useState({content: '<div align="center">Loading</div>'});
    const {category, title} = useParams();

    useEffect(() => {
        if (tutorialData.size === 0) {
            setTimeout(() => {
                findAndSetMarkdown();
            }, 1000);
            return;
        }
        findAndSetMarkdown();
    }, []);

    const findAndSetMarkdown = () => {
        if (tutorialData.has(category)) {
            const tutorial = tutorialData.get(category).tutorials.find(t => t.title === title.replace(/_/g, ' '));
            if (tutorial !== undefined && tutorial !== null) {
                setMarkdown(tutorial);
                return;
            }
        }
        navigate('/tutorials');
    }

    return (
        <Container className='my-3 px-3 px-md-0'>
            <Card className='mb-3'>
                <Card.Header className='fs-4'>
                    <Link to='/tutorials'>Tutorials</Link>
                    <span> / {markdown.category}</span>
                </Card.Header>
                <Card.Body className='px-3 px-md-5'>
                    <BootstrapMarkdown markdown={markdown.content}/>
                </Card.Body>
            </Card>
        </Container>
    );
}