import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import Chat from "./src/pages/chat/index"
import Contatos from "./src/pages/chat/listaContatos"

const App = () => {
  return (
    // <Contatos/>
    <NavigationContainer>
    <AuthProvider>
    <Routes/>
    </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
