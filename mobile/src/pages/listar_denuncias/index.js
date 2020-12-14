import React from "react";
import styled from "styled-components/native";
import Seta from '../../assets/setaVoltar.png';
import {api} from "../../services/api";
import moment from 'moment';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

const ModalDenuncia = ({displayNone}) => {
    
    const [myPosts, setMyPosts] = React.useState([])

	React.useEffect(( ) => {
		(async()=>{
			const res = await api.get('posts/my')
			setMyPosts(res.data)
		})()
    },[])

    function Item({ post}){

        return (post.complaint !== null && post.complaint > 0) && (
            <View style={styles.card_denuncia}>
                <Text style={styles.btn_denuncia}>{post.complaint}</Text>
                <Text style={styles.text_denuncia}>Você possui denúncias na postagem do dia</Text>
                <Text style={styles.data_denuncia}>{moment(post.createdAt).format('LLL')}</Text>
            </View>
        )
    }
    
    return(
        <ScrollView style={styles.container}>
        
            <Text style={styles.text_aviso}>Todas as postagens serão imediatamente excluídas assim que alcançado o limite de 
                <Text style={styles.red}> 5 denúncias.</Text>
            </Text>
        
            <View style={styles.container_card_denuncia}>
                {myPosts.map && myPosts.map(post => <Item key={post} item={post}/>)}
            </View>
        
            <View style={styles.space}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        backgroundColor: '#292929',
        paddingTop: 24,
        paddingBottom: 30,
        zIndex:999,
        position: 'absolute',
    },
    text_aviso:{
        height: 'auto',
        width: '100%',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
    },
    red:{
        height: 'auto',
        width: 'auto',
        fontSize: 16,
        color: '#e64f4a',
        fontWeight: 'bold',
    },
    container_card_denuncia:{
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
    },
    card_denuncia:{
        height: 200,
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'column',    
    },
    btn_denuncia:{
        height: 45,
        width: 45,
        backgroundColor: '#e64f4a',
        borderRadius: 50,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 10,
        marginBottom: 20,
        textAlign: 'center',
    },
    text_denuncia:{
        height: 'auto',
        width: '100%',
        fontSize: 14,
        color: 'rgba(0,0,0,.7)',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,    
    },
    data_denuncia:{
        height: 'auto',
        width: '100%',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#292929',
        textAlign: 'center',
    },
    space:{
        height: 25,
        width: '100%',
    }

})

export default ModalDenuncia;