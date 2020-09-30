import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/login';
import Cadastro from './pages/cadastro_dados_pessoais';

import DashboardRoutes from './routes/dashboard.routes';

export default function Route() {
  return (
    <Stack.Navigator screenOptions={ {headerStyle: {backgroundColor:'#1e1f21'}, headerTintColor:'#fff'}}>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}