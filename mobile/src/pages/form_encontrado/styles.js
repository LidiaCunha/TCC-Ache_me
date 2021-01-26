import styled from "styled-components/native";

export const Container = styled.View`
    flex: auto;
    justify-content: flex-start;
    background-color: #1b1b1b;
`

export const AreaForm = styled.ScrollView`
    padding: 15px;
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
    width: 80px;
    height: 90px;
    flex-direction: row;
    margin-bottom: 8px;
    margin-right: 10px;
`

export const IconeFoto = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-self: flex-end;
    z-index: 999;
    background-color: #EF5245;
    padding: 8px;
    align-items: center;
    justify-content: center;
`

export const ImagemUsuario = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: #0d0d0d;
    border: solid 4px white;
`

export const ImagemMembros = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #0d0d0d;
`

export const Texto = styled.Text`
    color: white;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1.4px;
    text-align: center;
    align-self: center;
`

export const TextoMenor = styled.Text`
    color: white;
    text-align: left;
    font-size: 16px;
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
    text-align: center;
    letter-spacing: 1.5px;
`

export const TextoMerito = styled.Text`
    color: #EF5245;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1.5px;
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
    height: 50%;
    margin: 8px;
`

export const Border = styled.View`
    background-color: #6E6F71;
    width: 100%;
    height: 1.5px;
`

export const InputInfos = styled.TextInput`
    border: solid 2px #6E6F71;
    width: 95%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    align-self: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.4px;
    margin-bottom: 10px;
`

export const InputHorario = styled.TextInput`
    border: solid 2px #6E6F71;
    width: 30%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.4px;
    margin-left: 15px;
    margin-right: 15px;
`

export const ContainerInputs = styled.View`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
`

export const AreaInputs = styled.View`
    width: 50%;
    height: auto;
`

export const AreaInputHorario = styled.View`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const BotaoSalvar = styled.TouchableOpacity`
    background-color: #EF5245;
    width: 50%;
    height: 40px;
    border-radius: 5px;
    align-self: flex-end;
    justify-content: center;
    margin: 10px;
    margin-bottom: 35px;
`

export const ViewFoto = styled.View`
    width: 100%;
    height: 300px;
    border: solid 2px #6E6F71;
    border-radius: 15px;
    padding: 10px;
`

export const FotoDesaparecido = styled.Image`
    width: 100%;
    height: 205px;
    background-color: red;
    margin-top: 15px;
    border-radius: 15px;
`