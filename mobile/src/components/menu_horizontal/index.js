import React from 'react';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image } from 'react-native';
import Routes from '../../routes';

// pages
import Home from '../../pages/Dashboard';
import Chat from '../../pages/chat';
import Usuario from '../../pages/usuario';
import Postagens from '../../pages/listagem_de_postagem';

import ChatImg from '../../assets/menu/chat.png';

const Tab = createMaterialBottomTabNavigator();

const Menu_horizontal = () => {
    return(
        <Tab.Navigator initialRouteName="Home" activeColor="#fff" barStyle={{ backgroundColor: '#292929' }}>
        
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={ color } size={24}/>
                    )
                }} 
            />

            <Tab.Screen 
                name="Usuario" 
                component={Usuario} 
                options={{
                    tabBarLabel: "Usuario",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="person" color={ color } size={28}/>
                    )
                }} 
            />
        
            <Tab.Screen 
                name="Chat" 
                component={Chat} 
                options={{
                    tabBarLabel: "Chat",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="chat" color={ color } size={23}/>
                    )
                }} 
            />
        
            <Tab.Screen 
                name="Postagens" 
                component={Postagens} 
                options={{
                    tabBarLabel: "Postagens",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="list" color={ color } size={30}/>
                    )
                }} 
            />
        
        </Tab.Navigator>
    );
}

export default Menu_horizontal;