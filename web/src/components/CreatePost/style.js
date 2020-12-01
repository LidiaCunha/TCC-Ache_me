import styled from "styled-components";

export const ContainerModal = styled.div`
    background-color: #23232355;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index:1000;
    box-sizing: border-box;
`;
export const Container = styled.div`
    background-color: #fff;
    width: 74vw;
    height: 90vh;
    margin-top:5vh;
    z-index:1000;
    overflow-x: hidden;
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
`;
export const Header = styled.div`
    width:100%;
    height:70px;
    display: flex;
    padding:5px;    
    flex-direction: row;
    justify-content:space-between;
`;
export const Creator = styled.div`
    width:40%;
    height:50px;
    display:flex;
    flex-direction: row;
    align-items:center;
    margin-top:5px;
`;
export const Photo = styled.img`
    border-radius:25px;
    width:50px;
    height:50px;
    margin-left:5px;
    margin-right:5px;
`;
export const Name = styled.span`
    font-weight: 700;
    font-size : 18px;
    margin-left:5px; 
`;
export const ExitButton = styled.div`
    border-radius:50px;
    width:50px;
    height:50px;
    background-color:#ef5245;
    margin:15px;
    margin-top:10px;
    :hover {
        cursor:pointer;
        background-color:#1e1e1e;
    }
`;
export const Body = styled.div`
    width:100%;
    height:auto;
`;
export const Line = styled.div`
    width:100%;
    box-sizing: border-box;
    margin-top:25px;
    margin-bottom:20px;
    min-height: 10px;
    height:auto;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-around;
`;

export const Linha = styled.div`
    width:100%;
    box-sizing: border-box;
    margin-bottom:-65px;
    min-height: 10px;
    height:auto;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-around;
`;

export const InputName = styled.input.attrs(() => ({
    type: "text",
    required: true,
    }))`
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
    border:none;
    outline: none;
    width: 400px;
    background-color:transparent;
    padding: 16px 0;
    border-bottom: solid 1px white;
    ~ label {
        position: absolute;
        top: 16px;
        left: 0;
        font-size: 1.5em;
        transition: .4s;
    }
    :focus , :valid {
        ~ label {
            transform: translateY(-24px);
            font-size: 0.5em;
            letter-spacing: 0.1em;
        }
    }
    :valid{
        border-bottom: solid 1px green;
    }
    font-size:1.5rem;
    border-bottom: solid 1px #ef5245;
`;
export const InputBorned = styled.input.attrs(() => ({
    type: "date"
  }))`
    appearance:none;
    border:none;
    outline: none;
    padding: 5px;
    margin-left:15px;
    width: 320px;
    height:25px;
    border:solid 1px #232323;
    background-color:fafafa;
    border-radius:5px;
    margin-left: auto;
    margin-right: auto;
`;
export const Label = styled.label`
    font-size:1.1em;
    font-weight:300;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 1.1px;
`;

export const LabelGenero = styled.label`
    font-size:1.1em;
    font-weight:300;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    margin-left: 10px;
    letter-spacing: 1.1px;
`;

export const Date = styled.input.attrs(() => ({
    type: "date"
  }))`
    appearance:none;
    border:none;
    outline: none;
    width: 250px;
    border-radius:5px;
    height:25px;
    padding: 5px;
    margin-left:15px;
    border:solid 1px #232323;
    background-color:#fafafa;
`;
export const Time = styled.input.attrs(() => ({
    type: "time"
  }))`
    width: 250px;
    height:25px;
    padding: 5px;
    margin-left:15px;
    border-radius:5px;
    border:solid 1px #232323;
    background-color:#fafafa;
`;
export const RadioGenre = styled.input.attrs(() => ({
    type: "radio",
    name: "genres"
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
            ~ label {
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
        ~ label {
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
    }
`;
export const RadioStyled = styled.span`
    width: 16px;
    height: 16px;

    border: 3px solid #ef5245;
    border-radius: 100%;
    margin-right: auto;
    margin-left: auto;

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
    justify-content:space-between;
    align-items:center;
`;
export const Column = styled.div`
    width:auto;
    height:auto;
    display:flex;
    flex-direction:column;
    position:relative;
    margin-bottom: 35px;
`;
export const ContainerRadio = styled.div`
    min-width : 160px;
    width: auto;
    height: 45px;
    display:flex;
    align-items:center;
    flex-wrap: nowrap;
    margin: 12px 10px;
    cursor: pointer;
    position: relative;
    border: solid 0.5px #000;
    border-radius:5px;
`;
export const LostedPhoto = styled.img`
    max-height: 800px;
    max-width: 800px;
    border-radius: 15px;
    margin :20px;
    margin-bottom:20px;
    margin-top: 70px;
    box-sizing:border-box;
    background-attachment:fixed;
    margin-left: auto;
    margin-right: auto;
`; 
export const ConteinerPhoto = styled.div`
    width:60em;
    margin:2.5em;
    min-height:40px;
    margin-bottom:5em;
    height:auto;
    border: solid 1px #1e1e1e;
    border-radius:5px;
    display: flex;
    justify-content:center;
    flex-direction: row;
    z-index: 889;
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
export const TextArea = styled.textarea.attrs(() => ({
    placeholder: "Digite detalhes sobre o desaparecido para ajudar em sua identificação"
}))`
    width:65em;
    margin:2.5em;
    padding:0.5em;
    font-size:1.1rem;
    height:100px;
    outline: none;
    overflow-y:auto;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
    resize:none;
    border:1px solid #1e1e1e;
    border-radius:5px;
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
`;
export const ConteinerInput = styled.div`
    width  : 60em;
    height : 3em;
    border : solid 1px #1e1e1e;
    border-radius : 5px;
    display : flex;
    align-items:center;
    justify-content : space-between;
    flex-direction : row;
    > span {
        width:30px;
        height:30px;
        margin:1em;
        border-radius:50%;
        background-color:#ef5245;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        >img{
            width: 100%;
            height: 100%;
        }
    }
`;
export const Input = styled.input.attrs(()=>({
    type: 'text',
    placeholder: "Precione enter para adiconar um item"
}))`
    width:100%;
    height:95%;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
    outline: none;
    background-color:transparent;
    border:none;
`;
export const ButtonPublicar = styled.input.attrs(()=>({
    type:"submit",
    value:"Publicar"
}))`
    border:solid 1px #ef5245;
    color:white;
    width:13em;
    height:2.5em;
    font-size:1.3rem;
    border-radius:5px;
    background-color:#ef5245;
`;
export const ContainerItem = styled.div`
    min-width:20px;
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
export const ConteinerFeatures = styled.div`
    width:100%;
    height:auto;
    min-height:10px;
    margin:10px;
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:center;
    overflow-x: auto;

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
`;
export const LabelLocation = styled.span`
    font-family:Arial, Helvetica, sans-serif;
    font-weight:bold;
    font-size:1.5em;
    text-align: center;
`;

export const InputEndereco = styled.input.attrs(()=>({
    type: 'text',
    placeholder: "Precione enter para adiconar o endereço"
}))`
    padding: 5px;
    -moz-appearance:none;
    -webkit-appearance:none;
    width: 500px;
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
`