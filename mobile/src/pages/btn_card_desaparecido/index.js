import React, { Component }from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated } from 'react-native';

import { AntDesign, Entypo } from '@expo/vector-icons';

export default class Criar_postagem extends Component {
    animation = new Animated.Value(0);
    
    toggleMenu = () => {
        const toValue = this.open ? 0 : 1
        
        Animated.spring(this.animation, {
            toValue,
            friction: 6,
        }).start();
        
        this.open = !this.open;
    }
    
    render(){
        
        const cameraStyle = {
            transform: [
                {   scale: this.animation  },
                {   translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -80]
                    }) 
                }
            ]
        }
        
        const heartStyle = {
            transform: [
                {   scale: this.animation  },
                {   translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-20, -140]
                    }) 
                }
            ]
        }
        
        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }
        
        return(
            <View style={[styles.container, this.props.style]}>
                
                <TouchableWithoutFeedback onPress={ () => alert("salve fila da puta")}>
                    <Animated.View style={[styles.btn, styles.submenu, heartStyle]}>
                        <AntDesign name="heart" size={20} color="#fff"/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            
                <TouchableWithoutFeedback onPress={ () => alert("teste")}>
                    <Animated.View style={[styles.btn, styles.submenu, cameraStyle]}>
                        <Entypo name="camera" size={20} color="#fff"/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.btn, styles.menu, rotation]}>
                        <AntDesign name="plus" size={24} color="#fff"/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
    },
    
    btn: {
        position: 'absolute',
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10, 
        shadowColor: '#18ed9b',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
        },
    },
    
    menu: {
        backgroundColor: '#18ed9b',
    },
    
    submenu: {
        height: 48,
        width: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#18ed9b',
    }
    
});














