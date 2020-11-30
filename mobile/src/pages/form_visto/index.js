import React,{useState} from "react";
import seta from "../../assets/setaVoltar.png"
import { AreaForm, TextoEmail, InputHorario, BotaoSalvar, AreaInputs, ContainerInputs, AreaInputHorario, InputInfos, Border, IconeFotoMembros, ImagemMembros, AreaEstrelas, TextoMenor, TextoMerito, IconeFoto, FotoCamera, AreaImagem, AreaMerito, Container, ContainerUsuario, ImagemUsuario, MenuVoltar, Seta, Estrelas, Botao, TextoBotao, AreaTexto, AreaMembros, Texto } from "./styles";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const Visto = () => {

    const [date, setDate] = useState("");

    const [hour, setHour]=useState("");

    const [minutes, setMinutes] =useState("");

    const [cep , setCep] = useState("");

    const [street, setStreet] = useState("");

    const [bairro, setBairro] = useState("");
    
    const [city, setCity] = useState("");
    
    const [state, setState] = useState("");

    const [number, setNumber] = useState("");

    const [confirm, setConfirm] = useState("");

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
        setCity(e.nativeEvent.text)
    }
    const handlerState = (e) => {
        setState(e.nativeEvent.text)
    }
    const handlerBairro = (e) => {
        setBairro(e.nativeEvent.text)
    }
    const handlerNumber = (e) => {
        setNumber(e.nativeEvent.text)
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

    var radio_props = [
        {label: 'Afirmo', value: 0 },
        {label: 'Não Afirmo', value: 1 }
    ];

    return(
        <Container>
            <MenuVoltar>
                <Seta source={seta}/>
            </MenuVoltar>
            <AreaTexto><Texto>Você viu essa pessoa?</Texto></AreaTexto>
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
                        <InputInfos keyboardType="numeric" onChange={handlerDate} value={date} ></InputInfos>
                    </AreaInputs>
                    <AreaInputHorario>
                        <InputHorario keyboardType="numeric" onChange={handlerHour} value={hour}></InputHorario>
                        <Texto>:</Texto>
                        <InputHorario keyboardType="numeric" onChange={handlerMinutes} value={minutes}></InputHorario>
                    </AreaInputHorario>
                </ContainerInputs>
                
                <AreaTexto><TextoMenor>CEP (Opcional)</TextoMenor></AreaTexto>
                <InputInfos keyboardType="numeric" onBlur={autoCompleteByCep} onChange={handlerCep} value={cep} ></InputInfos>
                
                <AreaTexto><TextoMenor>Rua</TextoMenor></AreaTexto>
                <InputInfos value={street} onChange={handlerStreet}></InputInfos>
                
                <AreaTexto><TextoMenor>Bairro</TextoMenor></AreaTexto>
                <InputInfos value={bairro} onChange={handlerBairro}></InputInfos>

                <AreaTexto><TextoMenor>Cidade</TextoMenor></AreaTexto>
                <InputInfos value={city} onChange={handlerCity}></InputInfos>
                
                <ContainerInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Estado</TextoMenor></AreaTexto>
                        <InputInfos value={state} onChange={handlerState}></InputInfos>
                    </AreaInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Número (Opcional)</TextoMenor></AreaTexto>
                        <InputInfos value={number} onChange={handlerNumber} ></InputInfos>
                    </AreaInputs>
                </ContainerInputs>
                <AreaTexto><TextoMenor>Confirma?</TextoMenor></AreaTexto>
                <ContainerInputs>
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
                                onPress={(value) => { value === 0 ? setConfirm(true) : setConfirm(false)}}
                                buttonWrapStyle={{}}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                labelStyle={{fontSize: 18, color: '#fff'}}
                                labelWrapStyle={{marginRight: 40}}
                                onPress={(value) => {value === 0 ? setConfirm(true) : setConfirm(false)}}
                            />
                        </RadioButton>
                        ))
                        }  
                    </RadioForm>
                </ContainerInputs>
                <BotaoSalvar><TextoBotao>Enviar</TextoBotao></BotaoSalvar>
            </AreaForm>
        </Container>
    )
}

export default Visto;