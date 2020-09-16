import React from "react";
import foto from "../../assets/imagemCadastro.jpg";
import camera from "../../assets/cameraCadastro.png";
import logo from "../../assets/logo.png";

import { 
  Container,
  ContainerInfo,
  CadastroContainerMenu,
  CadastroContainerText,
  CadastroConfigInput,
  ContainerInput,
  ContainerInputSpace,
  Footer,
  ContainerFoto
  
} from "./styles";


const Cadastro = () => {
  return (
    <>
      <Container>
        <img src={foto} alt="área de cadastro"/>

        <ContainerInfo>
          <CadastroContainerMenu>
              <img src={logo}/>
              
              <CadastroContainerText>
              <h1>Seja Um membro Achem.me e faça</h1>
              <h1>parte de reencontros.</h1>
              </CadastroContainerText>
          </CadastroContainerMenu>

          <CadastroConfigInput>

              <ContainerInput>
                  <label>Nome</label>
                  <input type="text" placeholder="insira seu nome"/>
                              
                  <label>CPF</label>
                  <input type="text" placeholder="insira seu CPF"/>
                              
                  <label>Algume te indicou o Ache.me?</label>
                  <input type="text" placeholder="insira o úsuario"/>
              </ContainerInput>

              <ContainerInputSpace>
                  <ContainerInput>
                      <label>E-mail</label>
                      <input type="text" placeholder="insira seu e-mail"/>
                                  
                      <label>Telefone</label>
                      <input type="text" placeholder="insira seu telefone"/>
                                  
                      <label>Senha</label>
                      <input type="text" placeholder="insira seu senha"/>
                    </ContainerInput>
              </ContainerInputSpace>
              
                  <ContainerInput>
                      <label>Cep</label>
                      <input type="text" placeholder="insira seu cep"/>
                                
                      <label>Bairro</label>
                      <input type="text" placeholder="insira seu bairro"/>
                                
                      <label>Estado</label>
                      <input type="text" placeholder="insira seu estado"/>
                  </ContainerInput>
            
              <ContainerInput>
                  <label>Rua</label>
                  <input type="text" placeholder="insira sua rua"/>
                            
                  <label>Cidade</label>
                  <input type="text" placeholder="insira sua cidade"/>
              </ContainerInput>

          </CadastroConfigInput>

          <Footer>
            <ContainerFoto>
                <input type="file" id="file" hidden/>
                <label for="file">
                    <img src={camera} alt="camera"/>
                </label>
                <p>Escolha sua foto</p>                
            </ContainerFoto>
            <input type="submit" value="Cadastrar-se"/>
          </Footer>

        </ContainerInfo>

      </Container>
    </>
  )
}

export default Cadastro;