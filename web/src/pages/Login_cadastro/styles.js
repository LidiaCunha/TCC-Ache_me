import styled from "styled-components";

/* OFICIAL DESIGN*/

export const Container = styled.div`
    
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
    overflow: hidden;
    position: relative;
    
    > img{
      height: 100%;
      width: 100%;
    }

    @media (max-width: 780px){
      max-height: none;
      border-radius: 0px;

      > img{
        width: 100%;
      }
    }
`;

export const ContainerInfo = styled.form`
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.4);
    position: absolute;
    top: 0px;
    

    @media (max-width: 780px){
      overflow-y: auto;

    }
`;

export const LoginContainerMenu = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    > img{
      height: 10vh;
      width: 10vh;
      margin-left: 5vw;
      margin-top: 5vh;
    }

    @media (max-width: 780px){
    
      >img {
        height: 7vh;
        width: 7vh;
        margin-left: 3vw;
        margin-top: 3vh;
      }
    }
`;

export const ContainerItensMenu = styled.nav`
      height: 100%;
      width: auto;

      > ul{
        height: 100%;
        width: auto;
        display: flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;

        > li{
          margin-right: 40px;
          font-size: 1.2vw;
          color: #fff;
          font-weight: bold;
          font-family: arial;
          cursor: pointer;
        }
      }

      @media (max-width: 780px){
    
       > ul{
         > li{
          font-size: 2.4vw;
          margin-right: 20px;
         }
       }
      }
      
`;

export const LoginContainerText = styled.div`
      height: auto;
      width: auto;
      font-size: 1.3vw;
      font-weight: bold;
      font-family: arial;
      color: #fff;
      padding-top: 10vh;
      padding-left: 10vh;
      box-sizing: border-box;

      @media (max-width: 780px){
        padding-top: 5vh;
        font-size: 2vw;
        padding-left: 3vh;
      }
`;

export const ContainerTextMenor = styled.div`
      height: auto;
      width: auto;
      font-size: 1vw;
      font-family: arial;
      color: rgba(255,255,255,.6);
      margin-bottom: 80px;
      padding-left: 5vw;
      padding-top: 3vh;
      box-sizing: border-box;

      @media (max-width: 780px){
        padding-top: 2vh;
        font-size: 1.5vw;
        margin-bottom: 50px;
      }
`;

export const LoginConfigInput = styled.div`
      height: 60px;
      width: 100%;
      display: flex;
      align-content: center;
      align-items: center;
      padding-left: 5vw;
      box-sizing: border-box;

      > input{
        height: 7vh;
        width: 17vw;
        border: none;
        border-radius: 10px;
        padding-left: 2vw;
        box-sizing: border-box;
        font-size: 1.2vw;
        margin-right: 40px;
        outline: none;
      }

      > input[type="submit"]{
        color: #fff;
        background: #E64F4A;    
        padding: 0;
        cursor: pointer;
      }

      @media (max-width: 780px){
        height: auto;
        width: auto;
        justify-content: center;
        flex-direction: column;
        padding-left: 10vw;
        
        > input{
          height: 7vh;
          width: 70vw;
          margin-bottom: 20px;
          font-size: 3vw;
        }
      }
`;

/* Cadastro */

export const CadastroContainerMenu = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    > img{
      height: 10vh;
      width: 5vw;
      margin-left: 5vw;
      margin-top: 7vh;
    }

    @media (max-width: 780px){
      height: auto;

      >img {
        height: 7vh;
        width: 7vh;
        margin-left: 3vw;
        margin-top: 3vh;
      }
    }
`;

export const CadastroContainerText = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 5vw;
    padding-top: 7vh;
    box-sizing: border-box;

    > h1{
      height: auto;
      width: auto;
      font-size: 2.5vw;
      color: #fff;
      font-family: arial;
      font-weight: bold;
    }

    @media (max-width: 780px){
      padding-top: 2vh;
      
      >h1 {
        font-size: 3vw;
      }
    }
`;

export const CadastroConfigInput = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-top: 7vh;
    box-sizing: border-box;
    

    @media (max-width: 780px){
      height: auto;
      min-height: 50px;
      flex-direction: column;
    }
`;

export const ContainerDados = styled.div`
  height: inherit;
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 780px){
      height: auto;
      width: 100%;
      min-height: 50px;
      flex-direction: column;
  }
`;

export const ContainerInput = styled.div`
    height: 100%;
    width: 17vw;
    max-width: 360px;
    float: left;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    padding-left: 10px;

> label{
    font-size: 1.2vw;
    color: #fff;
    font-family: arial;
}

> input{
    height: auto;
    min-height: 50px;
    width: 100%;
    border: none;
    outline: none;
    padding-left: 20px;
    box-sizing: border-box;
    margin-bottom: 7vh;
    border-radius: 10px;
    font-size: 1.2em;
    margin-top: 20px;
}

@media (max-width: 780px){
  height: auto;
  width: auto;
  justify-content: center;
  flex-direction: column;
  padding-left: 10vw;
  
  > label{
    font-size: 3vw;
  }

  > input{
    height: 7vh;
    width: 70vw;
    margin-bottom: 20px;
    font-size: 3vw;
    }
  }

`;


export const Footer = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding-left: 10vw;
    padding-right: 10vw;
    box-sizing: border-box;

    > input{
      height: 10vh;
      width: 360px;
      border-radius: 10px;
      background: #E64F4A;
      cursor: pointer;
      font-size: 1.3em;
      color: #fff;
      border: none;
    }

    @media (max-width: 780px){
      flex-direction: column;
    }
`;
  
export const ContainerBtn = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    > input{
      height: 6vh;
      width: 15vw;
      border-radius: 10px;
      background: #E64F4A;
      cursor: pointer;
      font-size: 1.3em;
      color: #fff;
      border: none;
      outline: none;
      margin-left: 10px;
      margin-right: 10px;
    }

    > p{
      font-size: 1.5em;
      color: #fff;
      font-family: arial;
    }

    @media (max-width: 780px){
      height: auto;
      flex-direction: column;

      > input{
        height: 7vh;
        width: 70vw;
        margin-bottom: 10px; 
      }

      > p{
        margin-bottom: 10px; 
        font-size: 1.0em;
      }
    }
`;

export const ContainerFoto = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    

    > label{
        height: 9vh;
        width: 9vh;
        background: #E64F4A;
        border-radius: 50%;
        margin-right: 10px;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
    
    >.photo{
        height: 70%;
        width: 70%;
        
    }
    }

    > p{
      font-size: 1.5em;
      color: #fff;
      font-family: arial;
    }

    > input{
      height: 9vh;
      width: 15vw;
      border-radius: 10px;
      background: #E64F4A;
      cursor: pointer;
      font-size: 1.3em;
      color: #fff;
      border: none;
      outline: none;
      margin-left: 10px;
      margin-right: 10px;
    }

    @media (max-width: 780px){
      margin-bottom: 20px;

      >p {
        font-size: 1.0em;
      }
    }
`;
