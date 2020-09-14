import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    max-width: 1220px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

`;


export const Form = styled.form `

    width: 100%;
    max-width: 400px;
    height: 90%;
    max-height: 700px;

    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;

`;

export const InputGroup = styled.div `

    width: 100%;
    margin-top: 10px;

    display: flex;
    align-items: center;

    > label {
        font-size: 15px;
        margin: 0px 10px;
        min-width: 65px;
    }

    > input {
        flex: 1;
        margin-right: 10px;    
    }

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;

        > input {
            width: 100%;
            margin: 0px 10px;
        }
    }

`;

export const Button = styled.button `
    min-width: 200px;
    margin: 10px 10px 0px 0px;

    align-self: flex-end;
`;