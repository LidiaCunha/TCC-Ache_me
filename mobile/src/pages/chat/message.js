import React from 'react'
import { StyleSheet,TouchableOpacity,Text,Image} from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { moderateScale } from 'react-native-size-matters'
const MessageBubble = (props) => {
    return (
      <TouchableOpacity style={[ styles.message, props.mine ? styles.mine : styles.not_mine ]} >
        <TouchableOpacity style={[ styles.cloud, { backgroundColor: props.mine ? '#EDEDED' : '#f37e74'} ]} >
        {
          props.image ?
              <Image
                style={{ width: 300, height: 300, alignSelf: props.mine ? 'flex-start' : 'flex-end' }}
                borderRadius={10}
                marginTop={6}
                marginBottom={6}
                source={props.image}
                width={500}
                height={500}
              />
          :
              null
          }
          {
            props.text ?
              <Text style={[ styles.text, {color: props.mine ? 'black' : 'white'} ]} >
                {props.text}
              </Text>
            :
              null
          }
          <TouchableOpacity style={[ styles.arrow_container, props.mine ? styles.arrow_left_container : styles.arrow_right_container ]}>
            <Svg
              style={props.mine ? styles.arrow_left : styles.arrow_right}
              width={moderateScale(15.5, 0.6)}
              height={moderateScale(17.5, 0.6)}
              TouchableOpacityBox="32.484 17.5 15.515 17.5"
              enableBackground="new 32.485 17.5 15.515 17.5"
            >
              <Path
                  d={ props.mine 
                      ? 
                      "M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                      : 
                      "M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                  }
                  fill={props.mine ? '#EDEDED' : '#f37e74'}
                  x="0"
                  y="0"
              />
            </Svg>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  
}

export default MessageBubble

const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    marginVertical: moderateScale(7,2)
  },
  mine: {
    marginLeft: 20,
  },
  not_mine: {
    alignSelf: 'flex-end',
    marginRight: 20
  },
  cloud: {
    maxWidth: moderateScale(250,2),
    paddingHorizontal: moderateScale(10,2),
    paddingTop: moderateScale(5,2),
    paddingBottom: moderateScale(7,2),
    borderRadius: 20
  },
  text: {
    paddingTop: 3,
    fontSize: 17,
    lineHeight: 22
  },
  arrow_container: {
    position:'absolute',
    top: 0,
    left:0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1
  },
  arrow_left_container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  arrow_right_container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  arrow_left: {
    left: moderateScale(-6, 0.5)
  },
  arrow_right: {
    right: moderateScale(-6, 0.5)
  }

})