import React from "react";
import MessageBubble from './message';
import { Container, Seta, MenuVoltar, ContainerUsuario, ContainerChat, ImagemUsuario, NomeUsuario, ViewMensagem, AreaMensagem, Mensagem, Enviar, Icone, Hora, Hora_Minha } from './styles';
import {ScrollView} from 'react-native'
import seta from '../../assets/setaVoltar.png'
import Foto from "../../assets/fotoExemplo.jpg";
import EnviarMsg from "../../assets/enviar-correio.png";

const Chat = () => {
    return(
        <Container>
            <MenuVoltar>
                <Seta source={seta}/>
            </MenuVoltar>
            <ContainerChat>
                <ScrollView>
                    <ContainerUsuario>
                        <ImagemUsuario source={Foto}/>
                        <NomeUsuario>Mary-Elizabeth Winstead</NomeUsuario>
                    </ContainerUsuario>
                    <MessageBubble 
                    text="Mãe, posso te apresentar meu namorado?"
                    />
                    <Hora_Minha>10:38</Hora_Minha>
                    <MessageBubble 
                    mine text="Manda foto"
                    />
                    <Hora>10:39</Hora>
                    <MessageBubble 
                    text="Ele, mãe 😍😍"
                    image={require("../../assets/james.jpeg")}/>
                    <MessageBubble 
                    mine text="Minha filha, chama a polícia"
                    />
                    <MessageBubble 
                    mine text="Minha filha, chama a polícia"
                    />
                    <MessageBubble 
                    mine text="Minha filho, chama a polícia"
                    />
                    <MessageBubble 
                    mine text="Minha filha, chama a polícia"
                    />
                    <MessageBubble 
                    mine text="Minha filha, chama a polícia"
                    />
                </ScrollView>
                <AreaMensagem>
                    <ViewMensagem>
                        <Mensagem placeholder="Digite sua mensagem"/>
                        <Enviar>
                            <Icone source={EnviarMsg}/>
                        </Enviar>
                    </ViewMensagem>
                </AreaMensagem>
            </ContainerChat>
        </Container>
    )
}

export default Chat;