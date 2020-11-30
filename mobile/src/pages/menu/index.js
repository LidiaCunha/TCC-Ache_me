import React from 'react';
import Home from '../../assets/menu/home.png';
import Key from '../../assets/menu/key.png';
import Chat from '../../assets/menu/chat.png';
import Sharing from '../../assets/menu/sharing.png';
import Member from '../../assets/menu/group.png';
import User from '../../assets/james.jpeg';
import Sair from '../../assets/menu/logout.png';
import Seta from '../../assets/setaVoltar.png';

import {  
    Container,
    Back,
    ContainerPhoto,
    Photo,
    Name,
    ContainerItem,
    Icon,
    Icon2,
    Text,
    ContainerItemMenu,
    Exit,
} from './styles';

const Menu = () => {
    return(
        <Container>
            <Back>
                <Icon2 source={Seta} />
            </Back>
        
            <ContainerPhoto>
                <Photo source={User}/>
                <Name>James Paixão</Name>
            </ContainerPhoto>
        
        
            <ContainerItemMenu>
                <ContainerItem>
                    <Icon source={Home}/>
                    <Text>Feed</Text>
                </ContainerItem>

                <ContainerItem>
                    <Icon source={Key}/>
                    <Text>Conta</Text>
                </ContainerItem>

                <ContainerItem>
                    <Icon source={Chat}/>
                    <Text>conversa</Text>
                </ContainerItem>

                <ContainerItem>
                    <Icon source={Sharing}/>
                    <Text>postagem</Text>
                </ContainerItem>

                <ContainerItem>
                    <Icon source={Member}/>
                    <Text>denuncia</Text>
                </ContainerItem>
            </ContainerItemMenu>
        
            <Exit>
                <Icon source={Sair}/>
                <Text>sair</Text> 
            </Exit>
        
        </Container>
    );
}

export default Menu;
