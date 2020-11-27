import React, {useState} from 'react';

import {  
    Container,
    ContainerUser,
    ContainerUserImg,
    ContainerUserName,
    ContainerText,
    InputName,
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

import {Popup} from '../../components/Popup';
import HealthProblem from './healthProblem';
import Characteristics from './modalCaracteristicas';

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

    function handlerName(e) {
        setPost({ ...post , name : e});
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
    function handlerBirthDate(e) {
        setPost({ ...post , birthDate : e});
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

    // const createPost = async() => {

    //     const data = new FormData();

    //     data.append("name", props.name);
    //     data.append("name_of_genre", post.name_of_genre);
    //     data.append("borned_at", post.birthDate);
    //     data.append("description", post.description);

    //     if (postImage) {
    //         const path = postImage.uri.split('/');
    //         const name = path[path.length - 1];
    //         const ext = name.split(".").pop();

    //         data.append("photo", {
    //             name : name,
    //             uri: postImage.uri,
    //             type: postImage.type+"/"+ext,
    //         });   
    //     }

    //     console.log(post.date+" "+post.hours+":"+post.minute+":00");

    //     const createdPost = await api.post ( '/post' , data);
    
    //     setPost(createdPost.data);
    // }

    let PopupRef = React.createRef()

    const onShowPopup = () => {
        PopupRef.show()
    }

    const onClosePopup = () => {
        PopupRef.close()
    }

    const [popup, setPopup] = useState();

    return(
        <Container>
            <ContainerUser>
                <ContainerUserImg>
                    <UserPhoto source={userPhoto}/>
                </ContainerUserImg>
                <ContainerUserName>{props.name}</ContainerUserName>
            </ContainerUser>
            
            <ContainerText>
                <InputName
                    placeholder="Nome do desparecido:"
                    placeholderTextColor="gray"
                    onChangeText={handlerName}
                    value={post.name}/>
            </ContainerText>
            
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
                        {/* <RadioForm
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
                        </RadioForm> */}
                    </ContainerDate>
                </ContainerDateTime>

                <ContainerDateTime>
                    <ContainerDate>
                        <Lorem>Data de Nascimento</Lorem>
                        <InputDate 
                            placeholderTextColor="gray"
                            placeholder="DD/MM/AAAA"
                            keyboardType="numeric"
                            onChangeText={handlerBirthDate}
                            value={post.birthDate}/>
                    </ContainerDate>
                </ContainerDateTime>
            </ContainerFilter>    
    
            <ContainerBtnPublicar>
                {/* <BtnPublicar onPress={createPost}>  
                    <Lorem>Publicar</Lorem>
                </BtnPublicar> */}
                <BtnPublicar onPress={()=> {
                    setPopup(<HealthProblem/>)
                    onShowPopup()}}>
                    <Lorem>Problemas</Lorem>
                </BtnPublicar> 
                <BtnPublicar onPress={()=>{
                    setPopup(<Characteristics/>)
                    onShowPopup()}}>
                    <Lorem>Characteristics</Lorem>
                </BtnPublicar>  
            </ContainerBtnPublicar>

            <Popup 
                title="Problemas de Saúde"
                content={popup}
                ref={(target) => PopupRef = target}
                onTouchOutside = {onClosePopup}/>
        </Container>
    );
}

export default Criar_postagem;
