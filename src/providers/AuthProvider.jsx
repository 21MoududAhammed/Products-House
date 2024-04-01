import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext(null); // create a context and export it

const MyAuthContext = () => {
  return useContext(AuthContext);
};

// register
const registerUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// log in
const logInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

//log out 
const logOut = async() =>{
    await signOut(auth)
}

//reset password
const resetPassword = async(email)=>{
   return await sendPasswordResetEmail(auth, email);
}

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(null);
      }
    });
    return () => unsubscribe()
  }, []);

  return (
    <AuthContext.Provider
      value={{
        registerUserWithEmailAndPassword,
        logInWithEmailAndPassword,
        isLoggedIn,
        logOut,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// prop-types validation
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { MyAuthContext };
