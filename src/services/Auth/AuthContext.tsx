import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  loginUser: (token: string) => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

   const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const userData = JSON.parse(userStr);
      console.log("Current user data:", userData);
      return userData;
    }
  
    return null;
  };
  
  const loginUser = (token: string) => {
    // Stockez le token JWT dans le localStorage
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logoutUser = () => {
    // Mettre à jour l'état d'authentification après une déconnexion
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
};