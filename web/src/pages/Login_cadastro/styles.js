import styled from "styled-components";

/* OFICIAL DESIGN*/

export const Container = styled.div`
    width: 100vw;
    max-width: 1400px;
    height: 100vh;
    max-height: 750px;
    border-radius: 15px;
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
        height: 100%;
        width: auto;
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
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    > img{
      height: 80px;
      width: 80px;
      margin-left: 90px;
      margin-top: 30px;
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
          font-size: 1.2em;
          color: #fff;
          font-weight: bold;
          font-family: arial;
          cursor: pointer;
        }
      }

      
`;



export const LoginContainerText = styled.div`
      height: auto;
      width: auto;
      font-size: 1.3em;
      font-weight: bold;
      font-family: arial;
      color: #fff;
      padding-left: 90px;
      padding-top: 100px;
      box-sizing: border-box;
`;

export const ContainerTextMenor = styled.div`
      height: auto;
      width: auto;
      font-size: 1em;
      font-family: arial;
      color: rgba(255,255,255,.6);
      margin-bottom: 80px;
      padding-left: 90px;
      padding-top: 20px;
      box-sizing: border-box;
`;

export const LoginConfigInput = styled.div`
      height: 60px;
      width: 100%;
      display: flex;
      align-content: center;
      align-items: center;
      padding-left: 90px;
      box-sizing: border-box;

      > input{
        height: 55px;
        width: 260px;
        border: none;
        border-radius: 10px;
        padding-left: 20px;
        box-sizing: border-box;
        font-size: 1.2em;
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
        
        > input{
          height: 85px;
          width: 460px;
          margin-bottom: 20px;
          font-size: 2em;
        }
      }
`;

/* Cadastro */

export const CadastroContainerMenu = styled.div`
    height: 120px;
    width: 100%;
    padding-left: 90px;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    align-items: center;

    > img{
      height: 70px;
      width: 70px;
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
    padding-left: 20px;
    padding-top: 30px;
    box-sizing: border-box;
    > h1{
      height: auto;
    width: auto;
    font-size: 2.5em;
    color: #fff;
    font-family: arial;
    font-weight: bold;
    }
`;

export const CadastroConfigInput = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-top: 100px;
    box-sizing: border-box;

    @media (max-width: 780px){
      height: auto;
      min-height: 50px;
      flex-direction: column;
    }
`;

export const ContainerInput = styled.div`
    height: 100%;
    width: 260px;
    float: left;
    padding-right: 30px;

> label{
    font-size: 1.2em;
    color: #fff;
    font-family: arial;
}

> input{
    height: 50px;
    width: 100%;
    border: none;
    outline: none;
    padding-left: 20px;
    box-sizing: border-box;
    margin-bottom: 50px;
    border-radius: 10px;
    font-size: 1.2em;
    margin-top: 20px;
}

@media (max-width: 780px){
  height: auto;
  width: 460px;

  > label{
    font-size: 2em;
  }

  > input{
    height: 80px;
    font-size: 2em;
  }
}
`;

export const ContainerInputSpace = styled.div`
height: 100%;
    width: 260px;
    float: left;
    padding-right: 30px;
    margin-right: 80px;

    @media (max-width: 780px){
      margin-left: -120px;
    }
`;

export const Footer = styled.div`
    height: 140px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
    box-sizing: border-box;

    > input{
      height: 65px;
      width: 360px;
      border-radius: 10px;
      background: #E64F4A;
      cursor: pointer;
      font-size: 1.3em;
      color: #fff;
      border: none;
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
      height: 55px;
      width: 250px;
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
        margin-bottom: 10px; 
      }

      > p{
        margin-bottom: 10px; 
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
        height: 90px;
        width: 90px;
        background: #E64F4A;
        border-radius: 50%;
        margin-right: 10px;
        /* padding: 10px; */
        box-sizing: border-box;
        overflow: hidden;
        cursor: pointer;
    
    >.photo{
        height: 70%;
        width: 70%;
        margin: 13px;
    }
    }

    > p{
      font-size: 1.5em;
      color: #fff;
      font-family: arial;
    }

    > input{
      height: 55px;
      width: 250px;
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
`;
