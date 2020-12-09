import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styled from "styled-components/native";

const Modal_localizacao = () => {

    useEffect(()=> {
        const getData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('@location')
              if (jsonValue != null) {
                return setLocation(JSON.parse(jsonValue));
              }
            } catch(e) {
              // error reading value
            }
        }

        getData()
    }, [])


    const [location, setLocation ] = useState({})

    function handlerCep(e) {
        setLocation({ ...location , cep : e.nativeEvent.text.replace(/[^0-9]/g,'').replace(/(.{5})(.{3})/,'$1-$2').replace(/(.{9})(.*)/,'$1') });
    }
    function handlerStreet(e) {
        setLocation({ ...location , street : e});
    }
    function handlerNeighborhood(e) {
        setLocation({ ...location , bairro : e});
    }
    function handlerState(e) {
        setLocation({ ...location , state : e});
    }
    function handlerCity(e) {
        setLocation({ ...location , city : e});
    }
    function handlerRefPoint(e) {
        setLocation({ ...location , reference_point : e});
    }

    const autoCompleteByCep = async( e ) => {
        const cep = location.cep;

        const setForm = async(data) =>{
            setLocation({...location, 
                'street': data.logradouro,
                'bairro' : data.bairro,
                'city' : data.cidade,
                'state': data.estado_info.nome,
            });
        }

        const url = `https://api.postmon.com.br/v1/cep/${cep}`;
        const endereco = await fetch(url).then(res => res.json());
        await setForm(endereco)
    }

    const storeData = async () => {
        
        try {
          const jsonValue = JSON.stringify(location)
          await AsyncStorage.setItem('@location', jsonValue)
          console.log("success")
        } catch (e) {
          window.alert("erro!")
        }
    }


    return(
        <View style={styles.Container}>
            <View style={styles.ContainerCard}>
                
                <Text style={styles.LoremLocal}>LOCALIZAÇÃO</Text>
                
                <View style={styles.ContainerInput}>
                    <Text style={styles.Lorem}>CEP (Opcional)</Text>
                    <TextInput 
                        style={styles.Input}
                        onChange={handlerCep}
                        onBlur={autoCompleteByCep}
                        returnKeyType="next"
                        maxLength={9}
                        keyboardType="numeric"
                        value={location.cep}/>
                </View>

                <View style={styles.ContainerInput}>
                    <Text style={styles.Lorem}>Ponto de Referencia</Text>
                    <TextInput 
                        style={styles.Input}
                        onChangeText={handlerRefPoint}
                        value={location.reference_point}/>
                </View>

                <View style={styles.ContainerInput}>
                    <Text style={styles.Lorem}>Rua</Text>
                    <TextInput 
                        style={styles.Input}
                        onChangeText={handlerStreet}
                        value={location.street}/>
                </View>

                <View style={styles.ContainerInput}>
                    <Text style={styles.Lorem}>Bairro</Text>
                    <TextInput 
                        style={styles.Input}
                        onChangeText={handlerNeighborhood}
                        value={location.bairro}/>
                </View>

                <View style={styles.ContainerBubbleInput}>
                    <View style={styles.ContainerLoremInput}>
                        <Text style={styles.LoremDubble}>Cidade</Text>
                        <Text style={styles.LoremDubble}>Estado</Text>
                    </View>
                    <View style={styles.ContainerLoremInput}>
                        <TextInput 
                            style={styles.InputDubble}
                            onChangeText={handlerCity}
                            value={location.city}/>
                        <TextInput 
                            style={styles.InputDubble}
                            onChangeText={handlerState}
                            value={location.state}/>
                    </View>
                </View>

                <View style={styles.ContainerBtn}>
                    <TouchableOpacity 
                        style={styles.Btn}
                        onPress={storeData}>
                        <Text style={styles.Card_text}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    ContainerCard:{
        height: 'auto',
        width: '90%',
        backgroundColor: '#1E1f21',
        borderRadius: 5,
        padding: 10,
        paddingTop: 20,
        overflow: 'hidden',
    },
    LoremLocal:{
        height: 'auto',
        width: '100%',
        marginBottom: 10,
        fontSize: 12,
        color: '#E33336',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    ContainerInput:{
        height: 'auto',
        width: '100%',
        marginBottom: 15,
        paddingLeft: 20,
    },
    Lorem:{
        height: 'auto',
        width: '100%',
        marginBottom: 10,
        fontSize: 12,
        color: '#fff',
    },
    Input:{
        height: 40,
        width: '95%',
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#fff',
        paddingLeft: 15,
        color: '#fff',
    },
    ContainerBubbleInput:{
        height: 'auto',
        width: '100%',
        marginBottom: 10,
        paddingLeft: 20,
        display: 'flex',
    },
    ContainerLoremInput:{
        height: 'auto',
        width: '100%',
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
    },
    LoremDubble:{
        height: 'auto',
        width: '50%',
        fontSize: 12,
        color: '#fff',
    },
    InputDubble:{  
        height: 40,
        width: '46%',
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#fff',
        paddingLeft: 15,
        color: '#fff',
        marginRight: 10,
    },
    Card_text:{
        fontSize: 17,
        color: '#fff',
        marginRight: 10,
        textTransform: 'capitalize',
    },
    ContainerBtn:{
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    Btn:{
        height: 40,
        width: 160,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#E33336',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    }
})

export default Modal_localizacao;