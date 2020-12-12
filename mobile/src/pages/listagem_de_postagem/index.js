import React, { useEffect, useState } from 'react';
import Seta from '../../assets/setaVoltar.png';
import { api } from '../../services/api';
import { Container, ContainerBack, Back } from './styles';
import CardPost from '../../components/CardPost';

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

    return(
        <Container>
           
	    { posts !== undefined && posts.map !== undefined && 
                posts.map( post => <CardPost post={post} navigation={navigation} /> )
            }
            
        </Container>
    );
}

export default Listagem_de_postagem;
