import React from 'react';

import Login from '../pages/Login';
import BasicInfo from '../pages/cadastro_dados_pessoais';
import Address from '../pages/cadastro_endereco';
import Photo from '../pages/cadastro_foto_perfil';
import CheckEmail from '../pages/cadastro_email';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    <AuthStack.Screen name="Informações" component={BasicInfo}/>
    <AuthStack.Screen name="Endereço" component={Address}/>
    <AuthStack.Screen name="Confirmar" component={Photo}/>
    <AuthStack.Screen name="CheckEmail" component={CheckEmail} options={{headerShown:false}}/>
  </AuthStack.Navigator>
  );
};

export default AuthRoutes;