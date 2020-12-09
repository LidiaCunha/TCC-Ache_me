import React from 'react';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, tou } from 'react-native';


import Dashboard from '../../pages/Dashboard';
import Chat from '../../pages/chat';
import Usuario from '../../pages/usuario';
import Card_desaparecido from '../../pages/card_desaparecido';

const Tab = createMaterialBottomTabNavigator();

const Menu_horizontal = () => {
    return(
        <Tab.Navigator initialRouteName="Home" activeColor="#fff" barStyle={{ backgroundColor: '#EF5245' }}>
        
            <Tab.Screen 
                name="Home" 
                component={Dashboard} 
                options={{
        
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={ color } size={24}/>
                    )
                }} 
            />
        
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={ color } size={28}/>
                    )
                }} 
            />

            <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="search" color={ color } size={24}/>
                    )
                }} 
            />
        
            <Tab.Screen 
                name="Music" 
                component={Music} 
                options={{
                    tabBarLabel: "Music",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="music" color={ color } size={24}/>
                    )
                }} 
            />
        
        </Tab.Navigator>
    );
}

export default Menu_horizontal;