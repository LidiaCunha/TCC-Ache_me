import React from 'react';
import { Image } from 'react-native'
// import {createStackNavigator} from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

//pages
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/usuario';
import Chat from '../pages/chat';
import Conversations from '../pages/conversations';
import Search from '../pages/conversations/search';
import {createStackNavigator} from '@react-navigation/stack';

//código
const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Dashboard" component={Dashboard}/>
      <AppStack.Screen name="profile" component={Profile}/>
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
