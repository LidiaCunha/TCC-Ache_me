import React,{useState} from 'react';
import {View, Button,Image , Text, TextInput, StyleSheet} from 'react-native';

function Chat({route}) {
  const styles = StyleSheet.create({
    Container: {
      position: 'absolute',
    },
    Form: {
      display: 'flex',
      alignContent:'flex-start',
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    inputMsg:{
      height:37,
      flex:2,
      alignSelf:'flex-start',
      backgroundColor:'#000',
      color:'#fff'
    },
    btnMsg:{
      alignSelf:'flex-end',
      backgroundColor:'#000',
      color:'#fff'
    },
  })

  const [heightMsgBox, setHeightOfMsgBox] = useState({
    height:650
  })

  return (
  <View>
    {/* <Image src={route.params.photo} alt="foto de perfil" /> */}
    <Text>Conversando com {route.params.name}</Text>
    <View style={heightMsgBox}>
      
    </View>
    <View style={styles.Form}>
      <TextInput style={styles.inputMsg} placeholder="Digite sua mensagem" onTouchStart={() => setHeightOfMsgBox({height:325})} onBlur={() => setHeightOfMsgBox({height:650})} />
      <Button title="send" style={styles.btnMsg}/>  
    </View>
  </View>
  );
}

export default Chat;