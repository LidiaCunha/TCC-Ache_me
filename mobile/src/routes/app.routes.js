import React from 'react';

//pages
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/usuario';
import Create_post from '../pages/criar_postagem';
import Chat from '../pages/chat';
import Conversations from '../pages/conversations';
import Search from '../pages/conversations/search';
import {createStackNavigator} from '@react-navigation/stack';
import CreateSeen from '../pages/form_visto/';
import CreateFind from '../pages/form_encontrado/';
import MyPosts from '../pages/listagem_de_postagem';
import LostedCard from '../pages/card_desaparecido';

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
      <AppStack.Screen name="conversations" component={Conversations} options={{headerShown:false}} />
      <AppStack.Screen name="search" component={Search} />
      <AppStack.Screen name="chat" component={Chat} options={{headerShown:false}}/>
      <AppStack.Screen name="seen" component={CreateSeen} />
      <AppStack.Screen name="find" component={CreateFind} />
      <AppStack.Screen name="MyPosts" component={MyPosts} />
      <AppStack.Screen name="lostedCard" component={LostedCard} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;