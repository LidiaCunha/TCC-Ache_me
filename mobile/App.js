import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';
import Modal from "./src/pages/chat/modalExcluir";
<<<<<<< HEAD
import Everson from "./src/pages/criar_postagem/filtro_localizacao";
import Card_desaparecido from "./src/pages/card_desaparecido/index";
=======
import Conversation from "./src/pages/form_encontrado/index";
>>>>>>> 2693b72ff19ddcd13e17c5d6aa6c308f917dc637

const App = () => { 

   return (
       <Everson/>
//    <NavigationContainer>
//      <AuthProvider>
//        <SocketProvider>
//          <ConversationProvider>
//            <Routes/>
//          </ConversationProvider>
//        </SocketProvider>
//      </AuthProvider>
//    </NavigationContainer>
  );
}

export default App; 
