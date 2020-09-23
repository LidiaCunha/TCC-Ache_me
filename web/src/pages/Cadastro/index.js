import React from "react";
import foto from "../../assets/Cadastro/imagemCadastro.jpg";
import camera from "../../assets/Cadastro/cameraCadastro.png";
import logo from "../../assets/Cadastro/logo.png";
//import { Formik, Field, Form } from 'formik';

import { 
  Container,
  ContainerInfo,
  ContainerMenu,
  ContainerText,
  ConfigInput,
  ContainerInput,
  ContainerInputSpace,
  Footer,
  ContainerFotoInput
  
} from "./styles";


const Cadastro = () => {

  const onBlurCep = async (ev, setFieldValue) => {
    const {value} = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if(cep?.lenght !== 8){
      return;
    }

    const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    
    console.log(address);

    setFieldValue('logradouro', address.logradouro);
    setFieldValue('bairro', address.bairro);
    setFieldValue('cidade', address.localidade);
    setFieldValue('uf', address.uf);
  
  };

  return(
    <>
      <Container>
        <img src={foto} alt="área de cadastro"/>

        <ContainerInfo>
          <ContainerMenu>
              <img src={logo} alt="logo"/>
              
              <ContainerText>
              <h1>Seja Um membro Ache.me e faça</h1>
              <h1>parte de reencontros.</h1>
              </ContainerText>
          </ContainerMenu>

          <Formik
            initialValues={{
              nome: '',
              cpf: '',
              cep: '',
              bairro: '',
              uf: '',
              logradouro: '',
              localidade: '',
            }}
            render={({setFieldValue}) => (
              <Form>
                <ConfigInput>

                  <ContainerInput>
                      <label>Nome</label>
                      <Field name="nome" type="text" placeholder="insira seu nome"/>
                                  
                      <label>CPF</label>
                      <Field name="cpf" type="text" placeholder="insira seu CPF"/>
                                  
                      <label>Algume te indicou o Ache.me?</label>
                      <input type="text" placeholder="insira o úsuario"/>
                  </ContainerInput>

                  <ContainerInputSpace>
                      <ContainerInput>
                          <label>E-mail</label>
                          <Field name="email" type="email" placeholder="insira seu e-mail"/>
                                      
                          <label>Telefone</label>
                          <Field name="telefone" type="text" placeholder="insira seu telefone"/>
                                      
                          <label>Senha</label>
                          <Field name="senha" type="text" placeholder="insira seu senha"/>
                        </ContainerInput>
                  </ContainerInputSpace>

                      <ContainerInput>
                          <label>Cep</label>
                          
                          <input type="text" name="cep" placeholder="babaca seu cep" onKeyDown={(ev) => console.log(ev)} />
                          <Field name="cep" type="text" placeholder="insira seu cep" onKeyDown={(ev) => console.log(ev)} />
                                    
                          <label>Bairro</label>
                          <Field name="bairro" type="text" placeholder="insira seu bairro"/>
                                    
                          <label>Estado</label>
                          <Field name="uf" type="text" placeholder="insira seu estado"/>
                      </ContainerInput>

                  <ContainerInput>
                      <label>Rua</label>
                      <Field name="logradouro" type="text" placeholder="insira sua rua"/>
                                
                      <label>Cidade</label>
                      <Field name="localidade" type="text" placeholder="insira sua cidade"/>
                  </ContainerInput>

                </ConfigInput>
              </Form>
            )
            }
          />

          <Footer>
            <ContainerFotoInput>
                <input type="file" id="file" hidden/>
                <label for="file">
                    <img src={camera} alt="camera"/>
                </label>
                <p>Escolha sua foto</p>                
            </ContainerFotoInput>

            <ContainerFotoInput>
                <input type="submit" value="Logar"/>
                <p>OU</p>
                <input type="submit" value="Cadastrar-se"/>
            </ContainerFotoInput>
          </Footer>

        </ContainerInfo>

      </Container>
    </>
  )
}

export default Cadastro;