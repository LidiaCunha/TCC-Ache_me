import React from 'react';
import Dashboard from '../pages/Dashboard';
import Chat from '../pages/chat';
import Conversations from '../pages/conversations';
import Search from '../pages/conversations/search';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Dashboard" component={Dashboard}/>
      <AppStack.Screen name="conversations" component={Conversations} />
      <AppStack.Screen name="search" component={Search} />
      <AppStack.Screen name="chat" component={Chat} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;