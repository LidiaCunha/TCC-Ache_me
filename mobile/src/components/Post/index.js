import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Clock from '../../assets/Card_desaparecido/clock.png';
import Calendar from '../../assets/Card_desaparecido/calendar.png';
import Map from '../../assets/Card_desaparecido/map.png';
import Genre from '../../assets/Card_desaparecido/genre.png';

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
} from '../../pages/card_desaparecido/styles';
import { useAuth } from '../../contexts/auth';
import Btn_Options from '../../components/btn_card_desaparecido/index';
import { FontAwesome } from '@expo/vector-icons';
import { api } from '../../services/api';


function Post({seen}) {

    const {user} = useAuth();

    const genres = ['Maculino','Feminino','LGBT','LGBT','LGBT','Outros']      
    const [post, setPost] = useState([])

    useEffect(()=>{
        (async()=>{
            const res = await api.get(`/posts/${seen.WhoSaw.id_losted_seen}`);

            setPost(res.data)
        })();
    },[])
    
    return (
        <Container>                
                <ContainerUser>
                    <ContainerUserImg source={{uri:seen.LostedThatWasSeen.postCreator.photo}}/>
                    <ContainerUserNameData> 
                        <Name> {seen.LostedThatWasSeen.postCreator.name} </Name>   
                        <Data> {moment(seen.LostedThatWasSeen.createdAt).format('LLLL')} </Data>   
                    </ContainerUserNameData>
                </ContainerUser>

                <ContainerImg source={{uri:post.photo}}/>

            <ContainerBasicInfo>
                <BasicInfosImg source={Clock}/>
                <BasicInfos>{moment(seen.Seen.seen_at).format('HH:mm')}</BasicInfos>

                <BasicInfosImg source={Calendar}/>
                <BasicInfos>{moment(seen.Seen.seen_at).format('DD/MM/YYYY')}</BasicInfos>

                <BasicInfosImg source={Map}/>
                <BasicInfos>{seen.Seen.address.bairro}</BasicInfos>

                <BasicInfosImg source={Genre}/>
                <BasicInfos2> {genres[post.genre_id-1]} </BasicInfos2>
            </ContainerBasicInfo>

            <ContainerText>
            <Text>{post.description}</Text>
            </ContainerText>

            <ContainerCharacter>
            <TitleCharacter>Características Físicas</TitleCharacter>
                
                <CardCharacter  style={{ width: '100%' }} horizontal={true}>
                        
                    {   post.features && post.features.map( feature => 
                            <CardColor style={{
                                backgroundColor:'#F53B3F',
                            }}>{feature.feature}</CardColor>
                        )
                    }
                    
                </CardCharacter>

            <TitleCharacter>Problema De saúde</TitleCharacter>
                <CardCharacter style={{ width: '80%' }}  horizontal={true}>
                    {
                        post.HealthProblem && post.HealthProblem.map(problem =>
                            <CardColor style={{
                                backgroundColor:'#F53B3F',
                            }} >{problem.problem}</CardColor>
                        )
                    }
                </CardCharacter>
            </ContainerCharacter>

            <Comment> 
                <PersonImage source={user?.photo}/>
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
    }

export default Post;