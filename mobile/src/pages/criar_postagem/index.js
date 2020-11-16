import React, {useState} from 'react';

import {  
    Container,
    ContainerUser,
    ContainerUserImg,
    ContainerUserName,
    ContainerText,
    Text,
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
    
} from './styles';

import addImage from '../../assets/image.png';
import {api} from '../../services/api';

const Criar_postagem = (props) => {

    // const [photo, setPhoto] = useState();

    // setPhoto(addImage);

    const [ post , setPost ] = useState({});

    const createPost = async() => {

        const data = new FormData();

        data.append("name", post.name);
        data.append("name_of_genre", post.name_of_genre);
        data.append("borned_at", post.borned_at);
        data.append("description", post.description);
        data.append("photo", post.photo);

        const createdPost = await api.post ( '/post' , data);
    
        setPost(createdPost.data);
    }

    const addFeature = async( feature ) => {
        await api.post( `/features/post/${post.id}` , feature );
    }

    const addHealthProbelm = async( healthProblem ) => {
        await api.post( `/healthProblems/post/${post.id}` , healthProblem );
    }

    return(
        <>
            <Container>
                <ContainerUser>
                    <ContainerUserImg source={addImage}/>
                    <ContainerUserName>{props.name}</ContainerUserName>
                </ContainerUser>

                <ContainerText>
                    <Text>lorem lorem lorem lorem lorem lorem lorem ola lorem lorem lorem lorem loremlorem  oi lorem lorem loremloremlorem loremloremloremlorem loremlorem lorem loremloremloremloremlorem loremlorem loremlorem loremloremlorem loremloremlorem lorem loremloremlorem loremloremloremloremlorem loremloremloremloremvlorem loremlorem</Text>
                </ContainerText>
        
                <ContainerSeletedImg>
                    <ContainerImg>
                        <InputImg/>
                        <ImageSeleted/>
                    </ContainerImg>
                </ContainerSeletedImg>
                
                <ContainerFilter> 
                    <Title> Filtros </Title> 
                    
                    <ContainerDateTime>
                        <ContainerDate>
                            <Lorem>Data</Lorem>
                            <InputDate placeholder="DD/MM/AAAA"/>
                        </ContainerDate>

                        <ContainerTime>
                            <Lorem>Horário</Lorem>
                            <Center>
                                <InputTime placeholder="HH"/>
                                <LoremTime>:</LoremTime>
                                <InputTime placeholder="MM"/>
                            </Center>
                        </ContainerTime>
                    </ContainerDateTime>
        
                    <ContainerDateTime>
                        <ContainerDate>
                            <Lorem>Gênero</Lorem>
                            <Center>
                                <InputGenre placeholder="Masculino"/>
                                <InputGenre placeholder="Feminino"/>
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
