import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function wildcard({title}){
return <Text> wildcard {title}</Text>
}

import Login from './pages/login';
import Cadastro from './pages/cadastro_dados_pessoais'

export default function Route() {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor:'#1e1f21'}, headerTintColor:'#fff'}}>
      <Stack.Screen name="Login" component={Login} options={{title:'Login'}}/>
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}