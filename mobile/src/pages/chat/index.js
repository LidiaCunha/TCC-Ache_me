import React, { useState } from 'react';
import { ScrollView } from 'react-native'
import { Animated, Dimensions, Keyboard } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { api } from '../../services/api';
// IMAGES
import seta from '../../assets/setaVoltar.png'
import defaultImage from '../../assets/user.png'
import EnviarMsg from '../../assets/enviar-correio.png';
// CONTEXTS
import { useConversarion } from '../../contexts/ConversationProvider'
import { useAuth } from '../../contexts/auth'
import { useSocket } from '../../contexts/socketProvider';
// STYLES
import { Container, Seta, MenuVoltar, BotaoDescer, ContainerUsuario, ContainerChat, ContainerMensagens, ImagemUsuario, NomeUsuario, ViewMensagem, AreaMensagem, Mensagem, Enviar, Icone, Hora, Hora_Minha } from './styles';
// COMPONENTS
import MessageBubble from './message';

function Chat({ route }) {
  // CONTEXTS
  const { user } = useAuth();

  const socket = useSocket();

  const sendMessage = useConversarion();
  
  // STATES
  const [image, setImage] = useState();

  const [currentyInputHeigth, setInputHeigth] = useState(0);

  const [conversations, setConversations] = useState([]);

  const [shift] = useState({
    shift: new Animated.Value(0)
  })

  const [value, setValue] = useState({
    msg: ""
  })
  
  // HANDLERS
  const handlerKeyboardDidShow = (e) => {
    const { height } = Dimensions.get('window');

    const keyboardHeight = e.endCoordinates.height;

    const gap = (height - keyboardHeight) - currentyInputHeigth;
    console.log(gap)
    if (gap >= 0)
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

  const handlerInput = (e) => {
    setValue({ msg: e.nativeEvent.text })
  }

  const takeMessages = async () => {
    const res = await api.get(`/messages/between/${route.params.id}/${user.id}`)

    const data = await res.data

    setConversations(data)
  }

  Keyboard.addListener('keyboardDidHide', handlerKeyboardDidHide)
  Keyboard.addListener('keyboardDidShow', handlerKeyboardDidShow)
  
  // EFFECTS
  React.useEffect(() => {
    takeMessages()
  }, []);

  React.useEffect(() => {
    if (socket == null) return;

    socket.on('recebe-msg', takeMessages);

    return () => socket.off('recebe-msg');
  }, [socket, takeMessages]);

  return (

    <Container>
      <MenuVoltar>
        <Seta source={seta} />
      </MenuVoltar>
      <ContainerChat>

        <ScrollView>
          <ContainerUsuario>
            <ImagemUsuario source={route.params.photo ? route.params.photo : defaultImage} />
            <NomeUsuario>{route.params.name}</NomeUsuario>
          </ContainerUsuario>
        </ScrollView>
        {conversations && conversations.map((conversation) => {
          if (conversation.sender === user.id)
            return (
              <>
                <MessageBubble text={conversation.message} />
                <Hora_Minha>{moment(conversation.createdAt).format('HH:mm')}</Hora_Minha>
              </>
            );
          else
            return (
              <>
                <MessageBubble mine text={conversation.message} />
                <Hora>{moment(conversation.createdAt).format('HH:mm')}</Hora>
              </>
            );
        })}
        <AreaMensagem>
          <ViewMensagem>
            <Mensagem placeholder="Digite sua mensagem" onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} onChange={handlerInput} />
            <Enviar onPress={() => setImage(image)} >
              <Icon name="add-a-photo" color="white" size={30} />
            </Enviar>
            <Enviar onPress={() => { sendMessage(route.params, value) && takeMessages(); Keyboard.dismiss(); setValue({msg:""}) }}>
              <Icone source={EnviarMsg} />
            </Enviar>
          </ViewMensagem>
        </AreaMensagem>

      </ContainerChat>
    </Container>
  );
}

export default Chat;