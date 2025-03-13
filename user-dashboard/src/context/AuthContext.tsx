import { createContext, useState, useContext, ReactNode } from "react";
import { User, AuthContextType } from "../types";

// creating the context with default values
const AuthContext = createContext<AuthContextType>({
  user : null,
  login : () => {},
  logout : () => {},
  isAuthenticated : false
});

// custom hook for using the auth context
export const useAuth = () => useContext(AuthContext);

// provider component
export const AuthProvider = ({ children } : { children : ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);


  // login func
  const login = (userData : User) => {
    setUser(userData);
  };

  // logout func
  const logout = () => {
    setUser(null);
  };

  // check if user is authenticated
  const isAuthenticated = user !== null;

  // context value
  const value = {
    user,
    login,
    logout,
    isAuthenticated
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

