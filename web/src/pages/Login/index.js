import React from "react";
import foto from "../../assets/imagemLogin.jpg";
import logo from "../../assets/logo.png";

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
                <h1>Voltou, sua ajuda é muito importante.</h1>
              </ContainerText>

              <ContainerTextMenor>
                <h2>Colabore com essa busca, ajude famílias a encontrarem seus entes queridos, é</h2>
                <h2>simples, rápido e gratificante ajudar alguém.</h2>
              </ContainerTextMenor>

              <ConfigInput>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <input type="submit" value="Entrar"/>
              </ConfigInput>
            
        </ContainerInfo>
    </Container>
  )
}

export default Login;