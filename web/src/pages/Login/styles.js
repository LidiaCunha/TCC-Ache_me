import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    max-width: 1400px;
    height: 100vh;
    max-height: 750px;
    border-radius: 15px;
    background: rgba(0,0,0,.4);
    overflow: hidden;
    position: relative;

    > img{
      height: 100%;
      width: 100%;
    }
`;

export const ContainerInfo = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.4);
    position: absolute;
    top: 0px;
`;

export const ContainerMenu = styled.div`
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



export const ContainerText = styled.div`
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

export const ConfigInput = styled.div`
      height: 60px;
      width: 100%;
      display: flex;
      align-content: center;
      align-content: center;
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
`;


