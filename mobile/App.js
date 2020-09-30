import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login/index';
import CadastroPessoal from './src/pages/cadastro_dados_pessoais/index';
import CadastroEndereco from './src/pages/cadastro_endereco/index';
import CadastroFotoPerfil from './src/pages/cadastro_foto_perfil/index';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CadastroEmail from './src/pages/cadastro_email';

export default function App() {
  return (
    <Login/>
    // <NavigationContainer>
    //   <StatusBar barStyle="light-content"/>
    //   <Routes/>
    // </NavigationContainer>
  );
}
