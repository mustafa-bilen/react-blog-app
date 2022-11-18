import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../helpers/firebase";
import toast, { Toaster } from "react-hot-toast";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [displayName, setDisplayName] = useState("");

  const createUser = (email, password) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(() =>
        updateProfile(auth.currentUser, { displayName })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = () => {
    return signOut(auth);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    toast.success("Successfully toasted!");
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsub();
    };
  }, []);
  // useEffect(() => {
  //   const unsubGoogle = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log(currentUser);
  //   });
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        createUser,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        user,
        logout,
        login,
        googleLogin,
        setDisplayName,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
