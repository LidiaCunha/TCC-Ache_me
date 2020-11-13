import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';
import Modal from "./src/pages/chat/modalExcluir";
import Everson from "./src/pages/criar_postagem/problemas_de_saude";

const App = () => { 

   return (
    <NavigationContainer>
      <AuthProvider>
        <SocketProvider>
          <ConversationProvider>
            <Routes/>
          </ConversationProvider>
        </SocketProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App; 
