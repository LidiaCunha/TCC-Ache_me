// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';

// import listarPostagem from './src/pages/listagem_de_postagem/index';
// import chat from './src/pages/chat/index';
// import listarDenuncias from './src/pages/listar_denuncias/index';
// import usuario from './src/pages/usuario/index';
// import Dashboard from './src/pages/Dashboard/index';

// const Routes = createAppContainer(
//     createDrawerNavigator({
//         usuario,
//         chat,
//         listarPostagem,
//         listarDenuncias,
//         Dashboard,
//     }, {
//         initialRouteName: 'usuario',
//         contentComponent: Menu
//     })
// );
//
//export default Routes; 

import React from 'react';
import Routes from './src/routes';
// import Routes from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';

import BostaDoMenu from './src/components/menu_horizontal';


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