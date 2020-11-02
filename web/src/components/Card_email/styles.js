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
    height: 400px;
    width: 400px;
    background: #fff;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  

    @media (min-width: 780px){
        border-radius: 15px;
    }

    @media (max-width: 780px){
        height: 100%;
        width: 100%;
    }
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
    height: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    color: #5D5D61;
    font-family: arial;
    text-align: center;

    > h1{
        font-size: 1.3em;
    }

    > p{
        font-size: 1.2em;
        padding:30px 10px;
        box-sizing: border-box;
    }
`;

export const BtnOk = Styled.div`
    width: auto;
    height: 40px;
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
        font-size: 1.2em;
        color: #fff;
        background: none;
        border: none;
        cursor: pointer;
    }
`;

