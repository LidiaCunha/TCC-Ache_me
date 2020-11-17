import React, {useState} from 'react';

import {  
    Container,
    ContainerUser,
    ContainerUserImg,
    ContainerUserName,
    ContainerText,
    Description,
    ContainerSeletedImg,
    ContainerImg,
    InputImg,
    ImageSeleted,
    ContainerFilter,
    Title,
    ContainerDateTime,
    ContainerDate,
    ContainerTime,
    Center,
    InputDate,
    InputTime,
    InputGenre,
    Lorem,
    LoremTime,
    ContainerBtnPublicar,
    BtnPublicar,
    UserPhoto,
    AddPostImage,
    Text,
    
} from './styles';

import addImage from '../../assets/image.png';
import newImage from '../../assets/newImage.png';

const Criar_postagem = ({route}) => {

    const [post, setPost] = useState({
        "description": "",
        "date": "",
        "hours": "",
    });

    const props = route.params;

    var userPhoto = addImage;

    if (props.photo) {
        userPhoto = {uri: props.photo};
    }

    function handlerDescription(e) {
        setPost({ ...post , description : e});
    }

    return(
        <>
            <Container>
                <ContainerUser>
                    <ContainerUserImg>
                        <UserPhoto source={userPhoto}/>
                    </ContainerUserImg>
                    <ContainerUserName>{props.name}</ContainerUserName>
                </ContainerUser>

                <ContainerText>
                    <Text>Descrição</Text>
                    <Description
                        multiline={true}
                        numberOfLines={6}   
                        maxLength={150}
                        textAlignVertical="top"
                        onChangeText={handlerDescription}
                        value={post.description}/>
                </ContainerText>
        
                <ContainerSeletedImg>
                    <ContainerImg>
                        <InputImg>
                            <AddPostImage source={newImage}/>
                        </InputImg>
                        <ImageSeleted/>
                    </ContainerImg>
                </ContainerSeletedImg>
                
                <ContainerFilter> 
                    <Title> Filtros </Title> 
                    
                    <ContainerDateTime>
                        <ContainerDate>
                            <Lorem>Data</Lorem>
                            <InputDate 
                                placeholderTextColor="gray"
                                placeholder="DD/MM/AAAA"/>
                        </ContainerDate>

                        <ContainerTime>
                            <Lorem>Horário</Lorem>
                            <Center>
                                <InputTime 
                                    placeholderTextColor="gray"
                                    placeholder="HH"/>
                                <LoremTime>:</LoremTime>
                                <InputTime 
                                    placeholderTextColor="gray"
                                    placeholder="MM"/>
                            </Center>
                        </ContainerTime>
                    </ContainerDateTime>
        
                    <ContainerDateTime>
                        <ContainerDate>
                            <Lorem>Gênero</Lorem>
                            <Center>
                                <InputGenre 
                                    placeholderTextColor="gray"
                                    placeholder="Masculino"/>
                                <InputGenre 
                                    placeholderTextColor="gray"
                                    placeholder="Feminino"/>
                            </Center>
                        </ContainerDate>
                    </ContainerDateTime>
                </ContainerFilter>    
        
                <ContainerBtnPublicar>
                    <BtnPublicar>  
                        <Lorem>Publicar</Lorem>
                    </BtnPublicar>  
                </ContainerBtnPublicar>    
        
            </Container>
        </>
    );
}

export default Criar_postagem;
