import React from 'react';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import Routes from '../../routes';

// pages
import Chat from '../../routes/chat.routes';
import Usuario from '../../routes/user.routes';
import Postagens from '../../routes/posts.routes';
import AppRoutes from '../../routes/app.routes'

const Tab = createMaterialBottomTabNavigator();

const Menu_horizontal = () => {
    
    return(
        <Tab.Navigator initialRouteName="Home" activeColor="#fff" barStyle={{ backgroundColor: '#EF5245' }}>
        
            <Tab.Screen 
                name="Home" 
                component={AppRoutes} 
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={ color } size={24}/>
                    )
                }} 
            />
        
            <Tab.Screen 
                name="Chat" 
                component={Chat} 
                options={{
                    tabBarLabel: "Chat",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chat" color={ color } size={24}/>
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