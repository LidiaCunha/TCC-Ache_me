import styled from "styled-components/native";

export const Container = styled.ScrollView`
    height: 100%;
    width: 100%;
    background: #242426;
    paddingTop: 25px;
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

export const Container_card_postagem = styled.View`
    height: auto;
    width: 100%;
    paddingTop: 10px;
    marginBottom: 20px;
`;

export const ContainerData = styled.View`
    height: auto;
    width: 100%;
`;

export const Data = styled.Text`
    height: auto;
    width: auto;
    font-size: 16px;
    color: rgba(255,255,255,.7);
    marginBottom: 10px;
    padding-left: 20px;
`;

export const ContainerCard = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Card = styled.View`
    height: auto;
    width: 90%;
    background: #fff;
    borderRadius: 10px;
padding: 10px;
`;

export const Container_img_name = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-direction: row;
    marginBottom: 10px;
`;

export const ImgUser = styled.Image`
    height: 55px;
    width: 55px;
    borderRadius: 50px;
    background: orange;
    margin-right: 10px;
`;

export const NameUser = styled.Text`
    height: auto;
    width: auto;
    color: #000;
    font-size: 16px;
    font-weight: bold;

`;

export const Text = styled.Text`
    height: auto;
    width: auto;
    color: rgba(0,0,0,.5);
    font-size: 16px;
    marginBottom: 20px;
`;


export const ContainerBtn = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;  
`;

export const BtnVerMais = styled.Text`
    height: 40px;
    width: 70%;
    padding: 10px;
    background: #EF5245;
    color: #fff;
    text-align: center;
    borderRadius: 5px;
    font-size: 14px;
    font-weight: bold;

    
`;








