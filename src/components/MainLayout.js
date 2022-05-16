import React from 'react';
import {Navigation} from './Navigation';
import Footer from './Footer';

export const MainLayout = (props) => {
    return (
        <>
            <Navigation/>
            {props.children}
            <Footer/>
        </>
    );
}