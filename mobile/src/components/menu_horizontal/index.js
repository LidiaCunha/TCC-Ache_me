import React from 'react';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image } from 'react-native';
import Routes from '../../routes';

// pages
import Chat from '../../routes/chat.routes';
import Usuario from '../../routes/user.routes';
import Postagens from '../../routes/posts.routes';
import AppRoutes from '../../routes/app.routes';

const Tab = createMaterialBottomTabNavigator();

const Menu_horizontal = () => {
    return(
        <Tab.Navigator initialRouteName="Home" activeColor="#fff" barStyle={{ backgroundColor: '#292929' }}>
        
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

            <Tab.Screen 
                name="Sair" 
                component={Postagens} 
                options={{
                    tabBarLabel: "Sair",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="logout" color={ color } size={25}/>
                    )
                }} 
            />
        
        </Tab.Navigator>
    );
}

const Menu = () => {
    return(
        <View style={styles.container}>
            <Menu_horizontal/>
            <View style={styles.bordamenu}/>
        </View>
        
    );
} 

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    
    bordamenu: {
        height: 2,
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 53,
    },
    
    
});

export default Menu;