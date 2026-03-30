import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState,  } from "react";
import { auth } from "../firebase/firebase.init";
import { useContext } from "react";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(unsubscribe)
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const googleProvider = new GoogleAuthProvider();

const googleLogin = () => {
  
  return signInWithPopup(auth, googleProvider);
};


  const value = {
    user,
    setUser,
    googleLogin,
  };

  

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;