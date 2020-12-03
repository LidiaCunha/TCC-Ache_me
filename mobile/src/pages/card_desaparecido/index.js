import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image, Button } from 'react-native';

// pagina
import Btn_Options from '../../components/btn_card_desaparecido/index';

// imagens
import Clock from '../../assets/Card_desaparecido/clock.png';
import Calendar from '../../assets/Card_desaparecido/calendar.png';
import Map from '../../assets/Card_desaparecido/map.png';
import Genre from '../../assets/Card_desaparecido/genre.png';
import Header from '../../assets/Card_desaparecido/naruto.jpg';
import Photo from '../../assets/kakashi.jpg';
import { FontAwesome } from '@expo/vector-icons';


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
    CardColor,
    TitleCharacter,
    Comment,
    PersonImage,
    Input,
    BtnSend,
    BtnSendImg,
    ContainerUser,
    ContainerUserImg,
    ContainerUserNameData,  
    Name,
    Data,
} from './styles';

export default function Criar_postagem({post}) {
    return(
        <Container>                
                <ContainerUser>
                    <ContainerUserImg source={Photo}/>
                    <ContainerUserNameData> 
                        <Name> Everson Silva de Almeida </Name>   
                        <Data> 15 de fevereiro de 2003</Data>   
                    </ContainerUserNameData>
                </ContainerUser>
    
                <ContainerImg source={Header}/>

            <ContainerBasicInfo>
                <BasicInfosImg source={Clock}/>
                <BasicInfos></BasicInfos>

                <BasicInfosImg source={Calendar}/>
                <BasicInfos></BasicInfos>

                <BasicInfosImg source={Map}/>
                <BasicInfos></BasicInfos>

                <BasicInfosImg source={Genre}/>
                <BasicInfos2> masculino </BasicInfos2>
            </ContainerBasicInfo>

            <ContainerText>
                <Text>loremloremlorem loremlorem loremloremlorem loremloremlorem loremlorem loremloremloremloremloremlorem loremlorem loremloremlorem</Text>
            </ContainerText>

            <ContainerCharacter>
                <TitleCharacter>Características Físicas</TitleCharacter>
                <CardCharacter  style={{ width: '100%' }} horizontal={true}>
                    <CardColor style={styles.cor1}>Cabelo Castanho</CardColor>
                    <CardColor style={styles.cor2}>Baixo</CardColor>
                    <CardColor style={styles.cor3}>magra</CardColor>
                    <CardColor style={styles.cor1}>ErroErroErro</CardColor>
                    <CardColor style={styles.cor2}>teste</CardColor>

                </CardCharacter>

                <TitleCharacter>Problema De saúde</TitleCharacter>
                <CardCharacter style={{ width: '80%' }}  horizontal={true}>
                    <CardColor style={styles.cor1}>Problema cardíaco</CardColor>
                    <CardColor style={styles.cor2}>Câncer</CardColor>
                    <CardColor style={styles.cor3}>Câncer</CardColor>
                    <CardColor style={styles.cor1}>errorrororo</CardColor>
                </CardCharacter>
            </ContainerCharacter>
    
            <Comment> 
                <PersonImage source={Photo}/>
                <Input/>
                <BtnSend> 
                    <BtnSendImg > 
                        <FontAwesome name="send" size={19} color="#fff"/>
                    </BtnSendImg > 
                </BtnSend>    
            </Comment> 
    
            <Btn_Options style={{bottom: 150, right: 50}}/>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    cor1: {
        backgroundColor:'#E33336',
    },

    cor2: {
        backgroundColor:'#F53B3F',
    },

    cor3: {
        backgroundColor:'#F95F62',
    },

    
});
