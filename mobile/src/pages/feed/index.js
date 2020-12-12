import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import { Fontisto, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import Logo from '../../assets/logo.png';
import FemaleMale from '../../assets/feed/female_and_male.png';
import Cabelo from '../../assets/feed/cabelo.png';
import Card from '../../assets/feed/card.png';
import Calendar from '../../assets/feed/calendar.png';

const Feed = () => {
    return(
        <ScrollView style={styles.container}>
        
            <View style={styles.header}>
                <Text style={styles.Acheme}>Ache.me</Text>
                <Image source={Logo} style={styles.Logo}/>
            </View>
        
            <View style={styles.containerImg}>
                <View style={styles.itensContainerImg, styles.layer1 }>
                    <Text style={styles.filtroBuscar}>FILTROS DE BUSCA</Text>
                    <Text style={styles.buscar}>Buscar</Text>
                </View>
        
                <ScrollView style={styles.itensContainerImg, styles.layer2} horizontal={true}>
                    <View style={styles.cardFiltros}>
                        <View style={ styles.containerImgFiltro }>
                            <Fontisto name="map-marker-alt" color="#000" size={24}/>
                        </View>
                        <Text style={styles.textFiltro}>localização</Text>
                    </View>
        
                    <View style={styles.cardFiltros}>
                        <View style={ styles.containerImgFiltro }>
                            <FontAwesome name="heartbeat" color="#000" size={24}/>
                        </View>
                        <Text style={styles.textFiltro}>saúde</Text>
                    </View>
        
                    <View style={styles.cardFiltros}>
                        <View style={ styles.containerImgFiltro }>
                            <Image source={ FemaleMale } style={{height: 24, width: 24}}/>
                        </View>
                        <Text style={styles.textFiltro}>gênero</Text>
                    </View>
        
                    <View style={styles.cardFiltros}>
                        <View style={ styles.containerImgFiltro }>
                            <Image source={ Card } style={{height: 26, width: 26}}/>
                        </View>
                        <Text style={styles.textFiltro}>data</Text>
                    </View>
        
                    <View style={styles.cardFiltros}>
                        <View style={ styles.containerImgFiltro }>
                            <Image source={ Calendar } style={{height: 24, width: 24}}/>
                        </View>
                        <Text style={styles.textFiltro}>nascimento</Text>
                    </View>
        
                    <View style={styles.cardFiltros}>
                        <View style={ styles.containerImgFiltro }>
                            <MaterialCommunityIcons name="clock" color="#000" size={28}/>
                        </View>
                        <Text style={styles.textFiltro}>horário</Text>
                    </View>
        
                    <View style={styles.cardFiltros}>
                        <View style={ styles.containerImgFiltro }>
                            <Image source={ Cabelo } style={{height: 24, width: 24}}/>
                        </View>
                        <Text style={styles.textFiltro}>características</Text>
                    </View>
        
                </ScrollView>
            </View>
        
            <View style={styles.contianerSuasAcoes}>
                <Text style={styles.textSuasAcoes}>SUAS AÇÕES</Text>
        
                <View style={[styles.layer2, { justifyContent: 'space-around' }]}>
                    <View style={[styles.cardsSuasAcoes, {backgroundColor: '#f95e62'}]}>
                        <FontAwesome name='share-alt' color='#fff' size={28} style={{marginBottom: 10}}/>
                        <Text style={styles.textCardSuasAcoes}>Fazer</Text>
                        <Text style={styles.textCardSuasAcoes}>publicações</Text>
                    </View>
        
                    <View style={[styles.cardsSuasAcoes, {backgroundColor: '#f53b40'}]}>
                        <MaterialCommunityIcons name='alert' color='#fff' size={28} style={{marginBottom: 10}}/>
                        <Text style={styles.textCardSuasAcoes}>Ver</Text>
                        <Text style={styles.textCardSuasAcoes}>denúncias</Text>
                    </View>
        
                    <View style={[styles.cardsSuasAcoes, {backgroundColor: '#e33336'}]}>
                        <FontAwesome name='share' color='#fff' size={28} style={{marginBottom: 10}}/>
                        <Text style={styles.textCardSuasAcoes}>Ver minhas</Text>
                        <Text style={styles.textCardSuasAcoes}>publicações</Text>
                    </View>
                </View>
            </View>
        
            <View style={styles.containerCarregarPostagem}>
                <View style={styles.cardPostagem}></View>
            </View>
        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
       height: '100%',
       width: '100%',
       backgroundColor: '#14f7b3'
    },
    
    header: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#1e1f21',
        paddingTop: 25,
        paddingBottom: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderColor: '#fff',
        borderStyle: 'solid',
    },
    
    Acheme: {
        color: '#fff',
        fontSize: 25,
        marginRight: 15,
    },
    
    Logo: {
        height: 30,
        width: 30,
    },
    
    // container img
    containerImg: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#1e1f21',
        paddingBottom: 20,
        borderBottomWidth: 0.2,
        borderColor: '#fff',
        borderStyle: 'solid',
    },
    
    itensContainerImg: {
        height: 'auto',
        width: '100%',
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row', 
    },
    
    layer1: {
        height: 'auto',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
    },
    
    layer2: {
        height: 'auto',
        width: 'auto',
        flexDirection: 'row', 
        alignContent: 'center',
        marginBottom: 10,
    },
    
    filtroBuscar: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    buscar: {
        color: '#E94C45',
        fontSize: 18,
    },
    
    containerImgFiltro: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#F0564E',
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    
    cardFiltros: {
        height: 'auto',
        width: 'auto',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        marginRight: 25,
        marginLeft: 10,
    },
    
    textFiltro: {
        color: '#fff',
        fontSize: 13,
        textTransform: 'capitalize',
    },
    
    // suas ações
    contianerSuasAcoes: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#1e1f21',
        borderBottomWidth: 0.2,
        borderColor: '#fff',
        borderStyle: 'solid',
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
    }, 
    
    textSuasAcoes: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    
    cardsSuasAcoes: {
        height: 105,
        width: 105,
        borderRadius: 5,
        padding: 10,
        paddingTop: 15,
    },
    
    textCardSuasAcoes: {
        color: '#fff',
        fontSize: 14,
    },
    
    // container postagens
    containerCarregarPostagem: {
        height: 500,
        width: '100%',
        backgroundColor: '#1e1f21',
        padding: 15,
    },
    
    cardPostagem: {
        height: 'auto',
        width: '100%',
        borderWidth: 1,
        borderColor: '#6e6f71',
        borderStyle: 'solid',
        marginBottom: 20
    }
});

export default Feed;