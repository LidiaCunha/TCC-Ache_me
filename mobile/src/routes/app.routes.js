import React from 'react';
import { Image } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

//pages
import Dashboard from '../pages/Dashboard';
import Chat from '../pages/chat';
import Conversations from '../pages/conversations';

//código
const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Dashboard" component={Dashboard}/>
      <AppStack.Screen name="conversations" component={Conversations} />
      <AppStack.Screen name="chat" component={Chat} />
      <AppStack.Screen name="chat" component={Chat} />
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
