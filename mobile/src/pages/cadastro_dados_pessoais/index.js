//Funcional
import React, {useState} from 'react';

// Style
import {Container, BotaoVoltar, ContainerCadastro, IconeCadastro, Input, Botao, Texto} from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import Icone from "../../assets/iconeDadosPessoais.png";
import { ViewContainer } from "../login/styles";

const CadastroPessoal = ({navigation}) => {
    const navigateToAddress = (props) => {
        navigation.navigate('Endereço',{props});
    }

    const [basicInfo, setBasicInfo] = useState({
        name: "",
        CPF: "",
        mail: "",
        telephone: "",
        password: "",
    });

    const sendToAddress = async (e) => {
        e.preventDefault();

        try {
            return navigateToAddress(basicInfo);

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }
        
    }

    const handlerInput = (e) => {
        setBasicInfo({...basicInfo, [e.target.id]: e.target.value});

    }

    return(
        <Container source={planoDeFundo}>
            <ViewContainer>
                <ContainerCadastro>
                    <IconeCadastro source={Icone}/>
                    <Input id="name" placeholder="Insira seu nome" value={basicInfo.name} onChange={handlerInput} returnKeyType="next"></Input>
                    <Input id="CPF" placeholder="Insira seu CPF" value={basicInfo.CPF} onChange={handlerInput} returnKeyType="next" maxLength={11}></Input>
                    <Input id="mail" placeholder="Insira seu email" value={basicInfo.mail} onChange={handlerInput}keyboardType="email-address" returnKeyType="next"></Input>
                    <Input id="telephone" placeholder="Insira seu telefone" value={basicInfo.telephone} onChange={handlerInput}keyboardType="number-pad" returnKeyType="next" maxLength={11}></Input>
                    <Input id="indication" placeholder="Usuário que te indicou o app" returnKeyType="next"></Input>
                    <Input id="password" placeholder="Senha" secureTextEntry={true} autoCorrect={false} value={basicInfo.password} onChange={handlerInput}returnKeyType="done"></Input>
                    <Botao onPress={sendToAddress}><Texto>Próximo</Texto></Botao>
                </ContainerCadastro>
            </ViewContainer>
        </Container>
    )
}

export default CadastroPessoal;