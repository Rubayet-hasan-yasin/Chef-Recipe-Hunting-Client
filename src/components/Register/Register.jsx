import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const { createUer, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';



    const handleRegister = event => {
        event.preventDefault()

        setError('')

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;

        if (password.length < 6) {
            setError('Password at last 6 characters long.')
            toast.error("Password at last 6 characters long!")
            return;
        }
        if (password !== confirmPassword) {
            setError("The password your entered dosen't match ")
            toast.error("The password your entered dosen't match!")
            return;
        }

        createUer(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                toast.success('Successfully Register!')
                navigate(from, { replace: true })
                updateProfile(createdUser, { displayName: name, photoURL: photo })
                    .then(() => {

                    })
                    .catch(error => {
                        console.log(error);
                    })


                logOut()
                    .then(() => {
                        
                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(error => {
                const message = error.message;
                console.log(message);
                setError(message)
            })

        form.reset()
    }
    return (
        <div className='w-2/6 mx-auto'>
            <h3 className='text-5xl text-center mb-14 font-extrabold text-gray-700'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="photo" id="floating_photo_URL" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_photo_URL" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="password" name="confirm_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>




                <p className='text-xs text-red-500 my-5'>{error}</p>


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>

                <p className='text-gray-600 my-5'>Already Have An Account ? <Link to={'/login'}><button className='text-blue-600 font-semibold underline'>Login</button></Link></p>
            </form>


            <LoginButton></LoginButton>
        </div>
    );
};

export default Register;