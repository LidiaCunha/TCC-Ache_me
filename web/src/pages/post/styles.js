import styled from "styled-components";

export const Container = styled.div` 
    width: 800px;
    height: auto;
    max-height: 600px;
    position: relative;
    background-color: #fff; 
    margin-left: auto;
    margin-right: auto;
`

export const ContainerUsuario = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;

    >h1{
        color: #1d1d1d;
        font-weight: bold;
        font-size: 1.6em;
        letter-spacing: 1.4;
    }
`

export const FotoUsuario = styled.div`
    width: 120px;
    height: 120px;
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
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 140px;
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
    border-top-left-radius: 30px;
    background-color: white;
    margin-top: -30px;
    z-index: 999;
    position: absolute;

    >p{
        color: #1d1d1d;
        font-weight: 300;
        font-size: 1.1em;
        letter-spacing: 1.5px;
        width: 90%;
        text-align: justify;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
    }
    >h1{
        color: #1d1d1d;
        font-weight: bold;
        font-size: 1.4em;
        letter-spacing: 1.4;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
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

    >img{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
    >p{
        color: #1d1d1d;
        letter-spacing: 1.5px;
        margin-right: 30px;
        font-size: 1.2em;
        font-weight: 200;
    }
`

export const Linha = styled.div`
    width: 1.2px;
    height: 80%;
    background-color: #1d1d1d;
    margin-right: 30px;
`

export const ContainerCardFiltros = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
    min-height: 100px;
    height: auto;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
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
    min-height: 50px;
    height: auto;
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    >p{
        color: #141414;
        text-align: center;
        font-size: 1.2em;
        letter-spacing: 1.5px;
        font-weight: bold;
    }
`