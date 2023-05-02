import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const user = true;
    const name = true
    const [mouseEnter, setMouseEnter] = useState(false)
    console.log(mouseEnter);
    return (
        <div className='h-24 w-full px-16 py-10 flex items-center' >
            <h1 className='flex-grow text-4xl font-extrabold text-gray-600'>Chef's Plate</h1>

            <ul className='flex space-x-12 text-base font-medium'>

                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>

                <li>
                    <NavLink to={'blog'}>Blog</NavLink>
                </li>
            </ul>

            {
                user ?
                    <div className='overflow-hidden relative transition duration-200 transform ml-12'>
                        <img
                            src='https://i.ibb.co/dbb1Vkh/f48e2701-903c-42b2-a70d-443cdea9f4d3-removebg-preview.png'
                            alt='profile'
                            className='object-cover w-20'
                        />

                        {
                            name && 
                            <div className='bg-white opacity-0 hover:opacity-100 text-gray-900 absolute inset-0 transition-opacity duration-200 flex flex-col rounded-xl'>
                            <p className='text-xl font-extrabold text-center m-auto'>yasin</p>
                        </div>
                        }
                    </div>
                    :
                    <button className='ml-12 py-3 px-7 bg-[#F9A51A] rounded-lg shadow-md'>Login</button>
            }
        </div>
    );
};

export default Header;