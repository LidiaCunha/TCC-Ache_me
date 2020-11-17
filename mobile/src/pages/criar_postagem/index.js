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
    SelectImage,
    PostImage,
    
} from './styles';

import defaltImage from '../../assets/image.png';
import addImage from '../../assets/newImage.png';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';

const Criar_postagem = ({route}) => {

    const props = route.params;

    var userPhoto = defaltImage;

    if (props.photo !== "undefined") {
        userPhoto = {uri: props.photo};
    }

    const [ post , setPost ] = useState({});

    const addFeature = async( feature ) => {
        await api.post( `/features/post/${post.id}` , feature );
    }

    const addHealthProbelm = async( healthProblem ) => {
        await api.post( `/healthProblems/post/${post.id}` , healthProblem );
    }

    function handlerDescription(e) {
        setPost({ ...post , description : e});
    }

    function handlerDate(e) {
        setPost({ ...post , description : e});
    }

    const [postImage, setPostImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (result.cancelled) {
          return;
        }
        if (result.uri) {
            setPostImage(result);
        }
    };

    const createPost = async() => {

        const path = postImage.uri.split('/');
        const name = path[path.length - 1];
        const ext = name.split(".").pop();

        const data = new FormData();

        data.append("name", post.name);
        data.append("name_of_genre", post.name_of_genre);
        data.append("borned_at", post.borned_at);
        data.append("description", post.description);
        data.append("photo", {
            name : name,
            uri: newImage.uri,
            type:newImage.type+"/"+ext,
        });

        const createdPost = await api.post ( '/post' , data);
    
        setPost(createdPost.data);
    }

    return(
        <Container>
            <ContainerUser>
                <ContainerUserImg>
                    <UserPhoto source={userPhoto}/>
                </ContainerUserImg>
                <ContainerUserName>{props.name}</ContainerUserName>
            </ContainerUser>
            
            <ScrollView>
                <ContainerText>
                    <Description
                        placeholder="Descrição:"
                        placeholderTextColor="gray"
                        multiline={true}
                        numberOfLines={6}   
                        maxLength={170}
                        textAlignVertical="top"
                        onChangeText={handlerDescription}
                        value={post.description}/>
                </ContainerText>
        
                <ContainerSeletedImg>
                    <ContainerImg>
                        <SelectImage>
                            <InputImg onPress = {pickImage}>
                                <AddPostImage source={addImage}/>
                            </InputImg>
                        </SelectImage>
                        <ImageSeleted >
                            {postImage ? <PostImage source= {{uri: postImage.uri}}/> : <></>}
                        </ImageSeleted>
                    </ContainerImg>
                    
                </ContainerSeletedImg>
                
                <ContainerFilter> 
                    <Title> Filtros </Title> 
                    
                    <ContainerDateTime>
                        <ContainerDate>
                            <Lorem>Data</Lorem>
                            <InputDate 
                                placeholderTextColor="gray"
                                placeholder="DD/MM/AAAA"
                                keyboardType="numeric"/>
                        </ContainerDate>

                        <ContainerTime>
                            <Lorem>Horário</Lorem>
                            <Center>
                                <InputTime 
                                    placeholderTextColor="gray"
                                    placeholder="HH"
                                    keyboardType="numeric"/>
                                <LoremTime>:</LoremTime>
                                <InputTime 
                                    placeholderTextColor="gray"
                                    placeholder="MM"
                                    keyboardType="numeric"/>
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
                    <BtnPublicar onPress={createPost}>  
                        <Lorem>Publicar</Lorem>
                    </BtnPublicar>  
                </ContainerBtnPublicar>
            </ScrollView>
    
        </Container>
    );
}

export default Criar_postagem;
