import React, {useEffect} from 'react';
import {init} from '@emailjs/browser';
import {Route, Routes} from 'react-router-dom';
import {MainLayout} from './components/MainLayout';
import {Home} from './pages/Home';
import {Error} from './pages/Error';
import {Tutorials} from './pages/Tutorials';
import {Tutorial} from './pages/Tutorial';
import {loadTutorials} from './data/tutorials';

function App() {
    init(process.env.REACT_APP_EMAILJS_TOKEN);

    useEffect(() => {
        loadTutorials();
    }, []);

    return (
        <MainLayout>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/tutorials' element={<Tutorials/>}/>
                <Route path='/tutorials/:title' element={<Tutorial/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </MainLayout>
    );
}

export default App;
