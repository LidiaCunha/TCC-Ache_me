import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native'

import React, {useEffect, useState} from 'react'

const HealthProblem = () => {

    const [problems , setProblems] = useState([]);

    const [item, setItem] = useState({
        problem:"",
        feature: "",
    });

    const handlerProblems = (e) => {
        setProblems({...problems, problems : e });
        setItem({...item, problem:""});
    };

    const handlerItem = (e) => {
        setItem({ ...item , item : e});
    };

    return(
        <View style={styles.Container}>
            <View style={styles.ContainerCard}>
                <Text style={styles.Title}>problemas de saúde</Text>
                <View style={styles.ContainerInput}>
                    <Image style={styles.ContainerImgInput}/>
                    <TextInput 
                        style={styles.Input} 
                        placeholder="Problemas De Saúde"
                        onChange={handlerItem}/>
                    <TouchableOpacity 
                        style={styles.Enter}
                        onPress={handlerProblems}/>
                </View>
                <View style={styles.ContainerCars}>
                    {useEffect=( problems.map( problem => <View item={problem} style={styles.Cards}/> ))}
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
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    ContainerImgInput:{
        height: 50,
        width: 50,
        backgroundColor: '#E33336',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    Enter:{
        height: 50,
        width: 50,
        backgroundColor: '#E33336',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
    },
    Input:{
        height: 50,
        width: 200,
        backgroundColor: '#fff',
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