import React from "react";
import seta from '../../assets/setaVoltar.png';
import camera from '../../assets/cameraCadastro.png';
import adicionar from '../../assets/plus.png';
import foto from '../../assets/oliver.png';
import estrela from '../../assets/star.png';
import foto2 from '../../assets/fotoExemplo.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AreaUsuario, TextoEmail, NomeUsuario, BotaoSalvar, AreaInputs, ContainerInputs, AreaImagemMembros, InputInfos, Border, IconeFotoMembros, ImagemMembros, AreaEstrelas, TextoMenor, TextoMerito, IconeFoto, FotoCamera, AreaImagem, AreaMerito, Container, ContainerUsuario, ImagemUsuario, MenuVoltar, Seta, Estrelas, Botao, TextoBotao, AreaTexto, AreaMembros, Texto } from "./styles";
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
            <AreaTexto><TextoMenor>INFORMAÇÕES PESSOAIS</TextoMenor></AreaTexto>
            <ScrollView>
                <AreaTexto><TextoMenor>Nome</TextoMenor></AreaTexto>
                <InputInfos></InputInfos>
                <AreaTexto><TextoMenor>Email</TextoMenor></AreaTexto>
                <InputInfos></InputInfos>
                <ContainerInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Telefone</TextoMenor></AreaTexto>
                        <InputInfos></InputInfos>
                    </AreaInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>CPF</TextoMenor></AreaTexto>
                        <InputInfos></InputInfos>
                    </AreaInputs>
                </ContainerInputs>
                <AreaTexto><TextoMenor>Senha atual</TextoMenor></AreaTexto>
                <InputInfos secureTextEntry={true}></InputInfos>
                <AreaTexto><TextoMenor>Nova Senha</TextoMenor></AreaTexto>
                <InputInfos secureTextEntry={true}></InputInfos>
                <AreaTexto><TextoMenor>Confirmar Senha</TextoMenor></AreaTexto>
                <InputInfos secureTextEntry={true}></InputInfos>
                <AreaTexto><TextoMenor>CEP</TextoMenor></AreaTexto>
                <InputInfos></InputInfos>
                <AreaTexto><TextoMenor>Rua</TextoMenor></AreaTexto>
                <InputInfos><TextoMenor></TextoMenor></InputInfos>
                <AreaTexto><TextoMenor>Bairro</TextoMenor></AreaTexto>
                <InputInfos></InputInfos>
                <AreaTexto><TextoMenor>Cidade</TextoMenor></AreaTexto>
                <InputInfos> </InputInfos>
                <ContainerInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Estado</TextoMenor></AreaTexto>
                        <InputInfos></InputInfos>
                    </AreaInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Número</TextoMenor></AreaTexto>
                        <InputInfos></InputInfos>
                    </AreaInputs>
                </ContainerInputs>
                <BotaoSalvar><TextoBotao>Salvar</TextoBotao></BotaoSalvar>
            </ScrollView>
        </Container>
    )
}

export default Usuario;