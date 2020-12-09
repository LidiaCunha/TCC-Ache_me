import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Icon } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

import Fundo from '../../assets/menu/logout.png';

function Menu({...props}){

    return(
        <ScrollView style={styles.Container}>
           
            <View style={styles.ContainerPhoto}>
                <Image style={styles.Photo} souce={ Fundo }/>
                <Text style={styles.Name}>Everson Silva</Text>
            </View>
        
            <View style={styles.ContainerItemMenu}>
                <DrawerNavigatorItems {...props} />
            </View>
        
            <View style={styles.Exit}>  
                <Image souce={ Fundo } style={styles.Exit_Img}/> 
                <Text style={styles.Text}>Sair</Text>
            </View>    
                
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#242426',
//        borderRightWidth: 2,
//        borderStyle: 'solid',
//        borderColor: '#fff',
//        borderBottomRightRadius: 35,
//        borderTopRightRadius: 35,
    },
    
    ContainerPhoto: {
        height: 'auto',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 90,
    },
    
    Photo: {
        height: 85,
        width: 85,
        backgroundColor: '#EF5245',
        borderRadius: 50,
        marginBottom: 10,
        // borderWidth: 2,
        // borderStyle: 'solid',
        // borderColor: '#fff',
    },
    
    Name: {
        height: 'auto',
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    
    Text: {
        height: 'auto',
        width: 'auto',
        fontSize: 14,
        color: '#fff',
        textTransform: 'capitalize',
    },
    
    ContainerItemMenu: {
        height: 'auto',
        width: '80%',
        flex: 1,
        // borderBottomWidth: 2,
        // borderStyle: 'solid',
        // borderColor: '#EF5245',
        marginLeft: 25,
        paddingBottom: 20,
        marginBottom: 65,
    },
    
    Exit: {
        height: 'auto',
        width: '100%',
        paddingLeft: 35,
        flex: 1,
        flexDirection: 'row',
    },
    
    Exit_Img: {
        height: 50,
        width: 50,
    },
    
})

export default Menu;


