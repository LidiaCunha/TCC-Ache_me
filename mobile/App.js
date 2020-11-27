import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';

import Everson from "./src/pages/card_desaparecido/index";

const App = () => { 

   return (

    <Everson/>
  //  <NavigationContainer>
  //    <AuthProvider>
  //      <SocketProvider>
  //        <ConversationProvider>
  //          <Routes/>
  //        </ConversationProvider>
  //      </SocketProvider>
  //    </AuthProvider>
  //  </NavigationContainer>
  );
}

export default App; 
