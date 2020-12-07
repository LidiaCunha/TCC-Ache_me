import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Image } from 'react-native';
import { AntDesign, Entypo, FontAwesome} from '@expo/vector-icons';
import feature from '../../assets/foto.png';
import {OpenPopup} from '../../pages/criar_postagem';
import HealthProblem from '../../pages/criar_postagem/healthProblem';
// import location from '../../assets/location.png'

export default class FabButton extends Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1
    
    Animated.spring(this.animation, {
        toValue,
        friction: 5,
    }).start();
    
    this.open = !this.open;
  }

  render(){

    const featureStyle = {
      transform: [
        { scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60]
          })
        }
      ]
    }
    const healthStyle = {
      transform: [
        { scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -120]
          })
        }
      ]
    }
    const locationStyle = {
      transform: [
        { scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -180]
          })
        }
      ]
    }

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange:["0deg", "45deg"]
          })
        }
      ]
    }

    return(
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={()=>{window.alert("test1")}}>
          <Animated.View style={[styles.button, styles.submenu, locationStyle]}>
            <Entypo name="location-pin" size={50} color="#000"/>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>{window.alert("test2")}}>
          <Animated.View style={[styles.button, styles.submenu, healthStyle]}>
            <AntDesign name="heart" size={30} color="#000"/>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>{OpenPopup(<HealthProblem/>)}}>
          <Animated.View style={[styles.button, styles.submenu, featureStyle]}>
            <Image source={feature} style={{width: 35, height: 35}}/>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <AntDesign name="plus" size={35} color="#000"/>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
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