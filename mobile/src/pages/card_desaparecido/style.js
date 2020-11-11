import styled from "styled-components/native";

export const Text = styled.Text`
    height: auto;
    width: auto;
    color: #fff;
    font-size: 3.5vw;
    line-height: 3vh;
`;

export const Container = styled.View`
    height: 100vh;
    width: 100vw;
    background: #292929;
`;

export const ContainerImg = styled.Image`
    height: 200px;
    width: 100vw;
    background: chartreuse;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
    > source{
        height: 100%;
        width: 100%;
        background-size: cover;
    }
`;

export const ContainerBasicInfo = styled.View`
    height: 50px;
    width: 100vw;
    background: #292929;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
    padding-top: 8px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: -20px;
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
    font-size: 2.8vw;
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
    font-size: 2.8vw;
    color: #fff;
`;

export const BasicInfosImg = styled.Image`
    height: 15px;
    width: 15px;
    margin-left: 8px;
`;

export const ContainerText = styled.View`
    height: auto;
    min-height: 50px;
    width: 100vw;
    background: #292929;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-left: 20px;
    padding-right: 20px;
    overflow: hidden;
`;

export const ContainerCharacter = styled.View`
    height: auto;
    width: 100vw;
    background: #292929;
    padding: 20px;
    overflow: hidden;
`;

export const CardCharacter = styled.Text`
    height: auto;
    width: 100%;    
`;

export const TitleCharacter = styled.Text`
    height: auto;
    width: auto;
    color: #fff;
    font-size: 4vw;
    margin-bottom: 10px;
    margin-top: 5px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const CardColor1 = styled.Text`
    height: auto;
    min-height: 20px;
    width: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    font-size: 3.5vw;
    color: #fff;
    float: left;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    margin-right: 15px;
    text-transform: capitalize;
    background: #E33336;
`;

export const CardColor2 = styled.Text`
    height: auto;
    min-height: 20px;
    width: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    font-size: 3.5vw;
    color: #fff;
    float: left;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    margin-right: 15px;
    text-transform: capitalize;
    background: #F53B3F;
`;

export const CardColor3 = styled.Text`
    height: auto;
    min-height: 20px;
    width: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    font-size: 3.5vw;
    color: #fff;
    float: left;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    margin-right: 15px;
    text-transform: capitalize; 
    background: #F95F62;
`;

export const Comment = styled.View`
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
    background: #292929;
`;

export const PersonImage = styled.Image`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: blue;
    margin-right: 15px;
`;

export const Input = styled.TextInput`
    height: 35px;
    width: 230px;
    border: none;
    border-radius: 40px;
    background: #fff;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;    
`;

export const BtnSend = styled.View`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-top: 3px;
    padding-left: 4px;


`;

export const BtnSendImg = styled.Image`
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background: red;   
    
    >source{
    height: 20px;
    width: 20px;
}
`;

export const Options = styled.View`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: orange;
    position: fixed;
`;

























