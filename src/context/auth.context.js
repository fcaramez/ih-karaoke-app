import { signOut, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebaseFuntions/auth.firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const logOutUser = () => {
    setUser(null);
    setCurrentUser();
    signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        setCurrentUser(user);
        setIsLoading(false);
        navigate("/profile");
        console.log("User: ", user);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setCurrentUser(null);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        currentUser,
        logOutUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
