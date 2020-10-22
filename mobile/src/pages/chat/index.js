import React,{useState} from 'react';
import {View, Button,Image , Text, TextInput, StyleSheet} from 'react-native';
import { useConversarion } from '../../contexts/ConversationProvider';

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
  const [ value, setValue ] = useState({
    msg:""
  })
  const handlerInput = ( e ) => {
    setValue({msg : e.nativeEvent.text})
  } 
  const { sendMessage } = useConversarion();
  return (
  <View>
    {/* <Image src={route.params.photo} alt="foto de perfil" /> */}
    <Text>Conversando com {route.params.name}</Text>
    <View style={heightMsgBox}>
      
    </View>
    <View style={styles.Form}>
      <TextInput style={styles.inputMsg} placeholder="Digite sua mensagem" onTouchStart={() => setHeightOfMsgBox({height:325})} onBlur={() => setHeightOfMsgBox({height:650})} value={value.msg} onChange={handlerInput} />
      <Button title="send" style={styles.btnMsg} onPress={() => sendMessage({id:route.params.id,name:route.params.name,mail:route.params.mail},value )}/>  
    </View>
  </View>
  );
}

export default Chat;