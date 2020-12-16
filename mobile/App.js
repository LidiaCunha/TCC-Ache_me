import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';
import DataProvider from './src/contexts/dataProvider';
import BottomRoutes from './src/components/menu_horizontal';
import Termos from './src/pages/ServiceTerms/index'

import Card from './src/pages/card_desaparecido'

const App = () => { 

  return (
//      <Card/>
      
    <NavigationContainer>
      <AuthProvider> 
        <DataProvider>
          <SocketProvider>
            <ConversationProvider>
              <Routes/>
            </ConversationProvider>
          </SocketProvider>
        </DataProvider>
      </AuthProvider>
    </NavigationContainer>
 );
}

export default App; 
