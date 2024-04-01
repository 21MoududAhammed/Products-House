import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext(null); // create a context and export it

const MyAuthContext = () => {
  return useContext(AuthContext);
};

const registerUserWithEmailAndPassword = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  const user = result.user;
  return user;
};

export default function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ registerUserWithEmailAndPassword }}>{children}</AuthContext.Provider>
  );
}

// prop-types validation
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { MyAuthContext };
