import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {api} from '../services/api';
import * as auth from '../services/auth'

const AuthContext = createContext({
  signed: false,
  user: {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function loadStorageData(){
      const storagedUser = await AsyncStorage.getItem('@AMAuth:user');
      const storagedToken = await AsyncStorage.getItem('@AMAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken.token}`;

        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  }, []);

  async function login(user) {
    const response = user;

    setUser(response); 

    api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@AMAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@AMAuth:token', response.token);
  }

  async function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
  const context = useContext(AuthContext);
  
  return context;
};