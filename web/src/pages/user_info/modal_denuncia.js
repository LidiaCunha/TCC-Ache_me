import React from "react";
import styled from "styled-components";

const ModalDenuncia = () => {
    return(
        <Container>
            <ContainerCard>
                <Container_btn_fechar>
                    <Btn_fechar>X</Btn_fechar>
                </Container_btn_fechar>
        
                <Container_card_denuncia>
                    <Card_denuncia>
                        <Btn_denuncia>1</Btn_denuncia>
                        <Text_denuncia>Você possui denúncias na postagem do dia</Text_denuncia>
                        <Data_denuncia>17 de novembro de 2020.</Data_denuncia>
                    </Card_denuncia>
        
                    <Card_denuncia>
                        <Btn_denuncia>3</Btn_denuncia>
                        <Text_denuncia>Você possui denúncias na postagem do dia</Text_denuncia>
                        <Data_denuncia>17 de novembro de 2020.</Data_denuncia>
                    </Card_denuncia>
        
                    <Card_denuncia>
                        <Btn_denuncia>4</Btn_denuncia>
                        <Text_denuncia>Você possui denúncias na postagem do dia</Text_denuncia>
                        <Data_denuncia>17 de novembro de 2020.</Data_denuncia>
                    </Card_denuncia>
                </Container_card_denuncia>
        
        <Container_card_denuncia>
                    <Card_denuncia>
                        <Btn_denuncia>1</Btn_denuncia>
                        <Text_denuncia>Você possui denúncias na postagem do dia</Text_denuncia>
                        <Data_denuncia>17 de novembro de 2020.</Data_denuncia>
                    </Card_denuncia>
        
                    <Card_denuncia>
                        <Btn_denuncia>3</Btn_denuncia>
                        <Text_denuncia>Você possui denúncias na postagem do dia</Text_denuncia>
                        <Data_denuncia>17 de novembro de 2020.</Data_denuncia>
                    </Card_denuncia>
        
                    <Card_denuncia>
                        <Btn_denuncia>4</Btn_denuncia>
                        <Text_denuncia>Você possui denúncias na postagem do dia</Text_denuncia>
                        <Data_denuncia>17 de novembro de 2020.</Data_denuncia>
                    </Card_denuncia>
                </Container_card_denuncia>
            </ContainerCard>
        </Container>
    )
}

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    @media(max-width: 780px){
        overflow: hidden;
    }
`;

export const ContainerCard = styled.div`
    height: 350px;
    width: 700px;
    background: #fff;
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: auto;

    @media(max-width: 780px){
        height: 350px;
        width: 95%;
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
    padding: 20px;
    padding-bottom: 0;
    box-sizing: border-box;
    margin-bottom: 20px;

    @media(max-width: 780px){
        margin-bottom: 15px;
    }
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
    paddin-top: 5px;
    box-sizing: border-box;
`;

// card de denuncia
export const Container_card_denuncia = styled.div`
    height: auto;
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    padding: 20px;

    @media(max-width: 780px){
            padding: 15px;

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
    
    @media(max-width: 780px){
        min-height: 50px;
        height: auto;
        width: 150px;
    }

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
    paddin-top: 5px;
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

export default ModalDenuncia;