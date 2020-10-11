import React from 'react';
import { Container, ContainerFoto, FotoImagem, TextoBotao } from '../cadastro_foto_perfil/styles';
import { ContainerInfos, ContainerCard, TextoEmail, Botao } from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import Foto from "../../assets/fotoExemplo.jpg";
import Email from "../../assets/logoEmail.png";

const CadastroEmail = ({navigation}) => {
    const navigateBackToLogin = () => {
        navigation.popToTop();
    }
    return(
        <Container source={planoDeFundo}>
            <ContainerInfos>
                <ContainerFoto>
                    <FotoImagem source={Email}/>
                </ContainerFoto>
                <ContainerCard>
                        <TextoEmail>Obrigado por se cadastrar!</TextoEmail>
                        <TextoEmail>Você receberá um pedido de confirmação no seu e-mail para autorizar a navegação na Ache.me, aceite e faça parte de reencontros.</TextoEmail>
                        <Botao onPress={navigateBackToLogin}><TextoBotao>OK</TextoBotao></Botao>
                </ContainerCard>
            </ContainerInfos>
        </Container>
    )
}

export default CadastroEmail;