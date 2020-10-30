import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { feather } from '@expo/vector-icons';

import { 
  Conta, 
  Conversas, 
  Postagens, 
  Membros
} from './src/pages/screens';

const DrawerNavigator = createDrawerNavigator({
  Conta, 
  Conversas, 
  Postagens, 
  Membros
});

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
    </NavigationContainer>
  );
}

export default App; // createAppContainer(DrawerNavigator); 
