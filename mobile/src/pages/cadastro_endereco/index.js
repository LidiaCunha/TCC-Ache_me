//Funcional
import React, {useState} from 'react';

//Style
import {Container, BotaoVoltar, ContainerCadastro, Input, Botao, Texto} from '../cadastro_dados_pessoais/styles';
import { IconeCadastro } from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import Icone from "../../assets/iconeEndereco.png";

const CadastroEndereco = ({route, navigation}) => {
    const {props} = route.params;

    const navigateToConfirm = (props) => {
        navigation.navigate('Confirmar', {props});
    }

    const [advancedInfo, setAdvancedInfo] = useState({
        name: props.name,
        CPF: props.CPF,
        mail: props.mail,
        telephone: props.telephone,
        password: props.password,
        cep: "",
        street: "",
        bairro: "",
        city: "",
        state: "",
        number: "",

    });

    const sendToConfirm = async (e) => {
        e.preventDefault();

        try {
            return navigateToConfirm(advancedInfo);

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }
    }

    const handlerInput = (e) => {
        setAdvancedInfo({...advancedInfo, [e.target.id]: e.target.value});

    }

    return(
        <Container source={planoDeFundo}>
            <ContainerCadastro>
                <IconeCadastro source={Icone}/>
                <Input id="cep" placeholder="Insira seu cep" value={advancedInfo.cep} onChange={handlerInput} returnKeyType="next" maxLength={8}></Input>
                <Input id="street" placeholder="Insira sua rua" value={advancedInfo.street} onChange={handlerInput}></Input>
                <Input id="bairro" placeholder="Insira seu bairro" value={advancedInfo.bairro} onChange={handlerInput}></Input>
                <Input id="city" placeholder="Insira sua cidade" value={advancedInfo.city} onChange={handlerInput}></Input>
                <Input id="state" placeholder="Insira seu estado" value={advancedInfo.state} onChange={handlerInput}></Input>
                <Input id="number" placeholder="Insira seu número" value={advancedInfo.number} onChange={handlerInput}></Input>
                <Botao onPress={sendToConfirm}><Texto>Próximo</Texto></Botao>
            </ContainerCadastro>
        </Container>
    )
}

export default CadastroEndereco;