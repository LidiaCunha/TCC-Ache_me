import {useHistory} from "react-router-dom";

import foto from "../../assets/imagemLogin.jpg";
import logo from "../../assets/logo.png";

import { 
    Container,
    ContainerInfo,
    ContainerMenu,
    ContainerItensMenu,
    ContainerText,
    ContainerTextMenor,
    ConfigInput,

    Form,
    InputGroup,
    Button,
  } from "./styles";

import React, { useState } from "react";
import { api } from "../../services/api";
import { signIn } from '../../services/security';

const FormRegister = (props) => {
    
    const history = useHistory();

    const [userRegister, setUserRegister] = useState({
        name: "",
        mail: "",
        cpf: "",
        telephone: "",
		password : "",
		cep: "",
		bairro: "",
		street: "",
        number: "",
        city:"",
        state:"",
        complement:""
    });

    const handlerInput = (e) => {
        setUserRegister({...userRegister, [e.target.id]: e.target.value});
    };
    const register = async (e) => {
        e.preventDefault();

        try {
            const retorno = await api.post("/newUser", userRegister);

            if(retorno.status === 201) {
                signIn(retorno.data);
                window.alert("sucesso");
                return history.push("/home");
            }
        } catch (error) {
            console.log(error);
            window.alert(error);
        }

    }

    return(
        <Form onSubmit={register}>
            <InputGroup>
                <label>Nome</label>
                <input type="text" id="name" value={userRegister.name} onChange={handlerInput} placeholder="Insira seu nome" required />
            </InputGroup>
            <InputGroup>
                <label>Email</label>
                <input type="email" id="mail" value={userRegister.mail} onChange={handlerInput} placeholder="Insira seu email" required />
            </InputGroup>
            <InputGroup>
                <label>Senha</label>
                <input type="password" id="password" value={userRegister.password} onChange={handlerInput} placeholder="Insira sua senha" required />
            </InputGroup>
            <InputGroup>
                <label>CPF</label>
                <input type="text" id="cpf" value={userRegister.cpf} onChange={handlerInput} placeholder="Insira seu CPF" required />
            </InputGroup>
            <InputGroup>
                <label>Telefone</label>
                <input type="text" id="telephone" value={userRegister.telephone} onChange={handlerInput} placeholder="Insira seu telefone" required />
            </InputGroup>
            <InputGroup>
                <label>CEP</label>
                <input type="text" id="cep" value={userRegister.cep} onChange={handlerInput} placeholder="Insira seu CEP" required />
            </InputGroup>
            <InputGroup>
                <label>Bairro</label>
                <input type="text" id="bairro" value={userRegister.bairro} onChange={handlerInput} placeholder="Seu bairro aparecerá aqui" required />
            </InputGroup>
            <InputGroup>
                <label>Rua</label>
                <input type="text" id="street" value={userRegister.street} onChange={handlerInput} placeholder="Sua rua aparecerá aqui" required />
            </InputGroup>
            <InputGroup>
                <label>Número</label>
                <input type="text" id="number" value={userRegister.number} onChange={handlerInput} placeholder="Insira o número da sua casa" required />
            </InputGroup>
            <InputGroup>
                <label>Cidade</label>
                <input type="text" id="city" value={userRegister.city} onChange={handlerInput} placeholder="Sua cidade aparecerá aqui" required />
            </InputGroup>
            <InputGroup>
                <label>Estado</label>
                <input type="text" id="state" value={userRegister.state} onChange={handlerInput} placeholder="Seu Estado aparecerá aqui" required />
            </InputGroup>
            <InputGroup>
                <label>Complemento</label>
                <input type="text" id="complement" value={userRegister.complement} onChange={handlerInput} placeholder="Insira o complemento (opcional)"/>
            </InputGroup>
            <Button type="submit">Registrar-se</Button>
            <Button type="button" onClick={() => {
                props.showForm("login");
            }}>Já tenho cadastro</Button>
         </Form>
    );
};

const FormLogin = (props) => {
    const history = useHistory();

    const [userLogin, setUserLogin] = useState({
        mail: "",
        telephone: "",
        password: "",
    });

    const handlerInput = (e) => {
        setUserLogin({...userLogin, [e.target.id]: e.target.value});
    };

    const enter = async (e) => {
        e.preventDefault();

        try {

            const retorno = await api.post("/users", userLogin);
            
            if (retorno.status === 201) {

                signIn(retorno.data);
                window.alert("sucesso");

                return history.push("/home");
            }

        } catch (error) {
            console.log(error);
            window.alert("error");
        }

    };
    return(
        <Container onSubmit={enter}>
            <img src={foto} alt="area de login"/>
            <ContainerInfo>
                <ContainerMenu>
                <img src={logo} alt="logo"/>

                <ContainerItensMenu>
                    <ul>
                        <li onClick={() => {
                        props.showForm("registrar");
                        }}>Cadastrar-se</li>
                        <li>Sobre</li>
                        <li>Área Informativa</li>
                    </ul>
                </ContainerItensMenu>
                </ContainerMenu>

                <ContainerText>
                    <h1>Bem-Vindo novamente! Que bom que</h1>
                    <h1>Voltou, sua ajuda é muito importante.</h1>
                </ContainerText>

                <ContainerTextMenor>
                    <h2>Colabore com essa busca, ajude famílias a encontrarem seus entes queridos, é</h2>
                    <h2>simples, rápido e gratificante ajudar alguém.</h2>
                </ContainerTextMenor>

                <ConfigInput>
                    <input type="email" id="mail" value={userLogin.mail} onChange={handlerInput} placeholder="E-mail" required />
                    <input type="password" id="password" value={userLogin.password} onChange={handlerInput} placeholder="senha" required />
                    <input type="submit" value="Entrar"/>
                </ConfigInput>
                
            </ContainerInfo>
        </Container>
    );
};

const Login = () => {
    
    const [showForm, setShowForm] = useState("login");
    
    return (
        <>
            <Container>
                {showForm === "login" ? (<FormLogin showForm={setShowForm} />) : (<FormRegister showForm={setShowForm}/>)};
            </Container>
        </>
    )
}

export default Login;