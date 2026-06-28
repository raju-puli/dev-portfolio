import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: false,
        isLoadingAuth: false,
        isLoadingPublicSettings: false,
        authError: null,
        appPublicSettings: null,
        authChecked: true,
        logout: () => {},
        navigateToLogin: () => {},
        checkUserAuth: async () => {},
        checkAppState: async () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};