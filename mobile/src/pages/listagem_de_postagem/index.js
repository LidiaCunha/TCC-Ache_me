import React, { useEffect, useState } from 'react';
import Seta from '../../assets/setaVoltar.png';
import { api } from '../../services/api';
import { Container, ContainerBack, Back } from './styles';
import CardPost from '../../components/CardPost';
import { Text, StyleSheet } from 'react-native';

const Listagem_de_postagem = ({navigation}) => {

    const [posts , setPosts] = useState([]);

    useEffect(()=>{
        (   async( ) => {
                const response = await api.get('/posts/my')
                console.log(response.data)
                setPosts(response.data)
            }
        )();
    },[])

    function ShowPost(){
        if (posts.length != 0) {
            return (
                <>
                    {
                        posts !== undefined && 
                        posts.map !== undefined && 
                        posts.map( post => <CardPost post={post} navigation={navigation} /> )
                    }
                </>
            )
        }else{
            return(
                <Text style={styles.message}>Você não possui postagens.</Text>
            )
        }
    }

    return(
        <Container>
            <ShowPost/>
           
            {/* {      
                posts !== undefined && 
                posts.map !== undefined && 
                posts.map( post => <CardPost post={post} navigation={navigation} /> )
            } */}
            
        </Container>
    );
}

const styles = StyleSheet.create({
    message:{
        height: 'auto',
        width: '100%',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
    }
})

export default Listagem_de_postagem;
