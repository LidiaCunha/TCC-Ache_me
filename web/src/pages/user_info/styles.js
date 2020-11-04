import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    box-sizing: border-box;
    background-color: #efefef;

@media(max-width: 780px){
    overflow-x: hidden;
}
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
    width: 125px;
    height: 38px;
    border-radius: 5px;
    background: #E64F4A;
    color: #fff;
    outline: none;
    padding: 10px;
    margin: auto;
    box-sizing: border-box;
    font-size: 0.8em;
    font-family: arial;
    font-weight: bold;
    position: relative;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
`;

// ========= HEADER =========

export const Header = styled.div`
    width: 100vw;
    height: 7.5vh;
    padding: 4px;
    box-sizing: border-box;
    background-color: #fff;
    position: fixed;
    z-index: 999;
    top: 0;
    overflow: hidden;
    
@media(max-width: 780px){
    height: 10vh;
}
`;

export const Home = styled.div`
    width: 5vh;
    height: 5vh;
    min-width: 45px;
    min-height: 45px;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color:#E64F4A;
    cursor: pointer;
margin-left: 190px;
    
    :hover{
        background-color: #e6352f;
    }
    >img {
      width: 100%;
      height: 100%;
    }
`;

export const Main = styled.div`
    width: 60vw;
    min-width: 1000px;
    height: auto;
    min-height: 50px;
    padding-top: 50px;
    display: grid;
    grid-template-rows: 25% 75%;
    box-sizing:border-box;

@media(max-width: 780px){
    grid-template-rows: 18%;
}
`;

export const Section = styled.div`
    width: 100vw;
    height: auto;
    min-height: 5px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-bottom: solid 2px black; */

`;

// ========= SECTION 1 - USER_PHOTO =========

export const BasicInfos = styled.div`
    width: 80vw;
    height: 10vh;
    min-height: 200px;
    padding: 20px 0px;
    background-color: #fff;
    position: relative;
    display: flex;
    box-sizing: border-box;
    margin-top: 50px;
    box-shadow: 0px 0px 6px #fff;

@media(max-width: 780px){
    width: 90vw;
    height: auto;
    min-height: 50px;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

}
`;

export const PhotoProfile = styled.div`
    width: 50%;
    height: auto;
    min-height: 50px;
    display: grid;
    grid-template-columns: 40% 60%;
    border-right: solid 2px #dddddd;

@media(max-width: 780px){
    grid-template-columns: 100%;
    border-right: solid 2px transparent;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
}
`;

export const Merit = styled.div`
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 15px 30px;

@media(max-width: 780px){
    width: 100%;
    height: auto;

    padding: 15px 15px;
}
`;

export const Photo = styled.div`
    width: 120px;
    height: 120px;
    background-color: #aaaaaa;
    margin: 0px 20px;
    border-radius: 50%;
    border: 1px solid #caced4;
    padding: 2px;
    box-sizing: border-box;

    >img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    >input {
        width: 100%;
    }

    >label {
      width: 100%;
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

@media(max-width: 780px){
    width: 90vw;
}
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
    width: 100%;
    margin-bottom: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    
    flex-direction: column;


}
`;

export const Profile = styled.div`
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 6px #fff;
    padding: 30px;
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
    'name email'
    'password password'
    'new-password confirm-password'
    'telephone cpf'
    'cep neighborhood'
    'street number'
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

    width: 90%;
    margin: 20px;
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

    >.uneditable{
        width: 100%;
        height: 30px;
        outline: none;
        border: solid 2px #eaeaea;
        border-radius: 5px;
        padding-left: 10px;
        font:14px Arial, Helvetica, sans-serif;
        color: #555555;
        line-height: 30px;
        background-color: #f6f6f6;
        cursor: default;
    }
`;

export const ShareIndicated = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 35% 65%;
@media(max-width: 780px){
    width: 90vw;

}
`;

export const Share = styled.div`
    box-sizing: border-box;
    background-color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0px 0px 6px #fff;

    >h1{
        color: #262626;
        font-size: 0.8em;
        line-height: 40px;
    }

    >p{
        color: #a1a1a1;
        font-size: 0.8em;
    }

    >img {
        width: 60px;
        margin: auto;
    }
`;

export const Indicated = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50px 350px;
`;

export const TitleMember = styled.div`
    width: 100%;
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    text-align: left;
    padding: 5px 0px;
    border-bottom: solid 2px #dddddd;
    margin-top: 15px;

@media(max-width: 780px){
    width: 90vw;
    margin-top: 20px;
}
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
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: solid 1px #caced4;
        margin-right: 10px;
    }
`;

export const MemberName = styled.h1`
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.7em;
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