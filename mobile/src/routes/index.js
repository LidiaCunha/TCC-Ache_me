import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes.js';
import AppRoutes from './app.routes';

const Routes = () => {
  const {signed, user} = useAuth();
  console.log(signed && user)
  return signed ? <AuthRoutes/> : <AppRoutes/>;
};

export default Routes;