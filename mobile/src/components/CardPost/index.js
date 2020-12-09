import React from 'react';
import moment from 'moment';
import {  
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
} from '../../pages/listagem_de_postagem/styles';

function CardPost({post, navigation}) {

    const openSeeMore = (post) => {
        navigation.navigate("lostedCard", {post})
    };

    return (
        <Container_card_postagem>
            <ContainerData>
                <Data>{moment(post.createdAt).format('LLLL')}</Data>
            </ContainerData>

            <ContainerCard>
                <Card>
                    <Container_img_name>
                        <ImgUser source={{ uri: post.photo }} />
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
}

export default CardPost;