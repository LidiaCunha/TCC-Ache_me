import React from 'react';
import { Container, ContainerContatos, MenuContatos, HoraMsg, Numero, ImagemUsuario, TextoNome, AreaTextos, TextoMsg, MenuImagem, MenuPesquisar, Pesquisa, ContainerConversas, Texto, Recentes, ContainerMsgs, AreaDetalhes, Hora, Hora_Minha, NumeroMsgs } from './style';
import {ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native';
//import { useAuth } from '../../contexts/auth';
import menu from '../../assets/menu.png';
//import excluir from '../../assets/excluir.png';
import lupa from '../../assets/lupa.png';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import defaultImage from '../../assets/user.png'

function ContactItem({ contact }) {

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
      <ContainerMsgs onPress={() => openChat(contact)}>
        <ImagemUsuario source={ contact.photo ? { uri: contact.photo } : {defaultImage} } />
        <AreaTextos>
          <TextoNome>{contact.name}</TextoNome>
          <TextoMsg numberOfLines={2}> msgs com {contact.mail} </TextoMsg>
        </AreaTextos>
        <AreaDetalhes>
          <HoraMsg>9:22</HoraMsg>
          {/* <NumeroMsgs><Numero>1</Numero></NumeroMsgs> */}
        </AreaDetalhes>
      </ContainerMsgs>
    </Swipeable>)
}

function Conversations({ navigation }) {

  const contacts = [
    {
      id: 1,
      name: 'John connor',
      mail: 'john@babel.com',
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fhKli8tQfr69is8htp8mYQHaEK%26pid%3DApi&f=1'
    },
    {
      id: 2,
      name: 'Joana Sono',
      mail: 'joana@babel.com',
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fhKli8tQfr69is8htp8mYQHaEK%26pid%3DApi&f=1'
    },
    {
      id: 3,
      name: 'Joao corno',
      mail: 'joao@babel.com',
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.t9E7ZbZ0tkOr09MtPJUP4AHaHa%26pid%3DApi&f=1'
    },
    {
      id: 4,
      name: 'John connor',
      mail: 'john@babel.com',
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fhKli8tQfr69is8htp8mYQHaEK%26pid%3DApi&f=1'
    },
    {
      id: 5,
      name: 'Joana Sono',
      mail: 'joana@babel.com',
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fhKli8tQfr69is8htp8mYQHaEK%26pid%3DApi&f=1'
    },
    {
      id: 6,
      name: 'Joao corno',
      mail: 'joao@babel.com',
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.t9E7ZbZ0tkOr09MtPJUP4AHaHa%26pid%3DApi&f=1'
    },
  ]

  const openSearch = () => {
    navigation.navigate('search')
  }

  return (
    <Container>
      <MenuContatos>
        <MenuImagem source={menu} />
        <MenuPesquisar onPress={() => openSearch()}>
          <Pesquisa source={lupa} />
        </MenuPesquisar>
      </MenuContatos>
      <ContainerConversas>
        <Texto>Suas conversas</Texto>
      </ContainerConversas>
      <ContainerContatos>
        <Recentes>Recentes</Recentes>
        <ScrollView>
          {
            contacts.map(ctt => <ContactItem contact={ctt} />)
          }
        </ScrollView>
      </ContainerContatos>
    </Container>
  );
}

export default Conversations;