import { createContext, useState, useEffect, useContext } from "react";
import firebase from "../database/firebase";

const auth = firebase.auth;
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  const [Loading, setLoading] = useState(true);

  function logIn(email, password) {
    return firebase.signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return firebase.auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!Loading && children}
    </AuthContext.Provider>
  )
}