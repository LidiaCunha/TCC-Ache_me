import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';
import Modal from "./src/pages/chat/modalExcluir";
import Conversation from "./src/pages/form_encontrado/index";

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
