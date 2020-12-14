import React, {useEffect, useState} from 'react';

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
import userPhoto from '../../assets/image.png';
import addImage from '../../assets/newImage.png';
import * as ImagePicker from 'expo-image-picker';
import FabButton from '../../components/fabButton/FabButton';
import HealthProblem from './healthProblem';
import Characteristics from './features';
import Location from './location';
import {api} from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { useData } from '../../contexts/dataProvider';

const Criar_postagem = () => {

    const { features , problems, location } = useData();

    const { user } = useAuth();

    var radio_props = [
        {label: 'Masculino', value: 'Masculino' },
        {label: 'Feminino', value: 'Feminino' },
        {label: 'Outro', value: 'LGBT' }
    ]; 

// STATES

    const [ post , setPost ] = useState({
        "name": "",
        "name_of_genre": "Masculino",
        "borned_at": "",
        "description": "",   
    });

    const [seen, setSeen] = useState({}); 

    const [postImage, setPostImage] = useState(null);

    const [showPopUpFeatures, setShowPopUpFeatures ] = useState(false);

    const [showPopUpProblems, setShowPopUpProblems ] = useState(false);

    const [showPopupLocale, setShowPopupLocale] = useState(false);

// HANDLERS

    function handlerName(e) {
        setPost({ ...post , name : e});
    }
    function handlerDescription(e) {
        setPost({ ...post , description : e});
    }
    function handlerDate(e) {
        setSeen({ ...seen , date : e.nativeEvent.text.replace(/[^0-9]/g,'').replace(/(.{2})(.{2})(.{4})/,'$1/$2/$3').replace(/(.{10})(.*)/,'$1') });
    }
    function handlerHours(e) {
        setSeen({ ...seen , hours : e.replace(/(.{2})(.*)/,'$1')});
    }
    function handlerMinute(e) {
        setSeen({ ...seen , minute : e.replace(/(.{2})(.*)/,'$1')});
    }
    function handlerBirthDate(e) {
        setPost({ ...post , birthDate : e.nativeEvent.text.replace(/[^0-9]/g,'').replace(/(.{2})(.{2})(.{4})/,'$1/$2/$3').replace(/(.{10})(.*)/,'$1')});
    }

// FUNCTIONS

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

        const res = await api.post('/genre',{genre:post.name_of_genre});
        console.log(res)
        if (!postImage) {
            return window.alert("imagem obrigatoria!!!")
        }
        
        const data = new FormData();

        data.append("name", post.name);
        data.append("name_of_genre", post.name_of_genre);
        data.append("borned_at", post.birthDate);
        data.append("description", post.description);

        const path = postImage.uri.split('/');
        const name = path[path.length - 1];
        const ext = name.split(".").pop();

        data.append("photo", {
            name : name,
            uri: postImage.uri,
            type: postImage.type+"/"+ext,
        });
        
        try{
            console.log(data)
            var postCreated = await api.post('/posts', data, {
                headers: {
                    "Content-type": `multipart/form-data`,
                }
            });
            console.log(postCreated)
            if (postCreated) {

                console.log(postCreated.data.id)

                const data = {
                    street:location.street, 
                    bairro: location.bairro, 
                    cep:location.cep, 
                    reference_point:location.reference_point,  
                    city: location.city, 
                    state: location.state,
                    complement: "test", 
                    seen_at_date: seen.date, 
                    seen_at_hours: seen.hours+":"+seen.minute
                };
                
                const seenCreated = await api.post(`/seen/${postCreated.data.id}`,data);
                console.log(seenCreated)
                if (seenCreated){

                    console.log("seenCreated")
    
                    problems.map( problem => {
                        (async()=>{
                            await api.post(`/healthProblems/post/${postCreated.data.id}`,{problem});
                        })();
                    });
                    features.map( feature => {
                        (async()=>{
                            await api.post(`/features/post/${postCreated.data.id}`,{feature});
                        })();
                    });
    
                    window.alert("Post criado com sucesso!");
                }
            }
        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.error);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");            
        }
    };

// EFFECTS

    useEffect(()=>{
        setTimeout(()=>{
            if (user != null) {
                if (user?.photo != 'undefined') {
                    console.log(user?.photo)
                    userPhoto = {uri: user?.photo};
                }   
            }        
        },2000);
    },[]);

    return(
    <>
        {showPopUpFeatures && <Characteristics displayNone={setShowPopUpFeatures} />}
        {showPopUpProblems && <HealthProblem displayNone={setShowPopUpProblems} />}
        {showPopupLocale && <Location displayNone={setShowPopupLocale} />}

        <Container>

            <ContainerUser>
                <ContainerUserImg>
                    <UserPhoto source={userPhoto}/>
                </ContainerUserImg>
                <ContainerUserName>{user != null ? user?.name : "test"}</ContainerUserName>
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
                <FabButton setProblemPU={setShowPopUpProblems} setFeaturesPU={setShowPopUpFeatures} setLocalePU={setShowPopupLocale} style={{bottom: 100, right: 60}}/>
                <Title> Filtros </Title> 
                
                <ContainerDateTime>
                    <ContainerDate>
                        <Lorem>Data</Lorem>
                        <InputDate 
                            placeholderTextColor="gray"
                            placeholder="DD/MM/AAAA"
                            keyboardType="numeric"
                            onChange={handlerDate}
                            maxLength={10}
                            value={seen.date}/>
                    </ContainerDate>
                    <ContainerTime>
                        <Lorem>Horário</Lorem>
                        <Center>
                            <InputTime 
                                placeholderTextColor="gray"
                                placeholder="HH"
                                keyboardType="numeric"
                                onChangeText={handlerHours}
                                value={seen.hours}/>
                            <LoremTime>:</LoremTime>
                            <InputTime 
                                placeholderTextColor="gray"
                                placeholder="MM"
                                keyboardType="numeric"
                                onChangeText={handlerMinute}
                                value={seen.minute}/>
                        </Center>
                    </ContainerTime>
                </ContainerDateTime>
    
                    <ContainerDate>
                        <Lorem>Gênero</Lorem>
                        <RadioForm
                            radio_props={radio_props}
                            formHorizontal={false}
                            labelHorizontal={true}
                            buttonColor={'#999'}
                            selectedButtonColor={'#E33336'}
                            labelStyle={{fontSize: 15, color: '#999'}}
                            animation={true}
                            onPress={(value) => setPost({...post , name_of_genre : value})}/>
                    </ContainerDate>

                    <ContainerDate>
                        <Lorem>Data de Nascimento</Lorem>
                        <InputDate 
                            placeholderTextColor="gray"
                            placeholder="DD/MM/AAAA"
                            keyboardType="numeric"
                            maxLength={10}
                            onChange={handlerBirthDate}
                            value={post.birthDate}/>
                    </ContainerDate>
            </ContainerFilter>    
    
            <ContainerBtnPublicar>
                <BtnPublicar onPress={createPost}>  
                    <Lorem>Publicar</Lorem>
                </BtnPublicar>
            </ContainerBtnPublicar>


        </Container>
    </>
    );
}

export default Criar_postagem;
