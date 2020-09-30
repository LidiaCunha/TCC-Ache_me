import React from 'react';
import Login from '../pages/Login';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login}/>
  </AuthStack.Navigator>
  );
};

export default AuthRoutes;