import React,{useState, useEffect} from 'react';
import { Fontisto, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Logo from '../../assets/logo.png';
import FemaleMale from '../../assets/feed/female_and_male.png';
import Cabelo from '../../assets/feed/cabelo.png';
import Card from '../../assets/feed/card.png';
import Calendar from '../../assets/feed/calendar.png';

import { api } from '../../services/api'
import { useAuth } from "../../contexts/auth";
import Post from "../../components/Post";

import {
    Alert,
    Modal,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
  } from "react-native";

const Feed = ({navigation}) => {

    const {user, logout} = useAuth();

    const [posts, setPosts] = useState([]);

    const [myPosts, setMyPosts] = React.useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    const [message, setMessage] = useState();

    useEffect(()=>{
        const getPosts = async( ) => {
            const response = await api.get('/seen',{headers: { 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwMDk2MDU1MX0.MpwR-_xf4DxVJ5moCm0NWFnHSW08FGMJE-hfaRfqWxw'
                }});
            setPosts(response.data)
    
            const res = await api.get('/posts/my');
            
            setMyPosts(res.data);
        }

        getPosts()
    }, [])
    
  
    function createPost() {
        navigation.navigate('createpost');
    }

    const Denunciation = async() =>{ 

        if (myPosts.complaint != undefined) {
            navigation.navigate('denunciations')
            
        }else{
            setModalVisible(true)
            setMessage("denúncia")
        }
    }

    const MyPosts = async() =>{ 

        if (myPosts.length != 0) {
            navigation.navigate('MyPosts')

        }else{
            setModalVisible(true)
            setMessage("postagem")
        }
    }

    return(
        <View style={styles.container}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{user?.name}</Text>
                        <Text style={styles.message}>Você não possui nenhuma {message} até o memento.</Text>

                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#EF5245" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <AntDesign name="close" size={30} color="white" />
                        </TouchableHighlight>
                    </View>
                </View>
                
            </Modal>
        
            <View style={styles.header}>
                <Text style={styles.Acheme}>Ache.me</Text>
                <Image source={Logo} style={styles.Logo}/>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.containerImg}>
                    <View style={styles.itensContainerImg, styles.layer1 }>
                        <Text style={styles.filtroBuscar}>FILTROS DE BUSCA</Text>
                        <Text style={styles.buscar}>Buscar</Text>
                    </View>
            
                    <ScrollView style={styles.itensContainerImg, styles.layer2} horizontal={true}>
                        <View style={styles.cardFiltros}>
                            <View style={ styles.containerImgFiltro }>
                                <Fontisto name="map-marker-alt" color="#000" size={28}/>
                            </View>
                            <Text style={styles.textFiltro}>localização</Text>
                        </View>
            
                        <View style={styles.cardFiltros}>
                            <View style={ styles.containerImgFiltro }>
                                <FontAwesome name="heartbeat" color="#000" size={28}/>
                            </View>
                            <Text style={styles.textFiltro}>saúde</Text>
                        </View>
            
                        <View style={styles.cardFiltros}>
                            <View style={ styles.containerImgFiltro }>
                                <Image source={ FemaleMale } style={{height: 28, width: 28}}/>
                            </View>
                            <Text style={styles.textFiltro}>gênero</Text>
                        </View>
            
                        <View style={styles.cardFiltros}>
                            <View style={ styles.containerImgFiltro }>
                                <Image source={ Card } style={{height: 28, width: 28}}/>
                            </View>
                            <Text style={styles.textFiltro}>data</Text>
                        </View>
            
                        <View style={styles.cardFiltros}>
                            <View style={ styles.containerImgFiltro }>
                                <Image source={ Calendar } style={{height: 26, width: 26}}/>
                            </View>
                            <Text style={styles.textFiltro}>nascimento</Text>
                        </View>
            
                        <View style={styles.cardFiltros}>
                            <View style={ styles.containerImgFiltro }>
                                <MaterialCommunityIcons name="clock" color="#000" size={34}/>
                            </View>
                            <Text style={styles.textFiltro}>horário</Text>
                        </View>
            
                        <View style={styles.cardFiltros}>
                            <View style={ styles.containerImgFiltro }>
                                <Image source={ Cabelo } style={{height: 32, width: 32}}/>
                            </View>
                            <Text style={styles.textFiltro}>características</Text>
                        </View>
            
                    </ScrollView>
                </View>
            
                <View style={styles.contianerSuasAcoes}>
                    <Text style={styles.textSuasAcoes}>SUAS AÇÕES</Text>
            
                    <View style={[styles.layer2, { justifyContent: 'space-around' }]}>
                        <View onTouchStart={createPost} style={[styles.cardsSuasAcoes, {backgroundColor: '#f95e62'}]}>
                            <FontAwesome name='share-alt' color='#fff' size={28} style={{marginBottom: 10}}/>
                            <Text style={styles.textCardSuasAcoes}>Fazer</Text>
                            <Text style={styles.textCardSuasAcoes}>publicações</Text>
                        </View>
            
                        <View onTouchStart={Denunciation} style={[styles.cardsSuasAcoes, {backgroundColor: '#f53b40'}]}>
                            <MaterialCommunityIcons name='alert' color='#fff' size={28} style={{marginBottom: 10}}/>
                            <Text style={styles.textCardSuasAcoes}>Ver</Text>
                            <Text style={styles.textCardSuasAcoes}>denúncias</Text>
                        </View>
            
                        <View onTouchStart={MyPosts} style={[styles.cardsSuasAcoes, {backgroundColor: '#e33336'}]}>
                            <FontAwesome name='share' color='#fff' size={28} style={{marginBottom: 10}}/>
                            <Text style={styles.textCardSuasAcoes}>Ver minhas</Text>
                            <Text style={styles.textCardSuasAcoes}>publicações</Text>
                        </View>
                    </View>
                </View>
            
                {/* <View style={styles.containerCarregarPostagem}> */}
                    {posts !== undefined && posts.map !== undefined &&
                        posts.map(post => <View style={styles.cardPostagem}><Post seen={post} /></View>)
                    }
                {/* </View> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000000AA'
    },
    modalView: {
        width:'90%',
        height: 'auto',
        backgroundColor: "#1E1f21",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        width: 50,
        height: 50,
        backgroundColor: "#F194FF",
        borderRadius: 50/2,
        marginTop: 10,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        height: 'auto',
        width: "100%",
        fontSize: 18,
        color: "#EF5245",
        textAlign: "center",
        padding: 5,
    },
    message: {
        height: 'auto',
        width: "100%",
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        padding: 5,
    },

    container: {
       height: '100%',
       width: '100%',
       display: 'flex',
       flexDirection: 'column',
       overflow:'hidden',
       backgroundColor: '#1b1b1b'
    },
    
    header: {
        height: '100%',
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

    content:{
        height: '100%',
        width: '100%',
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
        marginBottom: 20
    },
    
    
});

export default Feed;
