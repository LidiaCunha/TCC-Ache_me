import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import Clock from '../../assets/Card_desaparecido/clock.png';
import Calendar from '../../assets/Card_desaparecido/calendar.png';
import Map from '../../assets/Card_desaparecido/map.png';
import Genre from '../../assets/Card_desaparecido/genre.png';
import Header from '../../assets/Card_desaparecido/naruto.jpg';
import Enviar from '../../assets/Card_desaparecido/enviar-correio.png';
import Photo from '../../assets/kakashi.jpg';
import MenuIcon from '../../assets/menu_desaparecido/kakashi.jpg';


import {  
    Container,
    ContainerImg,
    ContainerBasicInfo,
    BasicInfos,
    BasicInfos2,
    BasicInfosImg,
    ContainerText,
    Text,
    ContainerCharacter,
    CardCharacter,
    CardColor1,
    CardColor2,
    CardColor3,
    TitleCharacter,
    Comment,
    PersonImage,
    Input,
    BtnSend,
    BtnSendImg,
    Options,
    ContainerUser,
    ContainerUserImg,
    ContainerUserName,

    
} from './styles';

const Card_desaparecido = () => {
    return(
        <>
            <Container>
                
                <ContainerUser>
                    <ContainerUserImg/>
                    <ContainerUserName> Everson Silva de Almeida </ContainerUserName>
                </ContainerUser>
        
               
        
                <ContainerImg source={Header}/>

                <ContainerBasicInfo>
                    <BasicInfosImg source={Clock}/>
                    <BasicInfos> às 22:45 </BasicInfos>

                    <BasicInfosImg source={Calendar}/>
                    <BasicInfos> 15 de fev de 2003 </BasicInfos>

                    <BasicInfosImg source={Map}/>
                    <BasicInfos> SP </BasicInfos>

                    <BasicInfosImg source={Genre}/>
                    <BasicInfos2> masculino </BasicInfos2>
                </ContainerBasicInfo>

                <ContainerText>
                    <Text>oi</Text>
                </ContainerText>

                <ContainerCharacter>
                    <TitleCharacter>Características Físicas</TitleCharacter>
                    <CardCharacter>
                        <CardColor1>Cabelo Castanho</CardColor1>
                        <CardColor2>Baixo</CardColor2>
                        <CardColor3>magra</CardColor3>
                        <CardColor1>ErroErroErro</CardColor1>

                    </CardCharacter>

                    <TitleCharacter>Problema De saúde</TitleCharacter>
                    <CardCharacter>
                        <CardColor1>Problema cardíaco</CardColor1>
                        <CardColor2>Câncer</CardColor2>
                        <CardColor3>pedra nos rins</CardColor3>
                    </CardCharacter>
                </ContainerCharacter>
        
                <Comment> 
                    <PersonImage source={Photo}/>
                    <Input/>
                    <BtnSend> 
                        <BtnSendImg source={Enviar}/> 
                    </BtnSend>    
                </Comment> 
        
                <View style={{flex:1}}>
                    <View style={{position:'absolut',bottom:100,right:30,alignSelf:'flex-end'}}>
                        <Options source={MenuIcon}/>
                    </View>
                </View>

            </Container>
        </>
    );
}

export default Card_desaparecido;
