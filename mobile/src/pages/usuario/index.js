import React, {useState, useEffect} from "react";
import camera from '../../assets/cameraCadastro.png';
import addImage from '../../assets/image.png';
import estrela from '../../assets/star.png';
import grayStar from '../../assets/gray_star.png';
import foto2 from '../../assets/fotoExemplo.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AntDesign, Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons';
import { Photo, UnChanged, AreaUsuario, TextoEmail, NomeUsuario, BotaoSalvar, AreaInputs, ContainerInputs, AreaImagemMembros, InputInfos, Border, IconeFotoMembros, ImagemMembros, AreaEstrelas, TextoMenor, TextoMerito, IconeFoto, FotoCamera, AreaImagem, AreaMerito, Container, ContainerUsuario, ImagemUsuario, MenuVoltar, Seta, Estrelas, Botao, TextoBotao, AreaTexto, AreaMembros, Texto, Btn_denuncia } from "./styles";
import { ScrollView } from "react-native";
import {api} from "../../services/api";
import defaultImage from "../../../src/assets/user.png";
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from "../../contexts/auth";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
  } from "react-native";

const Profile = ({navigation}) => {
    const {user} = useAuth();
    const [key, setKey] = React.useState(0);
    const reload = React.useCallback(() => setKey((prevKey) => prevKey + 1), []);
    return <Usuario reload={reload} navigation={navigation} key={key} props={user}/>;
}

const Usuario = ({reload, props, navigation}) => {  

    function createPost() {
        navigation.navigate('createpost');
      }
    

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
        merit:0
      });
    
    const [username, setUsername] = useState();

    const [image, setImage] = useState(null);

    const [members, setMembers] = useState([]);
    
    const [newImage, setNewImage] = useState(null);

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
                merit: data.merit
            }

            setUser(newForm);

            const res = await api.get('/users', {
                headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwMTM5MTE0Nn0.k5GTAvKniY9_34pNT6PBF7gvJUqMKWGn2iicYVj2SJI'
                }
            });
    
            const allUsers = res.data;
    
            const filtredUsers = allUsers.filter(member => member.indication === data.mail);
    
            setMembers(filtredUsers);  

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

            const res = await api.get('/posts/my');
        
            setMyPosts(res.data);
        }

       getUser();
    },[]);
      
    const update = async () => {

    try {
        const retorno = await api.put(`/editUsers/${props.id}`, user);
        
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

    if (!newImage) {
        return    
    }

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

    const getAllUsers = async()=>{
        
    }

    React.useEffect(()=>{
        photoUpdate();
    }, [newImage])

    React.useEffect(()=>{
        getAllUsers()
    },[])

    const numberOfStarts = () => {
        let count = user.merit > 5 ? 5 : user.merit;
        const arr = []
        while(count > 0){
            arr.push('n')

            count--;
        }
        return arr;
    }

    const [myPosts, setMyPosts] = React.useState([]);

    const Denunciation = async() =>{ 

        if (myPosts.complaint != undefined) {
            navigation.navigate('denunciations')
            
        }else{
            setModalVisible(true)
        }
    }

    const Stars = () => {
        if (numberOfStarts().length != 0) {
            return (
                <>
                    {
                        numberOfStarts().map( () => <Estrelas source={estrela}></Estrelas> )
                    }
                </>
            )
        }else{
            return (
                <>
                    <Estrelas source={grayStar}></Estrelas>
                    <Estrelas source={grayStar}></Estrelas>
                    <Estrelas source={grayStar}></Estrelas>
                    <Estrelas source={grayStar}></Estrelas>
                    <Estrelas source={grayStar}></Estrelas>
                </>
            )
        }
    }

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <Container>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{username}</Text>
                        <Text style={styles.message}>Você não possui nenhuma denúncia até o memento.</Text>

                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#EF5245" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <AntDesign name="close" size={30} color="white" />
                        </TouchableHighlight>
                    </View>
                </View>
                
            </Modal>
            <ScrollView>
                <ContainerUsuario>
                    <AreaUsuario>
                        <AreaImagem>
                            <ImagemUsuario>
                                <Photo source={newImage ? {uri:newImage.uri} : image}/>
                            </ImagemUsuario>
                            <IconeFoto onPress={pickImage}>
                                <FotoCamera source={camera}/>
                            </IconeFoto>
                        </AreaImagem>
                    </AreaUsuario>
                    <AreaMerito>
                        <AreaEstrelas>
                            <Stars/>
                        </AreaEstrelas>
                        <TextoMerito>Seu mérito</TextoMerito>
                        <Btn_denuncia onPress={Denunciation} >Denúncias</Btn_denuncia>
                    </AreaMerito>
                </ContainerUsuario>
                <AreaTexto>
                    <Texto>{props?.name}</Texto>
                    <TextoEmail>{props?.mail}</TextoEmail>
                </AreaTexto>
                <Botao onPress={createPost} ><TextoBotao>Criar Postagem</TextoBotao></Botao>
                    <AreaTexto><TextoMenor>MEMBROS INDICADOS</TextoMenor></AreaTexto>
                    <AreaMembros horizontal={true}>
                        { members.length > 0 ? members.map( member => {

                            return (
                                <AreaImagemMembros>
                                    <ImagemMembros source={member.photo !== 'undefined' ? {uri:member.photo} : defaultImage }></ImagemMembros>
                                    <IconeFotoMembros>
                                        <Icon name="add" size={25} color="white"/>
                                    </IconeFotoMembros>
                                </AreaImagemMembros>
                            );

                        }) : <TextoMenor>Indique o Ache.me</TextoMenor> }
                        
                        
                    </AreaMembros>
                <Border/>
                <AreaTexto><TextoMenor>INFORMAÇÕES PESSOAIS</TextoMenor></AreaTexto>
                <AreaTexto><TextoMenor>Nome</TextoMenor></AreaTexto>
                <InputInfos 
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

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
      backgroundColor: '#000000AA'
    },
    modalView: {
      width:'90%',
      height: 'auto',
      backgroundColor: "#1E1f21",
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
        width: 50,
        height: 50,
      backgroundColor: "#F194FF",
      borderRadius: 50/2,
      marginTop: 10,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
        height: 'auto',
        width: "100%",
        fontSize: 18,
        color: "#EF5245",
        textAlign: "center",
        padding: 5,
    },
    message: {
        height: 'auto',
        width: "100%",
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        padding: 5,
    }
  });
  

export default Profile;