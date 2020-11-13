import React from 'react';
import styled from "styled-components/native";

const Modal_problemas_de_saude = () => {
    return(
        <>
           <Container>
                <ContainerCard>
                    <Title>problemas de saúde</Title>

                    <ContainerInput>
                        <ContainerImgInput>
                        </ContainerImgInput>

                        <Input placeholder="Problemas De Saúde"/>
                    </ContainerInput>

                   <ContainerCars>
                       <Cards>
                           <Card_text>conjutivite</Card_text> 
                           <Card_close>X</Card_close> 
                        </Cards>
                        <Cards>
                           <Card_text>asma</Card_text> 
                           <Card_close>X</Card_close> 
                        </Cards>
                   </ContainerCars>

                   <ContainerBtn>
                       <Btn><Card_text>ok</Card_text></Btn>
                   </ContainerBtn>

                </ContainerCard>
           </Container>
        </>
    );
}

export default Modal_problemas_de_saude;

export const Container = styled.View`
    height: 100%;
    width: 100%;
    paddingTop: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
`;

export const ContainerCard = styled.View`
    height: 300px;
    width: 90%;
    background: #1E1f21;
    borderRadius: 5px;
    padding: 10px;
    paddingTop: 20px;
    overflow: hidden;
`;

export const Title = styled.Text`
    height: auto;
    width: 100%;
    color: #E33336;
    font-size: 16px;
    text-transform: uppercase;
    font-family: arial;
    font-weight: bold;
    margin-left: 15px;
    marginBottom: 10px;
`;

export const ContainerInput = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
    marginBottom: 20px;

`;

export const ContainerImgInput = styled.Image`
    height: 50px;
    width: 50px;
    background: #E33336;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 260px;
    background: #fff;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    padding-left: 10px;
    font-size: 16px;
    color: #292929; 
`;

export const ContainerCars = styled.View`
    height: auto;
    width: 100%; 
    display: flex;
    flex-direction: row;
    marginBottom: 70px;
`;

export const Cards = styled.View`
    height: auto;
    width: auto;
    background: #E33336;
    padding-left: 25px;
    padding-right: 25px;
    paddingTop: 10px;
    paddingBottom: 10px;
    borderRadius: 5px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
`;

export const Card_text = styled.Text`
    font-size: 17px;
    color: #fff;
    margin-right: 10px;
    text-transform: capitalize;
`;

export const Card_close = styled.Text`
    height: 25px;
    width: 25px;
    font-size: 16px;
    color: #E33336;
    borderRadius: 50px;
    background: rgba(255,255,255,.9);
    font-family: arial;
    padding-left: 7px;
    padding-right: 2px;
    paddingTop: 2px;
    paddingBottom: 2px;
    font-weight: bold;
`;

export const ContainerBtn = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    flex-direction: row;
`;

export const Btn = styled.View`
    height: 50px;
    width: 100px;
    padding-left: 10px;
    padding-right: 10px;
    background: #E33336;
    borderRadius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
`;