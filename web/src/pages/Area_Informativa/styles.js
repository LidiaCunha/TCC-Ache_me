<<<<<<< HEAD
import styled from "styled-components";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    height: auto;
    min-height: 50px;
    width: 100%;
    @media (max-width: 780px){
        width: 100vw;
    }
`;

export const Header = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;

    > img{
        heigth: 100%;
        width: 100%;
    }

    @media (max-width: 780px){
        font-size: 6vw;
        height: 200px;
        width: 100vw;
        margin-bottom: 10px;
    }
`;

export const ContainerHeader = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    
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

// ======= sessão 2 =========

export const ContainerApoio = styled.div`
    min-height: 50px;
    height: auto;
    width: 93%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    > h1{
        font-size: 1.8em;
        font-family: arial;
        color: #000;
        text-align: center;
        margin-bottom: 40px;
        font-weight: bold;
        color: #262626;
    }

@media (max-width: 780px){
    width: 100vw;
    
    > h1{
        font-size: 1.2em;
        margin-bottom: 20px;
    }
}
`;

export const ContianerCardsApoio = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    overflow: hidden;

    @media (max-width: 780px){
        min-height: 50px;
        height: auto;
        width: 100vw;
    }
`;


export const Conjunto = styled.div`
    height: auto;
    width: auto;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;

@media (max-width: 780px){
    width: 100vw;
    padding-left: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
    display: block;
    justify-content: none;
    align-content: none;
    align-items: none;
}
`;

export const CardApoio = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    transition: 1s;
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;

    > h3 {
        font-size: 1.5em;
        font-weight: bold;
        font-family: arial;
        align-self: flex-start;
        color: #262626;
        text-align: center;
        margin-bottom: 10px;
    }

    > p {
        font-size: 1.1em;
        font-family: arial;
    }

    :hover {
        transition: .7s;
        transform: scale(1.1); 
    }
    @media (max-width: 780px){
        height: 100%;
        width: 150px;
        display: flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        padding: 0;
        padding-bottom: 10px;
        

        > h3{
width: 100%;
            font-size: 4vw;
            margin-bottom: 10px;
text-align: center;
        }
        > p{
            font-size: 3vw;
            text-align: center;
        }
    }
`;

export const ContainerImgApoio = styled.div`
    height: 86px;
    width: 86px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    > img {
      height: 70%;
      width: 70%;
    }
    @media (max-width: 780px){
        height: 50px;
        width: 50px;
        margin-bottom: 5px;
    }
`;

// ======= sessão 3 =========

export const ContainerFotos = styled.div`
    height: 550px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 20px;
    overflow: hidden;

@media (max-width: 780px){
    flex-direction: column;
    min-height: 550px;
    height: auto;
}
`;

export const CardDesaparecidos = styled.div`
    height: 100%;
    width: 345px;
    margin-right: 5px;
    position: relative;
overflow: hidden;
border-radius: 10px;
    > img{
      height: 100%;
      width: 100%;
    }
@media (max-width: 780px){
    width: 90vw;
    height: 400px;
    margin-bottom: 10px;
> img{
      height: auto;
      width: 100%;
    }
}
`;

export const ContainerInfo = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.4);
    position: absolute;
    top: 0;
    padding: 25px;
    padding-top: 200px;
    box-sizing: border-box;
    overflow: hidden;
    > h2{
      font-size: 1.5em;
      color: #fff;
      font-family: arial;
      margin-bottom: 30px;
      font-weight: bold;
    }
    > p{
      font-size: 1.2em;
      color: rgba(255, 255, 255,.7);
      font-family: arial;
      margin-bottom: 10px;
    }  

@media(max-width: 780px){
    padding: 10px;
    padding-top: 100px;
    border-radius: 10px;  
}
`;

export const Porcentagem = styled.div`
    font-size: 1.2em;
    color: #fff;
    font-family: arial;
    margin-bottom: 10px;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    bottom: 45px;
    right: 45px;
    overflow: hidden;
    z-index: 2;

@media(max-width: 780px){
    bottom: 30px;
    right: 35px; 
}
`;
// ========== VIDEO ==============

export const ContainerVideo = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 20px;
    > video{
      height: 800px;
      width: 1400px;
      border: none;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      outline: none;
      > source{
        height: 100%;
        width: 100%;
      }
    }
@media (max-width: 780px){
    height: 200px;
    width: 90vw;
    margin-left: 20px;
     > video{
          height: 180px;
          width: 90vw;
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
=======
import styled from "styled-components";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    height: auto;
    min-height: 50px;
    width: 100%;
    @media (max-width: 780px){
        width: 100vw;
    }
`;

export const Header = styled.div`
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;

    > img{
        heigth: 100%;
        width: 100%;
    }

    @media (max-width: 780px){
        font-size: 6vw;
        height: 200px;
        width: 100vw;
        margin-bottom: 10px;
    }
`;

export const ContainerHeader = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    background: rgba(0,0,0,.6);
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

// ======= sessão 2 =========

export const ContainerApoio = styled.div`
    min-height: 50px;
    height: auto;
    width: 93%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    > h1{
        font-size: 1.8em;
        font-family: arial;
        color: #000;
        text-align: center;
        margin-bottom: 40px;
        font-weight: bold;
        color: #262626;
    }

@media (max-width: 780px){
    width: 100vw;
    
    > h1{
        font-size: 1.2em;
        margin-bottom: 20px;
    }
}
`;

export const ContianerCardsApoio = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    overflow: hidden;

    @media (max-width: 780px){
        min-height: 50px;
        height: auto;
        width: 100vw;
    }
`;


export const Conjunto = styled.div`
    height: auto;
    width: auto;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;

@media (max-width: 780px){
    width: 100vw;
    padding-left: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
    display: block;
    justify-content: none;
    align-content: none;
    align-items: none;
}
`;

export const CardApoio = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    transition: 1s;
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;

    > h3 {
        font-size: 1.5em;
        font-weight: bold;
        font-family: arial;
        align-self: flex-start;
        color: #262626;
        text-align: center;
        margin-bottom: 10px;
    }

    > p {
        font-size: 1.1em;
        font-family: arial;
    }

    :hover {
        transition: .7s;
        transform: scale(1.1); 
    }
    @media (max-width: 780px){
        height: 100%;
        width: 150px;
        display: flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        padding: 0;
        padding-bottom: 10px;
        

        > h3{
width: 100%;
            font-size: 4vw;
            margin-bottom: 10px;
text-align: center;
        }
        > p{
            font-size: 3vw;
            text-align: center;
        }
    }
`;

export const ContainerImgApoio = styled.div`
    height: 86px;
    width: 86px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    > img {
      height: 70%;
      width: 70%;
    }
    @media (max-width: 780px){
        height: 50px;
        width: 50px;
        margin-bottom: 5px;
    }
`;

// ======= sessão 3 =========

export const ContainerFotos = styled.div`
    height: 550px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 20px;
    overflow: hidden;

@media (max-width: 780px){
    flex-direction: column;
    min-height: 550px;
    height: auto;
}
`;

export const CardDesaparecidos = styled.div`
    height: 100%;
    width: 345px;
    margin-right: 5px;
    position: relative;
overflow: hidden;
border-radius: 10px;
    > img{
      height: 100%;
      width: 100%;
    }
@media (max-width: 780px){
    width: 90vw;
    height: 400px;
    margin-bottom: 10px;
> img{
      height: auto;
      width: 100%;
    }
}
`;

export const ContainerInfo = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.4);
    position: absolute;
    top: 0;
    padding: 25px;
    padding-top: 200px;
    box-sizing: border-box;
    overflow: hidden;
    > h2{
      font-size: 1.5em;
      color: #fff;
      font-family: arial;
      margin-bottom: 30px;
      font-weight: bold;
    }
    > p{
      font-size: 1.2em;
      color: rgba(255, 255, 255,.7);
      font-family: arial;
      margin-bottom: 10px;
    }  

@media(max-width: 780px){
    padding: 10px;
    padding-top: 100px;
    border-radius: 10px;  
}
`;

export const Porcentagem = styled.div`
    font-size: 1.2em;
    color: #fff;
    font-family: arial;
    margin-bottom: 10px;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    bottom: 45px;
    right: 45px;
    overflow: hidden;
    z-index: 2;

@media(max-width: 780px){
    bottom: 30px;
    right: 35px; 
}
`;
// ========== VIDEO ==============

export const ContainerVideo = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 20px;
    > video{
      height: 800px;
      width: 1400px;
      border: none;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      outline: none;
      > source{
        height: 100%;
        width: 100%;
      }
    }
@media (max-width: 780px){
    height: 200px;
    width: 90vw;
    margin-left: 20px;
     > video{
          height: 180px;
          width: 90vw;
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
>>>>>>> be602db92f28272861b4a645c326e98488f345f8
`;