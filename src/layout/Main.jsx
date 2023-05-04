import React from 'react';
import Header from '../components/Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header />
            <div className='min-h-[calc(100vh-136px)]'>
                <Outlet />
            </div>
            <Footer />
            <ScrollRestoration/>
        </div>
    );
};

export default Main;