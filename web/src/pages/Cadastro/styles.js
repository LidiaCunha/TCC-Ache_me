import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    max-width: 1400px;
    height: 100vh;
    max-height: 750px;
    border-radius: 15px;
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
    background: rgba(0,0,0,.2);
    position: absolute;
    top: 0px;
`;

export const ContainerMenu = styled.div`
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

export const ContainerText = styled.div`
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

export const ConfigInput = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-top: 100px;
    box-sizing: border-box;
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
`;

export const ContainerInputSpace = styled.div`
    height: 100%;
    width: 260px;
    float: left;
    padding-right: 30px;
    margin-right: 80px;
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
      height: 55px;
      width: 260px;
      border-radius: 10px;
      background: #E64F4A;
      cursor: pointer;
      font-size: 1.3em;
      color: #fff;
      border: none;
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
      height: 70px;
      width: 70px;
      background: #E64F4A;
      border-radius: 50%;
      margin-right: 10px;
      padding: 15px;
      box-sizing: border-box;
      overflow: hidden;
      cursor: pointer;

    > img{
      height: 100%;
      width: 100%;
    }
    }

    > p{
      font-size: 1em;
      color: #fff;
      font-family: arial;
    }
`;


