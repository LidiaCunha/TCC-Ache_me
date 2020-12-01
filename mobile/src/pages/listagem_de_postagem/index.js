import React, { useEffect, useState } from 'react';
import User from '../../assets/james.jpeg';
import Seta from '../../assets/setaVoltar.png';
import { api } from '../../services/api';
import moment from 'moment';

import {  
    Container,
    ContainerBack,
    Container_card_postagem,
    ContainerData,
    Data,
    ContainerCard,
    Card,
    Container_img_name,
    ImgUser,
    NameUser,
    Text,
    ContainerBtn,
    BtnVerMais,
    Back,
    
} from './styles';

const Listagem_de_postagem = ({navigation}) => {

    const [posts , setPosts] = useState([]);

    useEffect(()=>{
        (   async( ) => {
                const response = await api.get('/posts/my')
                console.log(response.data)
                setPosts(response.data)
            }
        )();
    },[])

    const openSeeMore = (props) => {
        navigation.naviate("lostedCard", props)
    };

    return(
        <Container>
            
            <ContainerBack>
                <Back source={Seta}/>
            </ContainerBack>
            { posts !== undefined && posts.map !== undefined && posts.map( post => {
                return (
                    <Container_card_postagem>
                        <ContainerData>
                            <Data>{ moment(post.createdAt).format('LLLL')}</Data>
                        </ContainerData>

                        <ContainerCard>
                            <Card>
                                <Container_img_name>
                                    <ImgUser source={post.photo} />
                                    <NameUser>{post.name}</NameUser>
                                </Container_img_name>

                                <Text>{post.description}</Text>

                                <ContainerBtn>
                                    <BtnVerMais onPress={() => openSeeMore(post)} >Ver mais</BtnVerMais>
                                </ContainerBtn>
                            </Card>
                        </ContainerCard>
                    </Container_card_postagem>
                );

            } )}
            
        <ContainerBack/>
        </Container>
    );
}

export default Listagem_de_postagem;
