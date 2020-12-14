import React, {Component, useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Image } from 'react-native';
import { AntDesign, Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons';
import feature from '../../assets/foto.png';
// import Criar_postagem from '../../pages/criar_postagem';
// // import location from '../../assets/location.png'
// import {Popup} from '../components/Popup';
// import HealthProblem from '../../pages/criar_postagem/healthProblem';
// import Characteristics from '../../pages/criar_postagem/features';
// import Location from '../../pages/criar_postagem/location';

export default function FabButton(props) {
  const animation = new Animated.Value(0);

  const [open, setOpen] = useState(false);


  useEffect(()=>{
    (()=>{
      const toValue = open ? 1 : 0

      Animated.spring(animation, {
        toValue,
        friction: 5,
      }).start();

    })();
  },[open])

  const featureStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60]
        })
      }
    ]
  }
  const healthStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120]
        })
      }
    ]
  }
  const locationStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -180]
        })
      }
    ]
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "90deg"]
        })
      }
    ]
  }

  return (
    <View style={[styles.container, props.style]}>
      <TouchableWithoutFeedback onPress={() => { props.setLocalePU(true) }}>
        <Animated.View style={[styles.button, styles.submenu, locationStyle]}>
          <Entypo name="location-pin" size={50} color="#000" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => { props.setProblemPU(true) }} >
        <Animated.View style={[styles.button, styles.submenu, healthStyle]}>
          <AntDesign name="heart" size={30} color="#000" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => { props.setFeaturesPU(true) }}>
        <Animated.View style={[styles.button, styles.submenu, featureStyle]}>
          <Image source={feature} style={{ width: 35, height: 35 }} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=>setOpen(!open)}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <MaterialIcons name="more-vert" size={35} color="#000" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    position: 'absolute',
  },
  button:{
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#E33336',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10}
  },
  menu:{
    backgroundColor:'#E33336'
  },
  submenu:{
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor:'#E33336'
  }
})