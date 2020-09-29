import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login/index';
import CadastroPessoal from './src/pages/cadastro_dados_pessoais/index';

export default function App() {
  return (
    <>
    <CadastroPessoal/>
    {/* <Login/> */}
    </>
  );
}
