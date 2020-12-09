import styled from "styled-components/native";

export const Container = styled.ScrollView`
    height: 100%;
    width: 80%;
    background: #242426;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
    border-right-width: 2px;
    border-style: solid;
    border-color: #fff;
    margin-top: 29px;
    position: absolute;
    z-index:999;
`;

export const Back = styled.View`
    height: 50px;
    width: 100%;
    padding-left: 30px;
    margin-bottom: 30px;
    border-top-right-radius: 40px;
    display: flex;
    justify-content: center;
    
`;

export const ContainerPhoto = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-bottom: 10px;
`;

export const Photo = styled.Image`
    height: 85px;
    width: 85px;
    background: orange;
    border-radius: 50px;
    margin-bottom: 10px;
    border: 2px;
    border-style: solid;
    border-color: #fff;
`;

export const Name = styled.Text`
    height: auto;
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
`;  

export const ContainerItemMenu = styled.View`
    height: auto;
    width: 80%;
    display: flex;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: #EF5245;
    margin-left: 25px;
    padding-bottom: 20px;
    margin-bottom: 65px;
`;


export const ContainerItem = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    margin-bottom: 20px;
`;

export const Icon = styled.Image`
    height: 20px;
    width: 20px;
    margin-right: 20px;
`;

export const Icon2 = styled.Image`
    height: 30px;
    width: 30px;
    margin-right: 20px;
`;

export const Text = styled.Text`
    height: auto;
    width: auto;
    font-size: 14px;
    color: #fff;
    text-transform: capitalize;
`;

export const Exit = styled.View`
    height: auto;
    width: 100%;
    padding-left: 35px;
    display: flex;
    flex-direction: row;
`;


