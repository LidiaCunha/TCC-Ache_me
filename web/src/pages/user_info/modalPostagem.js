import React,{useEffect, useState} from "react";
import styled from 'styled-components';
// import { CardPosts, Aviso, Text_aviso, Name,Container_btn_fechar, Btn_fechar, Posts_Container, ContainerPosts, TextoData, TextoPost, Modal, FotoUsuario, TextoNome, AreaFotoNome, VerMais } from "./styles";
import foto from "../../assets/Sobre/everson.jpeg";
import Popup from "../../components/PopUp";

import { api } from "../../services/api";
import {getUsers} from "../../services/security";
import moment from 'moment';

const ModalPostagem = ({setShowModalPost}) => {

    const [posts, setPosts] = useState([]);

    const users = getUsers();

    useEffect(( ) => {
        (   async ( ) => {
                const res = await api.get('/posts/my');
                setPosts(res.data)
            }
        )();
    } , [ ]);

    function Item({post}){
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
    }

    function NoPosts(){
        return (
            <Aviso>
                <Name>{users.name}</Name>
                <Text_aviso>Você não possui nenhum post até o momento.</Text_aviso> 
            </Aviso>
        )
    }

    return (
        <Popup>
            <Modal>
                <Container_btn_fechar onClick={()=>{setShowModalPost(false)}}>
                    <Btn_fechar>X</Btn_fechar>
                </Container_btn_fechar>
                <Posts_Container>
                    { posts?.map !== undefined && posts.map(post => <Item key={post} item={post}/>)}
                </Posts_Container>
            </Modal>
        </Popup>
    )
}

export default ModalPostagem;

export const Modal = styled.div`
    width: 1000px;
    height: 500px;
    border-radius: 20px;
    background-color: #efefef;
    display: grid;
    grid-template-rows: 15% 85%;
    padding: 10px;    
`;

export const Posts_Container = styled.div`

    overflow-y: auto;
    overflow-x: hidden;
    background-color: #efefef;
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 10px;

    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    }
    ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: #ef545e;
    border: 0px none #ef545e;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #ef545e;
    }
    ::-webkit-scrollbar-thumb:active {
    background: #000000;
    }
    ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ef545e;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
    background: #666666;
    }
    ::-webkit-scrollbar-track:active {
    background: #333333;
    }
    ::-webkit-scrollbar-corner {
    background: transparent;
    }
`;

export const Aviso = styled.div`
    height: auto;
    width: auto;
    align-self: center;
    display:flex;
    flex-direction: column;
    margin: auto;
    background-color: green
`;
export const Name = styled.text`
    color: red;
    font-size: 18px;
    font-family: arial;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
`;

export const Text_aviso = styled.text`
    font-size: 16px;
    font-family: arial;
    font-weight: bold;
    text-align: center;
`;

export const Container_btn_fechar = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
`;

export const Btn_fechar = styled.p`
    height: 45px;
    width: 45px;
    background: #E64F4A;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 18px;
    font-family: arial;
    font-weight: bold;
    color: #fff;
    box-sizing: border-box;
    cursor:pointer;
`;

export const ContainerPosts = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;   

export const CardPosts = styled.div`
    width: 350px;
    height: 350px;
    border: solid 2px #777;
    border-radius: 20px;
    margin-bottom: 15px;
    padding: 10px;
`;

export const AreaFotoNome = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
`

export const TextoData = styled.h1`
    color: #1d1d1d;
    font-size: 1.2em;
    text-align: left;
    letter-spacing: 1.4px;
    display: flex;
    align-self: flex-start;
    margin-left: 80px;
    margin-right: auto; 
    margin-bottom: 10px;
    font-family: "Arial";
`;

export const TextoPost = styled.p`
    color: #1d1d1d;
    font-size: 1.1em;
    text-align: left;
    letter-spacing: 1.4px;
    margin-bottom: 15px;
    font-family: "Arial";
`;


export const TextoNome = styled.h1`
    color: #1d1d1d;
    font-weight: bold;
    font-size: 1.18em;
    letter-spacing: 1.4;
    word-wrap: break-word;
    font-family: "Arial";
`

export const FotoUsuario = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-right: 10px;

    >img{
        height: 100%;
        width: 100%;
        border-radius: inherit;
    }
`

export const VerMais = styled.div`
    width: 90%;
    height: 50px;
    background-color: #ef545e;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    >p{
        color: white;
        letter-spacing: 1.4px;
        font-size: 1.1em;
        font-family: "Arial";
    }

    :hover{
        background-color: black;
        cursor: pointer;

        >p{
            color: #ef545e;
        }
    }
`