import React, { Component }from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated } from 'react-native';

import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import {Visto} from "./styles";

export default class Btn_card_desaparecido extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            buttonColor: '#fff', 
        };
    }

    Visto = () => {
        this.buttonColor=='#e3336'
    }
    
    onButtonPress = () => {
        if(this.state.buttonColor=='#E33336')
        {
          this.setState({ buttonColor: '#fff' }) 
        }
        else {
          this.setState({ buttonColor: '#E33336' }) 
        }
    }
    
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
                        outputRange: [0, -70]
                    }) 
                }
            ]
        }
        
        const heartStyle = {
            transform: [
                {   scale: this.animation  },
                {   translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-20, -130]
                    }) 
                }
            ]
        }

        const pauseStyle = {
            transform: [
                {   scale: this.animation  },
                {   translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -190]
                    }) 
                }
            ]
        }

        const testeStyle = {
            transform: [
                {   scale: this.animation  },
                {   translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -250]
                    }) 
                }
            ]
        }

        return(
            <View style={[styles.container, this.props.style]}>
                <Visto onPress={this.Visto}>
                    <Animated.View style={[styles.btn, styles.submenu, pauseStyle]} backgroundColor={'#fff'}>
                        <AntDesign name="eye" size={30} color="#292929"/>
                    </Animated.View>
                </Visto>

                <TouchableWithoutFeedback onPress={this.onButtonPress}>
                    <Animated.View style={[styles.btn, styles.submenu, heartStyle]} backgroundColor={this.state.buttonColor}>
                        <FontAwesome name="exclamation-triangle" size={25} color="#292929"/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            
                <TouchableWithoutFeedback onPress={this.onButtonPress}>
                    <Animated.View style={[styles.btn, styles.submenu, cameraStyle]}  backgroundColor={this.state.buttonColor}>
                        <MaterialIcons name="my-location" size={30} color="#292929"/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.btn, styles.menu]}>
                        <MaterialIcons name="more-vert" size={35} color="#292929"/>
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
        backgroundColor: '#E33336',
    },
    
    submenu: {
        height: 48,
        width: 48,
        borderRadius: 48 / 2,
    },
    
});














