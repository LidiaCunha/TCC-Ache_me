import React, {useState, useEffect} from "react";
import {StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, TextInput} from "react-native";
import Foto from "../../assets/foto.png";
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

const ModalCaracteristicas = () => {
    useEffect(()=> {
        const getData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('@features')
              if (jsonValue != null) {
                return setfeatures(JSON.parse(jsonValue));
              }
            } catch(e) {
              console.log("erro!")
            }
        }

        getData()
    }, [])

    const [features , setfeatures] = useState([]);

    const [item, setItem] = useState({
        feature:"",
    });

    const handlerfeatures = (e) => {
        setfeatures([...features, e ]);
        setItem({...item, feature:""});
    };

    const handlerItem = (e) => {
        setItem({ ...item , feature : e});
    };

    function Item({ item}){

        const deleteItem = () => {
            setfeatures( features.filter(( feature ) => feature !== item ) );
        };

        return (
            <View style={styles.Caracteristicas}>
                <Text style={styles.TextoCards}>{item}</Text>
                <Icon style={styles.Delete_icon} name="x" color="red" size={20} onPress={deleteItem}/>
            </View>
        );
    }

    const storeData = async () => {
        
        try {
          const jsonValue = JSON.stringify(features)
          await AsyncStorage.setItem('@features', jsonValue)
          return window.alert("success")
        } catch (e) {
          window.alert("erro!")
        }
    }

    return (
        <View style={styles.ContainerModal}>
            <View style={styles.Modal}>
                <Text style={styles.TextoModal}>CARACTERÍSTICAS FÍSICAS</Text>
                <View style={styles.ViewMensagem}>
                    <TouchableOpacity style={styles.ContainerIcone}>
                        <Image style={styles.Icone} source={Foto}/>
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.TextoCaracteristicas} 
                        placeholder="featureas De Saúde"
                        onChangeText={handlerItem}
                        value={item.feature}
                        returnKeyType = {"next"}
                        onSubmitEditing={()=>{handlerfeatures(item.feature)}}/>
                </View>
                <ScrollView style={styles.ContainerCaracteristicas} horizontal={true}>
                    {features.map(feature => <Item key={feature} item={feature} />)}
                </ScrollView>
                <TouchableOpacity style={styles.Ok} onPress={storeData}><Text style={styles.TextoCards}>OK</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalCaracteristicas;

const styles = StyleSheet.create({
    ContainerModal: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    
    Modal: {
        height: 300,
        width: '90%',
        backgroundColor: '#1E1f21',
        borderRadius: 5,
        padding: 10,
        paddingTop: 20,
        overflow: 'hidden',
    },

    TextoModal: {
        color: '#EF5245',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'left',
    },
    
    ViewMensagem: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#EDEDED',
        borderRadius: 20,
        alignItems: 'center',
        paddingRight: 8,
        marginBottom: 25,
    },
    
    ContainerIcone: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#E33336',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 10,
    },

    Icone: {
        width: 25,
        height: 25,
    },

    TextoCaracteristicas: {
        width: '100%',
        color: '#0d0d0dcc',
        fontSize: 16,
    },

    ContainerCaracteristicas: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 60,
    },

    Caracteristicas: {
        height: 40,
        marginRight: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#E33336',
    },

    TextoCards: {
        color: '#fff',
        fontSize: 16,
        marginRight: 5,
    },

    IconeExcluir: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: '#fff',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Delete_icon: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: '#fff',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Ok: {
        width: '30%',
        height: 40,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#E33336',
    },
})

