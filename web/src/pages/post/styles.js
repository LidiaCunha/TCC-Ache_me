import styled from "styled-components";

export const Container = styled.div` 
    width: 100%;
    height: auto;
    max-height: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
`

export const ContainerUsuario = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
`

export const ContainerTexto = styled.div`
    width: 80%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: arial;


    >h1{
        color: #1d1d1d;
        font-weight: bold;
        font-size: 1.3em;
        letter-spacing: 1.4px;
        font-family: arial;
    }
    >p{
        color: #1d1d1d;
        letter-spacing: 1.4px;
        font-size: 1.2em;
        font-family: arial;
    }
`

export const InputNome = styled.input`
    width: 90%;
    height: 40px;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    margin-top: 15px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 2px #787878;
    padding-left: 10px;
    color: #1d1d1d;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: 1.4;
`

export const FotoUsuario = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 60px;
    margin-right: 20px;

    >img{
        height: 100%;
        width: 100%;
        border-radius: inherit;
    }
`

export const FotoDesaparecido = styled.div`
    width: 100%;
    height: 400px;

    >img{
        height: 100%;
        width: 100%;
        border-top-left-radius: 15px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 15px;
        transition: 0.5s;

        :hover{
            filter: blur(1px);
            transition: 0.5s;
        }
    }
`

export const Infos = styled.div`
    width: 100%;
    min-height: 300px;
    height: auto;
    background-color: white;
    z-index: 999;
    position: absolute;
    overflow: hidden;
    overflow-Y: auto;

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

    >p{
        color: #1d1d1d;
        font-weight: 300;
        font-size: 1.1em;
        letter-spacing: 1.4px;
        width: 90%;
        text-align: justify;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 25px;
        height: auto;
        word-break: break-all;
        font-family: arial;
    }
    >h1{
        color: #1d1d1d;
        font-weight: bold;
        font-size: 1.1em;
        letter-spacing: 1.4px;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        font-family: arial;
    }
`

export const ContainerInfos = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding: 5px;

    >img{
        width: 15px;
        height: 15px;
        margin-right: 4.5px;
    }
    >p{
        color: #1d1d1d;
        letter-spacing: 1.4px;
        font-size: 0.85em;
        font-family: arial;
    }
`

export const Linha = styled.div`
    width: 1.2px;
    height: 80%;
    background-color: #1d1d1d;
    margin-right: 8px;
    margin-left: 8px;
`

export const ContainerCardFiltros = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
    min-height: 30px;
    height: auto;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    column-gap: 15px;
    padding: 15px;

    >.um{
        background-color: #E33336;
    }

    >.dois{
        background-color: #F53B3F;
    }

    >.tres{
        background-color: #F95F62;
    }
`

export const CardFiltros = styled.div`
    width: auto;
    min-height: 30px;
    height: auto;
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    >p{
        color: #fafafa;
        text-align: center;
        font-size: 1.2em;
        letter-spacing: 1.4px;
        font-weight: bold;
    }
`

export const CardOpcoes = styled.div`
    width: 200px;
    min-height: 20px;
    height: auto;
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #F53B3F;
    margin-top: 10px;

    >p{
        color: #fafafa;
        text-align: center;
        font-size: 1.2em;
        letter-spacing: 1.4px;
        font-weight: bold;
    }

    :hover{
        cursor: pointer;
        background-color: black;
        >p{
            color: #F53B3F;
        }
    }
`



export const ContainerBotoes = styled.div`
    width: 200px;
    min-height: 80px;
    height: auto;
    position: absolute;
    right: 40px;

    /* >.botoes_ocultos{
        opacity: 0;
    } */

    
`

export const DivBotoesOpcoes = styled.div`
    width: 200px;
    height: 40px;
    border: solid 1px black;
    border-radius: 40px;
    padding: 15px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: 0.4s;

    ${ContainerBotoes}:hover & {
        opacity: 1;
        transition: 0.4s;
    }
`

export const BotoesOpcoes = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #F53B3F;
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    >img{
        width: 32px;
        height: 32px;
    }

    :hover{
        cursor: pointer;
        background-color: #F95F62;
    }
`