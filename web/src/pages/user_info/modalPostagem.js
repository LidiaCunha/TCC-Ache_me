import React,{useEffect, useState} from "react";
import { CardPosts, Container, ContainerModal, ContainerPosts, TextoData, TextoPost, Modal, FotoUsuario, TextoNome, AreaFotoNome, VerMais } from "./styles";
import foto from "../../assets/Sobre/everson.jpeg";
import Popup from "../../components/PopUp";

import { api } from "../../services/api";
import moment from 'moment';

const ModalPostagem = () => {

    const [posts, setPosts] = useState([]);

    useEffect(( ) => {
        (   async ( ) => {
                const res = await api.get('/posts/my');
                setPosts(res.data)
            }
        )();
        console.log(posts)
    } , [ ]);

    return (
        <Popup>
            <Modal>
                { posts?.map !== undefined && posts.map(post => {
                    return (
                        <ContainerPosts id={post.id % 2 === 0 ? 'par' : 'impar'}>
                            <TextoData>{ moment(post.createdAt).format('LLL') }</TextoData>
                            <CardPosts>
                                <AreaFotoNome>
                                    <FotoUsuario><img src={post.photo} /></FotoUsuario>
                                    <TextoNome>{post.name}</TextoNome>
                                </AreaFotoNome>
                                <TextoPost>{post.description}</TextoPost>
                                <VerMais><p>Ver Mais</p></VerMais>
                            </CardPosts>
                        </ContainerPosts>
                    );

                })}
            </Modal>
        </Popup>
    )
}

export default ModalPostagem;