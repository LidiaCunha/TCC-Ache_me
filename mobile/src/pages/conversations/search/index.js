import React from 'react';
import {api} from '../../../services/api';
import {ScrollView} from 'react-native';
import { ImagemUsuario, TextoNome, AreaTextos, BotaoPesquisa, TextoMsg, ContainerMsgs, Container, InputSearch, ContainerContatos, Pesquisa, ViewInput } from '../style';
import defaultImage from '../../../assets/user.png';
import lupa from '../../../assets/lupa.png';

function ContactItem({contact, navigation}){
    
  const openChat = (contact) => {
    navigation.navigate('chat' , contact);
  }  

  return (<ContainerMsgs onPress={() => openChat(contact)}>
      <ImagemUsuario source={contact.photo ? {uri:contact.photo} : defaultImage}/>
      <AreaTextos>
        <TextoNome>{contact.name}</TextoNome>
        <TextoMsg numberOfLines={1}> {contact.mail} </TextoMsg>
      </AreaTextos>
    </ContainerMsgs>)
}

function Search({navigation}) {

    var [value , setValue] = React.useState("");

    var [contacts, setContacts] = React.useState([]);
   
    const handlerInput = (e) => {
        setValue(e.nativeEvent.text)
    }

    const search = async( ) => {
        const res = await api.get(`/user/?name=${value}`);
        res ? setContacts(res.data) : setContacts([]);
    }

    React.useEffect( ( )=> {
      search();
    },[value]); 

  return( 
    <Container>
        <ViewInput>
          <BotaoPesquisa>
            <Pesquisa source={lupa}/>
          </BotaoPesquisa>
          <InputSearch value={value} onChange={handlerInput}/>
        </ViewInput>
        
        <ContainerContatos>
          <ScrollView>
          {
            contacts.map( contact => <ContactItem contact={contact} navigation={navigation}/> )
          }            
          </ScrollView>
        </ContainerContatos>
        
    </Container>
  );
}

export default Search;