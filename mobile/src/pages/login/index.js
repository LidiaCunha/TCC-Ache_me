import {Container, ContainerTitulo, Logo, Titulo, Input, Botao, Texto} from './styles';
import React from 'react';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import logo from "../../assets/logo.png";
import { login } from '../../services/auth';

const Login = () => {
    async function handleSignIn() {
        const response = await login();

        console.log(response);
    }

    return(
        <Container source={planoDeFundo}>
            <ContainerTitulo>
                <Logo source={logo} ></Logo>
                <Titulo>Ache.me</Titulo>
            </ContainerTitulo>
            <Input placeholder="E-mail ou Telefone"></Input>
            <Input placeholder="Senha"></Input>
            <Botao title="Entrar" onPress={() => {}}/> 
            <Texto>OU</Texto>   
            <Botao title="Cadastrar" onPress={() => {}}/> 
        </Container>
    )
};

export default Login;