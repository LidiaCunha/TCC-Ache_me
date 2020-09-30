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
            <Input placeholder="E-mail ou Telefone" keyboardType="email-address"></Input>
            <Input placeholder="Senha" secureTextEntry={true} autoCorrect={false}></Input>
            <Botao><Texto>Entrar</Texto></Botao> 
            <Texto>OU</Texto>   
            <Botao tiotle="navigate" onClick={navigateToRegister} ><Texto>Cadastrar-se</Texto></Botao>      
        </Container>
    )
};

export default Login;