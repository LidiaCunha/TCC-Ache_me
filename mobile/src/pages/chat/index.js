import React,{useState} from "react";
import MessageBubble from './message';
import { Container, Seta, MenuVoltar, BotaoDescer, ContainerUsuario, ContainerChat, ContainerMensagens, ImagemUsuario, NomeUsuario, ViewMensagem, AreaMensagem, Mensagem, Enviar, Icone, Hora, Hora_Minha } from './styles';
import {Alert, ScrollView} from 'react-native'
import seta from '../../assets/setaVoltar.png'
import {useConversarion} from '../../contexts/ConversationProvider'
import {useAuth} from '../../contexts/auth'
import { Animated,StyleSheet , Dimensions, Keyboard, UIManager } from 'react-native';
//import Foto from "../../assets/fotoExemplo.jpg";
import EnviarMsg from "../../assets/enviar-correio.png";
import { api } from '../../services/api';
import moment from 'moment';

function Chat({route}) {
  const { user } = useAuth();

  const [currentyInputHeigth, setInputHeigth ] = useState(0);
    
  const [conversations, setConversations] = useState([]);

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
  
  const takeMessages = async() => { 
    const res  = await api.get(`/messages/between/${route.params.id}/${user.id}`)
  
    const data = await res.data

    setConversations(data)
  }

  React.useEffect(()=>{
    takeMessages()
  },[conversations])

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
                    { conversations.map( ( conversation  ) => {
                          if ( conversation.sender === user.id )
                              return (
                                <>
                                <MessageBubble text={conversation.message} />
                                <Hora_Minha>{moment(conversation.createdAt).format('HH:mm')}</Hora_Minha>
                                </>
                              );
                          else
                              return(
                                <>
                                <MessageBubble mine text={conversation.message} />
                                <Hora>{moment(conversation.createdAt).format('HH:mm')}</Hora>
                                </>
                              );
                    })}
        <AreaMensagem>
            <ViewMensagem>
                <Mensagem placeholder="Digite sua mensagem" onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} onChange={handlerInput}/>
                <Enviar onPress={() => sendMessage(route.params,value ) ?  takeMessages() : Alert.alert("Erro","não foi possivel enviar a mensagem")  } >
                    <Icone source={EnviarMsg}/>
                </Enviar> 
            </ViewMensagem>
        </AreaMensagem>

      </ContainerChat>
    </Container>
  );
}

export default Chat;