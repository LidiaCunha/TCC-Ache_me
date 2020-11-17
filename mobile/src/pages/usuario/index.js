import React, {useState, useEffect} from "react";
import camera from '../../assets/cameraCadastro.png';
import addImage from '../../assets/image.png';
import estrela from '../../assets/star.png';
import foto2 from '../../assets/fotoExemplo.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Photo, UnChanged, AreaUsuario, TextoEmail, NomeUsuario, BotaoSalvar, AreaInputs, ContainerInputs, AreaImagemMembros, InputInfos, Border, IconeFotoMembros, ImagemMembros, AreaEstrelas, TextoMenor, TextoMerito, IconeFoto, FotoCamera, AreaImagem, AreaMerito, Container, ContainerUsuario, ImagemUsuario, MenuVoltar, Seta, Estrelas, Botao, TextoBotao, AreaTexto, AreaMembros, Texto } from "./styles";
import { ScrollView } from "react-native";
import {api} from "../../services/api";
import * as ImagePicker from 'expo-image-picker';

const Profile = ({route}) => {
    const props = route.params;
    const [key, setKey] = React.useState(0);
    const reload = React.useCallback(() => setKey((prevKey) => prevKey + 1), []);
    return <Usuario reload={reload} key={key} props={props}/>;
}

const Usuario = ({reload, props}) => {

    const [user, setUser] = useState({
        name: "",
        mail: "",
        CPF: "",
        telephone: "",
        password : "",
        newPassword : "",
        confirmPassword: "",
        cep: "",
        bairro: "",
        street: "",
        number: "",
        city:"",
        state:"",
      });
    
    const [username, setUsername] = useState();

    useEffect(() => {
        const getUser = async () => {
    
            try {
              const retorno = await api.get(`/user/${props?.id}`);
    
              const data = retorno.data;

              const where_live = data.where_live;
    
              const newForm = await {
                name: data.name,
                mail: data.mail,
                CPF: data.cpf,
                telephone: data.telephone,
                cep: where_live.cep,
                bairro: where_live.bairro,
                street: where_live.street,
                number: where_live.number,
                city: where_live.city,
                state: where_live.state,
    
              }
    
              setUser(newForm);

              setUsername(data.name);

              if (data.photo === "undefined"){
                setImage(addImage);
              }else{
                setImage({uri:data.photo});
              }
    
            } catch (erro) {
              if(erro.response){
                  return window.alert(erro.response.data.erro);
              }
    
              window.alert("Ops, algo deu errado, tente novamente.")
            }
        }
    
       getUser();
      },[]);
      
    const update = async () => {

    try {
        const retorno = await api.put(`/editUsers/${props?.id}`, user);
        
        if (retorno.status === 201) {

            window.alert(retorno.data.sucess);

            return reload();
        };

    } catch (erro) {

        if(erro.response){
            return window.alert(erro.response.data.erro);
        }
        
        window.alert("Ops, algo deu errado, tente novamente mais tarde.");
    }

    };

    function handlerName(e) {
        setUser({ ...user , name : e});
    }
    function handlerTelephone(e) {
        setUser({ ...user , telephone : e});
    }
    function handlerPassword(e) {
        setUser({ ...user , password : e});
    }
    function handlerNewPassword(e) {
        setUser({ ...user , newPassword : e});
    }
    function handlerConfirmPassword(e) {
        setUser({ ...user , confirmPassword : e});
    }
    function handlerCep(e) {
        setUser({ ...user , cep : e});
    }
    function handlerNeighborhood(e) {
        setUser({ ...user , bairro : e});
    }
    function handlerStreet(e) {
        setUser({ ...user , street : e});
    }
    function handlerNumber(e) {
        setUser({ ...user , number : e});
    }
    function handlerCity(e) {
        setUser({ ...user , city : e});
    }
    function handlerState(e) {
        setUser({ ...user , state : e});
    }
    
    const [image, setImage] = useState(null);

    const [newImage, setNewImage] = useState(null);

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
            setNewImage(result);
        }
      };

    const photoUpdate = async () => {

    const path = newImage.uri.split('/');
    const name = path[path.length - 1];
    const ext = name.split(".").pop();

    const data = new FormData();

    data.append("photo", {
        name : name,
        uri: newImage.uri,
        type:newImage.type+"/"+ext,
    });

    try {
        const retorno = await api.put(`/editPhoto/${props?.id}`, data, {
        headers: {
            "Content-type": `multipart/form-data`,
        },
        });
        
        if (retorno.status === 201) {

            window.alert(retorno.data.sucess);

            return reload();
        };

    } catch (erro) {
        setLoading(false);

        if(erro.response){
            return window.alert(erro.response.data.erro);
        }
        
        window.alert("Ops, algo deu errado, tente novamente mais tarde.");
    }
    }

    if (newImage) {
        photoUpdate();
    }

    return(
        <Container>
            <ScrollView>
                <ContainerUsuario>
                    <AreaUsuario>
                        <AreaImagem>
                            <ImagemUsuario>
                                <Photo source={newImage ? {uri: newImage.uri} : image}/>
                            </ImagemUsuario>
                            <IconeFoto onPress={pickImage}>
                                <FotoCamera source={camera}/>
                            </IconeFoto>
                        </AreaImagem>
                    </AreaUsuario>
                    <AreaMerito>
                        <AreaEstrelas>
                            <Estrelas source={estrela}></Estrelas>
                            <Estrelas source={estrela}></Estrelas>
                            <Estrelas source={estrela}></Estrelas>
                        </AreaEstrelas>
                        <TextoMerito>Seu mérito</TextoMerito>
                    </AreaMerito>
                </ContainerUsuario>
                <AreaTexto>
                    <Texto>{username}</Texto>
                    <TextoEmail>{props?.mail}</TextoEmail>
                </AreaTexto>
                <Botao><TextoBotao>Criar Postagem</TextoBotao></Botao>
                    <AreaTexto><TextoMenor>MEMBROS INDICADOS</TextoMenor></AreaTexto>
                    <AreaMembros horizontal={true}>
                    <AreaImagemMembros>
                        <ImagemMembros source={foto2}></ImagemMembros>
                        <IconeFotoMembros>
                            <Icon name="add" size={25} color="white"/>
                        </IconeFotoMembros>
                    </AreaImagemMembros>
                    <AreaImagemMembros>
                        <ImagemMembros source={foto2}></ImagemMembros>
                        <IconeFotoMembros>
                            <Icon name="add" size={25} color="white"/>
                        </IconeFotoMembros>
                    </AreaImagemMembros>
                    <AreaImagemMembros>
                        <ImagemMembros source={foto2}></ImagemMembros>
                        <IconeFotoMembros>
                            <Icon name="add" size={25} color="white"/>
                        </IconeFotoMembros>
                    </AreaImagemMembros>
                    <AreaImagemMembros>
                        <ImagemMembros source={foto2}></ImagemMembros>
                        <IconeFotoMembros>
                            <Icon name="add" size={25} color="white"/>
                        </IconeFotoMembros>
                    </AreaImagemMembros>
                    <AreaImagemMembros>
                        <ImagemMembros source={foto2}></ImagemMembros>
                        <IconeFotoMembros>
                            <Icon name="add" size={25} color="white"/>
                        </IconeFotoMembros>
                    </AreaImagemMembros>
                </AreaMembros>
                <Border/>
                <AreaTexto><TextoMenor>INFORMAÇÕES PESSOAIS</TextoMenor></AreaTexto>
                <AreaTexto><TextoMenor>Nome</TextoMenor></AreaTexto>
                <InputInfos 
                    placeholder="name" 
                    autoCorrect={false}
                    keyboardType="default" 
                    value={user.name} 
                    onChangeText={handlerName}></InputInfos>
                <AreaTexto><TextoMenor>Email</TextoMenor></AreaTexto>
                    <UnChanged>{user.mail}</UnChanged>
                <ContainerInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Telefone</TextoMenor></AreaTexto>
                        <InputInfos 
                            autoCorrect={false}
                            keyboardType="default" 
                            value={user.telephone} 
                            onChangeText={handlerTelephone}></InputInfos>
                    </AreaInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>CPF</TextoMenor></AreaTexto>
                        <UnChanged>{user.CPF}</UnChanged>
                    </AreaInputs>
                </ContainerInputs>
                <AreaTexto><TextoMenor>Senha atual</TextoMenor></AreaTexto>
                <InputInfos 
                    secureTextEntry={true} 
                    autoCorrect={false}
                    keyboardType="default" 
                    value={user.password} 
                    onChangeText={handlerPassword}></InputInfos>
                <AreaTexto><TextoMenor>Nova Senha</TextoMenor></AreaTexto>
                <InputInfos 
                    secureTextEntry={true} 
                    autoCorrect={false}
                    keyboardType="default" 
                    value={user.newPassword} 
                    onChangeText={handlerNewPassword}></InputInfos>
                <AreaTexto><TextoMenor>Confirmar Senha</TextoMenor></AreaTexto>
                <InputInfos 
                    secureTextEntry={true} 
                    autoCorrect={false}
                    keyboardType="default" 
                    value={user.confirmPassword} 
                    onChangeText={handlerConfirmPassword}></InputInfos>
                <AreaTexto><TextoMenor>CEP</TextoMenor></AreaTexto>
                <InputInfos
                    autoCorrect={false}
                    keyboardType="default" 
                    value={user.cep} 
                    onChangeText={handlerCep}></InputInfos>
                <AreaTexto><TextoMenor>Rua</TextoMenor></AreaTexto>
                <InputInfos
                    autoCorrect={false}
                    keyboardType="default" 
                    value={user.street} 
                    onChangeText={handlerStreet}></InputInfos>
                <AreaTexto><TextoMenor>Bairro</TextoMenor></AreaTexto>
                <InputInfos
                    autoCorrect={false}
                    keyboardType="default" 
                    value={user.bairro} 
                    onChangeText={handlerNeighborhood}></InputInfos>
                <AreaTexto><TextoMenor>Cidade</TextoMenor></AreaTexto>
                <InputInfos
                    autoCorrect={false}
                    keyboardType="default" 
                    value={user.city} 
                    onChangeText={handlerCity}></InputInfos>
                <ContainerInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Estado</TextoMenor></AreaTexto>
                        <InputInfos
                        autoCorrect={false}
                        keyboardType="default" 
                        value={user.state} 
                        onChangeText={handlerState}></InputInfos>
                    </AreaInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Número</TextoMenor></AreaTexto>
                        <InputInfos
                        autoCorrect={false}
                        keyboardType="default" 
                        value={user.number} 
                        onChangeText={handlerNumber}></InputInfos>
                    </AreaInputs>
                </ContainerInputs>
                <BotaoSalvar onPress={update}><TextoBotao>Salvar</TextoBotao></BotaoSalvar>
            </ScrollView>
        </Container>
    )
}

export default Profile;