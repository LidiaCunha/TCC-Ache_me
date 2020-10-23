import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
<<<<<<< HEAD
import Chat from "./src/pages/chat/index"
import Contatos from "./src/pages/chat/listaContatos"

const App = () => {
  return (
    // <Contatos/>
    <NavigationContainer>
    <AuthProvider>
    <Routes/>
    </AuthProvider>
=======
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';

const App = () => { 

   return (

    <NavigationContainer>
      <AuthProvider>
        <SocketProvider>
          <ConversationProvider>
            <Routes />
          </ConversationProvider>
        </SocketProvider>
      </AuthProvider>
>>>>>>> 0b8ae89128556aa8c716638a2d0623649f35ab0b
    </NavigationContainer>
  );
}

export default App;
