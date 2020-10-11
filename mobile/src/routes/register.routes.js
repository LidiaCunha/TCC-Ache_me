import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import BasicInfo from '../pages/cadastro_dados_pessoais';
import Address from '../pages/cadastro_endereco';
import Photo from '../pages/cadastro_foto_perfil';
import CheckEmail from '../pages/cadastro_email';

const RegisterRoutes = () => {
  return (
  <AuthStack.Navigator initialRouteName="Basic_Info" >
    <AuthStack.Screen name="Informações" component={BasicInfo}/>
    <AuthStack.Screen name="Endereço" component={Address}/>
    <AuthStack.Screen name="Confirmar" component={Photo}/>
    <AuthStack.Screen name="CheckEmail" component={CheckEmail} options={{headerShown:false}}/>
  </AuthStack.Navigator>
  );
};

export default RegisterRoutes;