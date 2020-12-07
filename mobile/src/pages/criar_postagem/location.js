import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styled from "styled-components/native";

const Modal_localizacao = () => {
    const [location, setLocation ] = useState({
        cep:"",
        street:"",
        bairro:"",
        state:"",
        city:"",
        reference_point: "",
    })

    function handlerCep(e) {
        setLocation({ ...location , cep : e});
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


    return(
        <View style={styles.Container}>
            <View style={styles.ContainerCard}>
                
                <Text style={styles.LoremLocal}>LOCALIZAÇÃO</Text>
                
                <View style={styles.ContainerInput}>
                    <Text style={styles.Lorem}>CEP (Opcional)</Text>
                    <TextInput style={styles.Input}/>
                </View>

                <View style={styles.ContainerInput}>
                    <Text style={styles.Lorem}>Rua</Text>
                    <TextInput style={styles.Input}/>
                </View>

                <View style={styles.ContainerInput}>
                    <Text style={styles.Lorem}>Bairro</Text>
                    <TextInput style={styles.Input}/>
                </View>

                <View style={styles.ContainerInput}>
                    <Text style={styles.Lorem}>Cidade</Text>
                    <TextInput style={styles.Input}/>
                </View>

                <View style={styles.ContainerBubbleInput}>
                    <View style={styles.ContainerLoremInput}>
                        <Text style={styles.LoremDubble}>Estado</Text>
                        <Text style={styles.LoremDubble}>Número (Opcional)</Text>
                    </View>
                    <View style={styles.ContainerLoremInput}>
                        <TextInput style={styles.InputDubble}/>
                        <TextInput style={styles.InputDubble}/>
                    </View>
                </View>

                <View style={styles.ContainerBtn}>
                    <TouchableOpacity style={styles.Btn}><Text style={styles.Card_text}>Salvar</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        paddingTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
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