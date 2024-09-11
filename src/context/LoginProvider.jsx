import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.removeItem('authtoken');
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authtoken');
        if (token) {
          // Optionally verify the token with the API server
          // const response = await fetch('https://staging.ardent-training.com/api/verify-token', {
          //   method: 'POST',
          //   headers: {
          //     'Authorization': `Bearer ${token}`,
          //     'Content-Type': 'application/json',
          //   },
          // });

          // const result = await response.json();
          // if (response.ok && result.valid) { 
            setIsLoggedIn(true); // Token is valid, mark user as logged in
          // } else {
          //   setIsLoggedIn(false); // Invalid token, mark user as logged out
          //   await AsyncStorage.removeItem('authtoken'); // Optionally remove invalid token
          // }
        } else {
          setIsLoggedIn(false); // No token, mark as logged out
        }
      } catch (error) {
        console.error('Failed to verify token:', error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
