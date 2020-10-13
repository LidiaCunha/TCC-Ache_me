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

    const [basicInfo, setBasicInfo] = useState({ });

    const sendToAddress = async (e) => {
        e.preventDefault();

        try {

            const existArroba = basicInfo.mail.split("@")

            if ( existArroba[0] && existArroba[1] && basicInfo.CPF && basicInfo.telephone && basicInfo.mail && basicInfo.name && basicInfo.password)
                return navigateToAddress(basicInfo);
            else
                return window.alert("Veja se o email está preenchido de forma correta");

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }
        
    }

    const handlerName = (e) => {
        setBasicInfo({...basicInfo ,name: e.nativeEvent.text});
    }
    const handlerCpf = (e) => {
        setBasicInfo({...basicInfo ,CPF: e.nativeEvent.text.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1')});
    }
    const handlerMail = (e) => {
        setBasicInfo({...basicInfo ,mail: e.nativeEvent.text});
    }
    const handlerTelephone = (e) => {
        setBasicInfo({...basicInfo ,telephone: e.nativeEvent.text.replace (/[^0-9]/g, '').replace(/(.{2})(.{5})(.{4})/, '($1) $2 - $3').replace(/(.{17})(.*)/, '$1' ) });
    }
    const handlerIndication = (e) => {
        setBasicInfo({...basicInfo ,indication: e.nativeEvent.text});
    }
    const handlerPassword = (e) => {
        setBasicInfo({...basicInfo ,password: e.nativeEvent.text});
    }

    return(
        <Container source={planoDeFundo}>
            <ContainerCadastro>
                <IconeCadastro source={Icone}/>
                <Input id="name" placeholder="Insira seu nome" value={basicInfo.name} onChange={handlerName} returnKeyType="next" ></Input>
                <Input id="CPF" placeholder="Insira seu cpf" value={basicInfo.CPF} onChange={handlerCpf} returnKeyType="next" maxLength={14}></Input>
                <Input id="mail" placeholder="Insira seu email" value={basicInfo.mail} onChange={handlerMail}keyboardType="email-address" returnKeyType="next"></Input>
                <Input id="telephone" placeholder="Insira seu telefone" value={basicInfo.telephone} onChange={handlerTelephone}keyboardType="number-pad" returnKeyType="next" maxLength={20}></Input>
                <Input id="indication" placeholder="Usuário que te indicou o app" onChange={handlerIndication} value={basicInfo.indication} returnKeyType="next"></Input>
                <Input id="password" placeholder="Senha" secureTextEntry={true} autoCorrect={false} value={basicInfo.password} onChange={handlerPassword}returnKeyType="done"></Input>
                <Botao onPress={sendToAddress}><Texto>Próximo</Texto></Botao>
            </ContainerCadastro>
        </Container>
    )
}

export default CadastroPessoal;