import React from 'react';

//pages
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/usuario';
import Create_post from '../pages/criar_postagem';
import Chat from '../pages/chat';
import Conversations from '../pages/conversations';
import Search from '../pages/conversations/search';
import {createStackNavigator} from '@react-navigation/stack';

//código
const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#292929',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '100',
        },
      }}
    >
      <AppStack.Screen name="Dashboard" component={Dashboard} options={{title: "Home"}}/>
      <AppStack.Screen name="profile" component={Profile} options={{title: "Perfil"}}/>
      <AppStack.Screen name="createpost" component={Create_post} options={{title: "Criar postagem"}}/>
      <AppStack.Screen name="conversations" component={Conversations} />
      <AppStack.Screen name="search" component={Search} />
      <AppStack.Screen name="chat" component={Chat} options={{headerShown:false}}/>
    </AppStack.Navigator>
  );
};

export default AppRoutes;