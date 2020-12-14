import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    position: absolute;
    background-color: rgb(0, 0, 0);
    justify-content: center;
    align-items: center;
`;

export const Texto = styled.Text`
    color:#fefefe;
    padding:2%;
    font-size:10px;
    text-align: center;
`;

export const Title = styled.Text`
    color:#fefefe;
    padding:2%;
    font-size:26px;
    text-align: center;
`;

export const SubTitle = styled.Text`
    color:#fefefe;
    padding:2%;
    font-size:16px;
    text-align: center;
`;
export const Button = styled.TouchableOpacity`
    width:70%;
    height:5%;
    background-color:#ef545e;
    color:#fff;
    justify-content: center;
    margin-top: 10px;
`;
