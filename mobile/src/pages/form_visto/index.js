import React from "react";
import seta from "../../assets/setaVoltar.png"
import { AreaForm, TextoEmail, InputHorario, BotaoSalvar, AreaInputs, ContainerInputs, AreaInputHorario, InputInfos, Border, IconeFotoMembros, ImagemMembros, AreaEstrelas, TextoMenor, TextoMerito, IconeFoto, FotoCamera, AreaImagem, AreaMerito, Container, ContainerUsuario, ImagemUsuario, MenuVoltar, Seta, Estrelas, Botao, TextoBotao, AreaTexto, AreaMembros, Texto } from "./styles";

const Visto = () => {
    return(
        <Container>
            <MenuVoltar>
                <Seta source={seta}/>
            </MenuVoltar>
            <AreaTexto><Texto>Você viu essa pessoa?</Texto></AreaTexto>
            <AreaTexto><TextoEmail>As respostas desse formulário serão enviadas
                para <TextoMerito>Oliver Sykes</TextoMerito> em seu chat.
            </TextoEmail></AreaTexto>
            <AreaForm>
                <ContainerInputs>
                    <TextoMenor>Data</TextoMenor>
                    <TextoMenor>Horário</TextoMenor>
                </ContainerInputs>
                <ContainerInputs>
                    <AreaInputs>
                        <InputInfos keyboardType="numeric"></InputInfos>
                    </AreaInputs>
                    <AreaInputHorario>
                        <InputHorario keyboardType="numeric"></InputHorario>
                        <Texto>:</Texto>
                        <InputHorario keyboardType="numeric"></InputHorario>
                    </AreaInputHorario>
                </ContainerInputs>
                <AreaTexto><TextoMenor>CEP (Opcional)</TextoMenor></AreaTexto>
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
                        <AreaTexto><TextoMenor>Número (Opcional)</TextoMenor></AreaTexto>
                        <InputInfos></InputInfos>
                    </AreaInputs>
                </ContainerInputs>
                <AreaTexto><TextoMenor>Confirma?</TextoMenor></AreaTexto>
                <InputInfos></InputInfos>
                <BotaoSalvar><TextoBotao>Enviar</TextoBotao></BotaoSalvar>
            </AreaForm>
        </Container>
    )
}

export default Visto;