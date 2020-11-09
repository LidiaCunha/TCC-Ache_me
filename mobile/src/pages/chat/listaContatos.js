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
            
        </Container>
    )
}

export default Contatos;

