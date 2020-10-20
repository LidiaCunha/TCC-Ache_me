import styled from "styled-components";

export const Center = styled.div`
    heigth: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;


export const Text = styled.p`
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    text-align: left;
    line-height: 30px;

    >span{
        color: #a1a1a1;
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
        line-height: 30px;
    }
`;

export const Info = styled.p`
    color: #caced4;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.75em;
    text-align: left;
    line-height: 30px;
`;

export const Button = styled.div`
    min-width: 140px;
    border-radius: 5px;
    background: #E64F4A;
    color: #fff;
    outline: none;
    padding: 10px;
    margin: auto;
    box-sizing: border-box;
    font-size: 1.2em;
    font-family: arial;
    position: relative;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    :hover{
        background-color: #e6352f;
    }
@media(max-width: 780px){
    min-width: 160px;
}

`;

export const Container = styled.div`
    width: 1000px;
    /* height: 140vh; */
    box-sizing: border-box;
    background-color: #efefef;
    margin: 0px;
    padding: 0px;
@media(max-width: 780px){
    width: 100vw;
}
`;

// ========= HEADER =========

export const Header = styled.div`
    width: 1000px;
    height: 50px;
    padding-top: 5px;
    background-color: #fff;
    position: fixed;
    z-index: 999;
@media(max-width: 780px){
    width: 100vw;
}
`;

export const Home = styled.div`
    width: 45px;
    height: 45px;
    padding: 5px;
    box-sizing: border-box;
    margin-left: 25px;
    border-radius: 50%;
    background-color:#E64F4A;
    cursor: pointer;
    :hover{
        background-color: #e6352f;
    }
    >img {
      width: 100%;
    }
`;

export const Main = styled.div`
    width: 1000px;
    height: auto;
    padding-top: 50px;
    display: grid;
    grid-template-rows: 25% 75%;
    box-sizing:border-box;
@media(max-width: 780px){
    grid-template-rows: none;
}
`;

export const Section = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-bottom: solid 2px black; */
@media(max-width: 780px){
    width: 100vw;
}

`;

// ========= SECTION 1 - USER_PHOTO =========

export const BasicInfos = styled.div`
    width: 80%;
    height: 200px;
    padding: 20px 0px;
    background-color: #fff;
    position: relative;
    display: flex;
    box-sizing: border-box;
    margin-top: 50px;
@media(max-width: 780px){
    width: 90vw;
    height: 400px;
    padding: 8px 0px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
}
`;

export const PhotoProfile = styled.div`
    width: 50%;
    height: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    border-right: solid 2px #dddddd;
@media(max-width: 780px){
    grid-template-columns: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
}
`;

export const Merit = styled.div`
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 15px 30px;

@media(max-width: 780px){
    width: 100%;
    padding: 0px 20px;
    height: auto;
}
`;

export const Photo = styled.div`
    width: 120px;
    height: 120px;
    background-color: #E64F4A;
    margin: 0px 20px;
    border-radius: 50%;
    border: 1px solid #caced4;

    >img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

export const NewPhoto = styled.div`
    width: 45px;
    height: 45px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #E64F4A;
    cursor: pointer;
    position: relative;
    top: -40px;
    left: 75px;

    :hover{
        background-color: #e6352f;
    }

    >img {
      width: 100%;
    }
`;

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
`;

export const Name = styled.h1`
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    text-align: left;
    line-height: 15px;
    font-weight: bold;

    >span{
        color: #a1a1a1;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8em;
        text-align: left;
        line-height: 30px;
        font-weight: normal;
    }

@media(max-width: 780px){
    text-align: center;
}
`;

// Section 2

export const Title = styled.p`
    width: 80%;
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    text-align: left;
    padding: 5px 0px;
    border-bottom: solid 2px #dddddd;
    margin-top: 20px;
`;

export const AdvancedInfos = styled.div`
    width: 80%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 65% 30%;
    justify-content: space-between;

@media(max-width: 780px){
    grid-template-columns: 100%;
    width: 100vw;
}
`;

export const Profile = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 30px;
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
    'name email'
    'password password'
    'new-password confirm-password'
    'telephone cpf'
    'cep cep'
    'street neighborhood'
    'city state'
    '... button';

@media(max-width: 780px){
    grid-template-areas:
    'name name'
    'email email'
    'password password'
    'new-password new-password'
    'confirm-password confirm-password'
    'telephone telephone'
    'cpf cpf'
    'cep cep'
    'street street'
    'neighborhood neighborhood'
    'city city'
    'state state'
    'button button';

    background: lightblue;
}

`;

export const Input = styled.div`
    padding: 10px;

    >input{
        width: 100%;
        height: 30px;
        outline: none;
        border: solid 2px #eaeaea;
        border-radius: 5px;
        padding-left: 10px;
    }
    >input:hover{
        background-color: #f6f6f6;
    }
`;

export const ShareIndicated = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 35% 65%;

@media(max-width: 780px){
    grid-template-rows: 100%;
    width: 100vw;
    height: 160px;
}
`;

export const Share = styled.div`
    box-sizing: border-box;
    background-color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;

    >h1{
        color: #262626;
        font-size: 0.8em;
        line-height: 30px;
    }

    >p{
        color: #a1a1a1;
        font-size: 0.8em;
    }

    >img {
        width: 60px;
        margin: auto;
    }

@media(max-width: 780px){
    height: 170px;

    >h1{
        color: #262626;
        font-size: 1em;
        line-height: 30px;
    }

    >p{
        color: #caced4;
        font-size: .8em;
    }

    >img {
        width: 40px;
        margin: auto;
    }

}
`;

export const Indicated = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50px 350px;

    
`;

export const Members = styled.div`
    height: 100%;
    overflow: auto;
`;

export const Member = styled.div`
    width: 100%;
    margin: 20px 0px;
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    
    >img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: solid 1px #caced4;
        margin-right: 10px;
    }
`;

export const MemberName = styled.h1`
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    text-align: left;
    line-height: 15px;
    font-weight: bold;

    >span{
        color: #a1a1a1;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1em;
        text-align: left;
        line-height: 30px;
        font-weight: normal;
    }
`;