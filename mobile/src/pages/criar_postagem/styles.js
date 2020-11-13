import styled from "styled-components/native";

export const Container = styled.ScrollView`
    height: auto;
    width: 100%;
    background: #292929;
    paddingTop: 20px;
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
    paddingLeft: 10px;
    marginBottom: 20px;
`;

export const ContainerUserImg = styled.Image`
    height: 45px;
    width: 45px;
    background: orange;
    borderRadius: 50px;
    marginRight: 10px;
`;

export const ContainerUserName = styled.Text`
    height: auto;
    width: auto;
    color: #fff;
    font-size: 16px;
`;

export const ContainerText = styled.View`
    height: auto;
    min-height: 50px;
    width: 100%;
    background: #292929;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-left: 20px;
    padding-right: 20px;
    overflow: hidden;
    marginBottom: 20px;
    paddingLeft: 30px;
`;

export const Text = styled.Text`
    height: auto;
    width: auto;
    color: #fff;
    font-size: 14px;
`;

export const ContainerSeletedImg = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    marginBottom: 20px;
`;

export const ContainerImg = styled.View`
    height: auto;
    min-height: 65px;
    width: 80%;
    borderRadius: 5px;
    border: 2px;
    border-style: solid;
    border-color: rgba(255,255,255,.5);
    paddingRight: 8px; 
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: center;
`;

export const InputImg = styled.Image`
    height: 50px;
    width: 50px;
    borderRadius: 50px;
    background: #E33336;
    marginTop: 10px;
`;

export const ImageSeleted = styled.Image`
    height: auto;
    min-height: 0px;
    max-height: 180px;
    width: auto;
    min-width: 0%;
    max-width: 97%;
    borderRadius: 10px;
    background: #E33336;
    marginBottom: 8px;
    marginTop: 5px;
`;

export const ContainerFilter = styled.View`
    height: auto;
    min-height: 50px;
    width: 100%;
    paddingLeft: 20px;    
    paddingRight: 20px;    
`;

export const Title = styled.Text`
    height: auto;
    width: 100%;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: #E33336;
    color: #fff;
    font-size: 16px;
    marginBottom: 10px;
    text-transform: uppercase;
`;

export const ContainerDateTime = styled.Text`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    marginBottom: 20px;
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
    font-family: arial;
    color: #fff;
    marginBottom: 5px;  
`;

export const InputDate = styled.TextInput`
    height: 40px;
    width: 170px;
    border: 2px;
    border-style: solid;
    border-color: rgba(299,299,299,.5);
    borderRadius: 5px;
    padding-left: 10px;
    color: #fff;
`;

export const InputTime = styled.TextInput`
    height: 40px;
    width: 40px;
    border: 2px;
    border-style: solid;
    border-color: rgba(299,299,299,.5);
    borderRadius: 5px;
    padding-left: 9px;
    color: #fff;
`;

export const InputGenre = styled.TextInput`
    height: 40px;
    width: 140px;
    border: 2px;
    border-style: solid;
    border-color: rgba(299,299,299,.5);
    borderRadius: 5px;
    padding-left: 10px;
    margin-right: 10px;
    color: #fff;
`;

export const LoremTime = styled.Text`
    width: auto;
    height: auto;
    font-size: 20px;
    font-family: arial;
    color: #fff;
    marginBottom: 5px;
    marginTop: 8px;
    margin-left: 8px;
    margin-right: 8px;
`;

export const ContainerBtnPublicar = styled.View`
    height: 100px;
    width: 100%;
    paddingRight: 15px; 
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: flex-end;
`;

export const BtnPublicar = styled.View`
    height: 40px;
    width: 180px;
    background: #E33336;
    paddingLeft: 30px;    
    paddingRight: 30px; 
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    borderRadius: 5px;
    paddingTop: 5px;
`;


