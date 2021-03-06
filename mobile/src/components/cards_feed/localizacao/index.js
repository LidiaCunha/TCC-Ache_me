import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';

const Data = () => { 
  return (
      <ScrollView style={styles.container}>
            <View style={styles.contianerCard}>
                
                <View style={styles.header}>
                    <Text style={styles.title}>localização</Text>
                </View>
      
      
                <View style={styles.conteudo}>
                    <Text style={styles.textInput}>CEP (Opcional)</Text>
                    <TextInput style={styles.input} placeholder="Insira seu CEP" placeholderTextColor="rgba(255,255,255, 0.5)"/>
      
                    <Text style={styles.textInput}>Rua</Text>
                    <TextInput style={styles.input} placeholder="Insira sua rua" placeholderTextColor="rgba(255,255,255, 0.5)"/>
      
                    <Text style={styles.textInput}>Bairro</Text>
                    <TextInput style={styles.input} placeholder="Insira seu bairro" placeholderTextColor="rgba(255,255,255, 0.5)"/>
      
                    <Text style={styles.textInput}>Cidade</Text>
                    <TextInput style={styles.input} placeholder="Insira sua cidade" placeholderTextColor="rgba(255,255,255, 0.5)"/>
                        
                    <View style={styles.ContainerEstadoNumero}>
                        <View style={styles.ContainerColumn}>
                            <Text style={[styles.textInput, {paddingLeft: 10, marginBottom: 15, marginTop: 20}]}>Estado</Text>
                            <TextInput style={styles.input} placeholder="Insira seu estado" placeholderTextColor="rgba(255,255,255, 0.5)"/>  
                        </View>    
    
                        <View style={styles.ContainerColumn}>
                            <Text style={[styles.textInput, {paddingLeft: 10}]}>Número (Opcional)</Text>
                            <TextInput style={styles.input} placeholder="Insira seu número" placeholderTextColor="rgba(255,255,255, 0.5)"/>  
                        </View>   
                        
                       
                    </View>    
                </View>
      
      
                <View style={styles.containerBtn}>
                    <View style={styles.btnConfirmar}>
                        <Text style={styles.textBtn}>Confirmar</Text>
                    </View> 
                </View>
      
            </View>
      </ScrollView>  
 );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingLeft: 30,
        paddingTop: 20,
        paddingBottom: 20,
        
    },
    
    contianerCard: {
        height: 'auto',
        width: '90%',
        backgroundColor: "#292929",
        marginBottom: 20,
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
        marginBottom: 10
    },
    
    textInput: {
        width: '100%',
        color: '#fff',
        fontSize: 18,
        marginBottom: 15,
        paddingLeft: 20
    },
    
    ContainerEstadoNumero: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    
    ContainerColumn: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
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