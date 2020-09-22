import {useHistory} from "react-router-dom";

import backgroundLogin from "../../assets/imagemLogin.jpg";
import backgroundRegister from "../../assets/imagemCadastro.jpg";
import camera from "../../assets/camera.png";
import logo from "../../assets/logo.png";

import { 
    Container,
    ContainerInfo,
    ContainerItensMenu,
    ContainerTextMenor,

    /*Login*/
    LoginContainerMenu,
    LoginContainerText,
    LoginConfigInput,

    /*Cadastro*/
    CadastroContainerMenu,
    CadastroContainerText,
    CadastroConfigInput,
    ContainerInput,
    ContainerInputSpace,
    Footer,
    ContainerFoto,

  } from "./styles";

import React, { useState, useRef } from "react";
import { api } from '../../services/api';
import { signIn } from '../../services/security';

const FormRegister = (props) => {
    
    const history = useHistory();

    const [userRegister, setUserRegister] = useState({
        name: "",
        mail: "",
        CPF: "",
        telephone: "",
		password : "",
		cep: "",
		bairro: "",
		street: "",
        number: "",
        city:"",
        state:"",
        complement:"",
    });

    const imgRef = useRef();

    const [image, setImage] = useState(null);

    const register = async (e) => {

        e.preventDefault();

        const data = new FormData();

        data.append("name", userRegister.name);
        data.append("mail", userRegister.mail);
        data.append("CPF", userRegister.CPF);
        data.append("telephone", userRegister.telephone);
        data.append("password", userRegister.password);
        data.append("cep", userRegister.cep);
        data.append("bairro", userRegister.bairro);
        data.append("street", userRegister.street);
        data.append("number", userRegister.number);
        data.append("city", userRegister.city);
        data.append("state", userRegister.state);
        data.append("complement", userRegister.complement);
        data.append("photo", image);

        try {
            const retorno = await api.post("/newUser", data, {
                headers: {
                    "Content-type": `multipart/form-data`,
                }
            });
            
            if (retorno.status === 201) {

                signIn(retorno.data);

                return history.push("/home");
            };

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }

    };

    const handlerInput = (e) => {
        setUserRegister({...userRegister, [e.target.id]: e.target.value});
    };

    const handlerImage = (e) => {
        if (e.target.files[0]) {
            imgRef.current.src = URL.createObjectURL(e.target.files[0])
            imgRef.current.style.height = "100%"
            imgRef.current.style.width = "100%"
            imgRef.current.style.margin = "0px"
        }else {
            imgRef.current.src = `${camera}`;
            imgRef.current.style.height = "70%"
            imgRef.current.style.width = "70%"
            imgRef.current.style.margin = "15px"
        }
        setImage(e.target.files[0]);
    };

    return(
        <Container onSubmit={register}>
        <img src={backgroundRegister} alt="área de cadastro"/>

        <ContainerInfo >
          <CadastroContainerMenu>
              <img src={logo} alt="logo"/>
              
              <CadastroContainerText>
                <h1>Seja Um membro Achem.me e faça <br/> parte de reencontros.</h1>
              </CadastroContainerText>
          </CadastroContainerMenu>

          <CadastroConfigInput>

              <ContainerInput>
                  <label>Nome</label>
                  <input type="text" id="name" value={userRegister.name} onChange={handlerInput} placeholder="Insira seu nome" required />
                              
                  <label>CPF</label>
                  <input type="text" id="CPF" value={userRegister.CPF} onChange={handlerInput} placeholder="Insira seu CPF" required />
                              
                  <label>Algume te indicou o Ache.me?</label>
                  <input type="text" placeholder="insira o úsuario"/>
              </ContainerInput>

              <ContainerInputSpace>
                  <ContainerInput>
                      <label>E-mail</label>
                      <input type="email" id="mail" value={userRegister.mail} onChange={handlerInput} placeholder="Insira seu email" required />
                                  
                      <label>Telefone</label>
                      <input type="text" id="telephone" value={userRegister.telephone} onChange={handlerInput} placeholder="Insira seu telefone" required />
                                  
                      <label>Senha</label>
                      <input type="password" id="password" value={userRegister.password} onChange={handlerInput} placeholder="Insira sua senha" required />
                    </ContainerInput>
              </ContainerInputSpace>
              
                  <ContainerInput>
                      <label>Cep</label>
                      <input type="text" id="cep" value={userRegister.cep} onChange={handlerInput} placeholder="Insira seu CEP" required />
                                
                      <label>Bairro</label>
                      <input type="text" id="bairro" value={userRegister.bairro} onChange={handlerInput} placeholder="Seu bairro aparecerá aqui" required />
                                
                      <label>Estado</label>
                      <input type="text" id="state" value={userRegister.state} onChange={handlerInput} placeholder="Seu Estado aparecerá aqui" required />
                  </ContainerInput>
            
              <ContainerInput>
                  <label>Rua</label>
                  <input type="text" id="street" value={userRegister.street} onChange={handlerInput} placeholder="Sua rua aparecerá aqui" required />
                            
                  <label>Cidade</label>
                  <input type="text" id="city" value={userRegister.city} onChange={handlerInput} placeholder="Sua cidade aparecerá aqui" required />
              </ContainerInput>

          </CadastroConfigInput>

          <Footer>
            <ContainerFoto>
                <input type="file" id="file" onChange={handlerImage} hidden/>
                <label htmlFor="file">
                    <img className="photo" src={camera} ref={imgRef} alt="user photography"/>    
                </label>
                <p>Escolha sua foto</p>      
            </ContainerFoto>
            <ContainerFoto>
                <input type="button" value="Ja tenho Cadastro" onClick={() => {props.showForm("login")}}/>
                <input type="submit" value="Cadastrar-se"/>
            </ContainerFoto>
          </Footer>

        </ContainerInfo>

      </Container>
    );
};

const FormLogin = (props) => {
    const history = useHistory();

    const [userLogin, setUserLogin] = useState({
        mail: "",
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

                return history.push("/home");
            };

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }

    };
    return(
        <Container onSubmit={enter}>
            <img src={backgroundLogin} alt="area de login"/>
            <ContainerInfo>
                <LoginContainerMenu>
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
                </LoginContainerMenu>

                <LoginContainerText>
                    <h1>Bem-Vindo novamente! Que bom que</h1>
                    <h1>Voltou, sua ajuda é muito importante.</h1>
                </LoginContainerText>

                <ContainerTextMenor>
                    <h2>Colabore com essa busca, ajude famílias a encontrarem seus entes queridos, é</h2>
                    <h2>simples, rápido e gratificante ajudar alguém.</h2>
                </ContainerTextMenor>

                <LoginConfigInput>
                    <input type="text" id="mail" value={userLogin.mail} onChange={handlerInput} placeholder="E-mail ou telefone" required/>
                    <input type="password" id="password" value={userLogin.password} onChange={handlerInput} placeholder="senha" required />
                    <input type="submit" value="Entrar"/>
                </LoginConfigInput>
                
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
=======
import React from "react";
import foto from "../../assets/Login/imagemLogin.jpg";
import logo from "../../assets/Login/logo.png";

import { 
  Container,
  ContainerInfo,
  ContainerMenu,
  ContainerItensMenu,
  ContainerText,
  ContainerTextMenor,
  ConfigInput
} from "./styles";


const Login = () => {
  return (
    <Container>
        <img src={foto} alt="area de login"/>
        <ContainerInfo>
            <ContainerMenu>
               <img src={logo} alt="logo"/>

               <ContainerItensMenu>
                  <ul>
                    <li>Cadastrar-se</li>
                    <li>Sobre</li>
                    <li>Área Informativa</li>
                  </ul>
               </ContainerItensMenu>
            </ContainerMenu>

              <ContainerText>
                <h1>Bem-Vindo novamente! Que bom que</h1>
                <h1>voltou, sua ajuda é muito importante.</h1>
              </ContainerText>

              <ContainerTextMenor>
                <h2>Colabore com essa busca, ajude famílias a encontrarem seus entes queridos, é</h2>
                <h2>simples, rápido e gratificante ajudar alguém.</h2>
              </ContainerTextMenor>

              <ConfigInput>
                <input type="email" placeholder="E-mail ou Telefone"/>
                <input type="password" placeholder="Senha"/>
                <input type="submit" value="Entrar"/>
              </ConfigInput>
            
        </ContainerInfo>
    </Container>
  )
}

export default Login;