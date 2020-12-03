// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';

// import Teste1 from './src/pages/teste1/index';
// import Teste2 from './src/pages/teste2/index';
// import menu from './src/pages/menu/index';

// import Menu from './src/components/menu/index';

// const Routes = createAppContainer(
//     createDrawerNavigator({
//         Teste1,
//         Teste2,
//         menu,
//     }, {
//         initialRouteName: 'Teste1',
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

