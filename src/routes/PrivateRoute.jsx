import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { InfinitySpin } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex items-center justify-center h-screen flex-col'><InfinitySpin
            width='200'
            color="#252620"
        /></div>
    }
    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoute;