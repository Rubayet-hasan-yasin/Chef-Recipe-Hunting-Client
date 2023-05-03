import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);


    const createUer = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInWithEmail = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth, user=>{
            // console.log('loggedin user inside auth state observer',user);
            setUser(user)
            setLoading(false)
        })

        return ()=>{
            unsubscrib()
        }
    },[])

    const autInfo = {
        user,
        loading,
        createUer,
        logOut,
        logInWithEmail,
        loginWithGoogle,
        loginWithGithub


    }
    return (
        <AuthContext.Provider value={autInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;