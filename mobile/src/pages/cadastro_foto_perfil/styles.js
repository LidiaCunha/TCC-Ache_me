import styled from "styled-components/native";

export const Container = styled.ImageBackground`
    flex: auto;
    justify-content: flex-start;
    padding: 20px;
`

export const BotaoVoltar = styled.Image`
    height: 30px;
    width: 30px;
`

export const ContainerInfos = styled.View`
    flex: auto;
    align-items: center;
    align-self: center;
    width: 90%;
    padding: 10px;
`

export const Texto = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
    width: 80%;
    margin-bottom: 50px;
`

export const ContainerCard = styled.View`
    width: 100%;
    height: 180px;
    background-color: #ffffff;
    border-radius: 20px;
    align-items: center;
    margin-top: -90px;
    justify-content: flex-end;
`

export const ContainerFoto = styled.View`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    background-color: #777777;
    z-index: 998;
    border: solid 5px #ffffff;
    margin-bottom: 10px;
`

export const FotoImagem = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 75px;
`

export const IconeFoto = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: flex-end;
    align-self: flex-end;
    z-index: 999;
    background-color: #EF5245;
    padding: 8px;
    margin-top: -25px;
`

export const FotoCamera = styled.Image`
    width: 100%;
    height: 100%;
`

export const TextosCard = styled.View`
    width: 90%;
    height: 100px;
    padding: 30px;
`

export const TextoNome = styled.Text`
    color: #555555;
    font-size: 20px;
    align-self: center;
`

export const TextoEmail = styled.Text`
    color: #869189;
    font-size: 18px;
    align-self: center;
`

export const Botao = styled.TouchableOpacity`
    background-color: #EF5245;
    width: 70%;
    align-self: flex-end;
    padding: 15px;
    border-radius: 5px;
    margin-top: 15px;
`

export const TextoBotao = styled.Text`
    color: #ffffff;
    align-self: center;
`