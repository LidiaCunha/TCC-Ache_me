import React from 'react';
import Home from '../../assets/menu/home.png';
import Key from '../../assets/menu/key.png';
import Chat from '../../assets/menu/chat.png';
import Sharing from '../../assets/menu/sharing.png';
import Member from '../../assets/menu/group.png';
import Sair from '../../assets/menu/logout.png';
import Seta from '../../assets/setaVoltar.png';
import defaltImage from '../../assets/user.png';

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
import { useAuth } from '../../contexts/auth';

const Menu = ({DisplayNone, openComplaint , navigation}) => {

    const {user, logout} = useAuth();
    
    const openPosts = () => {
        navigation.navigate('MyPosts')
    }
    const openFeed =() => {
        navigation.navigate('Dashboard')
    }
    const openProfile = () => {
        navigation.navigate('profile')
    }

    return(
        <Container>
            <Back onTouchStart={()=>DisplayNone(false)}>
                <Icon2 source={Seta} />
            </Back>
        
            <ContainerPhoto>
                <Photo source={user?.photo ? user?.photo : defaltImage}/>
                <Name>{user?.user?.name}</Name>
            </ContainerPhoto>
        
            <ContainerItemMenu>
                <ContainerItem onTouchStart={openFeed}>
                    <Icon source={Home}/>
                    <Text>Feed</Text>
                </ContainerItem>

                <ContainerItem onTouchStart={openProfile}>
                    <Icon source={Key}/>
                    <Text>Conta</Text>
                </ContainerItem>

                <ContainerItem onTouchStart={()=>DisplayNone(false)}>
                    <Icon source={Chat}/>
                    <Text>conversa</Text>
                </ContainerItem>

                <ContainerItem  onTouchStart={openPosts} >
                    <Icon source={Sharing}/>
                    <Text>postagens</Text>
                </ContainerItem>

                <ContainerItem onTouchStart={()=>{openComplaint();DisplayNone(false)}} >
                    <Icon source={Member}/>
                    <Text>denuncia</Text>
                </ContainerItem>
            </ContainerItemMenu>
        
            <Exit onTouchStart={() => logout()} >
                <Icon source={Sair}/>
                <Text>sair</Text> 
            </Exit>
        
        </Container>
    );
}

export default Menu;
