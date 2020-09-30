import {Container, ContainerTitulo, Logo, Titulo, Input, Botao, Texto} from './styles';
import React from 'react';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import iconeEndereco from "../../assets/iconeEndereco.png";
import logo from "../../assets/logo.png";

const Login = ({navigation}) => {
    function navigateToRegister() {
        navigation.navigate('Cadastro')
    }

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
            <Botao tiotle="navigate" onClick={navigateToRegister} ><Texto>Cadastrar-se</Texto></Botao>      
        </Container>
    )
};

export default Login;