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

    const [userLogin, setUserLogin] = useState({});

    function handlerEmail(e) {
       setUserLogin({ ...userLogin , mail : e});
    }
    function handlerPassword(e) {
        setUserLogin({ ...userLogin , password : e});
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
                    placeholder="E-mail ou telefone" 
                    autoCorrect={false}
                    keyboardType="email-address" 
                    value={userLogin.mail} 
                    onChangeText={handlerEmail} 
                ></Input>
                <Input 
                    placeholder="Senha"
                    secureTextEntry={true} 
                    autoCorrect={false}
                    value={userLogin.password} 
                    onChangeText={handlerPassword} 
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