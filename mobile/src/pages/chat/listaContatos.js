import React, { useState } from "react";
import { Container, ContainerContatos, MenuContatos, HoraMsg, Numero, ImagemUsuario, TextoNome, AreaTextos, TextoMsg, MenuImagem, MenuPesquisar, Pesquisa, ContainerConversas, Texto, Recentes, ContainerMsgs, AreaDetalhes, Hora, Hora_Minha, NumeroMsgs } from './styles';
import {ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import menu from '../../assets/menu.png';
import excluir from '../../assets/excluir.png';
import lupa from '../../assets/lupa.png';
import Foto from "../../assets/fotoExemplo.jpg";
import Kakashi from "../../assets/kakashi.jpg";
import James from "../../assets/james.jpeg";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';




const Contatos = () => {

    function RightActions({progress, dragX, onPress}){

        const scale = dragX.interpolate({
          inputRange:[-110, 0],
          outputRange:[1, 0],
          extrapolate: 'clamp'
        })
    
        return(
          <TouchableOpacity style={styles.rightAction}>
            <Animated.View style={[ { transform: [{ scale: scale}]} ]}>
              <Icon name="trash" size={50}  color="#FFF" />
            </Animated.View>
          </TouchableOpacity>
        );
      }

    return(
        <Container>
            <MenuContatos>
                <MenuImagem source={menu}/>
                <MenuPesquisar onPress={() => pesquisar()}>
                    <Pesquisa source={lupa}/>
                </MenuPesquisar>
            </MenuContatos>
            <ContainerConversas>
                <Texto>Suas conversas</Texto>
            </ContainerConversas>
            <ContainerContatos>
                <Recentes>Recentes</Recentes>
                <ScrollView>
                    <Swipeable renderRightActions={(progress, dragX)=> 
                        <RightActions progress={progress} dragX={dragX}/>}
                    >
                        <ContainerMsgs>
                            <ImagemUsuario source={James}/>
                            <AreaTextos>
                                <TextoNome>James Paixão</TextoNome>
                                <TextoMsg numberOfLines={2}>Olá, aqui é o James, Gerente de Desenvolvimento da Ache.me.</TextoMsg>
                            </AreaTextos>
                            <AreaDetalhes>
                                <HoraMsg>9:22</HoraMsg>
                                <NumeroMsgs><Numero>1</Numero></NumeroMsgs>
                            </AreaDetalhes>
                        </ContainerMsgs>
                    </Swipeable>
                    <Swipeable renderRightActions={(progress, dragX)=> 
                        <RightActions progress={progress} dragX={dragX}/>}
                    >
                        <ContainerMsgs>
                            <ImagemUsuario source={Kakashi}/>
                            <AreaTextos>
                                <TextoNome>Kakashi</TextoNome>
                                <TextoMsg numberOfLines={2}>O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai. Na verdade ele</TextoMsg>
                            </AreaTextos>
                            <AreaDetalhes>
                                <HoraMsg>9:22</HoraMsg>
                                <NumeroMsgs><Numero>12</Numero></NumeroMsgs>
                            </AreaDetalhes>
                        </ContainerMsgs>
                    </Swipeable>
                    <Swipeable renderRightActions={(progress, dragX)=> 
                        <RightActions progress={progress} dragX={dragX}/>}
                    >
                        <ContainerMsgs>
                            <ImagemUsuario source={Foto}/>
                            <AreaTextos>
                                <TextoNome>Mary-Elizabeth Winstead</TextoNome>
                                <TextoMsg numberOfLines={2}>Oi, James! Tenho algo importante para te contar. Então, eu acho que você vai morrer dia 12 de dezembro, antes do Natal.</TextoMsg>
                            </AreaTextos>
                            <AreaDetalhes>
                                <HoraMsg>9:22</HoraMsg>
                                <NumeroMsgs><Numero>12</Numero></NumeroMsgs>
                            </AreaDetalhes>
                        </ContainerMsgs>
                    </Swipeable>
                    <Swipeable renderRightActions={(progress, dragX)=> 
                        <RightActions progress={progress} dragX={dragX}/>}
                    >
                        <ContainerMsgs>
                            <ImagemUsuario source={Foto}/>
                            <AreaTextos>
                                <TextoNome>Mary-Elizabeth Winstead</TextoNome>
                                <TextoMsg numberOfLines={2}>Oi, James! Tenho algo importante para te contar. Então, eu acho que você vai morrer dia 12 de dezembro, antes do Natal.</TextoMsg>
                            </AreaTextos>
                            <AreaDetalhes>
                                <HoraMsg>9:22</HoraMsg>
                                <NumeroMsgs><Numero>12</Numero></NumeroMsgs>
                            </AreaDetalhes>
                        </ContainerMsgs>
                    </Swipeable>
                    <Swipeable renderRightActions={(progress, dragX)=> 
                        <RightActions progress={progress} dragX={dragX}/>}
                    >
                        <ContainerMsgs>
                            <ImagemUsuario source={Foto}/>
                            <AreaTextos>
                                <TextoNome>Mary-Elizabeth Winstead</TextoNome>
                                <TextoMsg numberOfLines={2}>Oi, James! Tenho algo importante para te contar. Então, eu acho que você vai morrer dia 12 de dezembro, antes do Natal.</TextoMsg>
                            </AreaTextos>
                            <AreaDetalhes>
                                <HoraMsg>9:22</HoraMsg>
                                <NumeroMsgs><Numero>12</Numero></NumeroMsgs>
                            </AreaDetalhes>
                        </ContainerMsgs>
                    </Swipeable>
                    <Swipeable renderRightActions={(progress, dragX)=> 
                        <RightActions progress={progress} dragX={dragX}/>}
                    >
                        <ContainerMsgs>
                            <ImagemUsuario source={Foto}/>
                            <AreaTextos>
                                <TextoNome>Mary-Elizabeth Winstead</TextoNome>
                                <TextoMsg numberOfLines={2}>Oi, James! Tenho algo importante para te contar. Então, eu acho que você vai morrer dia 12 de dezembro, antes do Natal.</TextoMsg>
                            </AreaTextos>
                            <AreaDetalhes>
                                <HoraMsg>9:22</HoraMsg>
                                <NumeroMsgs><Numero>12</Numero></NumeroMsgs>
                            </AreaDetalhes>
                        </ContainerMsgs>
                    </Swipeable>
                    <Swipeable renderRightActions={(progress, dragX)=> 
                        <RightActions progress={progress} dragX={dragX}/>}
                    >
                        <ContainerMsgs>
                            <ImagemUsuario source={Foto}/>
                            <AreaTextos>
                                <TextoNome>Mary-Elizabeth Winstead</TextoNome>
                                <TextoMsg numberOfLines={2}>Oi, James! Tenho algo importante para te contar. Então, eu acho que você vai morrer dia 12 de dezembro, antes do Natal.</TextoMsg>
                            </AreaTextos>
                            <AreaDetalhes>
                                <HoraMsg>9:22</HoraMsg>
                                <NumeroMsgs><Numero>12</Numero></NumeroMsgs>
                            </AreaDetalhes>
                        </ContainerMsgs>
                    </Swipeable>
                    <Swipeable renderRightActions={(progress, dragX)=> 
                        <RightActions progress={progress} dragX={dragX}/>}
                    >
                        <ContainerMsgs>
                            <ImagemUsuario source={Foto}/>
                            <AreaTextos>
                                <TextoNome>Mary-Elizabeth Winstead</TextoNome>
                                <TextoMsg numberOfLines={2}>Oi, James! Tenho algo importante para te contar. Então, eu acho que você vai morrer dia 12 de dezembro, antes do Natal.</TextoMsg>
                            </AreaTextos>
                            <AreaDetalhes>
                                <HoraMsg>9:22</HoraMsg>
                                <NumeroMsgs><Numero>12</Numero></NumeroMsgs>
                            </AreaDetalhes>
                        </ContainerMsgs>
                    </Swipeable>
                </ScrollView>
            </ContainerContatos>
        </Container>
    )
}

export default Contatos;

const styles = StyleSheet.create({
    rightAction:{
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