import React from "react";
import seta from '../../assets/setaVoltar.png';
import camera from '../../assets/cameraCadastro.png';
import adicionar from '../../assets/plus.png';
import foto from '../../assets/oliver.png';
import estrela from '../../assets/star.png';
import foto2 from '../../assets/fotoExemplo.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AreaUsuario, TextoEmail, NomeUsuario, AreaImagemMembros, InputInfos, Border, IconeFotoMembros, ImagemMembros, AreaEstrelas, TextoMenor, TextoMerito, IconeFoto, FotoCamera, AreaImagem, AreaMerito, Container, ContainerUsuario, ImagemUsuario, MenuVoltar, Seta, Estrelas, Botao, TextoBotao, AreaTexto, AreaMembros, Texto } from "./styles";
import { ScrollView } from "react-native";

const Usuario = () => {
    return(
        <Container>
            <MenuVoltar>
                <Seta source={seta}/>
            </MenuVoltar>
            <ContainerUsuario>
                <AreaUsuario>
                    <AreaImagem>
                        <ImagemUsuario source={foto}></ImagemUsuario>
                        <IconeFoto>
                            <FotoCamera source={camera}/>
                        </IconeFoto>
                    </AreaImagem>
                </AreaUsuario>
                <AreaMerito>
                    <AreaEstrelas>
                        <Estrelas source={estrela}></Estrelas>
                        <Estrelas source={estrela}></Estrelas>
                        <Estrelas source={estrela}></Estrelas>
                    </AreaEstrelas>
                    <TextoMerito>Seu mérito</TextoMerito>
                </AreaMerito>
            </ContainerUsuario>
            <AreaTexto>
                <Texto>Oliver Sykes</Texto>
                <TextoEmail>oliver.sykes@gmail.com</TextoEmail>
            </AreaTexto>
            <Botao><TextoBotao>Criar Postagem</TextoBotao></Botao>
            <AreaTexto><TextoMenor>MEMBROS INDICADOS</TextoMenor></AreaTexto>
            <AreaMembros horizontal={true}>
                <AreaImagemMembros>
                    <ImagemMembros source={foto2}></ImagemMembros>
                    <IconeFotoMembros>
                        <Icon name="add" size={25} color="white"/>
                    </IconeFotoMembros>
                </AreaImagemMembros>
                <AreaImagemMembros>
                    <ImagemMembros source={foto2}></ImagemMembros>
                    <IconeFotoMembros>
                        <Icon name="add" size={25} color="white"/>
                    </IconeFotoMembros>
                </AreaImagemMembros>
                <AreaImagemMembros>
                    <ImagemMembros source={foto2}></ImagemMembros>
                    <IconeFotoMembros>
                        <Icon name="add" size={25} color="white"/>
                    </IconeFotoMembros>
                </AreaImagemMembros>
                <AreaImagemMembros>
                    <ImagemMembros source={foto2}></ImagemMembros>
                    <IconeFotoMembros>
                        <Icon name="add" size={25} color="white"/>
                    </IconeFotoMembros>
                </AreaImagemMembros>
                <AreaImagemMembros>
                    <ImagemMembros source={foto2}></ImagemMembros>
                    <IconeFotoMembros>
                        <Icon name="add" size={25} color="white"/>
                    </IconeFotoMembros>
                </AreaImagemMembros>
            </AreaMembros>
            <Border/>
            <ScrollView>
                <AreaTexto><TextoMenor>INFORMAÇÕES PESSOAIS</TextoMenor></AreaTexto>
                <AreaTexto><TextoMenor>Nome</TextoMenor></AreaTexto>
                <InputInfos><TextoMenor>Oliver Sykes</TextoMenor></InputInfos>
                <AreaTexto><TextoMenor>Email</TextoMenor></AreaTexto>
                <InputInfos><TextoMenor>Oliver Sykes</TextoMenor></InputInfos>
            </ScrollView>
        </Container>
    )
}

export default Usuario;