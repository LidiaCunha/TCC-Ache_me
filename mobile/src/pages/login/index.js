import {Container, ContainerTitulo, Logo, Titulo, Input, Botao, Texto} from './styles';
import React from 'react';
import { Button, Text, TextInput } from 'react-native';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import iconeEndereco from "../../assets/iconeEndereco.png";
import logo from "../../assets/logo.png";

const Login = () => {
    return(
        <Container source={planoDeFundo}>
            <ContainerTitulo>
                <Logo source={logo} ></Logo>
                <Titulo>Ache.me</Titulo>
            </ContainerTitulo>
            <Input placeholder="E-mail ou Telefone"></Input>
            <Input placeholder="Senha"></Input>
            <Botao><Texto>Entrar</Texto></Botao> 
            <Texto>OU</Texto>   
            <Botao><Texto>Cadastrar-se</Texto></Botao>      
        </Container>
    )
};

export default Login;