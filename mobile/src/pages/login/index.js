// Funcional
import React, {useState} from 'react';
import {useAuth} from '../../contexts/auth';
import {api} from '../../services/api';

// Styles
import {Container, ContainerTitulo, Logo, Titulo, Input, Botao, Texto} from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import logo from "../../assets/logo.png";


const Login = ({navigation}) => {
    const navigateToRegister = () => {
        navigation.navigate('Informações');
    }

    const {login} = useAuth();
    const [userLogin, setUserLogin] = useState({
        mail: "",
        password: "",
    });

    const enter = async (e) => {

        e.preventDefault();

        try {
            const retorno = await api.post("/users", userLogin);
            
            if (retorno.status === 201) {

                return login(retorno.data);
            };

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }

    };

    return (
        <Container source={planoDeFundo}>
            <ContainerTitulo>
                <Logo source={logo} ></Logo>
                <Titulo>Ache.me</Titulo>
            </ContainerTitulo>
            <Input 
                keyboardType="email-address" 
                id="mail" placeholder="E-mail ou Telefone" 
                keyboardType="email-address" 
                value={userLogin.mail} 
                onChangeText={mail => setUserLogin({mail})} 
                required
            ></Input>
            <Input 
                textContentType="newPassword" 
                id="password" placeholder="Senha"
                secureTextEntry={true} 
                autoCorrect={false}
                value={userLogin.password} 
                onChangeText={password => setUserLogin({password})} 
                required
            ></Input>
            <Botao title="Entrar" onPress={enter}>
                <Texto>Entrar</Texto>   
            </Botao> 
            <Texto>OU</Texto>   
            <Botao title="Cadastrar" onPress={navigateToRegister}>
                <Texto>Cadastrar</Texto>   
            </Botao> 
        </Container>
    );
};

export default Login;