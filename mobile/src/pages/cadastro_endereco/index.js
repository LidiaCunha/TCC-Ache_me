import React, {useState} from 'react';
import Register from '../../contexts/register';
 
//Style
import {Container, BotaoVoltar, ContainerCadastro, Input, Botao, Texto} from '../cadastro_dados_pessoais/styles';
import { IconeCadastro } from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import Icone from "../../assets/iconeEndereco.png";

const CadastroEndereco = ({navigation}, props) => {
    console.log(props);

    const navigateToPhoto = () => {
        navigation.navigate('Confirmar');
    }

    const [advancedInfo, setAdvancedInfo] = useState({
        name: "",
        CPF: "",
        mail: "",
        telephone: "",
        password: "",
    });

    const sendToAddress = async (e) => {
        e.preventDefault();

        try {
            Address(advancedInfo);

            return navigateToAddress();
        } catch (erro) {
            if(erro.response){
                return props.setMensagem(erro.response.data.erro);
            }

            props.setMensagem("Ops, algo deu errado, tente novamente.")
        }
    }

    const handlerInput = (e) => {
        setAdvancedInfo({...advancedInfo, [e.target.id]: e.target.value});

    }

    return(
        <Container source={planoDeFundo}>
            <ContainerCadastro>
                <IconeCadastro source={Icone}/>
                <Input id="cep" placeholder="Insira seu cep" value={advancedInfo.cep} onChange={handleSignIn}keyboardType="numeric" returnKeyType="next" maxLength={8}></Input>
                <Input id="street" placeholder="Insira sua rua" value={advancedInfo.street} onChange={handleSignIn}></Input>
                <Input id="district" placeholder="Insira seu bairro" value={advancedInfo.district} onChange={handleSignIn}></Input>
                <Input id="city" placeholder="Insira sua cidade" value={advancedInfo.city} onChange={handleSignIn}></Input>
                <Input id="state" placeholder="Insira seu estado" value={advancedInfo.state} onChange={handleSignIn}></Input>
                <Input id="number" placeholder="Insira seu número" value={advancedInfo.number} onChange={handleSignIn}></Input>
                <Botao onPress={register}><Texto>Próximo</Texto></Botao>
            </ContainerCadastro>
        </Container>
    )
}

export default CadastroEndereco;