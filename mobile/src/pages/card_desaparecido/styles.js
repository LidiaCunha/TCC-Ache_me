import styled from "styled-components/native";

export const Text = styled.Text`
    height: auto;
    width: auto;
    color: #fff;
    font-size: 14px; 
`;
export const Container = styled.ScrollView`
    height: auto;
    width: 100%;
    background: #292929;
    padding-top: 20px;
`;
export const ContainerUser = styled.View`
    height: 75px;
    width: 100%;
    background: #303030;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-direction: row;
    padding-left: 10px;
    margin-bottom: 10px;
`;
export const ContainerUserImg = styled.Image`
    height: 45px;
    width: 45px;
    background: orange;
    border-radius: 50px;
    margin-right: 10px;
`;
export const ContainerUserNameData = styled.View`
    height: auto;
    width: auto;    
`;
export const Name = styled.Text`
    color: #fff;
    font-size: 16px;
`;
export const Data = styled.Text`
    color: rgba(255 , 255 , 255 , .6);
    font-size: 11px;
`;
export const ContainerImg = styled.Image`
    height: 240px;
    width: 100%;
    background: #EF5245;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
`;
export const ContainerBasicInfo = styled.View`
    height: 50px;
    width: 100%;
    background: #292929;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
`;
export const BasicInfos = styled.Text`
    height: 60%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    font-size: 12px;
    color: #fff;
    border-style: solid;
    border-color: rgba(255,255,255,.5);
    border-right-width: 1px;
`;
export const BasicInfos2 = styled.Text`
    height: 60%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    font-size: 13px;
    color: #fff;
`;
export const BasicInfosImg = styled.Image`
    height: 15px;
    width: 15px;
    margin-left: 8px;
`;
export const ContainerText = styled.View`
    height: auto;
    min-height: 5px;
    width: 100%;
    background: #292929;
    padding-left: 20px;
    padding-right: 20px;
    overflow: hidden;
`;
export const ContainerCharacter = styled.View`
    height: auto;
    width: 100%;
    background: #292929;
    padding: 20px;
    padding-top: 10px;
    overflow: hidden;
`;
export const TitleCharacter = styled.Text`
    height: auto;
    width: auto;
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 5px;
    text-transform: uppercase;
    font-weight: bold;
`;
export const CardCharacter = styled.ScrollView`
    height: auto;
    min-height: 10px;
    display: flex;
    flex-direction: row;
`;
export const CardColor = styled.Text`
    height: auto;
    width: auto;
    padding: 10px;
    color: #fff;
    border-radius: 5px;
    margin: 5px;
`;
export const Comment = styled.View`
    height: 80px;
    width: 100%;
    background-color: #E33336;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background: #292929;
`;
export const PersonImage = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 50px;
    margin-right: 10px;
`;
export const Input = styled.TextInput`
    height: 45px;
    width: 260px;
    border: none;
    border-radius: 40px;
    background: #fff;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-left: 20px;
`;
export const BtnSend = styled.View`
    height: 45px;
    width: 43px;
    border-radius: 50px;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-top: 6px;
    
`;
export const BtnSendImg = styled.View`
    height: 35px;
    width: 35px;
    border-radius: 50px;
    background: #E33336;
    justify-content: center;
    align-items: center;
`;

export const Comments = styled.View`
    height: auto;
    width: 100%;
    background-color:#fff;
    display:flex;
    flex:1;
`;

export const CommentText = styled.Text`
    color:#fff;
    padding:8px;
`;

export const CommentArea = styled.View`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:auto;
    background-color:#292929;
    min-height:80px;
`;

export const Creator = styled.View`
    display:flex;
    flex-direction:row;
    padding:7px;
`;

export const UserName = styled.Text`
    color:#fff;
    height:20px;
    align-self:center;
    margin-left:8px;
    width:80%;
`;

export const Photo = styled.Image`
    width:35px;
    height:35px;
`;