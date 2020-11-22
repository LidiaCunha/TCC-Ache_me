import styled from "styled-components/native";

export const Text = styled.Text`
    height: auto;
    width: 80%;
    color: #fff;
    font-size: 14px; 
`;

export const Container = styled.ScrollView`
    height: auto;
    width: 100%;
    background:  #1d1d1d;
`;

export const ContainerUser = styled.View`
    height: 80px;
    width: 100%;
    background:  #1b1b1b;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-direction: row;
    padding: 10px;
    /* margin-bottom: 20px; */
`;

export const ContainerUserImg = styled.View`
    height: 60px;
    width: 60px;
    background: #bbbbbb;
    border-radius: 50px;
    margin-left: 20px;
    padding: 2px;
`;

export const UserPhoto = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 30px;
`;

export const ContainerUserName = styled.Text`
    height: auto;
    width: auto;
    color: #fff;
    margin-left: 20px;
    font-size: 20px;
`;

export const ContainerText = styled.View`
    height: auto;
    min-height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-bottom: 20px;
`;

export const Description = styled.TextInput`
    height: auto;
    width: 80%;
    margin-top: 10px;
    padding: 5px;
    color: #fff;
    border-radius: 5px;
    border: solid rgba(255,255,255,.5) 2px;
    font-size: 20px; 
    line-height: 20px;  

`;

export const ContainerSeletedImg = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-bottom: 20px;
`;

export const ContainerImg = styled.View`
    height: auto;
    min-height: 50px;
    width: 80%;
    border-radius: 5px;
    border: 2px solid rgba(255,255,255,.5);
    display: flex;
    flex-direction: column;
`;

export const SelectImage = styled.View`
    height: 70px;
    width: 100%;
    padding: 10px;
`;

export const InputImg = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    padding: 10px;
    background: #E33336;
    align-self: flex-end;
`;

export const AddPostImage = styled.Image`
    height: 100%;
    width: 100%;
`;

export const ImageSeleted = styled.View`
    height: auto;
    width: 100%;
    padding: 10px;
    padding-top: 0px;
`;

export const PostImage = styled.Image`
    height: 150px;
    width: 100%;
    border-radius: 10px;
`;

export const ContainerFilter = styled.View`
    height: auto;
    min-height: 50px;
    width: 100%;
    padding-left: 20px;    
    padding-right: 20px;    
`;

export const Title = styled.Text`
    height: auto;
    width: 100%;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: #E33336;
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-transform: uppercase;
`;

export const ContainerDateTime = styled.Text`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const ContainerDate = styled.View`
    height: auto;
    width: auto;
    padding-left: 10px;
`;

export const ContainerTime = styled.View`
    height: auto;
    width: auto;
    padding-left: 20px;
`;

export const Center = styled.View`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
`;

export const Lorem = styled.Text`
    width: auto;
    height: auto;
    font-size: 14px;
    /* font-family: Arial, Helvetica, sans-serif; */
    color: #fff;
    margin-bottom: 5px;  
`;

export const InputDate = styled.TextInput`
    height: 40px;
    width: 170px;
    border: 2px;
    border-style: solid;
    border-color: rgba(299,299,299,.5);
    border-radius: 5px;
    padding-left: 10px;
    color: #fff;
`;

export const InputTime = styled.TextInput`
    height: 40px;
    width: 40px;
    border: 2px;
    border-style: solid;
    border-color: rgba(299,299,299,.5);
    border-radius: 5px;
    padding-left: 9px;
    color: #fff;
`;

export const InputGenre = styled.TextInput`
    height: 40px;
    width: 140px;
    border: 2px;
    border-style: solid;
    border-color: rgba(299,299,299,.5);
    border-radius: 5px;
    padding-left: 10px;
    margin-right: 10px;
    color: #fff;
`;

export const LoremTime = styled.Text`
    width: auto;
    height: auto;
    font-size: 20px;
    color: #fff;
    margin-bottom: 5px;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;
`;

export const ContainerBtnPublicar = styled.View`
    height: 70px;
    width: 100%;
    padding-right: 15px; 
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: flex-end;
`;

export const BtnPublicar = styled.TouchableOpacity`
    height: 40px;
    width: 180px;
    background: #E33336;
    padding-left: 30px;    
    padding-right: 30px; 
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 5px;
    line-height: 40px;
`;

export const ContainerModal = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`

export const Modal = styled.View`
    width: 90%;
    min-height: 35%;
    height: auto;
    background-color: #0d0d0d;
    padding: 30px;
`

export const TextoModal = styled.Text`
    color: #EF5245;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: left;
`

export const ViewMensagem = styled.View`
  height: 40px;
  width: 100%;
  flex-direction: row;
  background-color: #EDEDED;
  border-radius: 20px;
  align-items: center;
  padding-right: 8px;
  margin-bottom: 25px;
`

export const ContainerIcone = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    background-color: #EF5245;
    padding: 2px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 10px;
`

export const Icone = styled.Image`
    width: 25px;
    height: 25px;
`

export const TextoCaracteristicas = styled.Text`
    color: #0d0d0dcc;
    font-size: 15px;
    letter-spacing: 1.4px;
    font-weight: bold;
`

export const ContainerCaracteristicas = styled.ScrollView`
    width: 100%;
    min-height: 60px;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 8px;
`

export const Caracteristicas = styled.TouchableOpacity`
    height: 40px;
    margin-right: 10px;
    align-self: center;
    justify-content: center;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 20px;
`

export const TextoCards = styled.Text`
    color: #fff;
    font-size: 15px;
    letter-spacing: 1.4px;
    font-weight: bold;
    margin-right: 5px;
`

export const IconeExcluir = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    background-color: #fff;
    padding: 2px;
    align-items: center;
    justify-content: center;
`

export const Ok = styled.TouchableOpacity`
    width: 30%;
    height: 40px;
    align-self: flex-end;
    justify-content: center;
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #F95F62;
`
