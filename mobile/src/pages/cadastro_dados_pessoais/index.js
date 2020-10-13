//Funcional
import React, {useState} from 'react';

// Style
import {Container, BotaoVoltar, ContainerCadastro, IconeCadastro, Input, Botao, Texto} from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import Icone from "../../assets/iconeDadosPessoais.png";

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
    
    return(
        <Container source={planoDeFundo}>
            <ContainerCadastro>
                <IconeCadastro source={Icone}/>
                <Input name="name" placeholder="Insira seu nome" value={basicInfo.name} onChangeText={handlerInput} returnKeyType="next" ></Input>
                <Input name="CPF" placeholder="Insira seu cpf" value={basicInfo.CPF} onChangeText={handlerInput} returnKeyType="next" maxLength={11}></Input>
                <Input name="mail" placeholder="Insira seu email" value={basicInfo.mail} onChangeText={handlerInput}keyboardType="email-address" returnKeyType="next"></Input>
                <Input name="telephone" placeholder="Insira seu telefone" value={basicInfo.telephone} onChangeText={handlerInput}keyboardType="number-pad" returnKeyType="next" maxLength={11}></Input>
                <Input name="indication" placeholder="Usuário que te indicou o app" returnKeyType="next"></Input>
                <Input name="password" placeholder="Senha" secureTextEntry={true} autoCorrect={false} value={basicInfo.password} onChangeText={handlerInput}returnKeyType="done"></Input>
                <Botao onPress={sendToAddress}><Texto>Próximo</Texto></Botao>
            </ContainerCadastro>
        </Container>
    )
}

export default CadastroPessoal;