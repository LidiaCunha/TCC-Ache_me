import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';

import React, {useEffect, useState} from 'react'

const HealthProblem = () => {
    useEffect(()=> {
        const getData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('@health_problems')
              if (jsonValue != null) {
                return setProblems(JSON.parse(jsonValue));
              }
            } catch(e) {
              // error reading value
            }
        }

        getData()
    }, [])

    const [problems , setProblems] = useState([]);

    const [item, setItem] = useState({
        problem:"",
    });

    const handlerProblems = (e) => {
        setProblems([...problems, e ]);
        setItem({...item, problem:""});
    };

    const handlerItem = (e) => {
        setItem({ ...item , problem : e});
    };

    function Item({ item}){

        const deleteItem = () => {
            setProblems( problems.filter(( problem ) => problem !== item ) );
        };

        return (
            <View style={styles.Cards}>
                <Text style={styles.Card_text}>{item}</Text>
                <Icon style={styles.Delete_icon} name="x" color="red" size={20} onPress={deleteItem}/>
            </View>
        );
    }

    const storeData = async () => {
        
        try {
          const jsonValue = JSON.stringify(problems)
          await AsyncStorage.setItem('@health_problems', jsonValue)
          console.log("success")
        } catch (e) {
          window.alert("erro!")
        }
    }

    return(
        <View style={styles.Container}>
            <View style={styles.ContainerCard}>
                <Text style={styles.Title}>problemas de saúde</Text>
                <View style={styles.ContainerInput}>
                    <Image style={styles.ContainerImgInput}/>
                    <TextInput 
                        style={styles.Input} 
                        placeholder="Problemas De Saúde"
                        onChangeText={handlerItem}
                        value={item.problem}
                        returnKeyType = {"next"}
                        onSubmitEditing={()=>{handlerProblems(item.problem)}}/>
                </View>
                <ScrollView style={styles.ContainerCars} horizontal={true}>
                    {problems.map(problem => <Item key={problem} item={problem} />)}
                </ScrollView>
                <View style={styles.ContainerBtn}>
                    <TouchableOpacity  style={styles.Btn} onPress={storeData}><Text style={styles.Card_text}>ok</Text></TouchableOpacity >
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    ContainerImgInput:{
        height: 40,
        width: 50,
        backgroundColor: '#E33336',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    Input:{
        height: 40,
        width: 250,
        backgroundColor: '#fff',
        paddingLeft: 10,
        fontSize: 16,
        color: '#292929',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
    },
    ContainerCars:{
        height: 50,
        width: '100%', 
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 40,
    },
    Cards:{
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
        backgroundColor: '#E33336',
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
    Card_text:{
        fontSize: 17,
        color: '#fff',
        marginRight: 10,
        textTransform: 'capitalize',
    },
    Card_close:{
        height: 25,
        width: 25,
        fontSize: 25,
        lineHeight:25,
        paddingLeft:6,
        color: '#E33336',
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,.9)',
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


export default HealthProblem;