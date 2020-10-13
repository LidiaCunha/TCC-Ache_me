//Funcional
import React from 'react';
import {api} from '../../services/api';

//Style
import { Container, BotaoVoltar, ContainerInfos, Texto, ContainerCard, ContainerFoto, FotoImagem, IconeFoto, FotoCamera, TextoNome, TextoEmail, TextosCard, Botao, TextoBotao } from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
// import Foto from "../../assets/fotoExemplo.jpg";
import Camera from "../../assets/cameraCadastro.png"

const CadastroFotoPerfil = ({route, navigation}) => {

    const {props} = route.params;

    const navigateToCheckEmail = () => {
        navigation.navigate('CheckEmail');
    }

    const register = async (e) => {
        e.preventDefault();
        
        const data = new FormData();

        data.append("name", props.name);
        data.append("mail", props.mail);
        data.append("CPF", props.CPF);
        data.append("telephone", props.telephone);
        data.append("password", props.password);
        data.append("cep", props.cep);
        data.append("bairro", props.bairro);
        data.append("street", props.street);
        data.append("number", props.number);
        data.append("city", props.city);
        data.append("state", props.state);
        data.append("complement", props.complement);
        data.append("photo", image);

        try {
            const retorno = await api.post("/newUser", data, {
                headers: {
                    "Content-type": `multipart/form-data`,
                }
            });
            
            if (retorno.status === 201) {
                return navigateToCheckEmail();
            };

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }

    };
    return(
        <Container source={planoDeFundo}>
            <ContainerInfos>
                <Texto>Escolha uma foto para o seu perfil.</Texto>
                <ContainerFoto>
                    <IconeFoto>
                        <FotoCamera source={Camera}/>
                    </IconeFoto>
                </ContainerFoto>
                <ContainerCard>
                    <TextosCard>
                        <TextoNome>{props.name}</TextoNome>
                        <TextoEmail>{props.mail}</TextoEmail>
                    </TextosCard>
                </ContainerCard>
            </ContainerInfos>
            <Botao onPress={register}><TextoBotao>Confirmar</TextoBotao></Botao>
        </Container>
    )
}

export default CadastroFotoPerfil;