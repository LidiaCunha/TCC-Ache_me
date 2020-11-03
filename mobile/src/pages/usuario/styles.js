import styled from "styled-components/native";

export const Container = styled.View`
    flex: auto;
    justify-content: flex-start;
    background-color: #1b1b1b;
`
export const MenuVoltar = styled.TouchableOpacity`
    width: 100%;
    height: 5%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 28px;
`
export const Seta = styled.Image`
    height: 40px;
    width: 40px;
`

export const ContainerUsuario = styled.View`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 25px;
`

export const AreaUsuario = styled.View`
    width: 50%;
    height: 100%;
    padding: 5px;
`

export const AreaImagem = styled.View`
    width: 120px;
    height: 120px;
    flex-direction: row;
    margin-bottom: 8px;
`

export const AreaImagemMembros = styled.View`
    width: 90px;
    height: 100px;
    flex-direction: row;
    margin-bottom: 8px;
    margin-right: 5px;
`

export const IconeFoto = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    align-self: flex-end;
    z-index: 999;
    background-color: #EF5245;
    padding: 8px;
    margin-left: -50px;
`

export const IconeFotoMembros = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    align-self: flex-end;
    z-index: 998;
    background-color: #EF5245;
    margin-left: -30px;
    justify-content: center;
    align-items: center;
`

export const FotoCamera = styled.Image`
    width: 100%;
    height: 100%;
`

export const ImagemUsuario = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: #0d0d0d;
    border: solid 4px white;
`

export const ImagemMembros = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 45px;
    background-color: #0d0d0d;
`

export const Texto = styled.Text`
    color: white;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1.4px;
`

export const TextoMenor = styled.Text`
    color: white;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.4px;
`

export const AreaTexto = styled.View`
    width: 100%;
    height: auto;
    padding: 12px;
`

export const TextoEmail = styled.Text`
    color: #6E6F71;
    font-size: 17px;
    text-align: left;
`

export const TextoMerito = styled.Text`
    color: #6E6F71;
    font-size: 18px;
    font-weight: bold;
`

export const AreaMerito = styled.View`
    width: 50%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
`

export const AreaEstrelas = styled.View`
    width: 100%;
    height: 35px;
    flex-direction: row;
    justify-content: center;
`

export const Estrelas = styled.Image`
    height: 25px;
    width: 25px;
    margin: 5px;
`

export const Botao = styled.TouchableOpacity`
    background-color: #EF5245;
    width: 50%;
    height: 6.5%;
    padding: 15px;
    border-radius: 5px;
    margin: 5px;
    align-self: center;
    justify-content: center;
`

export const TextoBotao = styled.Text`
    color: #ffffff;
    align-self: center;
    font-size: 18px;
    font-weight: bold;
`

export const AreaMembros = styled.ScrollView`
    max-height: 15%;
    margin: 8px;
`

export const Border = styled.View`
    background-color: #6E6F71;
    width: 100%;
    height: 1.5px;
`

export const InputInfos = styled.TouchableHighlight`
    border: solid 2px #6E6F71;
    width: 95%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    align-self: center;
`