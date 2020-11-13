import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';
import Modal from "./src/pages/chat/modalExcluir";
import Desaparecido from "./src/pages/criar_postagem/modalCaracteristicas";

const App = () => { 

   return (
    <Desaparecido/>

    // <NavigationContainer>
    //   <AuthProvider>
    //     <SocketProvider>
    //       <ConversationProvider>
    //         <Routes/>
    //       </ConversationProvider>
    //     </SocketProvider>
    //   </AuthProvider>
    // </NavigationContainer>
  );
}

export default App; 
