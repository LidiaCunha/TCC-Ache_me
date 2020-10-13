// Funcional
import React, {useState} from 'react';
import {useAuth} from '../../contexts/auth';
import {api} from '../../services/api';

// Styles
import {ViewContainer, Container, ContainerTitulo, Logo, Titulo, Input, Botao, Texto} from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import logo from "../../assets/logo.png";


const Login = ({navigation}) => {
    const navigateToRegister = () => {
        navigation.navigate('Informações Pessoais');
    }

    const {login} = useAuth();
    const [userLogin, setUserLogin] = useState({
        mail: "",
        password: "",
    });

    function handleSignIn(e) {
        setUserLogin({...userLogin, [e.target.id]: e.target.value});
    }

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
            <ViewContainer>
                <ContainerTitulo>
                    <Logo source={logo} ></Logo>
                    <Titulo>Ache.me</Titulo>
                </ContainerTitulo>
                <Input 
                    keyboardType="email-address" 
                    id="mail" placeholder="E-mail ou telefone" 
                    keyboardType="email-address" 
                    value={userLogin.mail} 
                    onChange={handleSignIn} 
                    required
                ></Input>
                <Input 
                    textContentType="newPassword" 
                    id="password" placeholder="Senha"
                    secureTextEntry={true} 
                    autoCorrect={false}
                    value={userLogin.password} 
                    onChange={handleSignIn} 
                    required
                ></Input>
                <Botao title="Entrar" onPress={enter}>
                    <Texto>Entrar</Texto>   
                </Botao> 
                <Texto>OU</Texto>   
                <Botao title="Cadastrar" onPress={navigateToRegister}>
                    <Texto>Cadastrar</Texto>   
                </Botao>
            </ViewContainer> 
        </Container>
    );
};

export default Login;