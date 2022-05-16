import React from 'react';
import {init} from '@emailjs/browser';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Error} from './pages/Error';
import {MainLayout} from './components/MainLayout';

function App() {

    init('vD4_rNE89yuN-e3ke');

    return (
        <MainLayout>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </MainLayout>
    );
}

export default App;
