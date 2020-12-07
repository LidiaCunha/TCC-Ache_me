import styled from "styled-components";

export const Container = styled.div` 
    width: 100%;
    height: auto;
    max-height: 600px;
    position: relative;
    background-color: #fff;    
    
    > img {
      height: 100%;
      width: 100%;
      filter: brightness(30%);
margin-top: -250px;
    }

    @media(max-width:780px){
        max-height: none;
        overflow-y: hidden;
    }   
`;

export const ContainerInfo = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    font-family: arial;

    >h1 {
      color: #fff;
      padding: 25px;
      text-align: center;
    }

    >h2 {
      color: #262626;
      font-size: 1.8em;
      text-align: center;
      padding: 25px;
    }

    @midia(max-width: 780px){
        position: none;

    }   
`;

export const ContainerMenu = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    padding-bottom: 10px;
    z-index: 999;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0,0,0,.7);

    > img{
        height: 4.8vw;
        width: 4.8vw;
        margin-left: 5vw;
        margin-top: 1vh;
        cursor: pointer;
    }

@media(max-width: 780px){
    height: 50px;

    > img{
        height: 10vw;
        width: 10vw;
        margin-left: 3vh;
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

@media(max-width: 780px){
    > ul{
        > li{
          margin-right: 15px;
          font-size: 2.2vw;
        }
    }
}
`;

export const LoginContainerText = styled.div`
    height: auto;
    width: auto;
    margin-top: 100px;
    font-size: 1.3vw;
    font-weight: bold;
    font-family: arial;
    padding-left: 5vw;
    padding-top: 10vh;
    box-sizing: border-box;
    >h1{
        color: #fff;
        text-align: left;
    }

@media(max-width: 780px){
    font-size: 2.4vw;
    padding-left: 5vw;
    padding-top: 6vh;
    margin-bottom: 10px;
}
`;

export const ContainerMenuTexto = styled.div`
    min-height: 50px;
    height: auto;
    width: 100vw;
    margin-top: 150px;

@media(max-width: 780px){
    margin-top: 80px;
}
`;

export const ContainerTextMaior = styled.div`
    height: auto;
    width: auto;
    font-size: 1.8em;
    font-family: arial;
    margin-bottom: 10px;
    padding-left: 5vw;
    padding-top: 3vh;
    box-sizing: border-box;
    color: #fff;
    outline: none;

@media(max-width: 780px){
    font-size: 2.8vw;
    padding-left: 5vw;
    padding-top: 0;
    margin-bottom: 20px;
}

`;


export const ContainerTextMenor = styled.div`
    height: auto;
    width: auto;
    font-size: 0.9em;
    font-family: arial;
    margin-bottom: 80px;
    padding-left: 5vw;
    padding-top: 3vh;
    box-sizing: border-box;
    color: rgba(255,255,255,.6);

@media(max-width: 780px){
    font-size: 1.6vw;
    padding-left: 5vw;
    padding-top: 0;
    margin-bottom: 20px;
    padding-right: 20px;
    line-height: 13px;


}

`;

export const ContainerBtn = styled.button`
    min-height: 6vh;
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 10px;
    background: transparent;
    border: none;
    border: solid 2px #E64F4A;
    cursor: pointer;
    outline: none;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
    font-size: 1.2em;
    color: #E64F4A;
    font-family: arial;
    
    ::after{
        height: 0;
        width: 0;
        background: transparent;
    }

    @media(max-width: 780px){
        min-height: 5vh;
        padding: 1.1vh;
        font-size: 3vw;
    }   
`;

// ========= serviço ===========

export const ContainerNossosServicos = styled.div`
    height: auto;
    width: 100vw;
    text-align: center;
    font-family: arial;
    padding-top: 20px;
    box-sizing: border-box;

    > h2{
        font-size: 2em;
        color: #292929;
    }

    @media(max-width: 780px){
        height: auto;

       > h2{
            font-size: 1.3em;
            margin-bottom: 20px;
        } 
    }
`;


export const ContainerCards = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    column-gap: 10px;
    padding: 15px;
    box-sizing: border-box;

@media(max-width: 780px){
    grid-template-columns: 50% 50%;
    height: auto;
    padding: 5px;
}
`;

export const Cards = styled.div`
    background-color: #fff;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 10px;

@media(max-width: 780px){
    border-radius: 10px;
}

`;

export const CardContent = styled.div`
    display: grid;
    height: auto;
    width: 100%;
    justify-content: center;
    padding: 8px;
    box-sizing: border-box;
    color: #262626;
    text-align: left;
    transition: .5s;    
  
    >h3, p{
        margin-bottom: 15px;
    }

    >h3{
        font-size: 1.2em;
        color: #262626;
    }

    >p{
        font-size: 1.1em;
    }

    >img {
        height: 64px;
        width: 64px;
        margin: 0 auto;
        margin-bottom: 30px;
    }

    :hover {
      transition: .7s;
      transform: scale(1.1);       
    }

    @media(max-width: 780px){
      text-align: center;

      >h3{
        font-size: 1.2em;
        color: #262626;
      }

      >p{
        font-size: 1em;
      }

      >img {
        height: 50px;
        width: 50px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
`;

// ========= missão ===========

export const ContainerMissao = styled.div`
    height: 600px;
    width: 100vw;

    > img {
        height: 100%;
        width: 100%;
        filter: brightness(30%);
    }

@media(max-width: 780px){
    height: 700px;
}
`;


export const ContainerCardsMissao = styled.div`
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-columns: 500px 500px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    column-gap: 80px;
    padding: 15px;
    box-sizing: border-box;
    margin-top: 80px;


@media(max-width: 780px){
    height: auto;
    grid-template-columns: 100%;
    margin-top: 20px;
}
`;

export const CardContentMissao = styled.div`
    display: grid;
    height: auto;
    width: 100%;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
    color: #262626;
    text-align: left;
      
  >h3, p {
    margin-bottom: 15px;
    margin-left: 50px;
  }

  >p {
    font-size: 1.2em;
  }

  >img {
    height: 86px;
    width: 86px;
    margin-bottom: 20px;
  }

@media(max-width: 780px){
    margin-bottom: 10px;

    >h3, p {
        margin-bottom: 15px;
        margin-left: 20px;
    }

    >p {
        font-size: 1em;
    }

    >img {
        height: 50px;
        width: 50px;
        margin-bottom: 20px;
    }
}

  `;

// ============== valores ============

export const ContainerValores = styled.div`
    height: 400px;
    width: 100vw;
    background-color: #E64F4A;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 20px;
    box-sizing: border-box;
    
    >h1 {
        color: #fff;
        text-align: center;
        margin-bottom: 30px;
        font-size: 1.8em;
    }

@media(max-width: 780px){
        height: 730px;

        >h1 {
            color: #fff;
            text-align: center;
            margin-bottom: 10px;
            font-size: 1.4em;
        }

} 
`;

export const ContainerGridValores = styled.div`
    width: 1200px;
    height: 300px;
    display: grid;
    grid-template-columns: 40% 60%;
    justify-content: center;
    padding: 8px;
    margin: 0 auto;
    column-gap: 20px;
    grid-auto-rows: 150px;

    @media(max-width: 780px){
        width: 100vw;
        grid-template-columns: 100%;
    }   
`;

export const CardText = styled.div`
    width: auto;
    color: #fff;
    padding: 8px;
    box-sizing: border-box;
    font-size: 1.2em;

    >p{
      margin-bottom: 20px;
    }

@media(max-width: 780px){
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1em;

        >p{
            text-align: center;
            padding-right: 8px;
            
        }

    }  
`;

export const ContainerCardsValores = styled.div`
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: 100px;
    gap: 30px;

    >div{
        height: 110px;
        display: flex;
        padding: 8px;
        box-sizing: border-box;

        >img{
            justify-content: flex-start;
            height: 50px;
            width: 50px;
            margin-right: 10px;
        }
    }

    @media(max-width: 780px){
        width: 95vw;
        grid-template-columns: 100%;
    }   
    
`;

export const TextCardValores = styled.div`
    display: block;

    >h3, p{
        text-align: left;
        margin-bottom: 10px;
    }

    >p{
        font-size: 1.1em;
    }
`;

// ============== time ============

export const ContainerTime = styled.div`
    height: 430px;
    width: 100vw;
    background-color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 8px;

@media(max-width: 780px){
    height: 610px;
}
`;

export const ContainerCardsTime = styled.div`
    width: 700px;
    height: 150px;
    display: grid;
    grid-template-columns: 400px 400px 400px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    column-gap: 10px;
    padding: 15px;
    box-sizing: border-box;

  >div{
    display: flex;

    >img{
      width: 100px;
      height: 100px;
      border-radius: 50px;
      margin-right: 10px;
    }
  }

@media(max-width: 780px){
    width: 100vw;
    height: auto;
    overflow: hidden;
    grid-template-columns: 100%;
    flex-direction: column;
    padding-bottom: 0px;

    >div{
        >img{
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-right: 10px;
        }
   }
}  

`;

export const ContainerCardsTimeCenter = styled.div`
    width: 100%;
    height: 150px;
    display: grid;
    grid-template-columns: 400px 400px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    column-gap: 10px;
    padding: 15px;
    box-sizing: border-box;

    >div{
        display: flex;

        >img{
            width: 100px;
            height: 100px;
            border-radius: 50px;
            margin-right: 10px;
        }
    }

@media(max-width: 780px){
    width: 100vw;
    height: auto;
    overflow: hidden;
    grid-template-columns: 100%;
    flex-direction: column;
    padding-top: 0px;


    >div{
        > img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-right: 10px;
        }
   }
}   
`;

export const TextCardTime = styled.div`
    display: block;
    >h1, h2, p{
        text-align: left;
        margin-bottom: 5px;
    }
    >h1{
        font-size: 1.2em;
    }
    h2{
        font-size: 1.1em;
        color: #E64F4A;
    }
    >p{
        font-size: 1.1em;
    }

@media(max-width: 780px){
    >h1{
        font-size: 1em;
    }
    h2{
        font-size: .8em;
        color: #E64F4A;
    }
    >p{
        font-size: .8em;
        word-break: break-all;
    }
}
`;

// ========= FOOTER ==============

export const Footer = styled.div`
    height: 130px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    overflow: hidden;
    background: #3F4042;
    padding-left: 120px;
    box-sizing: border-box;  
`;

export const ContainerFooter = styled.div`
    margin-left: auto;
    margin-right: auto;
    height: auto;
    min-height: 50px;
    width: 100%;
@media (max-width: 780px){
    width: 100vw;
}
`;

export const ContainerLogo = styled.div`
    height: auto;
    width: 250px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    > img{
      height: 60px;
      width: 60px;
      margin-right: 20px;
    }
  `;

export const Texto = styled.div`
    font-size: 2em;
    font-family: arial;
    color: #fff;
    margin-top: 30px;
`;

export const TextoVermelho = styled.div`
    font-size: 2em;
    font-family: arial;
    color: #E64F4A;
    margin-top: 30px;
`;

export const Copyright = styled.div`
    height: auto;
    width: 550px;
    > p{
      font-size: 1.2em;
      font-family: arial;
      color: #fff;
    }
@media(max-width: 780px){
        font-size: 0.7em;
}
`;