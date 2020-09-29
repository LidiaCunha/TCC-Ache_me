import React from 'react';
import {Container, BotaoVoltar, ContainerCadastro, IconeCadastro, Input, Botao, Texto} from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import setaVoltar from "../../assets/setaVoltar.png";
import Icone from "../../assets/iconeDadosPessoais.png";

const CadastroPessoal = () => {
    return(
        <Container source={planoDeFundo}>
            <BotaoVoltar source={setaVoltar}/>
            <ContainerCadastro>
                <IconeCadastro source={Icone}/>
                <Input placeholder="Insira seu nome"></Input>
                <Input placeholder="Insira seu cpf"></Input>
                <Input placeholder="Insira seu email"></Input>
                <Input placeholder="Insira seu telefone"></Input>
                <Input placeholder="Usuário que te indicou o app"></Input>
                <Input placeholder="Senha"></Input>
                <Botao><Texto>Próximo</Texto></Botao>
            </ContainerCadastro>
        </Container>
    )
}

export default CadastroPessoal;