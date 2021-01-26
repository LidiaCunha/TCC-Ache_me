import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { useData } from '../../contexts/dataProvider';

const Modal_localizacao = ({displayNone}) => {

    const {addLocation, location} = useData();

    // const [location, setLocation ] = useState({})

    function handlerCep(e) {
        addLocation({ ...location , cep : e.nativeEvent.text.replace(/[^0-9]/g,'').replace(/(.{5})(.{3})/,'$1-$2').replace(/(.{9})(.*)/,'$1') });
    }
    function handlerStreet(e) {
        addLocation({ ...location , street : e});
    }
    function handlerNeighborhood(e) {
        addLocation({ ...location , bairro : e});
    }
    function handlerState(e) {
        addLocation({ ...location , state : e});
    }
    function handlerCity(e) {
        addLocation({ ...location , city : e});
    }
    function handlerRefPoint(e) {
        addLocation({ ...location , reference_point : e});
    }

    const autoCompleteByCep = async( e ) => {
        const cep = location.cep;

        console.log(cep)

        const setForm = async(data) =>{
            addLocation({...location, 
                'street': data.logradouro,
                'bairro' : data.bairro,
                'city' : data.cidade,
                'state': data.estado_info.nome,
            });
        }

        try {
            const url = `https://api.postmon.com.br/v1/cep/${cep}`;
            const endereco = await fetch(url).then(res => res.json());
            console.log(endereco)
            await setForm(endereco)
        } catch (error) {
            window.alert("Erro ao encontrar cep.")   
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
                        onPress={ () => {addLocation({cep:location.cep , street:location.street , city :location.city , state: location.state , bairro: location.bairro , reference_point:location.reference_point }); displayNone(false)} }>
                        <Text style={styles.Card_text}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor:'#000000AA',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        position:"absolute",
        zIndex:998
    },
    ContainerCard:{
        height: 'auto',
        width: '90%',
        backgroundColor: '#1E1f21',
        borderRadius: 5,
        padding: 10,
        paddingTop: 20,
        overflow: 'hidden',
        position:"absolute",
        zIndex:999
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