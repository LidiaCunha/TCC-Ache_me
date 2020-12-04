// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';

// import listarPostagem from './src/pages/listagem_de_postagem/index';
// import chat from './src/pages/chat/index';
// import listarDenuncias from './src/pages/listar_denuncias/index';
// import usuario from './src/pages/usuario/index';

// import Menu from './src/components/menu/index';

// const Routes = createAppContainer(
//     createDrawerNavigator({
//         usuario,
//         chat,
//         listarPostagem,
//         listarDenuncias,
//     }, {
//         initialRouteName: 'usuario',
//         contentComponent: Menu
//     })
// );

import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';
import Everson from "./src/pages/menu/index";

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

