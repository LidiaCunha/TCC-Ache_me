import styled from "styled-components";

export const Container = styled.div`
    width: 30vw;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    padding: 25px;
    box-sizing: border-box;
    background-color: white;
    overflow-y: auto;

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
    background: #000000;
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

export const Titulo = styled.h1`
    font-size: 1.9em;
    color: #1d1d1d;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1.1px;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 25px;
`

export const Texto = styled.p`
    font-size: 1.3em;
    color: #777;
    text-align: center;
    letter-spacing: 1.1px;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 15px;

    >span{
        color: #ef545e;
        font-weight: bold;
    }
`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    column-gap: 15px;

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
            font-family: 'Times New Roman', Times, serif;
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

export const LostedPhoto = styled.img`
    max-height: 800px;
    max-width: 600px;
    border-radius: 15px;
    margin-bottom:20px;
    margin-top: 70px;
    box-sizing:border-box;
    background-attachment:fixed;
    margin-left: auto;
    margin-right: auto;
`; 
export const ConteinerPhoto = styled.div`
    width:100%;
    min-height:40px;
    margin-bottom:5em;
    height:auto;
    border: solid 1px #1e1e1e;
    border-radius:5px;
    display: flex;
    justify-content:center;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    z-index: 889;
    margin-top: -20px;
    :hover{
        > label {
            background-color:#1e1e1e;
        }
    }
    > label {
        opacity:1;
        width:55px;
        height:50px;
        margin:1em;
        border-radius:50%;
        display: flex;
        justify-content:center;
        align-items:center;
        background-color:#ef5245;
        box-sizing: border-box;
        > img {
            width:30px;
            height: 30px;
            cursor:pointer;
            margin-left:13px;
            margin-right:auto;
        }
    }
`;
export const ButtonPhoto = styled.input.attrs(()=> ({
    type:"file",
}))`
    opacity:0;
    cursor:pointer;
    width:100%;
    height:100%;
`;

export const ButtonSalvar = styled.input.attrs(()=>({
    type:"submit",
    value:"Salvar"
}))`
    border:solid 1px #ef5245;
    color:white;
    width:13em;
    height:2.5em;
    font-size:1.3rem;
    border-radius:5px;
    background-color:#ef5245;
    outline: none;
    cursor: pointer;
`;

export const ContainerBotao = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
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
    width: auto;
    min-width:500px;
    height:60px;
    display:flex;
    flex-direction:row;
    column-gap: 20px;
    margin-top: -20px;
`;

export const ContainerRadio = styled.div`
    width: 50%;
    height: 45px;
    display:flex;
    align-items: center;
    padding: 12px;
    column-gap: 20px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    border: solid 0.5px #000;
    border-radius:5px;

    >p{
        font-size: 1.3em;
        color: #777;
        font-weight: 500;
        letter-spacing: 1.1px;
        font-family: 'Times New Roman', Times, serif;
    }
`;