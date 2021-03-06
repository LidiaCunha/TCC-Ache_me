import React from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Genero = () => { 
    
    var radio_props = [
        {label: 'Masculino', value: 'Masculino' },
        {label: 'Feminino', value: 'Feminino' },
        {label: 'Outro', value: 'LGBT' }
    ];
    
  return (
      <View style={styles.container}>
            <View style={styles.contianerCard}>
                
                <View style={styles.header}>
                    <Text style={styles.title}>Gênero</Text>
                </View>
      
      
                <View style={styles.conteudo}>
                    <RadioForm
                        radio_props={radio_props}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#999'}
                        selectedButtonColor={'#E33336'}
                        labelStyle={{fontSize: 15, color: '#999', marginRight:10}}
                        selectedLabelColor={'#E33336'}
                        animation={true}
                        onPress={(value) => setPost({...post , name_of_genre : value})}
                        />
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
    
    containerInputs: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    
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
        padding: 10,
    },
    
    title: {
        color: '#EF5245',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    conteudo: {
        height: 'auto',
        width: '100%',
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
    },
                                 
});


export default Genero; 