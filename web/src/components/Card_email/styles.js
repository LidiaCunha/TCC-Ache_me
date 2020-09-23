import Styled from "styled-components";

export const CardEmail = Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    overflow-y: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #333d;

    animation: fadeIn 0.4s;
`;

export const ContainerCard = Styled.div`
    height: 550px;
    width: 500px;
    border-radius: 15px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

export const ContainerImg = Styled.div`
    height: 100px;
    width: 100px;
    background: #E64F4A;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 50%;

    > img{
        height: 80%;
    width: 80%;
    }
`;

export const ContainerInformacoes = Styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    color: #5D5D61;
    font-family: arial;

    > h1{
        margin-bottom: 30px;
        font-family: 1.5em;
    }

    > h2{
        font-size: 1.3em;
    }
`;

export const BtnOk = Styled.div`
    width: auto;
    height: 60px;
    background: #E64F4A;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 10px;

    > input{
        font-size: 1.5em;
        color: #fff;
        background: none;
        border: none;
        cursor: pointer;
    }
`;
