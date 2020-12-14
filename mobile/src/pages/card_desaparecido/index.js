import React, { useEffect, useState } from 'react';
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
import moment from 'moment';

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
import { api } from '../../services/api';

export default function Criar_postagem(props) {
    const [ post , setPost ] = useState({});
    
    const genres = ['Maculino','Feminino','LGBT','Outros']

    useEffect(()=>{
        (async ( ) => {
            const es = await api.get('/posts/'+props.route.params.post.id);
        
            setPost(es.data)
        })();
    },[])
    
    return(
        <Container>                
                <ContainerUser>
                    <ContainerUserImg source={{uri:post.photo}}/>
                    <ContainerUserNameData> 
                        <Name> {post.name} </Name>   
                        <Data> {moment(post.createdAt).format('LLLL')} </Data>   
                    </ContainerUserNameData>
                </ContainerUser>
    
                <ContainerImg source={{uri:post.photo}}/>

            <ContainerBasicInfo>
                <BasicInfosImg source={Clock}/>
                <BasicInfos>{moment(post.borned_at).format('HH:mm')}</BasicInfos>

                <BasicInfosImg source={Calendar}/>
                <BasicInfos>{moment(post.borned_at).format('DD/MM/YYYY')}</BasicInfos>

                <BasicInfosImg source={Map}/>
                <BasicInfos></BasicInfos>

                <BasicInfosImg source={Genre}/>
                <BasicInfos2> {genres[post.genre_id-1]} </BasicInfos2>
            </ContainerBasicInfo>

            <ContainerText>
            <Text>{post.description}</Text>
            </ContainerText>

            <ContainerCharacter>
            <TitleCharacter>Características Físicas</TitleCharacter>
                
                <CardCharacter  style={{ width: '100%' }} horizontal={true}>
                        
                    {
                        post.features && post.features.map( feature => 
                            <CardColor style={styles.cor1}>{feature.feature}</CardColor>
                        )
                    }
                    
                </CardCharacter>

            <TitleCharacter>Problema De saúde</TitleCharacter>
                <CardCharacter style={{ width: '80%' }}  horizontal={true}>
                    {
                        post.HealthProblem && post.HealthProblem.map( problem => 
                            <CardColor style={styles.cor1}>{problem.problem}</CardColor>
                        )
                    }
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
