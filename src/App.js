import React from 'react';
import {init} from '@emailjs/browser';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Error} from './pages/Error';
import {MainLayout} from './components/MainLayout';
import {Tutorials} from './pages/Tutorials';

function App() {
    init(process.env.REACT_APP_EMAILJS_TOKEN);

    return (
        <MainLayout>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/tutorials' element={<Tutorials/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </MainLayout>
    );
}

export default App;
