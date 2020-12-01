import React , { useState , useEffect } from "react";
import seta from "../../assets/setaVoltar.png";
import foto from '../../assets/oliver.png';
import { AreaForm, TextoEmail, InputHorario, BotaoSalvar, AreaInputs, ContainerInputs, AreaInputHorario, InputInfos, Border, IconeFotoMembros, ImagemMembros, AreaEstrelas, TextoMenor, TextoMerito, IconeFoto, FotoCamera, AreaImagem, AreaMerito, Container, ContainerUsuario, ImagemUsuario, MenuVoltar, Seta, Estrelas, Botao, TextoBotao, AreaTexto, AreaMembros, Texto, ViewFoto, FotoDesaparecido } from "./styles";
import Icon from 'react-native-vector-icons/Fontisto';
import * as ImagePicker from 'expo-image-picker';
import { api } from "../../services/api";
import { Alert } from "react-native";

const Encontrado = ({ postId , navigation }) => {

    const [date, setDate] = useState("");

    const [hour, setHour] = useState("");

    const [minutes, setMinutes] = useState("");

    const [cep , setCep] = useState("");

    const [street, setStreet] = useState("");

    const [bairro, setBairro] = useState("");
    
    const [city, setCity] = useState("");
    
    const [state, setState] = useState("");

    const [number, setNumber] = useState("");

    const [image, setImage] = useState(null);

    const handlerDate = (e) => {
        setDate(e.nativeEvent.text.replace(/[^0-9]/g,'').replace(/(.{2})(.{2})(.{4})/, '$1/$2/$3').replace(/(.{10})(.*)/,'$1'));
    };
    const handlerMinutes = (e) =>{
        setMinutes(e.nativeEvent.text.replace(/(.{2})(.*)/,'$1'));
    };
    const handlerHour = (e) => {
        setHour(e.nativeEvent.text.replace(/(.{2})(.*)/,'$1'));
    };
    const handlerCep =(e)=>{
        setCep(e.nativeEvent.text.replace(/[^0-9]/g,'').replace(/(.{5})(.{3})/,'$1-$2').replace(/(.{9})(.*)/,'$1'));
    };
    const handlerStreet = (e) => {
        setStreet(e.nativeEvent.text);
    }
    const handlerCity = (e) => {
        setCity(e.nativeEvent.text);
    }
    const handlerState = (e) => {
        setState(e.nativeEvent.text);
    }
    const handlerBairro = (e) => {
        setBairro(e.nativeEvent.text);
    }
    const handlerNumber = (e) => {
        setNumber(e.nativeEvent.text);
    }

    const autoCompleteByCep = async( e ) => {

        const setForm = (data) =>{
            setStreet(data.logradouro)
            setBairro(data.bairro)
            setCity(data.cidade)
            setState(data.estado_info.nome)
        }

        const url = `https://api.postmon.com.br/v1/cep/${cep}`;
        const endereco = await fetch(url).then(res => res.json());
        
        setForm(endereco)
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
            const nameImage = result.uri.split('/').pop();
            const ext = nameImage.split(".").pop();

            const imagem = {
                uri: result.uri,
                type:result.type+"/"+ext,
                name : nameImage
            }
            setImage(imagem);
        }
    };

    const CreateFind = async( ) => {

        const data = new FormData();

        data.append('found_at',date+' '+hour+':'+minutes)
        data.append('street',street)
        data.append('city',city)
        data.append('state',state)
        data.append('bairro',bairro)
        data.append('reference_point',number)
        data.append('complement',number)
        data.append('photo',image)

        const res = await api.post(`/found/${postId ? postId : 1 }`, data, {
            headers:{
                "Content-type": `multipart/form-data`,
            }   
        })

        if ( res.status == 201 ) {
            navigation.navigate("Dashboard");
        } else {
            Alert.alert("ERRO AO CRIAR ENCRONTRADO")
        }

    }

    return(
        <Container>
            <MenuVoltar>
                <Seta source={seta}/>
            </MenuVoltar>
            <AreaTexto><Texto>Você encontrou essa pessoa?</Texto></AreaTexto>
            <AreaTexto><TextoEmail>As respostas desse formulário serão enviadas
                para <TextoMerito>Oliver Sykes</TextoMerito> em seu chat.
            </TextoEmail></AreaTexto>
            <AreaForm>
                <ContainerInputs>
                    <TextoMenor>Data</TextoMenor>
                    <TextoMenor>Horário</TextoMenor>
                </ContainerInputs>
                <ContainerInputs>
                    <AreaInputs>
                        <InputInfos onChange={handlerDate} value={date} keyboardType="numeric"></InputInfos>
                    </AreaInputs>
                    <AreaInputHorario>
                        <InputHorario onChange={handlerHour} value={hour} keyboardType="numeric"></InputHorario>
                        <Texto>:</Texto>
                        <InputHorario onChange={handlerMinutes} value={minutes} keyboardType="numeric"></InputHorario>
                    </AreaInputHorario>
                </ContainerInputs>
                
                <AreaTexto><TextoMenor>CEP (Opcional)</TextoMenor></AreaTexto>
                <InputInfos onChange={handlerCep} value={cep} onBlur={autoCompleteByCep} keyboardType="numeric"></InputInfos>
                
                <AreaTexto><TextoMenor>Rua</TextoMenor></AreaTexto>
                <InputInfos value={street} onChange={handlerStreet} ></InputInfos>
                
                <AreaTexto><TextoMenor>Bairro</TextoMenor></AreaTexto>
                <InputInfos  value={bairro} onChange={handlerBairro} ></InputInfos>
                
                <AreaTexto><TextoMenor>Cidade</TextoMenor></AreaTexto>
                <InputInfos value={city} onChange={handlerCity} ></InputInfos>
                
                <ContainerInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Estado</TextoMenor></AreaTexto>
                        <InputInfos value={state} onChange={handlerState}></InputInfos>
                    </AreaInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Número (Opcional)</TextoMenor></AreaTexto>
                        <InputInfos value={number} onChange={handlerNumber}  keyboardType="numeric" ></InputInfos>
                    </AreaInputs>
                </ContainerInputs>
                <AreaTexto><TextoMenor>Foto (Item obrigatório)</TextoMenor></AreaTexto>
                <ViewFoto>
                    <IconeFoto onPress={pickImage}>
                        <Icon name="photograph" color="white" size={30}/>
                    </IconeFoto>
                    {image && <FotoDesaparecido source={image}></FotoDesaparecido>}
                </ViewFoto>
                <BotaoSalvar onPress={CreateFind} ><TextoBotao>Enviar</TextoBotao></BotaoSalvar>
            </AreaForm>
        </Container>
    )
}

export default Encontrado;