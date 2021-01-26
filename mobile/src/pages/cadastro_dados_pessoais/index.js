//Funcional
import React, {useState} from 'react';
import { Animated,StyleSheet , Dimensions, Keyboard, UIManager } from 'react-native';

// Style
import {Container, ContainerCadastro, IconeCadastro, Input, Botao, Texto} from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import Icone from "../../assets/iconeDadosPessoais.png";
import { ViewContainer } from "../login/styles";

const CadastroPessoal = ({navigation}) => {

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
  
    const [currentyInputHeigth, setInputHeigth ] = useState(0);
    
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
    

    const navigateToAddress = (props) => {
        navigation.navigate('Endereço',{props});
    }

    const [shift] = useState({
        shift: new Animated.Value(0)
    })

    const [basicInfo, setBasicInfo] = useState({ });

    const sendToAddress = async (e) => {
        e.preventDefault();

        try {

            const existArroba = basicInfo.mail.split("@")

            if ( existArroba[0] && existArroba[1] && basicInfo.CPF && basicInfo.telephone && basicInfo.mail && basicInfo.name && basicInfo.password)
                return navigateToAddress(basicInfo);
            else
                return window.alert("Veja se o email está preenchido de forma correta");

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }
    }

    const handlerName = (e) => {
        setBasicInfo({...basicInfo ,name: e.nativeEvent.text});
    }
    const handlerCpf = (e) => {
        setBasicInfo({...basicInfo ,CPF: e.nativeEvent.text.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1')});
    }
    const handlerMail = (e) => {
        setBasicInfo({...basicInfo ,mail: e.nativeEvent.text});
    }
    const handlerTelephone = (e) => {
        setBasicInfo({...basicInfo ,telephone: e.nativeEvent.text.replace (/[^0-9]/g, '').replace(/(.{2})(.{5})(.{4})/, '($1) $2 - $3').replace(/(.{17})(.*)/, '$1' ) });
    }
    const handlerIndication = (e) => {
        setBasicInfo({...basicInfo ,indication: e.nativeEvent.text});
    }
    const handlerPassword = (e) => {
        setBasicInfo({...basicInfo ,password: e.nativeEvent.text});
    }

    const addMeritToIndication = async() => {
        try {
            if (basicInfo.indication){
                const res = await api.get('/users',{headers: { 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwMTM5MTE0Nn0.k5GTAvKniY9_34pNT6PBF7gvJUqMKWGn2iicYVj2SJI'
                  }});
                
                const existUser = res.data.find( user => user.mail === indication ? user : false );
                
                if (existUser) {
                    const newMerit = existUser.merit + 1;

                    await api.put(`/users/${existUser.id}`, {field:'merit',contentOfField:newMerit},{headers: { 
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwMTM5MTE0Nn0.k5GTAvKniY9_34pNT6PBF7gvJUqMKWGn2iicYVj2SJI'
                      }});

                    console.log("MERITO "+newMerit+" ADICIONADO AO USUARIO "+existUser.name);
                }
            
            }
        } catch (error) {
            console.log(error)    
        }
    }


    return(
        <Container source={planoDeFundo}>
            <ContainerCadastro>
                <Animated.View  style={[styles.conteinerForm, {transform: [{translateY:shift.shift}]}]}>
                    <IconeCadastro source={Icone}/>
                    <Input id="name" placeholder="Insira seu nome" onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} value={basicInfo.name} onChange={handlerName} returnKeyType="next"  ></Input>
                    <Input id="CPF" placeholder="Insira seu cpf" value={basicInfo.CPF} onChange={handlerCpf} returnKeyType="next" maxLength={14} keyboardType="numeric" onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)}></Input>
                    <Input id="mail" placeholder="Insira seu email" value={basicInfo.mail} onChange={handlerMail}keyboardType="email-address" returnKeyType="next" onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} ></Input>
                    <Input id="telephone" placeholder="Insira seu telefone" value={basicInfo.telephone} onChange={handlerTelephone}keyboardType="number-pad"onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)} returnKeyType="next" maxLength={20}></Input>
                    <Input id="indication" placeholder="Usuário que te indicou o app" onBlur={addMeritToIndication} onChange={handlerIndication} value={basicInfo.indication} returnKeyType="next" onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)}></Input>
                    <Input id="password" placeholder="Senha" secureTextEntry={true} autoCorrect={false} value={basicInfo.password} onChange={handlerPassword}returnKeyType="done" onTouchStart={(e) => setInputHeigth(e.nativeEvent.pageY + e.nativeEvent.locationY)}></Input>
                    <Botao onPress={sendToAddress}><Texto>Próximo</Texto></Botao>
                </Animated.View>
            </ContainerCadastro>
        </Container>
    )
}

export default CadastroPessoal;