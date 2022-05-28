import {Container} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {BootstrapMarkdown} from '../components/BootstrapMarkdown';

export const Tutorials = () => {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        const context = require.context('../tutorials', false, /\.md$/);
        setTutorials([]);
        context.keys().forEach(fileName => {
            const moduleName = fileName.replace(/(\.)/, '');
            import('../tutorials' + moduleName)
                .then(module => {
                    fetch(module.default)
                        .then(res => res.text())
                        .then(md => setTutorials([...tutorials, md.replace(/'/, '\\\'')]));
                });
        });
    }, []);

    return (
        <Container className='bg-light py-3 my-3'>
            <BootstrapMarkdown markdown={tutorials[0]}/>
        </Container>
    );
}