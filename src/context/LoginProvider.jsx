import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Failed to load login state:', error);
      }
    };

    checkLoginStatus();
  }, []);

  const login = async () => {
    try {
      const user = auth().currentUser;
      if (user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Failed to save login state:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Failed to remove login state:', error);
    }
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;