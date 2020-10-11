import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
    }

    body {
        background: #292929;
        display: flex; 
        justify-content: center;
        align-content: center;
        align-items: center;
        

        @media (min-width: 781px){
            min-height: 100vh;
            paddin: auto;
            box-sizing: border-box;
            overflow-x: hidden;
            
        }
    }

    h1{
        color: #262626;
        text-align: center;
    }

    footer{
        >img{
            width: 100%;
        }
    }

`