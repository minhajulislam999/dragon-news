import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState,  } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(unsubscribe)
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    setUser,
  };

  

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;