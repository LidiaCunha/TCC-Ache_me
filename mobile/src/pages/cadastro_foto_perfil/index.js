import React from 'react';
import { Container, BotaoVoltar, ContainerInfos, Texto, ContainerCard, ContainerFoto, FotoImagem, IconeFoto, FotoCamera, TextoNome, TextoEmail, TextosCard, Botao, TextoBotao } from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import setaVoltar from "../../assets/setaVoltar.png";
import Foto from "../../assets/fotoExemplo.jpg";
import Camera from "../../assets/cameraCadastro.png"

const CadastroFotoPerfil = () => {
    return(
        <Container source={planoDeFundo}>
            <BotaoVoltar source={setaVoltar}/>
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
            <Botao><TextoBotao>Pular</TextoBotao></Botao>
        </Container>
    )
}

export default CadastroFotoPerfil;