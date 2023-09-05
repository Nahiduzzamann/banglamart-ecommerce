import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const url = "http://62.72.31.204:1300";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (route, data, token) =>
    axios.post(`${url}${route}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  const currentUser = async (route, token) =>
    axios.get(`${url}${route}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUser = (info) => {
    return updateProfile(auth.currentUser, info);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

 
  const authInfo = {
    user,
    currentUser,
    loading,
    createUser,
    signIn,
    logOut,
    signInWithGoogle,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
