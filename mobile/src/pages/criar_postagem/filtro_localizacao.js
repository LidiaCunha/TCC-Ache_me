import React from 'react';
import styled from "styled-components/native";

const Modal_localizacao = () => {
    return(
        <>
           <Container>
                <ContainerCard>
                    
                    <LoremLocal>LOCALIZAÇÃO</LoremLocal>
                    
                    <ContianerIput>
                        <Lorem>CEP (Opcional)</Lorem>
                        <Input/>
                    </ContianerIput>

                    <ContianerIput>
                        <Lorem>Rua</Lorem>
                        <Input/>
                    </ContianerIput>

                    <ContianerIput>
                        <Lorem>Bairro</Lorem>
                        <Input/>
                    </ContianerIput>

                    <ContianerIput>
                        <Lorem>Cidade</Lorem>
                        <Input/>
                    </ContianerIput>

                    <ContianerBubbleIput>
                        <ContianerLoremInput>
                            <LoremDubble>Estado</LoremDubble>
                            <LoremDubble>Número (Opcional)</LoremDubble>
                        </ContianerLoremInput>
                        <ContianerLoremInput>
                            <InputDubble/>
                            <InputDubble/>
                        </ContianerLoremInput>
                    </ContianerBubbleIput>
    
                    <ContainerBtn>
                       <Btn><Card_text>Salvar</Card_text></Btn>
                   </ContainerBtn>
                </ContainerCard>
           </Container>
        </>
    );
}

export const Container = styled.View`
    height: 100%;
    width: 100%;
    paddingTop: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const ContainerCard = styled.View`
    height: auto;
    width: 90%;
    background: #1E1f21;
    borderRadius: 5px;
    padding: 10px;
    paddingTop: 20px;
    overflow: hidden;
`;

export const LoremLocal = styled.Text`
    height: auto;
    width: 100%;
    marginBottom: 10px;
    font-size: 12px;
    color: #E33336;
    margin-left: 10px;
    font-weight: bold;
`;

export const ContianerIput = styled.View`
    height: auto;
    width: 100%;
    marginBottom: 15px;
    padding-left: 20px;
`;

export const Lorem = styled.Text`
    height: auto;
    width: 100%;
    marginBottom: 10px;
    font-size: 12px;
    color: #fff;
`;

export const Input = styled.TextInput`
    height: 40px;
    width: 95%;
    borderRadius: 5px;
    border: 1px;
    border-style: solid;
    border-color: #fff;
    padding-left: 15px;
    color: #fff;
`;

export const ContianerBubbleIput = styled.View`
    height: auto;
    width: 100%;
    marginBottom: 10px;
    padding-left: 20px;
    display: flex;
`;

export const ContianerLoremInput = styled.View`
    height: auto;
    width: 100%;
    marginBottom: 15px;
    display: flex;
    flex-direction: row;
`;

export const LoremDubble = styled.Text`
    height: auto;
    width: 50%;
    font-size: 12px;
    color: #fff;
`;

export const InputDubble = styled.TextInput`    
    height: 40px;
    width: 46%;
    borderRadius: 5px;
    border: 1px;
    border-style: solid;
    border-color: #fff;
    padding-left: 15px;
    color: #fff;
    margin-right: 10px;
`;

export const Card_text = styled.Text`
    font-size: 17px;
    color: #fff;
    margin-right: 10px;
    text-transform: capitalize;
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
    height: 40px;
    width: 160px;
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

export default Modal_localizacao;