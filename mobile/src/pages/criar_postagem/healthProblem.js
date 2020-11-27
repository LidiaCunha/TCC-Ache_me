import {StyleSheet, View, Text, Image, TextInput} from 'react-native'

import React from 'react'

const HealthProblem = () => {

    const addHealthProbelm = async( healthProblem ) => {
        await api.post( `/healthProblems/post/${post.id}` , healthProblem );
    }

    return(
        <View style={styles.Container}>
            <View style={styles.ContainerCard}>
                <Text style={styles.Title}>problemas de saúde</Text>
                <View style={styles.ContainerInput}>
                    <Image style={styles.ContainerImgInput}/>
                    <TextInput style={styles.Input} placeholder="Problemas De Saúde"/>
                </View>
                <View style={styles.ContainerCars}>
                    <View style={styles.Cards}>
                        <Text style={styles.Card_text}>conjutivite</Text> 
                        <Text style={styles.Card_close}>X</Text> 
                    </View>
                    <View style={styles.Cards}>
                        <Text style={styles.Card_text}>asma</Text> 
                        <Text style={styles.Card_close}>X</Text> 
                    </View>
                </View>
                <View style={styles.ContainerBtn}>
                    <View style={styles.Btn}><Text style={styles.Card_text}>ok</Text></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    ContainerCard:{
        height: 300,
        width: '90%',
        backgroundColor: '#1E1f21',
        borderRadius: 5,
        padding: 10,
        paddingTop: 20,
        overflow: 'hidden',
    },
    Title:{
        height: 'auto',
        width: '100%',
        color: '#E33336',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
    },
    ContainerInput:{
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    ContainerImgInput:{
        height: 50,
        width: 50,
        backgroundColor: '#E33336',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    Input:{
        height: 50,
        width: 260,
        backgroundColor: '#fff',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        paddingLeft: 10,
        fontSize: 16,
        color: '#292929',
    },
    ContainerCars:{
        height: 'auto',
        width: '100%', 
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 70,
    },
    Cards:{
        height: 'auto',
        width: 'auto',
        backgroundColor: '#E33336',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    Card_text:{
        fontSize: 17,
        color: '#fff',
        marginRight: 10,
        textTransform: 'capitalize',
    },
    Card_close:{
        height: 25,
        width: 25,
        fontSize: 16,
        color: '#E33336',
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,.9)',
        paddingLeft: 7,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2,
        fontWeight: 'bold',
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
        height: 50,
        width: 100,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#E33336',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
})


export default HealthProblem;