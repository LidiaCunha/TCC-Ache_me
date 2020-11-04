import React from 'react';
import Dashboard from '../pages/Dashboard';
import Chat from '../pages/chat';
import Conversations from '../pages/conversations';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Modal from '../pages/chat/modalExcluir';


const RouteChat = createDrawerNavigator({
  Chat: {
    screen: Chat,
    navigationOptions: {
      title: "bem vindo ao chat",
    },
  },
  Modal: {
    screen: Modal,
    navigationOptions: {
      title: "modal excluir",
    },
  },
});

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Dashboard" component={Dashboard}/>
      <AppStack.Screen name="conversations" component={Conversations} />
      <AppStack.Screen name="chat" component={Chat} />
    </AppStack.Navigator>
  );
};

export default createAppContainer(RouteChat);