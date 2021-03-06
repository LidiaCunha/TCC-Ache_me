//Funcional
import React, {useState} from 'react';
import { Animated,StyleSheet , Dimensions, Keyboard, UIManager } from 'react-native';


//Style
import {Container, BotaoVoltar, ContainerCadastro, Input, Botao, Texto} from '../cadastro_dados_pessoais/styles';
import { IconeCadastro } from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import Icone from "../../assets/iconeEndereco.png";
import { ViewContainer } from "../login/styles";

const CadastroEndereco = ({route, navigation}) => {
    const {props} = route.params;
    
    const [shift] = useState({
        shift: new Animated.Value(0)
    })

    const [currentyInputHeigth, setInputHeigth ] = useState(0);
    
    const {width} = Dimensions.get('window');

    let w = width*9/10;

    let styles = StyleSheet.create({
            conteinerForm:{
                flex: 1,
                alignItems: 'center',
                alignSelf: 'center',
                width: w ,
                padding: 4
            }
    })

    React.useEffect(()=>{
        w = width*9/10;
        styles.conteinerForm = { ...styles.conteinerForm, width:w}
    }, [width])
  

    const handlerKeyboardDidShow = (e) => {
        const {height} = Dimensions.get('window');

        const keyboardHeight = e.endCoordinates.height;

        const gap =(height - keyboardHeight) - currentyInputHeigth ;
        console.log(gap)
        if ( gap >= 0 )
            return;

        Animated.timing(
            shift.shift,
            {
                toValue: gap,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }

    const handlerKeyboardDidHide = (e) => {
        Animated.timing(
            shift.shift,
            {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true,
            }
          ).start();
    }

    Keyboard.addListener('keyboardDidHide', handlerKeyboardDidHide )
    Keyboard.addListener('keyboardDidShow', handlerKeyboardDidShow )

    const navigateToConfirm = (props) => {
        navigation.navigate('Confirmar', {props});
    }

    const [advancedInfo, setAdvancedInfo] = useState({
        name: props.name,
        CPF: props.CPF,
        mail: props.mail,
        telephone: props.telephone,
        password: props.password,
    });
    
    const sendToConfirm = async (e) => {
        e.preventDefault();
 
        try {
            if( advancedInfo.cep && advancedInfo.street && advancedInfo.bairro && advancedInfo.city && advancedInfo.state && advancedInfo.number)
                return navigateToConfirm(advancedInfo);
            else
                return window.alert("Nos precisamos saber seu endereço para completar seu cadastro.");

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }
    }

    const handlerCep = ( e ) => {
        setAdvancedInfo({ ...advancedInfo , cep : e.nativeEvent.text.replace(/[^0-9]/g,'').replace(/(.{5})(.{3})/,'$1-$2').replace(/(.{9})(.*)/,'$1') });
    }
    const handlerStreet = ( e ) => {
        setAdvancedInfo({ ...advancedInfo , street : e.nativeEvent.text });
    }
    const handlerBairro = ( e ) => {
        setAdvancedInfo({ ...advancedInfo , bairro : e.nativeEvent.text });
    }
    const handlerCity = ( e ) => {
        setAdvancedInfo({ ...advancedInfo , city : e.nativeEvent.text });
    }
    const handlerState = ( e ) => {
        setAdvancedInfo({ ...advancedInfo , state : e.nativeEvent.text });
    }
    const handlerNumber = ( e ) => {
        setAdvancedInfo({ ...advancedInfo , number : e.nativeEvent.text });
    }

    const autoCompleteByCep = async( e ) => {
        const cep = advancedInfo.cep;

        const setForm = async(data) =>{
            setAdvancedInfo({...advancedInfo, 
                'street': data.logradouro,
                'bairro' : data.bairro,
                'city' : data.cidade,
                'state': data.estado_info.nome,
            });
        }

        const url = `https://api.postmon.com.br/v1/cep/${cep}`;
        const endereco = await fetch(url).then(res => res.json());
        setForm(endereco)
    }

    return(
        <Container source={planoDeFundo}>
            <ViewContainer>
                <Animated.View  style={[styles.conteinerForm, {transform: [{translateY:shift.shift}]}]}>
                    <IconeCadastro source={Icone}/>
                    <Input id="cep" placeholder="Insira seu cep" onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} value={advancedInfo.cep} onBlur={autoCompleteByCep} onChange={handlerCep} returnKeyType="next" maxLength={9} keyboardType="numeric"></Input>
                    <Input id="street" placeholder="Insira sua rua" value={advancedInfo.street} onChange={handlerStreet} onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} ></Input>
                    <Input id="bairro" placeholder="Insira seu bairro" value={advancedInfo.bairro} onChange={handlerBairro} onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} ></Input>
                    <Input id="city" placeholder="Insira sua cidade" value={advancedInfo.city} onChange={handlerCity} onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} ></Input>
                    <Input id="state" placeholder="Insira seu estado" value={advancedInfo.state} onChange={handlerState} onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} ></Input>
                    <Input id="number" placeholder="Insira seu número" value={advancedInfo.number} onChange={handlerNumber} onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} ></Input>
                    <Botao onPress={sendToConfirm}><Texto>Próximo</Texto></Botao>
                </Animated.View>
            </ViewContainer>
        </Container>
    )
}

export default CadastroEndereco;