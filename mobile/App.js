import React from 'react';
import Routes from './src/routes';
// import Routes from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ConversationProvider } from './src/contexts/ConversationProvider';
import { SocketProvider } from './src/contexts/socketProvider';

import Card from './src/components/menu_horizontal';

const App = () => { 
  return (      
   <NavigationContainer>
     <AuthProvider> 
       <SocketProvider>
         <ConversationProvider>
           <Card/>
         </ConversationProvider>
       </SocketProvider>
     </AuthProvider>
   </NavigationContainer>
 );
}

export default App; 