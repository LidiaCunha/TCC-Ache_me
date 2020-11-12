import styled from "styled-components/native";

export const Container = styled.View`
    flex: auto;
    justify-content: center;
    background-color: #0d0d0d;
`
export const MenuVoltar = styled.TouchableOpacity`
    width: 100%;
    height: 15%;
    align-items: flex-start;
    justify-content: center;
    padding: 8px;
`
export const Seta = styled.Image`
    height: 40px;
    width: 40px;
`

export const ContainerChat = styled.View`
    background-color: white;
    width: 100%;
    height: 85%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const ContainerUsuario = styled.View`
    width: 100%;
    height: 15%;
    background-color: white;
    align-items: center;
    padding: 8px;
    border-radius: 20px;
    margin-bottom: 15px;
    margin-top: 5px;
`

export const ContainerMensagens = styled.View`
    width: 100%;
    height: 70%;
`

export const ImagemUsuario = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`

export const NomeUsuario = styled.Text`
    color: black;
    text-align: center;
    font-size: 20px;
`

export const AreaMensagem = styled.View`
    width: 100%;
    height: 70px;
    justify-content: center;
    align-items: center;
    padding: 8px;
`

export const Mensagem = styled.TextInput`
    background-color: #EDEDED;
    border-radius: 20px;
    height: 100%;
    font-size: 16px;
    flex: 1;
    padding: 10px;
`

export const ViewMensagem = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  background-color: #EDEDED;
  border-radius: 20px;
  align-items: center;
  padding-right: 8px;
`

export const Enviar = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background-color: #EF5245;
    padding: 2px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
`

export const Icone = styled.Image`
    width: 30px;
    height: 30px;
`

export const Hora_Minha = styled.Text`
    color: #5e5b55;
    text-align: right;
    font-size: 14px;
    margin-right: 25px;
`

export const Hora = styled.Text`
    color: #5e5b55;
    text-align: left;
    font-size: 14px;
    margin-left: 25px;
`

export const MenuContatos = styled.View`
    width: 100%;
    height: 15%;
    flex-direction: row;
    justify-content: space-between;
    padding: 22px;
`

export const MenuImagem = styled.Image`
    width: 40px;
    height: 40px;
`

export const MenuPesquisar = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`

export const Pesquisa = styled.Image`
    width: 100%;
    height: 100%;
`

export const ContainerConversas = styled.View`
    width: 100%;
    height: 5%;
    margin-left: 15px;
    margin-bottom: 8px;
`

export const Texto = styled.Text`
    color: white;
    font-size: 25px;
    font-weight: bold;
`

export const ContainerContatos = styled.View`
    background-color: white;
    width: 100%;
    height: 80%;
    border-radius: 20px;
`

export const Recentes = styled.Text`
    color: #5e5b55;
    font-size: 18px;
    margin-left: 25px;
    margin-top: 25px;
`

export const ContainerMsgs = styled.View`
    flex-direction: row;
    padding: 25px;
    height: 122px;
    margin-bottom: -10px;
`

export const AreaTextos = styled.View`
    flex-direction: column;
    margin-left: 15px;
    width: 70%;
`

export const TextoNome = styled.Text`
    color: black;
    font-size: 20px;
    margin-bottom: 5px;
`

export const TextoMsg = styled.Text`
    color: #5e5b55;
    font-size: 16px;
`

export const AreaDetalhes = styled.View`
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
`

export const NumeroMsgs = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #EF5245;
    justify-content: center;
`

export const Numero = styled.Text`
    color: white;
    font-size: 15px;
    text-align: center;
`

export const HoraMsg = styled.Text`
    color: #5e5b55;
    text-align: right;
    font-size: 14px;
`

export const ContainerDadosMensagem = styled.View`
    flex: auto;
    justify-content: flex-start;
    background-color: #0d0d0d;
    padding: 25px;
`

export const MenuVoltarDados = styled.TouchableOpacity`
    width: 100%;
    height: 15%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px;
`

export const Data = styled.Text`
    color: #5e5b55;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 15px;
`

export const Border = styled.View`
    background-color: #EF5245;
    width: 100%;
    height: 1.5px;
    margin-bottom: 15px;
`

export const ContainerModal = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`

export const Excluir = styled.View`
    width: 90%;
    height: 35%;
    background-color: #0d0d0d;
    padding: 30px;
`

export const TextoModal = styled.Text`
    color: white;
    font-size: 22px;
    /* font-weight: bold; */
    margin-bottom: 25px;
`

export const TextoOpcoes = styled.Text`
    color: #EF5245;
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: right;
`