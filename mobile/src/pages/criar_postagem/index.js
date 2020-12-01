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
import {api} from '../../services/api';

const Criar_postagem = ({route}) => {

    var radio_props = [
        {label: 'Masculino', value: 'male' },
        {label: 'Feminino', value: 'female' },
        {label: 'Outro', value: 'other' }
      ];

    const props = route.params;

    var userPhoto = defaltImage;

    if (props.photo !== "undefined") {
        userPhoto = {uri: props.photo};
    }

    const [ post , setPost ] = useState({});


    function handlerName(e) {
        setPost({ ...post , name : e});
    }
    function handlerDescription(e) {
        setPost({ ...post , description : e});
    }
    function handlerDate(e) {
        setPost({ ...post , date : e.replace(/[^0-9]/g,'').replace(/(.{2})(.{2})(.{4})/, '$1/$2/$3').replace(/(.{10})(.*)/,'$1')});
    }
    function handlerHours(e) {
        setPost({ ...post , hours : e.replace(/(.{2})(.*)/,'$1')});
    }
    function handlerMinute(e) {
        setPost({ ...post , minute : e.replace(/(.{2})(.*)/,'$1')});
    }
    function handlerBirthDate(e) {
        setPost({ ...post , birthDate : e.replace(/[^0-9]/g,'').replace(/(.{2})(.{2})(.{4})/, '$1/$2/$3').replace(/(.{10})(.*)/,'$1')});
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
        if (!postImage) {
            return window.alert("imagem obrigatoria!!!")
        }

        const data = new FormData();

        data.append("name", props.name);
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
        
        try {
            const postCreated = await api.post ( '/post' , data, {
                headers: {
                    "Content-type": `multipart/form-data`,
                }
            });

            
            if (retorno.status === 201) {

                const url = `https://api.postmon.com.br/v1/cep/${cep}`;

                const address = await fetch(url).then(res => res.json());
            
                const data = {
                    street:address.logradouro, 
                    bairro: address.bairro, 
                    cep:cep, 
                    reference_point:location.reference_point,  
                    city: address.cidade, 
                    state: address.estado_info.nome, 
                    seen_at_date: seen.date, 
                    seen_at_hours: seen.time
                };
                const seenCreated = await api.post(`/seen/${postCreated.data.id}`,data);

                if (seenCreated.status === 201){

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

                    showCreatePost(false);
                    return window.alert("Post criado com sucesso!");

                }
            }
        } catch (error) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");            
        }
    }

    let PopupRef = React.createRef()
    const onShowPopup = () => {
        PopupRef.show()
    }
    const onClosePopup = () => {
        PopupRef.close()
    }
    const [popup, setPopup] = useState()

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
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            formHorizontal={false}
                            labelHorizontal={true}
                            buttonColor={'#999'}
                            selectedButtonColor={'#E33336'}
                            labelStyle={{fontSize: 15, color: '#999'}}
                            animation={true}
                            onPress={(value) => setPost({...post , name_of_genre : value})}/>
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
                <BtnPublicar onPress={()=>{createPost}}>  
                    <Lorem>Publicar</Lorem>
                </BtnPublicar>
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
