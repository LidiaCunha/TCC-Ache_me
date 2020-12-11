import React from "react";
import styled from "styled-components/native";
import Seta from '../../assets/setaVoltar.png';
import {api} from "../../services/api"
import moment from 'moment';

const ModalDenuncia = ({displayNone}) => {
    
    const [myPosts, setMyPosts] = React.useState([]);

	React.useEffect(( ) => {
		(async()=>{
			const res = await api.get('posts/my');
			setMyPosts(res.data);
		})();
	},[]);
    
    return(
        <Container>
        
            <ContainerBack onTouchStart={()=> displayNone(false)}>
                <Back source={Seta} />
            </ContainerBack>
        
            <TextAviso>Todas as postagens serão imediatamente excluídas assim que alcançado o limite de 
            <Red> 5 denúncias.</Red>
            </TextAviso>
        
            <Container_card_denuncia>

                {
                    myPosts.map && myPosts.map(post => {

                        return (post.complaint !== null && post.complaint > 0) && (
                            <Card_denuncia>
                                <Btn_denuncia>{post.complaint}</Btn_denuncia>
                                <Text_denuncia>Você possui denúncias na postagem do dia</Text_denuncia>
                                <Data_denuncia>{moment(post.createdAt).format('LLL')}</Data_denuncia>
                            </Card_denuncia>
                        );

                    })
                }
        </Container_card_denuncia>
        
            <Space/>
        </Container>
    )
}

export const Container = styled.ScrollView`
    height: 100%;
    width: 100%;
    background: #292929;
    padding-top: 24px;
    padding-bottom: 30px;
    z-index:999;
    position:absolute;
`;

export const ContainerBack = styled.View`
    height: 50px;
    width: 100%;
    marginBottom: 10px;
    padding: 10px;
    paddingTop: 15px;
`;

export const Back = styled.Image`
    height: 30px;
    width: 30px;
`;

export const TextAviso = styled.Text`
    height: auto;
    width: 100%;
    font-size: 16px;
    color: #fff;
    text-align: center;
    padding: 5px;
`;

export const Red = styled.Text`
    height: auto;
    width: auto;
    font-size: 16px;
    color: #E64F4A;
    font-weight: bold;
`;

export const Container_card_denuncia = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    padding: 10px;
    flex-direction: row;
`;

export const Card_denuncia = styled.View`
    height: 200px;
    width: 150px;
    background: #fff;
    borderRadius: 10px;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
    padding: 10px;
    flex-direction: column;
`;

export const Btn_denuncia = styled.Text`
    height: 45px;
    width: 45px;
    background: #E64F4A;
    borderRadius: 50px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    padding-top: 10px;
    marginBottom: 20px;
    text-align: center;
`;

export const Text_denuncia = styled.Text`
    height: auto;
    width: 100%;
    font-size: 14px;
    color: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    marginBottom: 10px;
`;

export const Data_denuncia = styled.Text`
    height: auto;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    color: #292929;
    text-align: center;
`;

export const Space = styled.View`
    height: 25px;
    width: 100%;
`;

export default ModalDenuncia;