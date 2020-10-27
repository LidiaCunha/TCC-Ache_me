import React, { useState } from "react";
import MessageBubble from './message';
import { Container, Seta, MenuVoltar, BotaoDescer, ContainerUsuario, ContainerChat, ContainerMensagens, ImagemUsuario, NomeUsuario, ViewMensagem, AreaMensagem, Mensagem, Enviar, Icone, Hora, Hora_Minha } from './styles';
import {ScrollView} from 'react-native'
import seta from '../../assets/setaVoltar.png'
import Foto from "../../assets/fotoExemplo.jpg";
import EnviarMsg from "../../assets/enviar-correio.png";
import { View, StyleSheet } from "react-native";

const Chat = () => {
    return(
        <Container>
            <MenuVoltar>
                <Seta source={seta}/>
            </MenuVoltar>
            <ContainerChat>
                <ContainerUsuario>
                    <ImagemUsuario source={Foto}/>
                    <NomeUsuario>Mary-Elizabeth Winstead</NomeUsuario>
                </ContainerUsuario>
                <ContainerMensagens>
                    <ScrollView>
                        <MessageBubble 
                        text="Mãe, posso te apresentar meu namorado?"
                        />
                        <Hora_Minha>10:38</Hora_Minha>
                        <MessageBubble 
                        mine text="Manda foto"
                        />
                        <Hora>10:39</Hora>
                        <MessageBubble 
                        text="Ele, mãe 😍😍"
                        image={require("../../assets/james.jpeg")}/>
                        <MessageBubble 
                        mine text="Minha filha, chama a polícia"
                        />
                    </ScrollView>
                </ContainerMensagens>
                <AreaMensagem>
                    <ViewMensagem>
                        <Mensagem placeholder="Digite sua mensagem"/>
                        <Enviar>
                            <Icone source={EnviarMsg}/>
                        </Enviar>
                    </ViewMensagem>
                </AreaMensagem>
            </ContainerChat>
        </Container>
    )
}
// import React,{useState} from 'react';
// import {View, Button,Image , Text, TextInput, StyleSheet} from 'react-native';
// import { useConversarion } from '../../contexts/ConversationProvider';

// function Chat({route}) {
//   const styles = StyleSheet.create({
//     Container: {
//       position: 'absolute',
//     },
//     Form: {
//       display: 'flex',
//       alignContent:'flex-start',
//       flexDirection: 'row',
//       justifyContent:'space-between'
//     },
//     inputMsg:{
//       height:37,
//       flex:2,
//       alignSelf:'flex-start',
//       backgroundColor:'#000',
//       color:'#fff'
//     },
//     btnMsg:{
//       alignSelf:'flex-end',
//       backgroundColor:'#000',
//       color:'#fff'
//     },
//   })

//   const [heightMsgBox, setHeightOfMsgBox] = useState({
//     height:650
//   })
//   const [ value, setValue ] = useState({
//     msg:""
//   })
//   const handlerInput = ( e ) => {
//     setValue({msg : e.nativeEvent.text})
//   } 
//   const { sendMessage } = useConversarion();
//   return (
//   <View>
//     {/* <Image src={route.params.photo} alt="foto de perfil" /> */}
//     <Text>Conversando com {route.params.name}</Text>
//     <View style={heightMsgBox}>
      
//     </View>
//     <View style={styles.Form}>
//       <TextInput style={styles.inputMsg} placeholder="Digite sua mensagem" onTouchStart={() => setHeightOfMsgBox({height:325})} onBlur={() => setHeightOfMsgBox({height:650})} value={value.msg} onChange={handlerInput} />
//       <Button title="send" style={styles.btnMsg} onPress={() => sendMessage(id,value )}/>  
//     </View>
//   </View>
//   );
// }

export default Chat;