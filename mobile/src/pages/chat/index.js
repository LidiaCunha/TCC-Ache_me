import React,{useState} from "react";
import MessageBubble from './message';
import { Container, Seta, MenuVoltar, BotaoDescer, ContainerUsuario, ContainerChat, ContainerMensagens, ImagemUsuario, NomeUsuario, ViewMensagem, AreaMensagem, Mensagem, Enviar, Icone, Hora, Hora_Minha } from './styles';
import {ScrollView} from 'react-native'
import seta from '../../assets/setaVoltar.png'
import {useConversarion} from '../../contexts/ConversationProvider'
import { Animated,StyleSheet , Dimensions, Keyboard, UIManager } from 'react-native';

//import Foto from "../../assets/fotoExemplo.jpg";
import EnviarMsg from "../../assets/enviar-correio.png";

function Chat({route}) {

  const [currentyInputHeigth, setInputHeigth ] = useState(0);
    
  const handlerKeyboardDidShow = (e) => {
      const {height} = Dimensions.get('window');

      const keyboardHeight = e.endCoordinates.height;

      const gap =(height - keyboardHeight) - currentyInputHeigth ;
      console.log(gap)
      if ( gap >= 0 )
          return;

      Animated.timing(
          shift.shift,
          {
              toValue: gap,
              duration: 1000,
              useNativeDriver: true
          }
      ).start();
  }

  const handlerKeyboardDidHide = (e) => {
      Animated.timing(
          shift.shift,
          {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
  }

  Keyboard.addListener('keyboardDidHide', handlerKeyboardDidHide )
  Keyboard.addListener('keyboardDidShow', handlerKeyboardDidShow )

  const [shift] = useState({
    shift: new Animated.Value(0)
})

  const [ value, setValue ] = useState({
    msg:""
  })
  const handlerInput = ( e ) => {
    setValue({msg : e.nativeEvent.text})
  } 
  const { sendMessage } = useConversarion();

  return (

    <Container>
    <MenuVoltar>
        <Seta source={seta}/>
    </MenuVoltar>
      <ContainerChat>
        
        <ScrollView>
            <ContainerUsuario>
                <ImagemUsuario source={route.params.photo}/>
                <NomeUsuario>{route.params.name}</NomeUsuario>
            </ContainerUsuario>
        </ScrollView>
          <MessageBubble 
            text="bo se droga?"
          />
          <Hora_Minha>10:38</Hora_Minha>
          
          <MessageBubble 
            mine text="bo"
          />
          <Hora>10:39</Hora>

        <AreaMensagem>
            <ViewMensagem>
                <Mensagem placeholder="Digite sua mensagem" onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} onChange={handlerInput}/>
                <Enviar onPress={() => sendMessage(id,value )} >
                    <Icone source={EnviarMsg}/>
                </Enviar> 
            </ViewMensagem>
        </AreaMensagem>

      </ContainerChat>
    </Container>
  );
}

export default Chat;