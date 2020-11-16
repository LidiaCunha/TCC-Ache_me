import React from 'react';
import {ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {api} from '../../services/api';
import moment from 'moment';
// IMAGES
import menu from '../../assets/menu.png';
import lupa from '../../assets/lupa.png';
import defaultImage from '../../assets/user.png'
// STYLES
import { Container, ContainerContatos, MenuContatos, HoraMsg, Numero, ImagemUsuario, TextoNome, AreaTextos, TextoMsg, MenuImagem, MenuPesquisar, Pesquisa, ContainerConversas, Texto, Recentes, ContainerMsgs, AreaDetalhes, Hora, Hora_Minha, NumeroMsgs } from './style';

function ContactItem({ contact, navigation }) {

  const openChat = (contact) => {
    navigation.navigate('chat', contact);
  }

  function RightActions({ progress, dragX, onPress }) {

    const styles = StyleSheet.create({
      rightAction: {
        backgroundColor: '#EF5245',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 40,
        marginRight: 10
      },
    });

    const scale = dragX.interpolate({
      inputRange: [-110, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    return (
      <TouchableOpacity style={styles.rightAction}>
        <Animated.View style={[{ transform: [{ scale: scale }] }]}>
          <Icon name="trash" size={50} color="#FFF" />
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <Swipeable renderRightActions={(progress, dragX) => <RightActions progress={progress} dragX={dragX} />} >
      <ContainerMsgs onPress={() => openChat(contact.contact)}>
        <ImagemUsuario source={ contact.contact.photo ? { uri: contact.contact.photo } : {defaultImage} } />
        <AreaTextos>
          <TextoNome>{contact.contact.name}</TextoNome>
          <TextoMsg numberOfLines={2}>{contact.lastMessage.message}</TextoMsg>
        </AreaTextos>
        <AreaDetalhes>
          <HoraMsg>{ moment(contact.lastMessage.createdAt).format("HH:mm")}</HoraMsg>
          {/* <NumeroMsgs><Numero>1</Numero></NumeroMsgs> */}
        </AreaDetalhes>
      </ContainerMsgs>
    </Swipeable>)
}

function Menu({navigation}) {
  const openSearch = () => {
    navigation.navigate('search');
  }

  return (
    <MenuContatos>
      <MenuImagem source={menu} />
      <MenuPesquisar onPress={openSearch}>
        <Pesquisa source={lupa} />
      </MenuPesquisar>
    </MenuContatos>)
}

function Conversations({ navigation }) {


  const [contacts,setContacts] = React.useState([]);
  
  React.useEffect( ( ) => {
    (async() => {
      const contactsAndMessages = await api.get('/messages/conversations');
      setContacts(contactsAndMessages.data);  
    })();
  },[]);

  return (
    <Container>
      <Menu navigation={navigation} />
      <ContainerConversas>
        <Texto>Suas conversas</Texto>
      </ContainerConversas>
      <ContainerContatos>
        <Recentes>Recentes</Recentes>
        <ScrollView>
          {
            contacts.map(ctt => <ContactItem contact={ctt} navigation={navigation}/>)
          }
        </ScrollView>
      </ContainerContatos>
    </Container>
  );
}

export default Conversations;