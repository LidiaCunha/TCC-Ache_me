import React from "react";
import {StyleSheet, View, TouchableOpacity, Text, ScrollView, Image,} from "react-native";
import Foto from "../../assets/foto.png";
import Icon from 'react-native-vector-icons/Feather';

const ModalCaracteristicas = () => {
    return (
        <View style={styles.ContainerModal}>
            <View style={styles.Modal}>
                <Text style={styles.TextoModal}>CARACTERÍSTICAS FÍSICAS</Text>
                <View style={styles.ViewMensagem}>
                    <TouchableOpacity style={styles.ContainerIcone}>
                        <Image style={styles.Icone} source={Foto}/>
                    </TouchableOpacity>
                    <Text style={styles.TextoCaracteristicas}>Cabelos longos</Text>
                </View>
                <ScrollView style={styles.ContainerCaracteristicas} horizontal={true}>
                    <TouchableOpacity style={styles.Caracteristicas}>
                        <Text style={styles.TextoCards}>Cabelo castanho</Text>
                        <TouchableOpacity style={styles.IconeExcluir}>
                            <Icon name="x" color="red" size={20}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Caracteristicas}>
                        <Text style={styles.TextoCards}>Baixa</Text>
                        <TouchableOpacity style={styles.IconeExcluir}>
                            <Icon name="x" color="red" size={20}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Caracteristicas}>
                        <Text style={styles.TextoCards}>Magra</Text>
                        <TouchableOpacity style={styles.IconeExcluir}>
                            <Icon name="x" color="red" size={20}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </ScrollView>
                <TouchableOpacity style={styles.Ok}><Text style={styles.TextoCards}>OK</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalCaracteristicas;

const styles = StyleSheet.create({
    ContainerModal: {
        width: '100%',
        height: '100%',
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
        backgroundColor: '#EF5245',
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
        color: '#0d0d0dcc',
        fontSize: 15,
        letterSpacing: 1.4,
        fontWeight: 'bold',
    },

    ContainerCaracteristicas: {
        width: '100%',
        minHeight: 60,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
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
        marginBottom: 20,
        backgroundColor: '#EF5245',
    },

    TextoCards: {
        color: '#fff',
        fontSize: 15,
        letterSpacing: 1.4,
        fontWeight: 'bold',
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

    Ok: {
        width: '30%',
        height: 40,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#F95F62',
    },
})

