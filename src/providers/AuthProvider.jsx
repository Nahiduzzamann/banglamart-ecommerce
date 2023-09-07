import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
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
  const [userState, setUserState] = useState(user);

  const createUser = async (route, data, token) =>
    axios.post(`${url}${route}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  const currentUser = async (route, token) =>
    axios.get(`${url}${route}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

  const signIn = async (route, data, token) =>
    axios.post(`${url}${route}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("token");
    setUserState(null);
    return signOut(auth);
  };
  const updateUser = async (route, data, token) => axios.put(`${url}${route}`, data, { headers: { Authorization: `Bearer ${token}` }, });

  useEffect(() => {
    setUserState(true)
    setUserState(false)
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      currentUser("/auth/getUser", token)
        .then((res) => {
          // setLoading(false);
          setUser(res.data.user);
        })
        .catch((error) => {
          setUser(null);
        });
    } else {
      // User is not authenticated
      setUser(null);
    }
  }, [userState]);

  const authInfo = {
    user,
    setUserState,
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
