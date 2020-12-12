import React from "react";
import styled from "styled-components";
import Popup from "../../components/PopUp";
import {getUsers} from "../../services/security";
import {api} from "../../services/api"
import moment from 'moment';

const ModalDenuncia = ({setShowDenunciations}) => {

    const [myPosts, setMyPosts] = React.useState([]);
    
    const users = getUsers();

	React.useEffect(( ) => {
		(async()=>{
			const res = await api.get('posts/my');
			setMyPosts(res.data);
		})();
    },[]);
    
    function Item({ post}){

        return (post.complaint !== null && post.complaint > 0) && (
            <Card_denuncia>
                <Btn_denuncia>{post.complaint}</Btn_denuncia>
                <Text_denuncia>Você possui denúncias na postagem do dia</Text_denuncia>
                <Data_denuncia>{moment(post.createdAt).format('LLL')}</Data_denuncia>
            </Card_denuncia>
        );
    }

    function NoDenun(){
        return (
            <Aviso>
                <Name>{users.name}</Name>
                <Text_aviso>Você não possui nenhuma denúncia até o momento.</Text_aviso> 
            </Aviso>
        )
    }

return(
    <Popup>
        <ContainerCard>
            <Container_btn_fechar onClick={()=>{setShowDenunciations(false)}}>
                <Btn_fechar>X</Btn_fechar>
            </Container_btn_fechar>
    
            <Container_card_denuncia>
		        {myPosts.length != 0 ? myPosts.map && myPosts.map( post => <Item key={post} item={post}/>) : <NoDenun/>}
	        </Container_card_denuncia>
        </ContainerCard>
    </Popup>
)}

export const ContainerCard = styled.div`
    height: 450px;
    width: 700px;
    display:grid;
    grid-template-rows: 55px 395px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 25px;

    @media(max-width: 780px){
        height: 350px;
        width: 100%;
        border-radius: 5px;
    }
    
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

// card de denuncia
export const Container_card_denuncia = styled.div`
    height: auto;
    width: 95%;
    display: grid;
    grid-row-gap: 10px;
    grid-template-columns: auto auto auto auto;
    padding: 20px;
    overflow:auto;
    justify-content: center;

    @media(max-width: 780px){
        padding: 15px;
        grid-template-columns: auto auto;
    }

    ::-webkit-scrollbar {
        width: 10px
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    ::-webkit-scrollbar-track {
        background: #dddddd;
    }
`;

export const Card_denuncia = styled.div`
    height: 180px;
    width: 150px;
    border: 2px solid rgba(0,0,0,.4);
    border-radius: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    flex-direction: column;
    margin-bottom: 5px;
`;

export const Btn_denuncia = styled.p`
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
    padding-top: 5px;
    box-sizing: border-box;
    margin-bottom: 20px;
`;

export const Text_denuncia = styled.p`
    height: auto;
    width: 100%;
    font-size: 14px;
    font-family: arial;
    color: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;

`;

export const Data_denuncia = styled.p`
    height: auto;
    width: 100%;
    font-size: 14px;
    font-family: arial;
    font-weight: bold;
    color: #292929;
    text-align: center;
`;

export const Aviso = styled.div`
    height: 100px;
    width: 300px;
    align-self: center;
    display:flex;
    flex-direction: column;
    margin: auto;
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

export default ModalDenuncia;
