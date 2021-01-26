import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Data = () => { 
  return (
      <View style={styles.container}>
            <View style={styles.contianerCard}>
                
                <View style={styles.header}>
                    <Text style={styles.title}>problemas de saúde</Text>
                </View>
      
      
                <View style={styles.conteudo}>
                    <TextInput style={styles.input} placeholder="saúde" placeholderTextColor="#fff" keyboardType="string"/>
      
                    <ScrollView style={styles.conteudoCaracteristica} horizontal={true}>
                        <View style={[styles.cardCaracteristica, styles.cor1]}>
                            <Text style={styles.textCaracteristica}>paralizia</Text>
                            <AntDesign name='closecircle' color='#fff' size={30}/>
                        </View>
                    </ScrollView>
                </View>
      
      
                <View style={styles.containerBtn}>
                    <View style={styles.btnConfirmar}>
                        <Text style={styles.textBtn}>Confirmar</Text>
                    </View>
                </View>
      
            </View>
      </View>  
 );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    
    contianerCard: {
        height: 'auto',
        width: '90%',
        backgroundColor: "#292929",
    },
    
    header: {
        height: 50,
        width: '100%',
        padding: 20,
    },
    
    title: {
        color: '#EF5245',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    
    conteudo: {
        height: 'auto',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    
    input: {
        height: 50,
        width: '90%',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6b6b6b',
        color: '#fff',
        paddingLeft: 10,
        borderRadius: 5,
    },
    
    conteudoCaracteristica: {
        height: 'auto',
        width: '100%',
        
        padding: 20,
        
    },
    
    cardCaracteristica: {
        height: 50,
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 20
    },
    
    textCaracteristica: {
        color: '#fff',
        fontSize: 16,
        marginRight: 10,
        textTransform: 'capitalize',
    },

    cor1: {
        backgroundColor: '#E33336',
    },
    
    cor2: {
        backgroundColor: '#F53B3F',
    },
    
    cor3: {
        backgroundColor: '#F95F62',
    },
    
    
    containerBtn: {
        height: 80,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    
    btnConfirmar: {
        height: 50,
        width: 180,
        borderRadius: 5,
        backgroundColor: '#EF5245',
        justifyContent: 'center',
        
    },
    
    textBtn: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }
                                 
});


export default Data; 