import React from 'react';

import {
  Text, 
  Container, 
  Header, 
  Home, 
  Main,
  Section,
    
//  Info,
  Button,

  // Section 1 
  BasicInfos, 
  PhotoProfile, 
  Merit,
  Photo,
  NewPhoto,
  Login,
  Name,

  // Section 2
  Title,
  AdvancedInfos,
  Profile,
  ShareIndicated,
  Input,
  Share,
  Indicated,
  Members,
  Member,
  MemberName,
    
  //Everson
  Center,
      
      
} from './styles';

import home from "../../assets/user_info/home.png";
import camera from "../../assets/camera.png";
import photo from "../../assets/userTest.png";
import share from "../../assets/user_info/compartilhar.png";

function user_info() {

  const member = (
    <Member>
      <img src={photo} alt="membro"/>
      <MemberName>Member Name <span>member@gmail.com</span></MemberName>
    </Member>
  );

  return (
      
    <Center>  
    <Container>
      <Header>
        <Home>
          <img src={home} alt="return home"/>
        </Home>
      </Header>
      <Main>
        <Section>
          <BasicInfos>
            <PhotoProfile>
              <Photo>
                <img src={photo} alt="user"/>
                <NewPhoto>
                  <img src={camera} alt="camera"/>
                </NewPhoto>
              </Photo>
              <Login>
                <Name>Gabriela Jordão<br/><span>gabriela.jogmail.com</span></Name>
                <Button>Salvar Foto</Button>
              </Login>
            </PhotoProfile>
            <Merit>
              <Text>Seu mérito:</Text>
              <Text>Data da última publicação: <span>12 de agosto de 2020</span></Text>
              <Text>Hora da última publicação: <span>ás 08:00</span></Text>
            </Merit>
          </BasicInfos>
        </Section>
        <Section>
          <Title>INFORMAÇÕES PESSOAIS</Title>
          <AdvancedInfos>
            <Profile>
              <Input id="name" style={{gridArea:'name'}}>
                <Text>Nome</Text>
                <input type="text" name="name" id="input-name"/>
              </Input>
              <Input id="email" style={{gridArea:'email'}}>
                <Text>Email</Text>
                <input type="email" name="email" id="input-email"/>
              </Input>
              <Input id="password" style={{gridArea:'password'}}>
                <Text>Senha Atual</Text>
                <input type="password" name="password" id="input-password"/>
              </Input>
              <Input id="new-password" style={{gridArea:'new-password'}}>
                <Text>Nova Senha</Text>
                <input type="password" name="new-password" id="input-newpassword"/>
              </Input>
              <Input id="corfirm-password" style={{gridArea:'confirm-password'}}>
                <Text>Confirmar Senha</Text>
                <input type="password" name="confirm-password" id="input-confirmpassword"/>
              </Input>
              <Input id="telephone" style={{gridArea:'telephone'}}>
                <Text>Telefone</Text>
                <input type="text" name="telephone" id="input-telephone"/>
              </Input>
              <Input id="cpf" style={{gridArea:'cpf'}}>
                <Text>CPF</Text>
                <input type="text" name="cpf" id="input-cpf"/>
              </Input>
              <Input id="cep" style={{gridArea:'cep'}}>
                <Text>CEP</Text>
                <input type="text" name="cep" id="input-cep"/>
              </Input>
              <Input id="street" style={{gridArea:'street'}}>
                <Text>Rua</Text>
                <input type="text" name="street" id="input-street"/>
              </Input>
              <Input id="neighborhood" style={{gridArea:'neighborhood'}}>
                <Text>Bairro</Text>
                <input type="text" name="neighborhood" id="input-neighborhood"/>
              </Input>
              <Input id="city" style={{gridArea:'city'}}>
                <Text>Cidade</Text>
                <input type="text" name="city" id="input-city"/>
              </Input>
              <Input id="state" style={{gridArea:'state'}}>
                <Text>Estado</Text>
                <input type="text" name="state" id="input-state"/>
              </Input>
              <Button style={{gridArea:'button', right:'0'}}>Salvar</Button>
            </Profile>
      
            <ShareIndicated>
              <Share>
                <img src={share} alt="compartilhar"/>
                <h1>Compartilhar Postagem</h1>
                <p>Realize uma nova postagem aqui</p>
                <Button>Criar Postagem</Button>
              </Share>
              <Indicated>
                <Title style={{width:'100%'}}>MEMBROS INDICADOS</Title>
                <Members>
                  {member}
                  {member}
                  {member}
                  {member}
                  {member}
                </Members>
              </Indicated>
            </ShareIndicated>
          </AdvancedInfos>
        </Section>
      </Main>
    </Container>
    </Center>
  );
}

export default user_info;