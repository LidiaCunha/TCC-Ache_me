import styled from "styled-components";

export const Container = styled.div` 
    width: 100%;
    min-height: 410px;
    height: auto;
    max-height: 600px;
    position: relative;
    background-color: #fff;
    
    > img {
      height: 100%;
      width: 100%;
      filter: brightness(30%);
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
`;

export const ContainerMenu = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  /* background-color: red; */

  > img {
    height: 10vh;
    width: 5vw;
    margin-left: 5vw;
    margin-top: 5vh;
  }
`

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
`;

export const LoginContainerText = styled.div`
      height: auto;
      width: auto;
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
`;

export const ContainerTextMenor = styled.div`
      height: auto;
      width: auto;
      font-size: 0.9em;
      font-family: arial;
      color: rgba(255,255,255,.6);
      margin-bottom: 80px;
      padding-left: 5vw;
      padding-top: 3vh;
      box-sizing: border-box;
`;

export const ContainerBtn = styled.button`
    min-height: 6vh;
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 10px;
    background: #E64F4A;
    cursor: pointer;
    color: #fff;
    border: none;
    outline: none;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    box-sizing: border-box;
    font-size: 1.2em;
    color: #fff;
    font-family: arial;
    &:hover {
    background-color: #fff;
    color: #E64F4A;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  column-gap: 10px;
  padding: 15px;
  box-sizing: border-box;
`

export const Cards = styled.div`
  background-color: #fff;
  padding: 8px;
  box-sizing: border-box;
`

export const CardContent = styled.div`
  display: grid;
  height: auto;
  width: 100%;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  color: #262626;
  text-align: left;
  
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
`

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
`

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
  `

  export const ContainerValores = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    background-color: #E64F4A;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 8px;
    
    >h1 {
      color: #fff;
      text-align: left;
      width: 1200px;
      margin-left: auto;
      margin-right: auto;
      padding: 15px;
      box-sizing: border-box;
    }
  `

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
  `
  export const CardText = styled.div`
    color: #fff;
    padding: 8px;
    box-sizing: border-box;
    font-size: 1.2em;
    >p{
      margin-bottom: 20px;
    }
`

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
`

export const TextCardValores = styled.div`
  display: block;
  >h3, p{
    text-align: left;
    margin-bottom: 10px;
  }
  >p{
    font-size: 1.1em;
  }
`

export const ContainerCardsTime = styled.div`
  width: 100%;
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

`

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
`

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
`