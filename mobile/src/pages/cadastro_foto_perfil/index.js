import React from 'react';

//Style
import { Container, BotaoVoltar, ContainerInfos, Texto, ContainerCard, ContainerFoto, FotoImagem, IconeFoto, FotoCamera, TextoNome, TextoEmail, TextosCard, Botao, TextoBotao } from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import Foto from "../../assets/fotoExemplo.jpg";
import Camera from "../../assets/cameraCadastro.png"

const CadastroFotoPerfil = ({navigation}) => {
    const navigateToCheckEmail = () => {
        navigation.navigate('CheckEmail');
    }
    return(
        <Container source={planoDeFundo}>
            <ContainerInfos>
                <Texto>Escolha uma foto para o seu perfil.</Texto>
                <ContainerFoto>
                    <FotoImagem source={Foto}/>
                    <IconeFoto>
                        <FotoCamera source={Camera}/>
                    </IconeFoto>
                </ContainerFoto>
                <ContainerCard>
                    <TextosCard>
                        <TextoNome>Mary-Elizabeth Winstead</TextoNome>
                        <TextoEmail>mary.elizabeth@gmail.com</TextoEmail>
                    </TextosCard>
                </ContainerCard>
            </ContainerInfos>
            <Botao onPress={navigateToCheckEmail}><TextoBotao>Confirmar</TextoBotao></Botao>
        </Container>
    )
}

export default CadastroFotoPerfil;