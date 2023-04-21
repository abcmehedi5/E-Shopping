import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../../Firebase/Firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(true);
  //  google singin provider
  const provider = new GoogleAuthProvider();
  // create user email and password
  const createUserEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sing in google
  const googleSingin = () => {
    return signInWithPopup(auth, provider);
  };

  //   update user profile with displayName
  const updateUserProfile = (currentUser, name) => {
    return updateProfile(currentUser, name);
  };
  // current user and save user after browser refresh
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setSpinner(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // logout user
  const logOut = () => {
    return signOut(auth);
  };
  // Forgot password
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    user,
    createUserEmail,
    loginUser,
    googleSingin,
    updateUserProfile,
    spinner,
    logOut,
    forgotPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
