import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);


    const createUer = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth, user=>{
            // console.log('loggedin user inside auth state observer',user);
            setUser(user)
        })

        return ()=>{
            unsubscrib()
        }
    },[])

    const autInfo = {
        user,
        createUer,
        logOut


    }
    return (
        <AuthContext.Provider value={autInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;