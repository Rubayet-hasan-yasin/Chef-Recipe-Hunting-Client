import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";
import { GiCook } from "react-icons/gi";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';





const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully LogOut')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <GiCook className='h-10 w-10 text-gray-600' />
                    <span className='ml-1 text-4xl font-bold tracking-wide text-gray-600'>
                        Chef's Plate
                    </span>
                </Link>

                {/* Nav Items Section */}
                <nav className='lg:flex items-center hidden'>
                    <ul className='items-center space-x-8 flex'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Blog'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>

                    {
                        user &&
                        <img
                            id='name-show'
                            src={user.photoURL}
                            alt='profile'
                            className='object-cover w-12 h-12 rounded-full ml-12'
                        />
                    }

                    {
                        user ?

                            <Link >
                                <button onClick={handleLogOut} className='ml-12 py-3 px-7 bg-[#F9A51A] rounded-lg shadow-md'>Log out</button>
                            </Link>

                            :
                            <Link to={'/login'}>
                                <button className='ml-12 py-3 px-7 bg-[#F9A51A] rounded-lg shadow-md'>Login</button>
                            </Link>
                    }
                     <Tooltip anchorSelect="#name-show"
                        content={user?.displayName} />
                </nav>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <HiMenu className='w-6 h-6 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            <GiCook className='h-10 w-10 text-gray-600' />
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                Chef's Plate
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <HiX className='w-6 h-6 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='default'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/blog'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>

                                    {
                                        user ?

                                            <img
                                                data-tooltip-id="my-tooltip" data-tooltip-content="Hello world xdfsgadsgas dsgfdsg!"

                                                src='https://i.ibb.co/dbb1Vkh/f48e2701-903c-42b2-a70d-443cdea9f4d3-removebg-preview.png'
                                                alt='profile'
                                                className='object-cover w-20'
                                            />

                                            :
                                            <button className='ml-12 py-3 px-7 bg-[#F9A51A] rounded-lg shadow-md'>Login</button>
                                    }
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;