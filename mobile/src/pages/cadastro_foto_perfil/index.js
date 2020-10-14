//Funcional
import React, { useState, useEffect } from 'react';
import {api} from '../../services/api';
import { Platform } from 'react-native';

//Style
import { ViewContainer, Container, BotaoVoltar, ContainerInfos, Texto, ContainerCard, ContainerFoto, FotoImagem, IconeFoto, FotoCamera, TextoNome, TextoEmail, TextosCard, Botao, TextoBotao } from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
// import Foto from "../../assets/fotoExemplo.jpg";
import Camera from "../../assets/cameraCadastro.png"
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const CadastroFotoPerfil = ({route, navigation}) => {

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);    

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    const {props} = route.params;

    const navigateToCheckEmail = () => {
        navigation.navigate('CheckEmail');
    }

    const [textoBotao, setTextoBotao] = useState("Pular")
    const mudarTextoBotao = () =>{
            setTextoBotao("Confirmar");
    };

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
            console.log(erro);
        }

    };
    return(
        <Container source={planoDeFundo}>
            <ViewContainer>
                <ContainerInfos>
                    <Texto>Escolha uma foto para o seu perfil.</Texto>
                    <ContainerFoto>
                        <FotoImagem source={{ uri: image }}/>
                        <IconeFoto onPressOut={mudarTextoBotao} onPress={pickImage}>
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
            <Botao onPress={navigateToCheckEmail, register}><TextoBotao>{textoBotao}</TextoBotao></Botao>
            </ViewContainer>
        </Container>
    )
}

export default CadastroFotoPerfil;