/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../../firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        }) 
        return () => {
            unsubsCribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        googleSignIn,
        signInUser,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;