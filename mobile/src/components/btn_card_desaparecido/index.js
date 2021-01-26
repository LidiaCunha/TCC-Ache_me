import React, { Component, useEffect }from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import {Visto} from "./styles";
import { api } from '../../services/api';

export default function Btn_card_desaparecido({navigation,post,style}){

    const [state, setState] = React.useState({
            buttonColor: '#fff', 
    });

    const [open, setOpen] = React.useState(false);
    
    const animation = new Animated.Value(0);
    
    useEffect(()=>{
        (async ( ) => {
            const toValue = open ? 0 : 1
        
            Animated.spring(animation, {
                toValue,
                friction: 6,
            }).start();
        })();
    },[open]);

    const cameraStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -70]
                })
            }
        ]
    }

    const heartStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-20, -130]
                })
            }
        ]
    }

    const pauseStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -190]
                })
            }
        ]
    }

    const testeStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -250]
                })
            }
        ]
    }

    const complaintPost = async() => {
        const res = await api.put(`/posts/${post.id}`,{field:'complaint',contentOfField: post.complaint + 1})
    
        res.data ? window.alert("Postagem denunciada com sucesso!!") : window.alert("erro ao denunciar");
    }

    return (
        <View style={[styles.container, style]}>
            <Visto onPress={()=>{navigation.navigate('seen',{post:post})}}>
                <Animated.View style={[styles.btn, styles.submenu, pauseStyle]} backgroundColor={'#fff'}>
                    <AntDesign name="eye" size={30} color="#292929" />
                </Animated.View>
            </Visto>

            <TouchableWithoutFeedback onPress={complaintPost}>
                <Animated.View style={[styles.btn, styles.submenu, heartStyle]} backgroundColor={state.buttonColor}>
                    <FontAwesome name="exclamation-triangle" size={25} color="#292929" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>{navigation.navigate('find',{post:post})}}>
                <Animated.View style={[styles.btn, styles.submenu, cameraStyle]} backgroundColor={state.buttonColor}>
                    <MaterialIcons name="my-location" size={30} color="#292929" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={ ( ) => setOpen(!open) }>
                <Animated.View style={[styles.btn, styles.menu]}>
                    <MaterialIcons name="more-vert" size={35} color="#292929" />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>


    );

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
