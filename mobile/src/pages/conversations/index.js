import React from 'react';
import { Button,Text,View , FlatList } from 'react-native';
import { Container, ContainerContatos, MenuContatos, MenuImagem, MenuPesquisar, Pesquisa, ContainerConversas, Texto } from '../chat/styles';
import { useAuth } from '../../contexts/auth';
import { ListItem } from 'react-native-elements';
import { useConversarion } from '../../contexts/ConversationProvider';
import menu from '../../assets/menu.png';
import excluir from '../../assets/excluir.png';
import lupa from '../../assets/lupa.png';

function Conversations({navigation}) {
  //const { user } = useAuth();
  const contacts = [
    {
      id:1,
      name: 'John connor',
      mail: 'john@babel.com',
      photo:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fhKli8tQfr69is8htp8mYQHaEK%26pid%3DApi&f=1'
    },
    {
      id:2,
      name: 'Joana Sono',
      mail: 'joana@babel.com',
      photo:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fhKli8tQfr69is8htp8mYQHaEK%26pid%3DApi&f=1'
    },
    {
      id:3,
      name: 'Joao corno',
      mail: 'joao@babel.com',
      photo:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.t9E7ZbZ0tkOr09MtPJUP4AHaHa%26pid%3DApi&f=1'
    },
  ]
  const {createConversation, selectedConversationIndex} = useConversarion();

  const openChat = (contact) => {
    createConversation(contact)
    selectedConversationIndex(contact.id)
    navigation.navigate('chat' , contact);
  }

  const getContactItem = ({item:contact}) => {
    return (
      <ListItem
        leftAvatar={{source:{uri:contact.photo}}}
        key={contact.id}
        title={contact.name}
        subtitle={contact.mail}
        bottomDivider
        onPress={() => openChat(contact)}
      />
    );
  }

  return  (
    
    <Container>
            <MenuContatos>
                
                <MenuPesquisar onPress={() => pesquisar()}>
                    <Pesquisa source={lupa}/>
                </MenuPesquisar>
                <MenuImagem source={menu}/>
            </MenuContatos>
            <ContainerConversas>
                <Texto>Suas conversas</Texto>
            </ContainerConversas>
            <ContainerContatos>
              <FlatList
                keyExtractor={ctt => ctt.id }
                data = {contacts}
                renderItem={getContactItem}
              />
            </ContainerContatos>
        </Container>
  );
}

export default Conversations;