import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Clock from '../../assets/Card_desaparecido/clock.png';
import Calendar from '../../assets/Card_desaparecido/calendar.png';
import Map from '../../assets/Card_desaparecido/map.png';
import Genre from '../../assets/Card_desaparecido/genre.png';
import defaultImage from '../../assets/user.png'

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
    Comments,
    CommentText,
    Creator,
    UserName,
    Photo,
    CommentArea
} from '../../pages/card_desaparecido/styles';
import { useAuth } from '../../contexts/auth';
import Btn_Options from '../../components/btn_card_desaparecido/index';
import { FontAwesome } from '@expo/vector-icons';
import { api } from '../../services/api';


function Post({seen}) {

    const {user} = useAuth();

    const genres = ['Maculino','Feminino','LGBT','LGBT','LGBT','Outros']      
    
    const [post, setPost] = useState([])

    const [comment, setComment]= useState("");

    const [comments, setComments] = useState([]);

    const handleComment = (e) => setComment(e);

    const createComment = async() => await api.post(`/posts/${post.id}/comments`,{comment});

    useEffect(()=>{
        (async()=>{
            const res = await api.get(`/posts/${seen.WhoSaw.id_losted_seen}`);

            setPost(res.data)
        })();
    },[]);

    useEffect(()=>{
        (async()=>{
            const coment = await api.get(`/posts/${post.id}/comments`);

            coment.data.map(async comentario => {
                const creator = await api.get(`/user/${comentario.id_user}`)
                setComments([...comments,{...comentario,creator:{...creator.data}} ])
            });

        })();
    },[])
    
    return (
        <>
            <Container>
                <ContainerUser>
                    <ContainerUserImg source={{ uri: seen.LostedThatWasSeen.postCreator.photo }} />
                    <ContainerUserNameData>
                        <Name> {seen.LostedThatWasSeen.postCreator.name} </Name>
                        <Data> {moment(seen.LostedThatWasSeen.createdAt).format('LLLL')} </Data>
                    </ContainerUserNameData>
                </ContainerUser>

                <ContainerImg source={{ uri: post.photo }} />

                <ContainerBasicInfo>
                    <BasicInfosImg source={Clock} />
                    <BasicInfos>{moment(seen.Seen.seen_at).format('HH:mm')}</BasicInfos>

                    <BasicInfosImg source={Calendar} />
                    <BasicInfos>{moment(seen.Seen.seen_at).format('DD/MM/YYYY')}</BasicInfos>

                    <BasicInfosImg source={Map} />
                    <BasicInfos>{seen.Seen.address.bairro}</BasicInfos>

                    <BasicInfosImg source={Genre} />
                    <BasicInfos2> {genres[post.genre_id - 1]} </BasicInfos2>
                </ContainerBasicInfo>

                <ContainerText>
                    <Text>{post.description}</Text>
                </ContainerText>

                <ContainerCharacter>
                    <TitleCharacter>Características Físicas</TitleCharacter>

                    <CardCharacter style={{ width: '100%' }} horizontal={true}>

                        {post.features && post.features.map(feature =>
                            <CardColor style={{
                                backgroundColor: '#F53B3F',
                            }}>{feature.feature}</CardColor>
                        )
                        }

                    </CardCharacter>

                    <TitleCharacter>Problema De saúde</TitleCharacter>
                    <CardCharacter style={{ width: '80%' }} horizontal={true}>
                        {
                            post.HealthProblem && post.HealthProblem.map(problem =>
                                <CardColor style={{
                                    backgroundColor: '#F53B3F',
                                }} >{problem.problem}</CardColor>
                            )
                        }
                    </CardCharacter>
                </ContainerCharacter>

                <Comment>
                    <PersonImage source={ user.photo !== 'undefined' ? {uri:user?.photo} : defaultImage} style={{backgroundColor: 'white'}} />
                    <Input onChangeText={handleComment} value={comment} />
                    <BtnSend onTouchStart={createComment} >
                        <BtnSendImg >
                            <FontAwesome name="send" size={19} color="#fff" />
                        </BtnSendImg >
                    </BtnSend>
                </Comment>

                <Btn_Options style={{ bottom: 150, right: 50 }} />


            </Container>
            <Comments>

                {
                    comments.map( coment => {
                        console.log(coment)
                        return(
                            <CommentArea>
                                <Creator>
                                    <Photo source={coment.creator.photo ? {uri:coment.creator.photo} : defaultImage} alt="user" />
                                    <Name>{coment.creator.name}</Name>
                                </Creator>
                                <CommentText>{coment.comment}</CommentText>
                            </CommentArea>
                        );
                    })
                }
            </Comments>
        </>
    );
}

export default Post;
