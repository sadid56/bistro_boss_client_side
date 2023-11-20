/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update profiile
  const profileUpdate = (name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{displayName:name, photoURL: photo})
  }

  //signInWithGoogle
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const UnSubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      //set token in user login
      const userInfo = {email: currentUser?.email}
      if(currentUser){
        axiosPublic.post('/jwt',userInfo)
        .then(res =>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
            setLoading(false);

          }
        })
      }
      else{
        localStorage.removeItem('access-token')
        setLoading(false);
      }

      
    });
    return () => UnSubscibe();
  }, [axiosPublic]);

  const authInfo = { user, loading, createUser, signIn, googleLogin, logOut, profileUpdate };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
