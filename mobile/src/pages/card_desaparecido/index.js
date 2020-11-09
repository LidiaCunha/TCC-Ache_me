import React from 'react';
import Clock from '../../assets/Card_desaparecido/clock.png';
import Calendar from '../../assets/Card_desaparecido/calendar.png';
import Map from '../../assets/Card_desaparecido/map.png';
import Genre from '../../assets/Card_desaparecido/genre.png';
import Header from '../../assets/Card_desaparecido/naruto.jpg';
import Enviar from '../../assets/Card_desaparecido/enviar-correio.png';

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
} from './style';

const Card_desaparecido = () => {
    return(
        <>
            <Container>
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
                    <Text>loremloremlorem loremlorem loremloremloremloremlorem lorem loremloremlorem loremloremloremlorem loremloremloremlorem loremlorem lorem loremloremloremloremlorem loremlorem loremlorem loremloremlorem loremloremlorem lorem loremloremlorem loremloremloremloremlorem loremloremloremloremvlorem loremlorem</Text>
                </ContainerText>

                <ContainerCharacter>
                    <TitleCharacter>Características Físicas</TitleCharacter>
                    <CardCharacter>
                        <CardColor1>Cabelo Castanho</CardColor1>
                        <CardColor2>Baixo</CardColor2>
                        <CardColor3>magra</CardColor3>
                    </CardCharacter>

                    <TitleCharacter>Problema De saúde</TitleCharacter>
                    <CardCharacter>
                        <CardColor1>Problema cardíaco</CardColor1>
                        <CardColor2>Câncer</CardColor2>
                        <CardColor3>pedra nos rins</CardColor3>
                    </CardCharacter>
                </ContainerCharacter>
        
                <Comment> 
                    <PersonImage/>
                    <Input/>
                    <BtnSend> 
                        <BtnSendImg source={Enviar}/> 
                    </BtnSend>    
                </Comment> 
            </Container>
        </>
    );
}

export default Card_desaparecido;
