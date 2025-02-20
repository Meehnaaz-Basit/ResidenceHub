import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google provider
  const googleProvider = new GoogleAuthProvider();
  //
  const loginWithGoogle = () => {
    setLoading(true);
    // toast.success("Logged In Successfully with Google ");
    return signInWithPopup(auth, googleProvider);
  };

  // github provider
  const githubProvider = new GithubAuthProvider();
  //
  const loginWithGithub = () => {
    setLoading(true);
    // toast.success("Logged In Successfully with Github");
    return signInWithPopup(auth, githubProvider);
  };

  const logIn = (email, password) => {
    setLoading(true);
    // toast.success("Logged In Successfully");
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    toast.success("Logged Out Successfully");
    return signOut(auth);
  };

  useEffect(() => {
    // manage user firebase
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,

    loginWithGoogle,
    loginWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
