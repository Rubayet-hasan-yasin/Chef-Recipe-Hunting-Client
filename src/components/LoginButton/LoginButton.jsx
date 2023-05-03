import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const LoginButton = () => {
    return (
        <div className='grid place-content-center'>
            <button className='flex items-center gap-4 text-xl font-extrabold text-white bg-blue-950 px-9 py-2 rounded-3xl shadow-xl my-1'><FcGoogle className='h-8 w-8'/> Login With Google</button>

            <button className='flex items-center gap-4 text-xl font-extrabold text-white bg-blue-600 px-9 py-2 rounded-3xl shadow-xl my-1'><FaGithub className='h-8 w-8'/> Login With Github</button>
            
        </div>
    );
};

export default LoginButton;