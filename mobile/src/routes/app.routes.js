import React from 'react';
import { Image } from 'react-native'
// import {createStackNavigator} from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

//pages
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/usuario';
import CreatePost from '../pages/criar_postagem';
import Chat from '../pages/chat';
import Conversations from '../pages/conversations';
import Search from '../pages/conversations/search';
import {createStackNavigator} from '@react-navigation/stack';

//código
const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#292929',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '100',
      },
    }}>
      <AppStack.Screen name="Dashboard" component={Dashboard} options={{title: "Home"}}/>
      <AppStack.Screen name="profile" component={Profile} options={{title: "Perfil"}}/>
      <AppStack.Screen name="createpost" component={CreatePost} options={{title: "Criar postagem"}}/>
      <AppStack.Screen name="conversations" component={Conversations} />
      <AppStack.Screen name="search" component={Search} />
      <AppStack.Screen name="chat" component={Chat} options={{headerShown:false}}/>
    </AppStack.Navigator>
  );
};

export default AppRoutes;



// // pages
// import Chat from '../pages/chat';
// import Dashboard from '../pages/Dashboard';
// import Conversations from '../pages/conversations';

// //código 
// const RouteChat = createStackNavigator({
//   Chat: {
//     screen: Chat,
//     navigationOptions: {
//       title: "bem vindo ao chat",
//     },
//   },

//   Dashboard: {
//     screen: Dashboard,
//     navigationOptions: {
//       title: "dashboard",
//     },
//   },

//   Conversations: {
//     screen: Conversations,
//     navigationOptions: {
//       title: "Conversation",
//     },
//   },
// });
