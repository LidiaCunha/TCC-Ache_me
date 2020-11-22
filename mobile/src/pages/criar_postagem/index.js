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

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import defaltImage from '../../assets/image.png';
import addImage from '../../assets/newImage.png';
import * as ImagePicker from 'expo-image-picker';

const Criar_postagem = ({route}) => {

    const props = route.params;

    var userPhoto = defaltImage;

    if (props.photo !== "undefined") {
        userPhoto = {uri: props.photo};
    }

    var radio_props = [
        {label: 'masculino', value: 0 },
        {label: 'feminino', value: 1 }
    ];

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
        setPost({ ...post , date : e});
    }

    function handlerHours(e) {
        setPost({ ...post , hours : e});
    }

    function handlerMinute(e) {
        setPost({ ...post , minute : e});
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

        const data = new FormData();

        data.append("name", props.name);
        data.append("name_of_genre", post.name_of_genre);
        data.append("borned_at", post.borned_at);
        data.append("description", post.description);

        if (postImage) {
            const path = postImage.uri.split('/');
            const name = path[path.length - 1];
            const ext = name.split(".").pop();

            data.append("photo", {
                name : name,
                uri: postImage.uri,
                type: postImage.type+"/"+ext,
            });   
        }

        console.log(post.date+" "+post.hours+":"+post.minute+":00");

        // const createdPost = await api.post ( '/post' , data);
    
        // setPost(createdPost.data);
    }

    return(
        <Container>
            <ContainerUser>
                <ContainerUserImg>
                    <UserPhoto source={userPhoto}/>
                </ContainerUserImg>
                <ContainerUserName>{props.name}</ContainerUserName>
            </ContainerUser>
            
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
                            keyboardType="numeric"
                            onChangeText={handlerDate}
                            value={post.date}/>
                    </ContainerDate>

                    <ContainerTime>
                        <Lorem>Horário</Lorem>
                        <Center>
                            <InputTime 
                                placeholderTextColor="gray"
                                placeholder="HH"
                                keyboardType="numeric"
                                onChangeText={handlerHours}
                                value={post.hours}/>
                            <LoremTime>:</LoremTime>
                            <InputTime 
                                placeholderTextColor="gray"
                                placeholder="MM"
                                keyboardType="numeric"
                                onChangeText={handlerMinute}
                                value={post.minute}/>
                        </Center>
                    </ContainerTime>
                </ContainerDateTime>
    
                <ContainerDateTime>
                    <ContainerDate>
                        <Lorem>Gênero</Lorem>
                        <RadioForm
                            formHorizontal={true}
                            animation={true}
                        >
                        {
                            radio_props.map((obj, i) => (
                            <RadioButton labelHorizontal={true} key={i} >
                                <RadioButtonInput
                                    obj={obj}
                                    index={i}
                                    borderWidth={1}
                                    buttonInnerColor={'#ef5245'}
                                    buttonOuterColor={'#ef5245'}
                                    buttonSize={20}
                                    buttonOuterSize={40}
                                    initial={0}
                                    onPress={(value) => {this.setState({value:value})}}
                                    buttonWrapStyle={{}}
                                />
                                <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    labelHorizont   al={true}
                                    labelStyle={{fontSize: 18, color: '#fff'}}
                                    labelWrapStyle={{marginRight: 40}}
                                    onPress={(value) => {this.setState({value:value})}}
                                />
                            </RadioButton>
                            ))
                            }  
                        </RadioForm>
                    </ContainerDate>
                </ContainerDateTime>
            </ContainerFilter>    
    
            <ContainerBtnPublicar>
                <BtnPublicar onPress={createPost}>  
                    <Lorem>Publicar</Lorem>
                </BtnPublicar>  
            </ContainerBtnPublicar>

        </Container>
    );
}

export default Criar_postagem;
