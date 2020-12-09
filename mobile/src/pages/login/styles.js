import styled from "styled-components/native";

export const ViewContainer = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`

export const Container = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
    /* background-color: black;
    opacity: 0.65; */
`

export const ContainerTitulo = styled.View`
    flex-direction: row;
    margin-bottom: 30px;
`

export const Logo = styled.Image`
    height: 50px;
    width: 50px;
    margin: 4px;
`

export const Titulo = styled.Text`
    color: #ffffff;
    font-size: 30px;
    margin: 4px;
    font-weight: bold;
`

export const Input = styled.TextInput`
    width: 70%;
    align-self: center;
    background-color: #ffffff;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    margin-bottom: 30px;
`

export const Botao = styled.TouchableOpacity`
    background-color: #EF5245;
    width: 50%;
    align-self: center;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-top: 15px;
`

export const Texto = styled.Text`
    color: #ffffff;
    align-self: center;
`