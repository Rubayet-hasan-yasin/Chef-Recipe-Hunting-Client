import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div class="flex items-center justify-center h-screen flex-col">
            <h1 className='text-9xl font-extrabold text-gray-800 my-9'>Oops!</h1>
            <p className='text-lg font-semibold mb-2'>404 - PAGE NOT FOUND</p>
            <p className='text-center'>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</p>

            <Link to={'/'}>
                <button className='my-9 text-2xl font-semibold text-white shadow-2xl bg-sky-500 py-4 px-16 rounded-3xl'>GO TO HOMEPAGE</button>
            </Link>
        </div>
    );
};

export default ErrorPage;