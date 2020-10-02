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
                <Input placeholder="Insira seu nome" returnKeyType="next" ></Input>
                <Input placeholder="Insira seu cpf" keyboardType="numeric" returnKeyType="next" maxLength={11}></Input>
                <Input placeholder="Insira seu email" keyboardType="email-address" returnKeyType="next"></Input>
                <Input placeholder="Insira seu telefone" keyboardType="number-pad" returnKeyType="next" maxLength={11}></Input>
                <Input placeholder="Usuário que te indicou o app" returnKeyType="next"></Input>
                <Input placeholder="Senha" secureTextEntry={true} autoCorrect={false} returnKeyType="done"></Input>
                <Botao><Texto>Próximo</Texto></Botao>
            </ContainerCadastro>
        </Container>
    )
}

export default CadastroPessoal;