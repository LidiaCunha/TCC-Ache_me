import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';
import DataProvider from './src/contexts/dataProvider';


const App = () => { 
  return (
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
