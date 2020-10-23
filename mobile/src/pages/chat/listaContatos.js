import React from "react";
import { Container, ContainerContatos, MenuContatos, MenuImagem, MenuPesquisar, Pesquisa, ContainerConversas, Texto } from './styles';
import {ScrollView} from 'react-native';
import menu from '../../assets/menu.png';
import excluir from '../../assets/excluir.png';
import lupa from '../../assets/lupa.png';

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
            <ContainerContatos>

            </ContainerContatos>
        </Container>
    )
}

export default Contatos;