import React from 'react';
import styled from "styled-components/native";

const Card_erro = () => {
    return(
        <Container>
            <ContainerCard>
        
                <ContainerText>
                    <Text><Name>Everson Silva de Almeida </Name><Text>Você não possui nenhuma denúncia até o momento.</Text></Text>
                </ContainerText>
        
                <ContainerBtn>
                    <Btn_close>X</Btn_close>
                </ContainerBtn>
                
                <ContianerOk><Ok>OK</Ok></ContianerOk>
        
            </ContainerCard>
        </Container>
    );
}

export const Container = styled.View`
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const ContainerCard = styled.View`
    height: auto;
    width: 90%;
    background: #292929;
    borderRadius: 5px;
    padding: 30px;
`;

export const ContainerText = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    marginBottom: 20px; 
`;

export const Name = styled.Text`
    height: auto;
    width: auto;
    color: #EF5245;
    font-size: 16px;
`;

export const Text = styled.Text`
    height: auto;
    width: auto;
    color: #fff;
    font-size: 16px;
    text-align: center;
`;

export const ContainerBtn = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    marginBottom: 10px;
`;

export const Btn_close = styled.Text`
    height: 50px;
    width: 50px;
    background: #EF5245;
    borderRadius: 50px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding-top: 10px;
    
`;

export const ContianerOk = styled.View`
    height: auto;
    width: 100%;
    background: #292929;
    borderRadius: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: center;
`;

export const Ok = styled.Text`
    height: auto;
    width: auto;
    color: #EF5245;
    font-size: 16px;
    padding-right: 10px;
    font-weight: bold;
`;


export default Card_erro;
