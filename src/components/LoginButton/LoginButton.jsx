import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';


const LoginButton = () => {
    const {loginWithGoogle, loginWithGithub} = useContext(AuthContext);

    const handleLoginWithGoogle = ()=>{
        loginWithGoogle()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            const message = error.message;
            console.log(message);
        })
    }

    const handleLoginWithGithub = () =>{
        loginWithGithub()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            const message = error.message;
            console.log(message);
        })
    }
    return (
        <div className='grid place-content-center'>
            <button onClick={handleLoginWithGoogle} className='flex items-center gap-4 text-xl font-extrabold text-white bg-blue-950 px-9 py-2 rounded-3xl shadow-xl my-1 focus:ring-4 hover:ring-2'><FcGoogle className='h-8 w-8'/> Login With Google</button>

            <button onClick={handleLoginWithGithub} className='flex items-center gap-4 text-xl font-extrabold text-white bg-blue-600 px-9 py-2 rounded-3xl shadow-xl my-1 focus:ring-4 hover:ring-2'><FaGithub className='h-8 w-8'/> Login With Github</button>
            
        </div>
    );
};

export default LoginButton;