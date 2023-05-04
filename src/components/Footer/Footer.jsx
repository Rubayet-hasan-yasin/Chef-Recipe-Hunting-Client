import React from 'react';

const Footer = () => {
    return (
        <footer className='border-t-2 pb-24 px-3'>
            <div className='my-container pt-32 pb-10 md:flex justify-between'>
                <div className='w-80 mb-32 md:mb-0'>
                    <h1 className='text-3xl text-gray-700 font-extrabold'>Chef's Plate</h1>

                    <p className='text-base text-gray-600 my-5'>Chef's Plate is your ultimate online resource for finding the perfect chef.</p>

                    <img src="https://i.ibb.co/938Qg94/Group-9969.png" alt="logo" />
                </div>





                <div className='grid grid-cols-2 md:grid-cols-3 gap-20'>

                    <div>
                        <h3 className='text-xl text-gray-700 font-semibold'>Product</h3>
                        <p className='text-base text-gray-600 my-3'>Food</p>
                        <p className='text-base text-gray-600 my-3'>Plans & Pricing</p>
                        <p className='text-base text-gray-600 my-3'>Customers</p>
                        <p className='text-base text-gray-600 my-3'>Integrations</p>
                    </div>

                    <div>
                        <h3 className='text-xl text-gray-700 font-semibold'>Support</h3>
                        <p className='text-base text-gray-600 my-3'>Help Desk</p>
                        <p className='text-base text-gray-600 my-3'>Sales</p>
                        <p className='text-base text-gray-600 my-3'>Become a Partner</p>
                        <p className='text-base text-gray-600 my-3'>Developers</p>
                    </div>

                    <div>
                        <h3 className='text-xl text-gray-700 font-semibold'>Contact</h3>
                        <p className='text-base text-gray-600 my-3'>524 Broadway , NYC</p>
                        <p className='text-base text-gray-600 my-3'>+1 777 - 978 - 5570</p>

                    </div>
                </div>

            </div>
            <hr className='my-container border-[#7e8ffe52] mt-5' />
            <div className='my-container flex justify-between mt-10 items-center'>
                <p className='text-base text-gray-600 my-3'> © 2023 Chef's Plate Inc. All rights reserved.</p>
                <p className='text-base text-gray-600 my-3'>Powered by Chef's Plate</p>
            </div>

        </footer>
    );
};

export default Footer;