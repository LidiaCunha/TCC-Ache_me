import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    box-sizing: border-box;
    background-color: #efefef;
    overflow: hidden;
`

export const Menu = styled.div`
    width: 100%;
    height: 90px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    box-sizing: border-box;
`

export const ImagemUsuario = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: #fff;

    >img{
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }
`

export const AreaTextos = styled.div`
    width: 100%;
    height: 70px;
    display: grid;
    align-items: flex-end;
    grid-template-columns: 300px 300px;
    grid-gap: 700px;

    >p{
        font: Arial;
        color: #1d1d1d;
        font-size: 1.1em;
        letter-spacing: 1.4px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    >#contribuintes{
        margin-left: 15.6px;
    }
`

export const GridContainers = styled.div`
    width: 100%;
    height: auto;
    min-height: 500px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    box-sizing: border-box;
`

export const ContainerFiltros = styled.div`
    width: 300px;
    height: 1100px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 85px;
    margin-right: 20px;
    padding: 10px;

    >p{
        font-size: 0.9em;
        color: #777;
        text-align: left;
        letter-spacing: 1.4px;
        font-family: Arial, Helvetica, sans-serif;
    }
`

export const ContainerPosts = styled.div`
    width: 550px;
    height: auto;
    min-height: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;
`

export const CriarPost = styled.div`
    width: 100%;
    height: 100px;
    background-color: #fff;
    margin-bottom: 20px;
`

export const Post = styled.div`
    width: 80%;
    height: auto;
    min-height: 500px;
    background-color: #fff;
    margin-bottom: 20px;
`

export const ContainerContrib = styled.div`
    width: 300px;
    min-height: 500px;
    height: auto;
    overflow: auto;
    min-height: 300px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    }
    ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: #ef545e;
    border: 0px none #ef545e;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #ef545e;
    }
    ::-webkit-scrollbar-thumb:active {
    background: #ef545e;
    }
    ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ef545e;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
    background: #666666;
    }
    ::-webkit-scrollbar-track:active {
    background: #333333;
    }
    ::-webkit-scrollbar-corner {
    background: transparent;
    }
`

export const Texto = styled.p`
    font-size: 0.9em;
    color: #777;
    text-align: center;
    letter-spacing: 1.4px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 25px;

    >span{
        color: #ef545e;
        font-weight: bold;
    }
`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 50px;
    height: auto;
    column-gap: 15px;
    row-gap: 15px;
    overflow: auto;
    white-space: nowrap;

    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    }
    ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: #ef545e;
    border: 0px none #ef545e;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #ef545e;
    }
    ::-webkit-scrollbar-thumb:active {
    background: #ef545e;
    }
    ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ef545e;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
    background: #666666;
    }
    ::-webkit-scrollbar-track:active {
    background: #333333;
    }
    ::-webkit-scrollbar-corner {
    background: transparent;
    }

    >p{
        color: #4f4e4d;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 1.4px;
    }

    >input{
        padding: 5px;
        -moz-appearance:none;
        -webkit-appearance:none;
        width: 100%;
        height: 20px;
        outline: none;
        border: solid 2px #eaeaea;
        border-radius: 5px;
        padding-left: 10px;
        font:14px Arial, Helvetica, sans-serif;
        color: #555555;
        line-height: 20px;

        :hover{
            background-color: #f6f6f6;
        }

        >p{
            font-family: Arial, Helvetica, sans-serif;
            color: #ccc;
            font-size: 1.5em;
            font-weight: bold;
        }
    }
`

export const ContainerDuplo = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    >input{
        padding: 5px;
        -moz-appearance:none;
        -webkit-appearance:none;
        width: 95%;
        height: 20px;
        outline: none;
        border: solid 2px #eaeaea;
        border-radius: 5px;
        padding-left: 10px;
        font:14px Arial, Helvetica, sans-serif;
        color: #555555;
        line-height: 20px;

        :hover{
            background-color: #f6f6f6;
        }
    }
    >p{
        text-align: left;
        margin-bottom: 5px;
    }
`

export const Icone = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #ef545e;

    >img{
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }
`

export const RadioGenre = styled.input.attrs(() => ({
    type: "radio",
    name: "radio"
  }))`
    opacity: 0;
    width:100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    :checked{
        + span {
            :before{
                opacity: 1;
                transform: scale(.6);
            }
        }
    }
    :before{
            ~ p {
                    color: #1e1e1e;
            }
        }
    :hover , :focus {
        + span {
            border: 3px solid #ef5245;
            ::before {
                background:#ef5245;
            }
        }
    }
    :hover{
        ~ p {
            color:#ef5245;
        }
    }
    :focus , :active {
        + span {
            ::after {
                opacity: .1;
                transform: scale(2.6);
            }
        }
        ~ div {
            ::after {
                border: solid 1px #ef5245;
            }
        }
    }
`;
export const RadioStyled = styled.span`
    width: 16px;
    height: 16px;

    border: 3px solid #ef5245;
    border-radius: 100%;

    position: relative;


    ::before , ::after{
        content: "";
        display: block;

        width: inherit;
        height: inherit;

        border-radius: inherit;

        position: absolute;
        transform: scale(0);
        transform-origin: center center;
    }
    ::before {
        background: #ef5245;
        opacity: 0;
        transition: .3s;
    }
    ::after {
        background: #ef5245;
        opacity: .4;
        transition: .6s;
    }
`;
export const RadioGroup = styled.form`
    width: 90%;
    height:60px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    column-gap: 20px;
    margin-top: -10px;
`;

export const Linha = styled.div`
    width: 100%;
    height: 1.5px;
    background-color: #ccc;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const ContainerRadio = styled.div`
    width: 50%;
    height: 45px;
    display:flex;
    align-items: center;
    padding: 12px;
    column-gap: 8px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    border: solid 0.5px #ccc;
    border-radius:5px;

    >p{
        font-size: 1em;
        color: #777;
        font-weight: 500;
        letter-spacing: 1.1px;
        font-family: 'Times New Roman', Times, serif;
    }
`;

export const ContainerItem = styled.div`
    width: auto;
    height:35px;
    background-color:#ef5245;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    padding:5px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;
`;
export const LabelItem = styled.span`
    color:aliceblue;
    font-weight:300;
    margin-left:10px;
    margin-right: 10px;
    height:18px;
    align-self: center;
    justify-self: center;
    font-size:16px;
    font-family:Arial;
`;
export const ButtonExcluir = styled.div`
    width:20px;
    height:20px;
    border-radius: 100%;
    background-color: white;
    display: flex;
    font-family:Arial;
    color: #ef545e;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    
    :hover{
        cursor:pointer;
    }
`;

export const Contribuidor = styled.div`
    width: 100%;
    height: 350px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;

    >p{
        font: Arial;
        color: #1d1d1d;
        font-size: 1.1em;
        letter-spacing: 1.4px;
        font-weight: 900;
        margin-top: 10px;
    }
`

export const LinhaMerito = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    >span{
        font: Arial;
        color: #777;
        font-size: 1.1em;
        letter-spacing: 1.4px;
        margin-top: 10px;
        margin-right: 15px;
    }

    .estrela{
        width: 20px;
        height: 20px;
        margin-right: 15px;
        margin-top: 5px;
    }
`

export const AreaGrid = styled.div`
    width: 100%;
    height: 170px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
    margin-top: 10px;
`

export const GridFotos = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >img{
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
`

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    >img{
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-right: 5px;
    }
`

export const GridNumero = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    >p{
        color: #1d1d1d;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2.5em;
        letter-spacing: 1.4px;
    }

    >span{
        color: #ef545e;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.5em;
        letter-spacing: 1.4px;
    }
`